<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import IconButton from './components/iconButton.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const mainColumnComponent = ref(null)

onMounted(async () => {
  while (!document.getElementById('mainColumn')) {
    await new Promise(r => setTimeout(r, 10));
  }
  // Disable middle click scrolling
  // document.getElementById('mainColumn').onmousedown = function(e) { if (e.button === 1) return false; }
})

const onHome = () => {
  if (router.currentRoute.value.path == '/') {
    mainColumnComponent.value.refresh()
  }
  router.push('/')
}
const path = computed(() => router.currentRoute.value.path)
</script>

<template>
  <div class="flex flex-row justify-content-center">
    <div class="flex flex-column navigation align-items-center justify-content-center">
      <IconButton :src="require('../assets/logo.png')" hoverBackgroundColor="rgba(251, 114, 153, 0.1)" activeBackgroundColor="rgba(251, 114, 153, 0.1)" :size="50" :padding="4" @click="onHome()" class="navigation-icon" />
      <IconButton :icon="['fas', 'home']" :color="path == '/' ? '#0f1419' : '#536471'" hoverBackgroundColor="rgba(15, 20, 25, 0.1)" activeBackgroundColor="rgba(15, 20, 25, 0.1)" :size="50" :font-size="22" @click="onHome()" class="navigation-icon" />
    </div>
    <router-view id="mainColumn" class="flex main-column" v-slot="{ Component }">
      <keep-alive>
        <component :key="$route.fullPath" :is="Component" ref="mainColumnComponent" />
      </keep-alive>
    </router-view>
  </div>
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
</style>
