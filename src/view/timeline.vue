<script lang="ts">
export default { name: 'Timeline' }
</script>

<script setup lang="ts">

import { ref, defineExpose, onMounted, PropType, defineProps, watch } from "vue";
import PostCard from "./components/postCard.vue";
import TopBar from './components/topBar.vue'
import { parseAndFilterPosts } from "../utils/parsers";
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
import { FollowingGroup, Post } from '../models/models';
const router = useRouter();
const path = router.currentRoute.value.fullPath
const store = useStore()

let posts = ref<Post[]>([]);
let refreshAbortController: AbortController
let loadMoreAbortController: AbortController

const props = defineProps({
  groupFilter: { type: Object as PropType<FollowingGroup>, required: false, default: null }
})

watch(() => props.groupFilter, () => refresh())

let threshold = 10

const loadMorePosts = async ($state: any, signal: any = null) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  console.log("Loading more posts");

  if (!signal) {
    loadMoreAbortController?.abort()
    loadMoreAbortController = new AbortController()
    signal = loadMoreAbortController.signal
  }
  try {
    const offset = posts.value[posts.value.length - 1].id
    const response = await fetch(
      `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history?uid=${store.state.user.uid}&offset_dynamic_id=${offset}&type=268435455&from=weball&platform=web`,
      { signal }
    );
    const data = await response.json()
    if (data.code != 0) {
      console.log('Error!')
      console.log(data)
      $state.error()
    } else {
      const fetchedPosts: Post[] = parseAndFilterPosts(data.data.cards)
      fetchedPosts.forEach(it => store.commit('cachePost', it))
      posts.value.push(...fetchedPosts)

      const groupFilteredPosts = groupFilterPosts(fetchedPosts)
      if (groupFilteredPosts.length < threshold && threshold > 0) {
        threshold -= groupFilteredPosts.length
        console.log('FETCH AGAIN, threshold: ' + threshold)
        await loadMorePosts($state, signal)
        return
      }
      threshold = 10

      $state.loaded();
    }
  } catch (error) {
    console.log(error)
    $state.error()
  }
};

onMounted(() => {
  refresh()
})

const refresh = () => {
  console.log("Refreshing")

  refreshAbortController?.abort()
  loadMoreAbortController?.abort()
  refreshAbortController = new AbortController()
  posts.value = []
  fetch(
    `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=${store.state.user.uid}&type_list=268435455&from=weball&platform=web`,
    { signal: refreshAbortController.signal }
  )
    .then((res) => res.json())
    .then((data) => {
      const fetchedPosts: Post[] = parseAndFilterPosts(data.data.cards)
      fetchedPosts.forEach(it => store.commit('cachePost', it))
      posts.value = fetchedPosts

      // const groupFilteredPosts = groupFilterPosts(fetchedPosts)
      // if (groupFilteredPosts.length < threshold && threshold > 0) {
      //   threshold -= groupFilteredPosts.length
      //   console.log('FETCH AGAIN, threshold: ' + threshold)
      //   loadMorePosts({ error: () => {}, loaded: () => {} })
      //   return
      // }

      window.scrollTo(0, 0)
    });
}

const groupFilterPosts = (posts: Post[]) => {
  if (!props.groupFilter) return posts
  return posts.filter(it => {
    return props.groupFilter.users.has(it.user.uid)
  })
}

defineExpose({ refresh })
</script>

<template>
  <div class="flex flex-column justify-content-start">
    <TopBar title="主页" :icon="null" />
    <div v-if="posts.length > 0" class="content flex flex-column justify-content-start">
      <div v-for="post in groupFilterPosts(posts)" :key="post.id" class="post-border">
        <PostCard :postId="post.id" :link="true" />
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
