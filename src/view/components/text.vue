<script setup lang="ts">
import { computed, defineProps } from "vue";
import { Post } from "../../models/models";

const props = defineProps<{ context: Post; html: string }>();

const processedHtml = computed(() => {
  const post = props.context;
  let html = props.html;
  for (let emoticon of post.emoticons) {
    html = html.replaceAll(emoticon.text, `<img src=${emoticon.url} class="post-emoticon" />`)
  }
  html = html.replace(/(#([^#\n]*)#)/g, (_, p1, p2) => `<a href="https://search.bilibili.com/all?keyword=${p2}&from_source=web_search" class='post-link' target='_blank'>${p1}</a>`)
  html = html.replaceAll('\n', '<br/>')
  return html;
});
</script>

<template>
  <span v-html="processedHtml" v-linkified:options="{ className: 'post-link' }"></span>
</template>

<style scoped>
</style>