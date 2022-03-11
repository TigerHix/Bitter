<script setup lang="ts">
import { defineProps, onMounted, PropType, ref } from "vue"
import { useStore } from "vuex";
import {ObjectIdHelper, Post, PostType} from "../../models/models"
import IconButton from "./iconButton.vue"
import {useToast} from "primevue/usetoast";
const store = useStore()
const toast = useToast()

const props = defineProps({
  post: { type: Object as PropType<Post>, required: true },
  size: { type: Number, required: false, default: 36 },
  fontSize: { type: Number, required: false, default: 18 }
})

const iconButton = ref(null)

// TODO: Refactor animation
const onLike = async () => {
  const post = props.post
  if (!ObjectIdHelper.isPostId(post.id)) {
    toast.add({severity: 'error', detail: '暂不支持点赞非动态内容', life: 3000})
    return
  }
  if (post.isLiked) {
    post.isLiked = false
    post.likeCount--
  } else {
    post.isLiked = true
    post.likeCount++
    iconButton.value.iconEl.classList.add('animate__animated', 'animate__rubberBand')
  }
  let response
  if (post.type != PostType.Comment) {
    response = await fetch(`https://api.vc.bilibili.com/dynamic_like/v1/dynamic_like/thumb`, {
      method: 'post',
      body: new URLSearchParams({
        uid: store.state.user.uid,
        dynamic_id: post.id,
        up: post.isLiked ? '1' : '2',
        csrf_token: store.state.csrf,
        csrf: store.state.csrf
      })
    })
  } else {
    response = await fetch(`https://api.bilibili.com/x/v2/reply/action`, {
      method: 'post',
      body: new URLSearchParams({
        oid: post.commentObjectId!,
        type: post.commentType!.toString(),
        rpid: post.id,
        action: post.isLiked ? '1' : '0',
        ordering: 'time',
        jsonp: 'jsonp',
        csrf: store.state.csrf
      })
    })
  }
  const data = await response.json()
  console.log(data)
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
