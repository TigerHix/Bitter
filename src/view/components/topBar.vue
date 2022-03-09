<script setup lang="ts">
import { defineProps } from "vue"
import IconButton from "./iconButton.vue";
import { useRouter } from "vue-router"
const router = useRouter()

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: false, default: '' },
  icon: { type: Array, required: false, default: () => ['fas', 'arrow-left'] },
  clickHandler: { type: Function, required: false, default: null }
})
const onBack = () => {
  if (window.history.length > 2) router.back()
  else router.push('/')
}
</script>

<template>
  <div class="top-bar flex flex-row justify-content-center align-items-center" style="padding-left: 8px;">
    <IconButton v-if="icon" :icon="icon" hoverBackgroundColor="rgba(15, 20, 25, 0.1)" activeBackgroundColor="rgba(15, 20, 25, 0.2)" :size="36" :font-size="18" @click="clickHandler ? clickHandler() : onBack()" style="margin-right: 20px;"/>
    <div class="top-bar-title" style="flex: 1; padding-left: 8px;">
      <div class="flex flex-column align-items-start justify-content-center">
        <slot name="content">
          <span>{{ title }}</span>
          <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  position: sticky;
  z-index: 3;
  align-self: flex-start;
  height: 53px;
  top: 0;
  width: 100%;
  color: #0F1419;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.85);
}
.top-bar-title {
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  margin-top: -3px;
}
.top-bar-title .subtitle {
  font-size: 13px;
  line-height: 16px;
  color: #536471;
  font-weight: normal;
}
</style>
