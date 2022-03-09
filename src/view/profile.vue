<script setup lang="ts">

import { ref, defineProps } from "vue";
import AvatarCard from './components/avatarCard.vue'
import PostCard from "./components/postCard.vue";
import {parseAndFilterPosts, parseDetailedUser, parseImage} from "@/utils/parsers";
import { useRouter } from "vue-router";
import FollowButton from "./components/followButton.vue";
import Avatar from "./components/avatar.vue";
import TopBar from "./components/topBar.vue";
import { useStore } from "vuex";
import { formatYearMonth } from '@/utils/formatTimestamp'
import {Post, PostType, User} from "@/models/models";
import {fetchUser} from "@/utils/webRequests";
const router = useRouter()
const store = useStore()
const path = router.currentRoute.value.fullPath

const props = defineProps<{ uid: number }>();
let posts = ref<Post[]>([]);
let mediaPosts = ref<Post[]>([]);
let user = ref<User>();

fetchUser(props.uid)
  .then((it: any) => {
    user.value = it

    if (store.state.user.uid.toString() === props.uid.toString()) {
      fetch('https://member.bilibili.com/x2/creative/h5/calendar/event?ts=0')
        .then(res => res.json())
        .then(data => {
          const registrationTimestamp = data.data.pfs.profile.jointime
          user.value = { ...user.value, registrationTimestamp } as User
        })
    }
  })

// fetch(
//     `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?host_uid=${props.uid}&offset_dynamic_id=0&need_top=1&platform=web`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//     const fetchedPosts = parseAndFilterPosts(data.data.cards)
//     fetchedPosts.forEach((it: any) => store.commit('cachePost', it))
//     posts.value = fetchedPosts
//   });

let initialLoad = true

const loadMorePosts = async ($state: any) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  if (initialLoad) {
    fetch(`https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?host_uid=${props.uid}&offset_dynamic_id=0&need_top=1&platform=web`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const fetchedPosts = parseAndFilterPosts(data.data.cards)
        fetchedPosts.forEach((it: any) => store.commit('cachePost', it))
        posts.value = fetchedPosts

        if (data.data.cards) {
          $state.loaded()
        } else {
          $state.complete()
        }
        initialLoad = false
      })
      .catch(err => {
        console.log(err)
        $state.error()
      })
    return
  }

  console.log("Loading more posts");
  try {
    const offset = posts.value[posts.value.length - 1].id
    const response = await fetch(
      `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?host_uid=${props.uid}&offset_dynamic_id=${offset}&need_top=1&platform=web`
    );
    const data = await response.json()
    console.log(data)
    if (data.code != 0) {
      console.log('Error!')
      console.log(data)
      $state.error()
    } else {
      if (data.data.cards) {
        const fetchedPosts = parseAndFilterPosts(data.data.cards)
        fetchedPosts.forEach((it: any) => store.commit('cachePost', it))
        posts.value.push(...fetchedPosts)
        $state.loaded();
      } else {
        $state.complete();
      }
    }
  } catch (error) {
    console.log(error)
    $state.error()
  }
}

let mediaPostsPage = 0
const loadMoreMediaPosts = async ($state: any) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  console.log("Loading more media posts");
  try {
    const response = await fetch(
        `https://api.bilibili.com/x/dynamic/feed/draw/doc_list?uid=${props.uid}&page_num=${mediaPostsPage}&page_size=30&biz=all&jsonp=jsonp`
    );
    const data = await response.json()
    console.log(data)
    if (data.code != 0) {
      console.log('Error!')
      console.log(data)
      $state.error()
    } else {
      if (data.data.items?.length > 0) {
        const fetchedPosts = data.data.items.map((it: any) => ({
          repostCount: 0,
          commentCount: 0,
          isLiked: false,
          text: it.description,
          album: { id: it.doc_id, images: it.pictures.map(parseImage) },
          emoticons: [],
          likedBy: [],
          repliedBy: [],
          mentions: [],
          mentionedUsers: [],
          isAd: false,

          ...store.getters.getCachedPost(it.dyn_id),

          id: it.dyn_id,
          user: user.value ?? { uid: it.poster_uid },
          type: PostType.Album,
          timestamp: it.ctime,
          viewCount: it.view,
          likeCount: it.like,
        }))
        fetchedPosts.forEach((it: any) => store.commit('cachePost', it))
        console.log(fetchedPosts)
        mediaPosts.value.push(...fetchedPosts)
        $state.loaded();
        mediaPostsPage++
      } else {
        $state.complete();
      }
    }
  } catch (error) {
    console.log(error)
    $state.error()
  }
}

const onTabChange = () => {
  console.log('tab change')
  initialLoad = true
  mediaPostsPage = 0
  posts.value = []
  mediaPosts.value = []
}

