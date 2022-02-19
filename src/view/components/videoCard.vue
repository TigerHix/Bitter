<script setup lang="ts">
import { PostVideo } from "./../../models/models";
import { defineProps, PropType } from "vue";

const props = defineProps({ 
  video: { type: Object as PropType<PostVideo>, required: true },
  link: { type: Boolean, required: false, default: false }
})
console.log(props.video)

const onLink = () => window.open(props.video.url, '_blank');
</script>

<template>
  <div class="flex flex-row video-container" :class="{ 'video-container-link': link }" v-on:click.stop="link && onLink()" v-on:click.middle.stop="link && onLink()">
    <div class="video-thumbnail">
        <img :src="video.thumbnailUrl" />
    </div>
    <div class="video-meta flex flex-column justify-content-center">
        <div class="video-title">{{ video.title }}</div>
        <div class="video-description">{{ video.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  height: 128px;
  border-radius: 16px;
}
.video-container-link {
  transition: background-color 0.2s ease-out 0s;
  cursor: pointer;
}
.video-container-link:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
.video-thumbnail img {
    height: 128px;
    width: auto;
    border-radius: 16px 0 0 16px;
}
.video-meta {
    padding: 12px;
    color: #536471;
    font-size: 15px;
    line-height: 20px;
}
.video-title {
    color: #0f1419;
    font-size: 15px;
    line-height: 20px;
    overflow-wrap: anywhere;
}
.video-description {
    padding-top: 4px;
    font-size: 15px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow-wrap: anywhere;
}
</style>