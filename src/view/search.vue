<script setup lang="ts">

import { ref, defineProps} from "vue";
import PostCard from "./components/postCard.vue";
import TopBar from './components/topBar.vue'
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
import { Post } from '@/models/models';
import {DynSearchReq} from "@/proto/app/dynamic/v2/dynamic_pb";
import {dynamicClient, makeHeaders} from "@/utils/appRequests";
import {convertDynamicItemToPost} from "@/utils/converters";

const router = useRouter();
const path = router.currentRoute.value.fullPath
const store = useStore()

let posts = ref<Post[]>([]);
let page = 1

const props = defineProps({
  query: { type: String, required: true }
})

const loadMoreResults = async ($state: any) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  console.log("Loading more reposts");

  try {
    const req = new DynSearchReq().setKeyword(props.query).setPage(page)

    const res = await dynamicClient.dynSearch(req, await makeHeaders())
    const searchInfo = res.getSearchInfo()!
    const fetchedPosts = searchInfo.getListList().map(convertDynamicItemToPost)
    posts.value.push(...fetchedPosts)
    fetchedPosts.forEach(it => store.commit('cachePost', it))

    if (!searchInfo.getHasMore()) {
      $state.complete()
    } else {
      page++
      $state.loaded()
    }
  } catch (err) {
    console.log(err)
    $state.error()
  }
}
</script>

<template>
  <div class="flex flex-column justify-content-start">
    <TopBar :title="'搜索：' + query" :icon="null" />
    <div class="content flex flex-column justify-content-start">
      <div v-for="post in posts" :key="post.id" class="post-border">
        <PostCard :postId="post.id" :link="true" />
      </div>
      <InfiniteLoading @infinite="loadMoreResults" :firstLoad="true" class="flex justify-content-center py-4">
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
</style>
