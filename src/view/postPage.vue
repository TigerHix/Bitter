<script setup lang="ts">
import PostCard from "./components/postCard.vue"
import {defineProps, ref} from "vue";
import CommentList from "./components/commentList.vue";
import TopBar from "./components/topBar.vue";
import {fetchAndCachePost} from "@/utils/webRequests";
import {useToast} from "primevue/usetoast";
import {useStore} from "vuex";

const store = useStore()
const toast = useToast()
const props = defineProps({
  postId: { type: String, required: false, default: null }
});

const loaded = ref(false)

fetchAndCachePost(store, props.postId)
  .then(post => {
    if (!post) {
      toast.add({severity: 'error', detail: '加载内容失败', life: 3000})
      return
    }
    loaded.value = true
  })
</script>

<template>
  <div class="flex flex-column">
    <TopBar title="动态" />
    <div v-if="loaded" class="post-page-container">
      <div>
        <PostCard :postId="postId" :large="true" />
        <CommentList :postId="postId" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-page-container {
}
</style>
