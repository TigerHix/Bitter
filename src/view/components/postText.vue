<script setup lang="ts">
import {computed, defineProps, markRaw, PropType} from 'vue';
import { Post } from "@/models/models"
import Avatar from './avatar.vue';
import Text from './text.vue';

const TextType = markRaw(Text)
const AvatarType = markRaw(Avatar)
const truncateHtml = require('html-truncate')

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
  truncate: { type: Boolean, required: false, default: false },
  truncateLength: { type: Number, required: false, default: 140 }
})
const blocks = computed<any[]>(() => {
  const post = props.post
  if (!post.text) return []

  const blocks = []

  let html = post.text
  let textCursor = 0
  let mentionPrecedes = false

  const mentions = []
  if (post.mentionedUsers) {
    for (let mentionedUser of post.mentionedUsers) {
      Array.from(html.matchAll(new RegExp('@' + mentionedUser.name, 'g')))
          .map(match => {
            mentions.push({location: match.index, length: match[0].length, data: mentionedUser.uid.toString()})
          })
    }
    mentions.push(...post.mentions)
  }

  for (let mention of mentions) {
    blocks.push({ type: TextType, props: { context: post, html: (mentionPrecedes ? ' ' : '') + html.substring(textCursor, mention.location) }})
    textCursor = mention.location
    if (props.truncate && textCursor > props.truncateLength) break

    blocks.push({ type: AvatarType, props: { user: { name: html.substring(mention.location + 1, mention.location + mention.length).trim(), uid: parseInt(mention.data) }, mode: 'text' }})
    textCursor = mention.location + mention.length
    if (props.truncate && textCursor > props.truncateLength) break

    mentionPrecedes = true
  }

  if (!props.truncate || textCursor <= props.truncateLength) {
    blocks.push({type: TextType, props: {context: post, html: html.substring(textCursor, html.length)}})
    textCursor = html.length
  }
  if (props.truncate && textCursor > props.truncateLength) {
    // Truncate last block
    const lastBlock = blocks[blocks.length - 1]
    if (lastBlock.type === TextType) {
      lastBlock.props.html = truncateHtml(lastBlock.props.html, lastBlock.props.html!.length - (textCursor - props.truncateLength))
    } else if (lastBlock.type === AvatarType) {
      blocks.push({type: TextType, props: { html: '…' }})
    }
  }

  return blocks
})

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
