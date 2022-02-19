<script setup lang="ts">
import Avatar from './avatar.vue'
import { PropType, defineProps } from 'vue';
import { User } from '../../models/models';
import { useRouter } from "vue-router"
import FollowButton from './followButton.vue';
const router = useRouter();

const props = defineProps({
  user: { type: Object as PropType<User>, required: true },
  link: { type: Boolean, required: false, default: false },
  showFollowButton: { type: Boolean, required: false, default: true }
})

const onLink = (newTab: boolean = false) => {
    if (newTab) window.open(router.resolve('/profile/' + props.user.uid).href, '_blank')
    else router.push('/profile/' + props.user.uid)
}
</script>

<template>
  <div class="avatar-card-container flex flex-row justify-content-start" @click.stop="link && onLink()" @click.middle.stop="link && onLink(true)" :class="{ 'post-container-link': link }">
    <div class="flex flex-column align-items-center" style="margin-right: 14px; height: 100%;">
      <Avatar :user="user" />
    </div>
    <div class="flex flex-column justify-content-center" style="flex: 1;">
      <div
        class="flex flex-row justify-content-start align-items-center"
        style="margin-bottom: 4px"
      >
        <div class="avatar-card-name">
          {{ user.name }}
        </div>
      </div>
      <div class="avatar-card-bio">
        {{ user.bio }}
      </div>
    </div>
    <div v-if="showFollowButton" class="flex flex-column justify-content-center" style="padding-left: 16px;">
      <FollowButton :user="user" />
    </div>
  </div>
</template>

<style>
.avatar-card-container {
  padding: 12px 16px;
}
.avatar-card-container-link {
  transition: background-color 0.2s ease-out 0s;
  cursor: pointer;
}
.avatar-card-container-link:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
.avatar-card-container-link:active {
  background-color: rgba(0, 0, 0, 0.07);
}
.avatar-card-name {
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: #0f1419;
  overflow-wrap: anywhere;
}
.avatar-card-bio {
  font-size: 15px;
  line-height: 20px;
  color: #0f1419;
  overflow-wrap: anywhere;
}
</style>