// Following users
const followingUsersDialog = ref(false)
const followingUsers = ref<User[]>([])
const sameFollowingUserIds = new Set<number>()
let followingUsersNextPage = 1
let sameFollowingUsersExhausted = false
let followingUsersAccessDenied = ref(false)
const loadMoreFollowingUsers = async ($state: any) => {
  console.log("Loading more following users");

  try {
    const data = await fetch(
        sameFollowingUsersExhausted
            ? `https://api.bilibili.com/x/relation/followings?vmid=${props.uid}&pn=${followingUsersNextPage}&ps=50&order_type=attention&jsonp=jsonp`
            : `https://api.bilibili.com/x/relation/same/followings?vmid=${props.uid}&pn=${followingUsersNextPage}&ps=50&order_type=attention&jsonp=jsonp`
    ).then(res => res.json())

    if (data.code > 0) {
      followingUsersAccessDenied.value = true
      $state.complete()
    } else if (data.data.list.length == 0) {
      if (!sameFollowingUsersExhausted) {
        sameFollowingUsersExhausted = true
        followingUsersNextPage = 1
        $state.loaded()
      } else {
        $state.complete()
      }
    } else {
      const fetchedUsers = data.data.list.map(parseDetailedUser).filter((it: User) => !sameFollowingUserIds.has(it.uid))
      followingUsers.value.push(...fetchedUsers)
      followingUsersNextPage++
      if (!sameFollowingUsersExhausted) {
        fetchedUsers.forEach((it: User) => {
          sameFollowingUserIds.add(it.uid)
          it.following = true
        })
      }
      $state.loaded()
    }
  } catch (e) {
    console.log(e)
    $state.error()
  }
}
const openFollowingUsersDialog = () => {
  followingUsersDialog.value = true
  // loadMoreLikedUsers({ error: () => {}, loaded: () => {}, complete: () => {} })
}

// Follower users
const followerUsersDialog = ref(false)
const followerUsers = ref<User[]>([])
let followerUsersNextPage = 1
let followerUsersAccessDenied = ref(false)
const loadMoreFollowerUsers = async ($state: any) => {
  console.log("Loading more follower users");

  try {
    const data = await fetch(`https://api.bilibili.com/x/relation/followers?vmid=${props.uid}&pn=${followerUsersNextPage}&ps=50&order_type=attention&jsonp=jsonp`).then(res => res.json())

    if (data.code > 0) {
      followerUsersAccessDenied.value = true
      $state.complete()
    } else if (data.data.list.length == 0) {
      $state.complete()
    } else {
      const fetchedUsers = data.data.list.map(parseDetailedUser)
      followerUsers.value.push(...fetchedUsers)
      followerUsersNextPage++
      $state.loaded()
    }
  } catch (e) {
    console.log(e)
    $state.error()
  }
}
const openFollowerUsersDialog = () => {
  followerUsersDialog.value = true
  // loadMoreLikedUsers({ error: () => {}, loaded: () => {}, complete: () => {} })
}

</script>

