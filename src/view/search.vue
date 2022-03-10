<script setup lang="ts">

import { ref, defineProps} from "vue";
import PostCard from "./components/postCard.vue";
import TopBar from './components/topBar.vue'
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
import {Post, User} from '@/models/models';
import {DynSearchReq} from "@/proto/app/dynamic/v2/dynamic_pb";
import {dynamicClient, makeHeaders} from "@/utils/appRequests";
import {convertDynamicItemToPost} from "@/utils/converters";
import SearchBar from "@/view/components/searchBar.vue";
import {parseAndSetUserRelation, parseSearchResultUser} from "@/utils/parsers";
import AvatarCard from "@/view/components/avatarCard.vue";

const router = useRouter();
const path = router.currentRoute.value.fullPath
const store = useStore()

let posts = ref<Post[]>([]);
let page = 1

const props = defineProps({
  query: { type: String, required: true }
})

const loadMorePosts = async ($state: any) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  console.log("Loading more reposts");

  try {
    const req = new DynSearchReq().setKeyword(unescape(props.query)).setPage(page)

    const res = await dynamicClient.dynSearch(req, await makeHeaders())
    const searchInfo = res.getSearchInfo()!
    const fetchedPosts = searchInfo.getListList().map(convertDynamicItemToPost)
    posts.value.push(...fetchedPosts)
    fetchedPosts.forEach(it => store.commit('cachePost', it))

    if (!searchInfo.getHasMore()) {
      $state.complete()
    } else {
      page++
      $state.loaded()
    }
  } catch (err) {
    console.log(err)
    $state.error()
  }
}

// Users
const users = ref<User[]>([])
let usersNextPage = 1
const loadMoreUsers = async ($state: any) => {
  try {
    const data = await fetch(`https://api.bilibili.com/x/web-interface/search/type?context=&search_type=bili_user&page=${usersNextPage}&order=&keyword=${unescape(props.query)}&category_id=&user_type=&order_sort=&changing=mid&__refresh__=true&_extra=&highlight=1&single_column=0`).then(res => res.json())

    console.log(data)

    if (data.code > 0) {
      console.log(data)
      $state.error()
    } else if (!data.data.result || data.data.result.length === 0) {
      $state.complete()
    } else {
      const fetchedUsers: User[] = data.data.result.map(parseSearchResultUser)
      const relationData = await fetch(`https://api.bilibili.com/x/relation/relations?fids=${fetchedUsers.map(it => it.uid).join(',')}`).then(res => res.json())
      if (relationData.data) {
        for (const user of fetchedUsers) {
          const relation = relationData.data[user.uid]
          if (relation) {
            parseAndSetUserRelation(user, relation)
          }
        }
      }

      users.value.push(...fetchedUsers)
      usersNextPage++
      $state.loaded()
    }
  } catch (e) {
    console.log(e)
    $state.error()
  }
}

const pendingQuery = ref(unescape(props.query))
const onSearch = () => {
  if (!pendingQuery.value.trim()) return
  router.push('/search/' + escape(pendingQuery.value))
}
const tabActiveIndex = ref(0)
const onTabChange = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="flex flex-column justify-content-start">
    <TopBar :title="'搜索：' + query">
      <template #content>
        <div style="width: 100%; padding-right: 64px;">
          <form @submit="onSearch">
            <SearchBar v-model="pendingQuery" @submit="onSearch" />
          </form>
        </div>
      </template>
      <template #footer>
        <TabView lazy v-model:activeIndex="tabActiveIndex" class="space-around-tab-view" @tabChange="onTabChange">
          <TabPanel header="动态">
          </TabPanel>
          <TabPanel header="用户">
          </TabPanel>
        </TabView>
      </template>
    </TopBar>
    <div class="content flex flex-column justify-content-start">
      <div class="search-posts-container" v-if="tabActiveIndex === 0">
        <div v-for="post in posts" :key="post.id" class="post-border">
          <PostCard :postId="post.id" :link="true" />
        </div>
        <InfiniteLoading @infinite="loadMorePosts" :firstLoad="true" class="flex justify-content-center py-4">
          <template #complete>
            &nbsp;
          </template>
        </InfiniteLoading>
      </div>
      <div class="search-users-container" v-if="tabActiveIndex === 1">
        <AvatarCard v-for="user in users" :key="user.uid" :user="user" :link="true" :showFollowerCount="true" />
        <InfiniteLoading  @infinite="loadMoreUsers" :firstLoad="true" class="flex justify-content-center py-4">
          <template #complete>
            &nbsp;
          </template>
        </InfiniteLoading>
      </div>
    </div>


  </div>
</template>

<style>
.content {
  width: 100%;
}
</style>
