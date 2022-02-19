<script setup lang="ts">
import PostCard from "./components/postCard"
import { Post } from "./../models/models";
import { defineProps, PropType } from "vue";
import CommentList from "./components/commentList.vue";
import TopBar from "./components/topBar.vue";

defineProps({ 
  postId: { type: String, required: false, default: null },
  postObject: { type: Object as PropType<Post>, required: false, default: null }
});
</script>

<template>
  <div class="flex flex-column">
    <TopBar title="动态" />
    <div class="post-page-container">
      <div>
        <PostCard :postId="postId" :postObject="postObject" :large="true" />
        <CommentList :postId="postId ?? postObject?.id" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-page-container {
}
</style>