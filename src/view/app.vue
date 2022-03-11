<script setup lang="ts">
import {computed, nextTick, onMounted, ref} from 'vue'
import IconButton from './components/iconButton.vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { FollowingGroup, User } from '@/models/models';
import { range } from '@/utils/helpers';
import {fetchUser} from "@/utils/webRequests";
import SearchBar from "@/view/components/searchBar.vue";
const router = useRouter()
const store = useStore()
const mainColumnComponent = ref(null)

const authenticated = ref(false)

chrome.cookies
  .get({ name: "DedeUserID", url: "https://bilibili.com" })
  .then((cookie) => {
    store.commit('setUser', { uid: cookie.value });
    return chrome.cookies.get({ name: "bili_jct", url: "https://bilibili.com" })
  })
  .then((cookie) => {
    store.commit('setCsrf', cookie.value);
    return fetchUser(store.state.user.uid)
  })
  .then((user: User) => {
    store.commit('setUser', user)
  })
  .then(() => {
    authenticated.value = true
    fetchFollowingGroups()
  })

const fetchFollowingGroups = () => {
  fetch("https://api.bilibili.com/x/relation/tags?jsonp=jsonp").then(res => res.json())
    .then((data) => {
      let groups = data.data.filter(it => it.tagid != 0).map(it => ({ id: it.tagid, name: it.name, count: it.count }))
      return Promise.all(groups.map(fetchFollowingGroup))
    })
    .then((groups: any[]) => {
      groups.unshift({ default: true, id: '0', name: '所有关注', count: store.state.user.followingCount })

      console.log("Fetched following groups")
      console.log(groups)
      store.commit('setUser', { ...store.state.user, followingGroups: groups })

      selectedGroup.value = groups[0]
    })
}

const fetchFollowingGroup = (group: FollowingGroup): Promise<FollowingGroup> => {
  group.users = new Map()
  const requests = range(1, Math.ceil(group.count / 50))
    .map(page => fetch(`https://api.bilibili.com/x/relation/tag?mid=${store.state.user.uid}&tagid=${group.id}&pn=${page}&ps=50&jsonp=jsonp`)
                  .then(res => res.json())
                  .then(data => data.data.map(it => ({ uid: it.mid, name: it.uname, avatarUrl: it.face, bio: it.sign })))
                  .then(users => users.forEach(user => group.users.set(user.uid, user))))
  return Promise.all(requests).then(() => group)
}

onMounted(async () => {
  while (!document.getElementById('mainColumn')) {
    await new Promise(r => setTimeout(r, 10));
  }
  // Disable middle click scrolling
  // document.getElementById('mainColumn').onmousedown = function(e) { if (e.button === 1) return false; }
})

const onHome = () => {
  if (router.currentRoute.value.path == '/') {
    mainColumnComponent.value!.refresh()
    window.scrollTo(0, 0)
  } else {
    router.push('/')
  }
}
const onExplore = () => {
  router.push(`/explore`)
  window.scrollTo(0, 0)
}
const onNotifications = () => {
  if (router.currentRoute.value.path == '/notifications') {
    mainColumnComponent.value!.refresh()
  } else {
    router.push(`/notifications`)
    const remove = router.afterEach(() => {
      nextTick(() => {
        mainColumnComponent.value!.refresh()
        remove()
      })
    })
  }
  unreadNotificationCount.value = -1
  window.scrollTo(0, 0)
}
const onProfile = () => {
  router.push(`/profile/${store.state.user.uid}`)
  window.scrollTo(0, 0)
}
const path = computed(() => router.currentRoute.value.path)
const selectedGroup = ref<FollowingGroup>()

const pendingQuery = ref('')
const onSearch = () => {
  if (!pendingQuery.value.trim()) return
  router.push('/search/' + escape(pendingQuery.value))
}

const unreadNotificationCount = ref(-1)
const checkUnreadNotifications = () => {
  fetch(`https://api.bilibili.com/x/msgfeed/unread?build=0&mobi_app=web`).then(res => res.json())
    .then((data: any) => {
      unreadNotificationCount.value = data.data.at + data.data.like + data.data.reply
      if (unreadNotificationCount.value === 0) unreadNotificationCount.value = -1
    })
  setTimeout(checkUnreadNotifications, 1000 * 60)
}
checkUnreadNotifications()

const unreadPostCount = ref(-1)
const checkUnreadPosts = () => {
  if (store.state.timelineMostRecentPostId) {
    fetch(`https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/web_cyclic_num?type_list=268435455&offset=${store.state.timelineMostRecentPostId}`).then(res => res.json())
      .then((data: any) => {
        unreadPostCount.value = data.data.update_num ?? -1
        mainColumnComponent.value!.unreadPostCount = unreadPostCount.value
      })
  }
  setTimeout(checkUnreadPosts, 1000 * 60)
}
checkUnreadPosts()
const clearUnreadPostCount = () => unreadPostCount.value = -1
</script>

