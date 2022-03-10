<script setup lang="ts">
import { defineProps, PropType, ref } from "vue"
import { User } from "../../models/models"
import {useStore} from "vuex";

const store = useStore()
defineProps({
  user: { type: Object as PropType<User>, required: true },
  large: { type: Boolean, required: false, default: false }
})

const hovering = ref(false)
</script>

<template>
  <Button v-if="user.uid !== store.state.user.uid" :label="user.following ? (hovering ? '取消关注' : '正在关注') : '关注'" class="p-button-rounded" :class="{ 'following': user.following, 'large': large }"
    @mouseover="hovering = true" @mouseleave="hovering = false" />
</template>

<style scoped>
.p-button.p-button-rounded.following {
  background-color: transparent;
  color: rgb(39, 44, 48);
  border-color: rgb(207, 217, 222);
}
.p-button.p-button-rounded.following:hover {
  background-color: rgba(244, 33, 46, 0.1);
  color: rgba(244, 33, 46);
  border-color: rgb(255, 221, 237);
}
.p-button.p-button-rounded.following:active {
  background-color: rgba(244, 33, 46, 0.2);
}
</style>
