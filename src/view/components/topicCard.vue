<script setup lang="ts">
import {PropType, defineProps, defineEmits, computed, onMounted, ref} from 'vue';
import {Topic} from '@/models/models';
import { useRouter } from "vue-router"
import {DynSearchReq} from "@/proto/app/dynamic/v2/dynamic_pb";
import {dynamicClient, makeHeaders} from "@/utils/appRequests";
import {convertDynamicItemToPost} from "@/utils/converters";
import {format10k} from "@/utils/formatNumber"
const router = useRouter()
const emit = defineEmits(['click'])

const props = defineProps({
  topic: { type: Object as PropType<Topic>, required: true },
  hero: { type: Boolean, required: false, default: false },
  horizontalPadding: { type: Number, required: false, default: 16 },
  verticalPadding: { type: Number, required: false, default: 12 },
})

const onLink = (newTab: boolean = false) => {
  if (newTab) window.open(router.resolve('/search/' + props.topic.name).href, '_blank')
  else router.push('/search/' + props.topic.name)
  emit('click')
}

const padding = computed(() => `${props.verticalPadding}px ${props.horizontalPadding}px`)
const parseType = (type: string) => {
  switch (type) {
    case 'TOPIC_CENTER_USER_PREFER': return '我关注的'
    case 'TOPIC_CENTER_FROM_LONG_TERM_REGION_PREFER': return '本地热门'
    case 'TOPIC_FROM_LONG_TERM_TAG_PREFER': return '猜你喜欢'
    case 'TOPIC_CENTER_HOT': return '全站热门'
    default: return ''
  }
}

const topicImageUrl = ref('')
onMounted(async () => {
  if (props.hero) {
    let page = 1
    while (page <= 3) {
      const req = new DynSearchReq().setKeyword(props.topic.name).setPage(page)

      const res = await dynamicClient.dynSearch(req, await makeHeaders())
      const searchInfo = res.getSearchInfo()!
      const fetchedPosts = searchInfo.getListList().map(convertDynamicItemToPost)

      for (const post of fetchedPosts) {
        if (post.album) {
          topicImageUrl.value = post.album.images[0].url + '@1200w.webp';
          return
        }
      }

      if (!searchInfo.getHasMore()) {
        page = 9999
      } else {
        page++
      }
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }
})
</script>

<template>
  <div class="relative w-full" :class="{ 'topic-hero': hero }" :style="{ 'height': hero ? '336px' : 'unset' }">
    <div v-if="hero" class="absolute w-full h-full" :style="{ 'background': topicImageUrl ? 'none' : 'black' }">
      <img v-if="topicImageUrl" class="absolute w-full h-full" style="object-fit: cover" :src="topicImageUrl" @error="$event.target.src = 'https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp'" />
      <div class="absolute w-full h-full" style="background-image: linear-gradient(transparent 0%, transparent 25%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.8) 100%);" />
    </div>
    <div class="topic-card-container relative z-1 flex w-full h-full" @click.stop="onLink()" @click.middle.stop="onLink(true)">
      <div v-if="!hero" class="flex flex-column justify-content-center" style="flex: 1;">
        <div class="topic-card-type" v-if="parseType(topic.type)">{{ parseType(topic.type) }}</div>
        <div class="topic-card-name">{{ topic.name }}</div>
        <div class="topic-card-description">{{ topic.description }}</div>
        <div class="topic-card-stats">
          <span style="margin-right: 10px;">{{ format10k(topic.viewCount, '浏览') }}</span>
          <span>{{ format10k(topic.postCount, '动态') }}</span>
        </div>
      </div>
      <div v-else class="flex flex-column justify-content-end">
        <div class="topic-card-type" v-if="parseType(topic.type)">{{ parseType(topic.type) }}</div>
        <div class="topic-card-name">{{ topic.name }}</div>
        <div class="topic-card-description">{{ topic.description }}</div>
        <div class="topic-card-stats">
          <span style="margin-right: 10px;">{{ format10k(topic.viewCount, '浏览') }}</span>
          <span>{{ format10k(topic.postCount, '动态') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.topic-card-container {
  padding: v-bind(padding);
  transition: background-color 0.2s ease-out 0s;
  cursor: pointer;
}
.topic-card-container:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
.topic-card-container:active {
  background-color: rgba(0, 0, 0, 0.07);
}
.topic-card-name {
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: #0f1419;
  overflow-wrap: anywhere;
  padding-top: 2px;
}
.topic-card-description {
  font-size: 15px;
  line-height: 20px;
  color: #0f1419;
  overflow-wrap: anywhere;
  margin-top: 4px;
}
.topic-card-type {
  font-size: 13px;
  line-height: 20px;
  color: #536471;
  overflow-wrap: anywhere;
}
.topic-card-stats {
  font-size: 13px;
  line-height: 20px;
  color: #536471;
  overflow-wrap: anywhere;
  margin-top: 4px;
}
.topic-hero .topic-card-name {
  color: #fff;
  font-size: 20px;
  line-height: 25px;
}
.topic-hero .topic-card-description {
  color: #fff;
  font-size: 15px;
  line-height: 15px;
}
.topic-hero .topic-card-stats {
  color: #fff;
}
.topic-hero .topic-card-type {
  color: #fff;
}
</style>