<template>
  <div class="flex flex-column justify-content-center">
    <TopBar v-if="user" :title="user.name" :subtitle="'UID: ' + user.uid" />
    <div v-if="user">
      <div style="width: 100%; height: 200px;">
        <img style="width: 100%; height: 100%; object-fit: cover;" :src="user.coverUrl + '@1200w.webp'" @error="$event.target.src = 'https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp'" />
      </div>
      <div style="padding: 16px 12px 8px 12px;">
        <div class="flex" style="flex-wrap: wrap; justify-content: space-between;">
          <div style="width: 25%; margin-top: -15%; margin-bottom: 12px; background: white; border-radius: 9999px; padding: 4px;">
            <Avatar :user="user" :popup="false" style="width: 100%; height: 100%;" />
          </div>
          <FollowButton v-if="uid != store.state.user.uid" :user="user" :large="true" />
        </div>
        <div>
          <div style="font-weight: bold; font-size: 20px; line-height: 25px; color: #0F1419">
            {{ user.name }}
          </div>
          <div v-if="user.specialFollowedBy" class="user-special-followed-you flex align-items-center justify-content-center" style="margin-top: 2px; width: fit-content;">
            <span style="margin-top: -1.5px;">特别关注了你</span>
          </div>
          <div v-else-if="user.followedBy" class="user-followed-you flex align-items-center justify-content-center" style="margin-top: 2px; width: fit-content;">
            <span style="margin-top: -1.5px;">关注了你</span>
          </div>
        </div>
        <div style="margin-top: 12px;">
          <div style="font-size: 15px; line-height: 20px; color: #0F1419">
            {{ user.bio }}
          </div>
        </div>
        <div v-if="user.registrationTimestamp" style="margin-top: 12px;">
          <div class="header-meta">
            <font-awesome-icon :icon="['fas', 'calendar-days']" />
            {{ formatYearMonth(user.registrationTimestamp) }}加入
          </div>
        </div>
        <div v-if="user.followingCount != null" class="flex flex-row" style="margin-top: 12px;">
          <a @click="openFollowingUsersDialog()" class="header-stats-link">
            <span class="header-stats-number">{{ user.followingCount }}&nbsp;</span>
            <span class="header-stats">正在关注</span>
          </a>
          <a @click="openFollowerUsersDialog()" class="header-stats-link" style="margin-left: 20px;">
              <span class="header-stats-number">{{ user.followerCount }}&nbsp;</span>
              <span class="header-stats">关注者</span>
          </a>
        </div>
      </div>
    </div>
    <div class="space-around-tab-view content flex flex-column justify-content-start">
      <TabView lazy @tabChange="onTabChange()">
        <TabPanel header="动态">
          <div class="separator"></div>
          <div v-for="post in posts" :key="post.id" class="post-border">
            <PostCard :postId="post.id" :link="true" />
          </div>
          <InfiniteLoading id="posts-infinite-loading" @infinite="loadMorePosts" class="flex justify-content-center py-4">
            <template #complete>
              &nbsp;
            </template>
          </InfiniteLoading>
        </TabPanel>
        <TabPanel header="相簿">
          <div class="separator"></div>
          <div v-for="post in mediaPosts" :key="post.id" class="post-border">
            <PostCard :postId="post.id" :link="true" :resolvePostId="true" />
          </div>
          <InfiniteLoading id="media-posts-infinite-loading" @infinite="loadMoreMediaPosts" class="flex justify-content-center py-4">
            <template #complete>
              &nbsp;
            </template>
          </InfiniteLoading>
        </TabPanel>
      </TabView>
    </div>
    <Dialog header="Header" v-model:visible="followingUsersDialog" :dismissableMask="true" :closable="true" :show-header="false" :draggable="false" :modal="true">
      <div class="users-dialog-container" style="overflow: auto; max-height: 660px;">
        <TopBar title="正在关注" :icon="['fas', 'xmark']" :click-handler="() => followingUsersDialog = false" />
        <div id="following-users">
          <AvatarCard v-for="followingUser in followingUsers" :key="followingUser.uid" :user="followingUser" :link="true" />
          <InfiniteLoading v-if="followingUsersDialog && !followingUsersAccessDenied" :firstLoad="true" target=".users-dialog-container" @infinite="loadMoreFollowingUsers" class="flex justify-content-center py-4">
            <template #complete>
              &nbsp;
            </template>
          </InfiniteLoading>
          <div v-if="followingUsersAccessDenied" class="header-meta flex justify-content-center py-4 mb-2">
            {{ followingUsers.length > 0 ? '只能查看最新 250 个正在关注' : '用户设置了正在关注不可见' }}
          </div>
        </div>
      </div>
    </Dialog>
    <Dialog header="Header" v-model:visible="followerUsersDialog" :dismissableMask="true" :closable="true" :show-header="false" :draggable="false" :modal="true">
      <div class="users-dialog-container" style="overflow: auto; max-height: 660px;">
        <TopBar title="关注者" :icon="['fas', 'xmark']" :click-handler="() => followerUsersDialog = false" />
        <div id="follower-users">
          <AvatarCard v-for="followerUser in followerUsers" :key="followerUser.uid" :user="followerUser" :link="true" />
          <InfiniteLoading v-if="followerUsersDialog && !followerUsersAccessDenied" :firstLoad="true" target=".users-dialog-container" @infinite="loadMoreFollowerUsers" class="flex justify-content-center py-4">
            <template #complete>
              &nbsp;
            </template>
          </InfiniteLoading>
          <div v-if="followerUsersAccessDenied" class="header-meta flex justify-content-center py-4 mb-2">
            {{ followerUsers.length > 0 ? '只能查看最新 250 个关注者' : '用户设置了关注者不可见' }}
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
}
.separator {
  height: 1px;
  border-bottom: 1px;
  border-bottom-color: rgb(239, 243, 244);
  border-bottom-style: solid;
}
.header-meta {
  font-size: 15px;
  line-height: 20px;
  color: rgb(83, 100, 113);
}
.header-stats {
  font-size: 15px;
  line-height: 20px;
  color: rgb(83, 100, 113);
}
.header-stats-number {
  font-size: 15px;
  line-height: 20px;
  color: #0f1419;
  font-weight: bold;
}
.header-stats-link {
  color: #0f1419;
  text-decoration: none;
}
.header-stats-link:hover, .header-stats-link:active {
  text-decoration: underline;
}
</style>
