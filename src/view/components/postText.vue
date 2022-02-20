<script setup lang="ts">
import { defineProps, markRaw, ref } from 'vue';
import { Post } from "../../models/models"
import Avatar from './avatar.vue';
import Text from './text.vue';

const props = defineProps<{post: Post}>()
const blocks = ref([])

const getPostTextHtml = (post: Post) => {
  if (!post.text) return ''
  let html = post.text
  let textStart = 0
  let mentionPrecedes = false

  for (let mentionedUser of post.mentionedUsers) {
    Array.from(html.matchAll(new RegExp('@' + mentionedUser.name, 'g')))
      .map(match => {
        post.mentions.push({ location: match.index, length: match[0].length, data: mentionedUser.uid.toString() })
      })
  }

  for (let mention of post.mentions) {
    blocks.value.push({ type: markRaw(Text), props: { context: post, html: (mentionPrecedes ? ' ' : '') + html.substring(textStart, mention.location) }})
    blocks.value.push({ type: markRaw(Avatar), props: { user: { name: html.substring(mention.location + 1, mention.location + mention.length).trim(), uid: parseInt(mention.data) }, mode: 'text' }})
    textStart = mention.location + mention.length
    mentionPrecedes = true
  }
  blocks.value.push({ type: markRaw(Text), props: { context: post, html: html.substring(textStart, html.length) }})
  return html
}

getPostTextHtml(props.post)
</script>

<template>
  <component
    v-for="(block, index) of blocks" 
    :key="index"
    :is="block.type"
    v-bind="block.props">
  </component>
</template>

<style scoped>
</style>
