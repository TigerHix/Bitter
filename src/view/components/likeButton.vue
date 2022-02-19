<script setup lang="ts">
import { defineProps, onMounted, PropType, ref } from "vue"
import { Post } from "../../models/models"
import IconButton from "./iconButton.vue"

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
  size: { type: Number, required: false, default: 36 },
  fontSize: { type: Number, required: false, default: 18 }
})

const iconButton = ref(null)

// TODO: Refactor animation
const onLike = () => {
  const post = props.post
  if (post.isLiked) {
    post.isLiked = false
    post.likeCount--
  } else {
    post.isLiked = true
    post.likeCount++
    iconButton.value.iconEl.classList.add('animate__animated', 'animate__rubberBand')
  }
}

onMounted(() => {
  const el = iconButton.value.iconEl
  el.addEventListener('animationend', () => el.classList.remove('animate__animated', 'animate__rubberBand'))
})

</script>

<template>
  <IconButton ref="iconButton" 
    :icon="[post.isLiked ? 'fas' : 'far', 'heart']"
    :class="{ 'is-liked': post.isLiked }" 
    @click.stop="onLike()"
    color="rgb(83, 100, 113)"
    hoverColor="rgb(249, 24, 128)"
    activeColor="rgb(249, 24, 128)"
    hoverBackgroundColor="rgba(249, 24, 128, 0.1)"
    activeBackgroundColor="rgba(249, 24, 128, 0.2)"
    :size="size"
    :fontSize="fontSize">
    <slot></slot>
  </IconButton>
</template>

<style scoped>
.is-liked.icon-button {
  color: rgb(249, 24, 128);
}
</style>