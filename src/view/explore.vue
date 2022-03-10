<script setup lang="ts">

import {ref} from "vue";
import TopBar from './components/topBar.vue'
import { useRouter } from "vue-router";
import SearchBar from "@/view/components/searchBar.vue";
import TopicCard from "@/view/components/topicCard.vue";
import {Topic} from "@/models/models";
import {parseTopic} from "@/utils/parsers";

const router = useRouter();
const path = router.currentRoute.value.fullPath

const pendingQuery = ref('')
const onSearch = () => {
  if (!pendingQuery.value.trim()) return
  router.push('/search/' + escape(pendingQuery.value))
}

const topics = ref<Topic[]>([])
const offset = ref(0)
const loadMoreTopics = async ($state: any) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  try {
    const data = await fetch(`https://app.bilibili.com/x/topic/vert/center?offset=${offset.value}`).then(res => res.json())

    console.log(data)

    if (data.code > 0) {
      console.log(data)
      $state.error()
    } else if (!data.data.topic_items || data.data.topic_items.length === 0) {
      $state.complete()
    } else {
      const fetchedTopics = data.data.topic_items.map(parseTopic)
      topics.value.push(...fetchedTopics)
      offset.value += data.data.page_info.page_size
      $state.loaded()
    }
  } catch (e) {
    console.log(e)
    $state.error()
  }
}
</script>

<template>
  <div class="flex flex-column justify-content-start">
    <TopBar :icon="null">
      <template #content>
        <div style="width: 100%; padding-right: 64px;">
          <form @submit="onSearch">
            <SearchBar v-model="pendingQuery" @submit="onSearch" />
          </form>
        </div>
      </template>
    </TopBar>
    <div class="content flex flex-column justify-content-start">
      <div v-if="topics.length > 0">
        <TopicCard :topic="topics[0]" :hero="true" />
        <TopicCard v-for="topic in topics.slice(1)" :key="topic.id" :topic="topic" />
      </div>
      <InfiniteLoading  @infinite="loadMoreTopics" :firstLoad="true" class="flex justify-content-center py-4">
        <template #complete>
          &nbsp;
        </template>
      </InfiniteLoading>
    </div>
  </div>
</template>

<style>
.content {
  width: 100%;
}
</style>
