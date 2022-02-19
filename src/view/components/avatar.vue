<script setup lang="ts">
import FollowButton from './followButton.vue';
import { User } from "./../../models/models"
import { defineProps, PropType } from "vue"
import { useRouter } from "vue-router"
import { fetchAndParseUserProfile } from "../../utils/appRequests";
const router = useRouter();

const props = defineProps({ 
    user: { type: Object as PropType<User>, required: true }, 
    small: { type: Boolean, required: false, default: false }, 
    large: { type: Boolean, required: false, default: false }, 
    popup: { type: Boolean, required: false, default: true },
    mode: { type: String, required: false, default: 'image' }
})

const onClick = (newTab: boolean = false) => {
    if (newTab) window.open(router.resolve('/profile/' + props.user.uid).href, '_blank')
    else router.push('/profile/' + props.user.uid)
}
const onShow = () => {
    fetchAndParseUserProfile(props.user.uid)
        .then((user: any) => {
            Object.assign(props.user, user)
        })
}
const appendToApp = () => document.querySelector(".main-column");
</script>

<template>
    <tippy 
        v-if="popup"
        :appendTo="appendToApp"
        @trigger="onShow()"
        interactive
        :arrow="false"
        placement="bottom" 
        :delay="[400, 400]"
        :duration="300"
        :offset="[0, 10]"
        :distance="14"
        theme="bitter"
        animation="fade">
        <template #default>
            <slot>
                <div v-if="mode === 'image'" class="avatar" :class="{ 'small': small, 'large': large }">
                    <img :src="user.avatarUrl" />
                    <div v-if="popup">
                        <div class="avatar-mask" @click.stop="onClick()" @click.middle.stop="onClick(true)"></div>
                    </div>
                    <div v-else>
                        <div class="avatar-mask" @click="onClick()" @click.middle="onClick(true)"></div>
                    </div>
                </div>
                <span v-else-if="mode === 'text'">
                    <router-link @click.stop @click.middle.stop :to="`/profile/${user.uid}`">
                        <a class="post-link">@{{ user.name }} </a>
                    </router-link>
                </span>
            </slot>
        </template>

        <template #content="{ hide }">
            <div class="avatar-popper-container flex flex-column justify-content-start">
                <div class="flex flex-row align-items-start justify-content-between">
                    <Avatar :user="user" @click="hide()" :popup="false" :large="true" />
                    <FollowButton :user="user" :large="true" />
                </div>
                <div class="flex flex-column justify-content-center" style="flex: 1;">
                    <div style="margin-top: 8px;" class="flex flex-column align-items-start">
                        <div class="avatar-popper-name">
                            {{ user.name }}
                        </div>
                        <div v-if="user.specialFollowedBy" class="user-special-followed-you flex align-items-center justify-content-center" style="margin-top: 2px;">
                            <span style="margin-top: -1.5px;">特别关注了你</span>
                        </div>
                        <div v-else-if="user.followedBy" class="user-followed-you flex align-items-center justify-content-center" style="margin-top: 2px;">
                            <span style="margin-top: -1.5px;">关注了你</span>
                        </div>
                    </div>
                    <div v-if="user.bio" class="avatar-popper-bio" style="margin-top: 12px;">
                        {{ user.bio }}
                    </div>
                    <div v-if="user.followingCount != null" class="flex flex-row" style="margin-top: 12px;">
                        <div>
                            <span class="avatar-popper-stats-number">{{ user.followingCount }} </span>
                            <span class="avatar-popper-stats" style="margin-left: 4px;">正在关注</span>
                        </div>
                        <div style="margin-left: 20px;">
                            <span class="avatar-popper-stats-number">{{ user.followerCount }}</span>
                            <span class="avatar-popper-stats" style="margin-left: 4px;">关注者</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </tippy>
    <div v-else class="avatar" :class="{ 'small': small, 'large': large }">
        <img :src="user.avatarUrl" />
        <div class="avatar-mask" @click.stop="onClick()" @click.middle.stop="onClick(true)">
        </div>
    </div>
</template>

<style scoped>
.avatar-popper {
    width: 300px;
    padding: 16px;
}
.avatar-popper-name {
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: #0f1419;
  overflow-wrap: anywhere;
}
.avatar-popper-bio {
  font-size: 15px;
  line-height: 20px;
  color: #0f1419;
  overflow-wrap: anywhere;
}
.avatar-popper-stats {
  font-size: 15px;
  color: rgb(83, 100, 113);
}
.avatar-popper-stats-number {
  font-size: 15px;
  color: #0f1419;
  font-weight: bold;
}
.avatar {
    position: relative;
    width: 48px;
    height: 48px;
}
.avatar-mask {
    position: absolute;
    top: 0; 
    left: 0; 
    height: 100%; 
    width: 100%; 
    border-radius: 9999px;
    transition-duration: 0.2s;
    cursor: pointer;
}
.avatar-mask:hover {
    background-color: rgba(26, 26, 26, 0.15); 
}
.avatar.small {
    width: 20px;
    height: 20px;
}
.avatar.large {
    width: 64px;
    height: 64px;
}
.avatar img {
    width: 100%;
    height: 100%;
    border-radius: 9999px;
}
</style>