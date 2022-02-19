<script setup lang="ts">
import { PostColumn } from "./../../models/models";
import { defineProps, PropType } from "vue";

const props = defineProps({ 
  column: { type: Object as PropType<PostColumn>, required: true },
  link: { type: Boolean, required: false, default: false }
})
console.log(props.column)

const onLink = () => window.open(props.column.url, '_blank');
</script>

<template>
  <div class="flex flex-column column-container" :class="{ 'column-container-link': link }" v-on:click.stop="link && onLink()" v-on:click.middle.stop="link && onLink()">
    <div class="column-thumbnail">
        <img :src="column.thumbnailUrl + '@1071w_315h_1e_1c.webp'" />
    </div>
    <div class="column-meta flex flex-column justify-content-center">
        <div class="column-title">{{ column.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.column-container {
  height: auto;
  border-radius: 16px;
}
.column-container-link {
  transition: background-color 0.2s ease-out 0s;
  cursor: pointer;
}
.column-container-link:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
.column-thumbnail img {
  width: 100%;
  border-radius: 16px 16px 0 0;
}
.column-meta {
  padding: 12px;
  padding-top: 10px;
  color: #536471;
  font-size: 15px;
  line-height: 20px;
}
.column-title {
  color: #0f1419;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: anywhere;
}
</style>