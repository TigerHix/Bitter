<script lang="ts">
export default { name: 'Timeline' }
</script>

<script setup lang="ts">

import { ref, defineExpose } from "vue";
import PostCard from "./components/postCard.vue";
import TopBar from './components/topBar.vue'
import { parseAndFilterPosts } from "../utils/parsers";
import { useRouter } from "vue-router";
const router = useRouter();
const path = router.currentRoute.value.fullPath

let posts = ref([]);
let userId = "";

const loadMorePosts = async $state => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  console.log("Loading more posts");
  try {
    const offset = posts.value[posts.value.length - 1].id
    const response = await fetch(
      `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history?uid=${userId}&offset_dynamic_id=${offset}&type=268435455&from=weball&platform=web`
    );
    const data = await response.json()
    if (data.code != 0) {
      console.log('Error!')
      console.log(data)
      $state.error()
    } else {
      posts.value.push(...parseAndFilterPosts(data.data.cards))
      $state.loaded();
    }
  } catch (error) {
    console.log(error)
    $state.error()
  }
};

chrome.cookies
  .get({ name: "DedeUserID", url: "https://bilibili.com" })
  .then((cookie) => {
    userId = cookie.value;
    refresh()
  });

const refresh = () => {
  fetch(
      `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=${userId}&type_list=268435455&from=weball&platform=web`
    )
      .then((res) => res.json())
      .then((data) => {
        posts.value = parseAndFilterPosts(data.data.cards)
        window.scrollTo(0, 0)
      });
}

defineExpose({ refresh })
</script>

<template>
  <div class="flex flex-column justify-content-center">
    <TopBar title="主页" :icon="null" />
    <div v-if="posts.length > 0" class="content flex flex-column justify-content-start">
      <div v-for="post in posts" :key="post.text" class="post-border">
        <PostCard :postObject="post" :link="true" />
      </div>
      <InfiniteLoading :posts="posts" @infinite="loadMorePosts" class="flex justify-content-center py-4" />
    </div>
  </div>
</template>

<style>
.content {
  width: 100%;
}
</style>