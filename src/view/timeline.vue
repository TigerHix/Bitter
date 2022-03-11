<script lang="ts">
export default { name: 'Timeline' }
</script>

<script setup lang="ts">

import { ref, defineExpose, PropType, defineProps, watch } from "vue";
import PostCard from "./components/postCard.vue";
import TopBar from './components/topBar.vue'
import { parseAndFilterPosts } from "../utils/parsers";
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
import { FollowingGroup, Post } from '../models/models';
import {$dummyState} from "@/view/components/infiniteLoading/utils";
const router = useRouter();
const path = router.currentRoute.value.fullPath
const store = useStore()
const infiniteLoading = ref()

let posts = ref<Post[]>([]);
let refreshAbortController: AbortController = new AbortController()
let loadMoreAbortController: AbortController

const props = defineProps({
  groupFilter: { type: Object as PropType<FollowingGroup>, required: false, default: null }
})

watch(() => props.groupFilter, () => refresh())

let threshold = 10
let firstLoad = true

const loadMorePosts = async ($state: any, signal: any = null) => {
  console.log("Loading more posts");

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

  if (firstLoad) {
    console.log('First load')
    const data = await fetch(
      `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=${store.state.user.uid}&type_list=268435455&from=weball&platform=web`,
      { signal: refreshAbortController.signal }
    ).then((res) => res.json())

    if (data.code != 0) {
      console.log('Error!')
      console.log(data)
      $state.error()
    } else {
      const fetchedPosts: Post[] = parseAndFilterPosts(data.data.cards)
      fetchedPosts.forEach(it => store.commit('cachePost', it))
      store.commit('setTimelineMostRecentPostId', fetchedPosts[0].id)
      posts.value = fetchedPosts

      firstLoad = false

      const groupFilteredPosts = groupFilterPosts(fetchedPosts)
      if (groupFilteredPosts.length < threshold && threshold > 0) {
        threshold -= groupFilteredPosts.length
        console.log('FETCH AGAIN, threshold: ' + threshold)
        await loadMorePosts($dummyState, signal)
      }
      threshold = 10
      $state.loaded()
    }
    return
  }

  try {
    console.log('Subsequent load')
    const offset = posts.value[posts.value.length - 1].id
    const data = await fetch(
      `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history?uid=${store.state.user.uid}&offset_dynamic_id=${offset}&type=268435455&from=weball&platform=web`,
      { signal }
    ).then((res) => res.json())

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
        await loadMorePosts($dummyState, signal)
      }
      threshold = 10
      console.log('loaded')
      $state.loaded();
    }
  } catch (error) {
    console.log(error)
    if (error.toString().includes('aborted')) $state.loaded()
    else $state.error()
  }
};

const refresh = () => {
  console.log("Refreshing")

  refreshAbortController?.abort()
  loadMoreAbortController?.abort()
  refreshAbortController = new AbortController()
  posts.value = []
  firstLoad = true
  store.commit('setUnreadPostCount', 0)

  infiniteLoading.value.emitter()
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
    <div class="content flex flex-column justify-content-start">
      <div v-if="$store.state.unreadPostCount > 0 && !groupFilter" class="post-show-latest flex flex-row px-3 justify-content-center align-items-center bottom-separator" @click="refresh()">
        <div class="flex justify-content-center align-items-center" style="height: 16px;">
          显示 {{$store.state.unreadPostCount}} 条新动态
        </div>
      </div>
      <div v-for="post in groupFilterPosts(posts)" :key="post.id" class="post-border">
        <PostCard :postId="post.id" :link="true" />
      </div>
      <InfiniteLoading ref="infiniteLoading" :posts="posts" @infinite="loadMorePosts" class="flex justify-content-center py-4" />
    </div>
  </div>
</template>

<style>
.content {
  width: 100%;
}
.post-show-latest {
  transition: background-color 0.2s ease-out 0s;
  height: 48px;
  font-size: 15px;
  color: rgb(251, 114, 153);
  cursor: pointer;
}
.post-show-latest:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
