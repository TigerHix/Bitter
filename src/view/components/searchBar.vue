<script setup lang="ts">
import {defineProps, defineEmits, ref} from "vue";
import {feedClient, makeHeaders} from "@/utils/appRequests";
import {SuggestReq} from "@/proto/dynamic/interfaces/feed/v1/api_pb";
import {useStore} from "vuex";
import {User} from "@/models/models";
import AvatarCard from "@/view/components/avatarCard.vue";
import {useRouter} from "vue-router";

const props = defineProps<{modelValue: string}>()
const value = ref(props.modelValue)
const emit = defineEmits(['update:modelValue', 'submit'])

const store = useStore()
const router = useRouter()
const update = (target: any) => {
  value.value = target
  emit('update:modelValue', value.value)
}
const suggestions = ref<string[]>([])
const suggest = async (event: any) => {
  Promise.all([
    feedClient.suggest(new SuggestReq().setS(event.query), await makeHeaders()),
    fetch(`https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search?uid=${store.state.user.uid}&keyword=${event.query}`).then(res => res.json())
  ])
    .then(([searchSuggestions, userSuggestions]) => {
      suggestions.value = [
        ...searchSuggestions.getListList()
          .map((query: string) => ({ query }))
          .slice(0, 3),
        ...(userSuggestions.data.groups?.flatMap((it: any) => it.items)
          .map((it: any) => ({ uid: it.uid, name: it.uname, avatarUrl: it.face, followerCount: it.fans }))
          .map((user: User) => ({ user })) ?? [])
          .slice(0, 10)
      ]
    })
}
const onItemSelect = (event: any) => {
  const obj = event.value
  if (obj.query) {
    router.push('/search/' + obj.query)
  } else if (obj.user) {
    router.push('/profile/' + obj.user.uid)
  }
}
const onKeyUp = (event: any) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    emit('submit')
  }
}
</script>

<template>
  <div class="search-bar p-input-filled p-input-icon-left" style="width: 100%;">
    <i class="pi pi-search"></i>
    <AutoComplete :key="$router.currentRoute.value.fullPath"
                  :suggestions="suggestions"  @complete="suggest($event)" @item-select="onItemSelect" :field="obj => obj.user ? obj.user.name : obj.query"
                  @keyup="onKeyUp"
                  type="text" v-bind:modelValue="value" v-on:update:modelValue="update($event)" placeholder="搜索 Bilibili" style="width: 100%;">
      <template #item="slotProps">
        <AvatarCard v-if="slotProps.item.user" :user="slotProps.item.user" :link="true" :showFollowerCount="true" :showFollowButton="false" />
        <div v-if="slotProps.item.query">
          <div class="search-item-container flex flex-row justify-content-start">
            <div class="flex flex-column align-items-center" style="margin-right: 14px; height: 100%; width: 48px; justify-content: center;">
              <i class="pi pi-search" style="font-size: 30px"></i>
            </div>
            <div class="flex flex-column justify-content-center" style="flex: 1;">
              <div class="flex flex-row justify-content-start align-items-center">
                <div class="search-item-query" v-html="slotProps.item.query.replace(value.toUpperCase().trim(), `<span style='font-weight: normal'>${value.toUpperCase().trim()}</span>`)" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </AutoComplete>
  </div>
</template>

<style scoped>
.search-item-container {
  padding: 12px 16px;
  height: 72px;
}
.search-item-query {
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: #0f1419;
  overflow-wrap: anywhere;
}
</style>
