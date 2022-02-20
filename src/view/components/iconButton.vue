<script setup lang="ts">
import { defineProps, defineExpose, ref } from "vue"

defineProps({
  icon: { type: Array, required: false, default: () => null },
  src: { type: String, required: false, default: '' },
  color: { type: String, required: false, default: '#0F1419' },
  hoverColor: { type: String, required: false, default: '#0F1419' },
  activeColor: { type: String, required: false, default: '#0F1419' },
  hoverBackgroundColor: { type: String, required: false, default: 'rgba(15, 20, 25, 0.1)' },
  activeBackgroundColor: { type: String, required: false, default: 'rgba(15, 20, 25, 0.2)' },
  size: { type: Number, required: false, default: 36 },
  fontSize: { type: Number, required: false, default: 18 },
  padding: { type: Number, required: false, default: 8 }
})

const iconEl = ref<Element>(null)
defineExpose({
  iconEl
})
</script>

<template>
  <div class="icon-button flex flex-row justify-content-center align-items-center">
    <div class="icon-button-icon-container flex justify-content-center align-items-center" :style="{ 'width': size + 'px', 'height': size + 'px' }" >
      <div ref="iconEl" class="icon-button-icon">
        <font-awesome-icon v-if="icon" :icon="icon" :style="{ 'font-size': fontSize + 'px' }" />
        <img v-if="src" :src="src" style="width: 100%; height: 100%;" :style="{ padding: padding + 'px'}" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.icon-button {
  background-color: transparent;
  cursor: pointer;
  color: v-bind(color);
}
.icon-button-icon-container {
  border-radius: 9999px;
  background-color: transparent;
  transition-duration: 0.2s;
}
.icon-button:hover {
  color: v-bind(hoverColor);
}
.icon-button:active {
  color: v-bind(activeColor);
}
.icon-button:hover .icon-button-icon-container {
  background-color: v-bind(hoverBackgroundColor);
}
.icon-button:active .icon-button-icon-container  {
  background-color: v-bind(activeBackgroundColor);
}
</style>