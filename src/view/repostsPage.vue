<script setup lang="ts">
import { Post } from "@/models/models";
import { defineProps, ref} from "vue";
import PostCard from "./components/postCard.vue";
import TopBar from "./components/topBar.vue";
import { useRouter } from "vue-router";
import {dynamicClient, makeHeaders} from "@/utils/appRequests";
import {RepostListReq} from "@/proto/app/dynamic/v2/dynamic_pb";
import {convertDynamicItemToPost} from "@/utils/converters";
import {useStore} from "vuex";
import {parsePost} from "@/utils/parsers";
import {fetchDynamicDetail} from "@/utils/webRequests";
const router = useRouter()
const store = useStore()
const path = router.currentRoute.value.fullPath

const props = defineProps({
  postId: { type: String, required: true }
});

const reposts = ref<Post[]>([])
const offset = ref<string>()
const totalCount = ref<number>(-1)
const fetchedOriginalPost = ref<boolean>(false)
const postDeleted = ref<boolean>(false)

// Fetch original post to prevent repeated fetching
fetchDynamicDetail(props.postId)
  .then((data: any) => {
    if (!data.data.card) {
      postDeleted.value = true
    } else {
      console.log('Parsing: ')
      console.log(data)
      store.commit('cachePost', parsePost(data.data.card))

      fetchedOriginalPost.value = true
    }
  })

const loadMoreReposts = async ($state: any) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  console.log("Loading more reposts");

  try {
    const req = new RepostListReq().setDynamicId(props.postId)
    if (offset.value) req.setOffset(offset.value)

    const res = await dynamicClient.repostList(req, await makeHeaders())
    totalCount.value = res.getTotalCount()

    const fetchedReposts = res.getListList().map(convertDynamicItemToPost)
    reposts.value.push(...fetchedReposts)
    fetchedReposts.forEach(it => store.commit('cachePost', it))

    if (!res.getHasMore()) {
      $state.complete()
    } else {
      offset.value = res.getOffset()
      $state.loaded()
    }
  } catch (err) {
    console.log(err)
    $state.error()
  }
};

</script>

<template>
  <div class="flex flex-column">
    <TopBar :title="totalCount >= 0 ? `转发 (${totalCount})` : '转发'" />
    <div class="reposts-page-container flex flex-column">
      <div v-if="fetchedOriginalPost">
        <div v-for="post in reposts" :key="post.id">
          <PostCard :postId="post.id" :link="true" />
        </div>
        <InfiniteLoading @infinite="loadMoreReposts" class="flex justify-content-center py-4">
          <template #complete>
            &nbsp;
          </template>
        </InfiniteLoading>
      </div>
      <div v-if="postDeleted">
        <PostCard :postId="postId" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
