<script setup lang="ts">

import { ref, defineProps } from "vue";
import PostCard from "./components/postCard.vue";
import { parseAndFilterPosts } from "../utils/parsers";
import { useRouter } from "vue-router";
import { fetchAndParseUserProfile } from "../utils/appRequests";
import FollowButton from "./components/followButton.vue";
import Avatar from "./components/avatar.vue";
import TopBar from "./components/topBar.vue";
const router = useRouter();
const path = router.currentRoute.value.fullPath

const props = defineProps<{ uid: number }>();
let posts = ref([]);
let user = ref(null);

fetchAndParseUserProfile(props.uid)
    .then((it: any) => {
      user.value = it
    })

fetch(
    `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?host_uid=${props.uid}&offset_dynamic_id=0&need_top=1&platform=web`
)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      posts.value = parseAndFilterPosts(data.data.cards)
    });

// const request = new DynSpaceReq()
// request.setHostUid(props.uid)
// request.setLocalTime(8)
// request.setPage(100)
// request.setFrom('space')

// makeHeaders().then(it => dynamicClient.dynSpace(request, it))
//   .then(res => {
//     console.log(res.toObject())
//   })

const loadMorePosts = async $state => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
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
        posts.value.push(...parseAndFilterPosts(data.data.cards))
        $state.loaded();
      } else {
        $state.complete();
      }
    }
  } catch (error) {
    console.log(error)
    $state.error()
  }
};
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
          <FollowButton :user="user" :large="true" />
        </div>
        <div>
          <div style="font-weight: bold; font-size: 20px; line-height: 25px; color: #0F1419">
            {{ user.name }}
          </div>
        </div>
        <div style="margin-top: 12px;">
          <div style="font-size: 15px; line-height: 20px; color: #0F1419">
            {{ user.bio }}
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
    <div v-if="posts.length > 0" class="content flex flex-column justify-content-start">
      <div v-for="post in posts" :key="post.text" class="post-border">
        <PostCard :postObject="post" :link="true" />
      </div>
      <InfiniteLoading :posts="posts" @infinite="loadMorePosts" class="flex justify-content-center py-4">
        <template #complete>
          &nbsp;
        </template>
      </InfiniteLoading>
    </div>
  </div>
</template>

<style>
.content {
  width: 100%;
}
.header-stats {
  font-size: 15px;
  color: rgb(83, 100, 113);
}
.header-stats-number {
  font-size: 15px;
  color: #0f1419;
  font-weight: bold;
}
</style>