<template>
  <div class="flex flex-row justify-content-center">
    <div class="flex flex-column navigation align-items-center justify-content-center">
      <IconButton src="logo.png" hoverBackgroundColor="rgba(251, 114, 153, 0.1)" activeBackgroundColor="rgba(251, 114, 153, 0.1)" :size="50" :padding="4" @click="onHome()" class="navigation-icon" />
      <IconButton :icon="['fas', 'home']" :color="path === '/' ? '#0f1419' : 'rgb(207, 217, 222)'" hoverBackgroundColor="rgba(15, 20, 25, 0.1)" activeBackgroundColor="rgba(15, 20, 25, 0.1)" :size="50" :font-size="22" @click="onHome()" class="navigation-icon"
                  :badge="unreadPostCount > 0 ? 0 : -1" />
      <IconButton :icon="['fas', 'hashtag']" :color="path === '/explore' ? '#0f1419' : 'rgb(207, 217, 222)'" hoverBackgroundColor="rgba(15, 20, 25, 0.1)" activeBackgroundColor="rgba(15, 20, 25, 0.1)" :size="50" :font-size="22" @click="onExplore()" class="navigation-icon" />
      <IconButton :icon="['fas', 'bell']" :color="path === '/notifications' ? '#0f1419' : 'rgb(207, 217, 222)'" hoverBackgroundColor="rgba(15, 20, 25, 0.1)" activeBackgroundColor="rgba(15, 20, 25, 0.1)" :size="50" :font-size="22"
                  @click="onNotifications()"
                  :badge="unreadNotificationCount"
                  class="navigation-icon" />
      <IconButton v-if="store.state.user" :icon="['fas', 'user']" :color="path === `/profile/${store.state.user.uid}` ? '#0f1419' : 'rgb(207, 217, 222)'" hoverBackgroundColor="rgba(15, 20, 25, 0.1)" activeBackgroundColor="rgba(15, 20, 25, 0.1)" :size="50" :font-size="22" @click="onProfile()" class="navigation-icon" />
    </div>
    <router-view v-if="authenticated" id="mainColumn" class="flex main-column" v-slot="{ Component }">
      <keep-alive>
        <component :key="$route.fullPath" :is="Component" ref="mainColumnComponent"
                   :groupFilter="(selectedGroup == null || selectedGroup.default) ? null : selectedGroup"
                   :unreadPostCount="unreadPostCount"
                   @clearUnreadPostCount="clearUnreadPostCount()" />
      </keep-alive>
    </router-view>
    <div class="flex flex-column sidebar">
      <div v-if="path === `/`" class="sidebar-item">
        <div style="width: 100%;">
          <form @submit="onSearch">
            <SearchBar v-model="pendingQuery" @submit="onSearch" />
          </form>
        </div>
      </div>
      <div v-if="selectedGroup && path === `/`" class="sidebar-item">
        <div class="sidebar-item-header">
          动态过滤
        </div>
        <div style="padding: 12px 16px 0;">
          <div v-for="group in store.state.user.followingGroups" :key="group.id" class="field-radiobutton">
            <RadioButton :id="group.id" name="group" :value="group" v-model="selectedGroup" />
            <label :for="group.id">{{ group.name }} <span class="sidebar-secondary-text">({{ group.count }})</span></label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Toast position="bottom-center" />
</template>

<style>
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-column {
  width: 600px;
  border-style: solid;
  border-width: 0;
  border-left-width: 1px;
  border-left-color: rgb(239, 243, 244);
  border-right-width: 1px;
  border-right-color: rgb(239, 243, 244);
}
.navigation {
  width: 64px;
  margin: 0 12px;
  position: sticky;
  top: 0;
  height: fit-content;
}
.navigation-icon {
  margin: 4px 0;
}
.sidebar {
  color: #0F1419;
  margin-left: 20px;
  width: 288px;
  padding-top: 4px;
  position: sticky;
  top: 0;
  height: fit-content;
}
.sidebar-item {
  background: #F7F9F9;
  border-radius: 16px;
  margin-bottom: 16px;
}
.sidebar-item-header {
  font-size: 20px;
  line-height: 25px;
  padding: 12px 16px;
  font-weight: bold;
}
.sidebar-secondary-text {
  color: rgb(83, 100, 113);
}
.field-radiobutton label {
  font-size: 15px;
  line-height: 20px;
}
</style>
