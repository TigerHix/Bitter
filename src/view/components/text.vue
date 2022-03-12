<script setup lang="ts">
import { computed, defineProps } from "vue";
import { Post } from "@/models/models";

const props = defineProps<{ context: Post; html: string }>();

const processedHtml = computed(() => {
  const post = props.context;
  let html = props.html;

  if (post && post.emoticons) {
    for (let emoticon of post.emoticons) {
      html = html.replaceAll(emoticon.text, `<img src=${emoticon.url} class="post-emoticon" />`)
    }
  }
  html = html.replace(/(#([^#\n]*)#)/g, (_, p1) => `<a href="app.html#/search/${escape(p1)}" class='post-link'>${p1}</a>`)
  html = html.replaceAll('\n', '<br/>')
  return html;
});
</script>

<template>
  <span v-html="processedHtml" v-linkified:options="{ className: 'post-link' }"></span>
</template>

<style scoped>
</style>
