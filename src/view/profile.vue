<script setup lang="ts">

import { ref, defineProps } from "vue";
import PostCard from "./components/postCard.vue";
import {parseAndFilterPosts, parseImage} from "@/utils/parsers";
import { useRouter } from "vue-router";
import { fetchAndParseUserProfile } from "@/utils/appRequests";
import FollowButton from "./components/followButton.vue";
import Avatar from "./components/avatar.vue";
import TopBar from "./components/topBar.vue";
import { useStore } from "vuex";
import { formatYearMonth } from '@/utils/formatTimestamp'
import {Post, PostType, User} from "@/models/models";
const router = useRouter()
const store = useStore()
const path = router.currentRoute.value.fullPath

const props = defineProps<{ uid: number }>();
let posts = ref<Post[]>([]);
let mediaPosts = ref<Post[]>([]);
let user = ref<User>();

fetchAndParseUserProfile(props.uid)
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

</script>

<template>
  <div class="flex flex-column justify-content-center">
    <TopBar v-if="user" :title="user.name" :subtitle="'UID: ' + user.uid" />
    <div v-if="user">
      <div style="width: 100%; height: 200px;">
        <img style="width: 100%; height: 100%; object-fit: cover;" :src="user.coverUrl + '@1200w.webp'" @error="$event.target.src = 'https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp'" />
      </div>
      <div style="padding: 12px 16px;">
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
            <div>
                <span class="header-stats-number">{{ user.followingCount }} </span>
                <span class="header-stats" style="margin-left: 4px;">正在关注</span>
            </div>
            <div style="margin-left: 20px;">
                <span class="header-stats-number">{{ user.followerCount }}</span>
                <span class="header-stats" style="margin-left: 4px;">关注者</span>
            </div>
        </div>
      </div>
    </div>
    <div class="content flex flex-column justify-content-start">
      <TabView lazy @tabChange="onTabChange()">
        <TabPanel header="动态">
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
  </div>
</template>

<style>
.content {
  width: 100%;
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
</style>
