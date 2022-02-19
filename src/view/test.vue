<script setup lang="ts">
import { onMounted } from "vue";
import { LikeListReq, LikeListReply } from "../proto/app/dynamic/v2/dynamic_grpc_web_pb";
import { dynamicClient, makeHeaders } from "../utils/appRequests";

onMounted(async () => {
  dynamicClient.likeList(new LikeListReq().setDynamicId('623740594119419973'), await makeHeaders(), (err, response: LikeListReply) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(response.toObject())
  })
})
</script>

<template>
  <div
    style="height: 100vh"
    class="flex flex-column justify-content-center align-items-center"
  >
    ABCDEF
  </div>
</template>

<style>
.caption {
  color: rgb(251, 114, 153);
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
}
</style>
