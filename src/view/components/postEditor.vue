<script setup lang="ts">
import {computed, defineProps, defineEmits, ref} from "vue"
import {useStore} from "vuex"
import {useToast} from "primevue/usetoast";
import Avatar from "./avatar.vue"
import IconButton from "@/view/components/iconButton.vue"
import {Emoticon, EmoticonPackage, Post} from "@/models/models";
import {parseComment} from "@/utils/parsers";

const emit = defineEmits(['submitSuccess'])
const store = useStore()
const toast = useToast()
const postContent = ref('')
const activated = ref(false)
const postInputContainer = ref()
const op = ref()
const emoticonPackages = ref([] as EmoticonPackage[])

const fetchedEmoticons = false;

const onEmoticonKeyboard = (event: any) => {
  op.value.toggle(event)
  if (!fetchedEmoticons) {
    fetchEmoticons()
  }
}

const fetchEmoticons = () => {
  fetch('https://api.bilibili.com/x/emote/user/panel/web?business=reply')
    .then((res) => res.json())
    .then((data: any) => {
      emoticonPackages.value = []
      for (let pkg of data.data.packages) {
        emoticonPackages.value.push({
          id: pkg.id,
          name: pkg.text,
          iconUrl: pkg.url,
          large: pkg.emote[0].meta.size > 1,
          emoticons: pkg.emote.map((it: any) => ({
            name: it.text,
            text: it.text,
            url: it.url,
            isText: it.type === 4
          }))
        })
      }
    })
}

const onEmoticon = (emoticon: Emoticon) => {
  const text = emoticon.text
  const txtarea = postInputContainer.value.getElementsByTagName('textarea')[0]
  const scrollPos = txtarea.scrollTop
  let caretPos = txtarea.selectionStart
  const front = (txtarea.value).substring(0, caretPos)
  const back = (txtarea.value).substring(txtarea.selectionEnd, txtarea.value.length)
  txtarea.value = front + text + back
  caretPos = caretPos + text.length
  txtarea.selectionStart = caretPos
  txtarea.selectionEnd = caretPos
  txtarea.focus()
  txtarea.scrollTop = scrollPos

  postContent.value = txtarea.value
}

const submitting = ref(false)
const onSubmit = () => {
  if (replyPost.value) {
    if (!replyPost.value.commentType) {
      window.alert('No comment type found')
      return
    }
    if (!replyPost.value.commentObjectId) {
      window.alert('No comment object id found')
      return
    }

    submitting.value = true
    const params: any = {
      oid: replyPost.value.commentObjectId,
      message: postContent.value,
      plat: '1',
      ordering: 'heat',
      type: replyPost.value.commentType.toString(),
      csrf: store.state.csrf
    }
    if (replyPost.value.commentRootId) params.root = replyPost.value.commentRootId
    if (replyPost.value.commentThreadId) params.parent = replyPost.value.commentThreadId
    else if (params.root) params.parent = params.root

    if (params.parent) {
      const parentComment: Post = store.getters.getCachedPost(props.replyPostId)
      if (parentComment) {
        params.message = `回复 @${parentComment.user.name}:` + params.message
      }
    }

    fetch('https://api.bilibili.com/x/v2/reply/add', {
      method: 'post',
      body: new URLSearchParams(params)
    })
        .then((res) => res.json())
        .then((data: any) => {
          console.log(data)
          if (data.code === 0) {
            toast.add({severity: 'success', detail: data.data.success_toast, life: 3000})
            activated.value = false
            postContent.value = ''
            postInputContainer.value.getElementsByTagName('textarea')[0].blur()
            emit('submitSuccess', parseComment(data.data.reply, replyPost.value.commentType, replyPost.value.commentObjectId))
            replyPost.value.commentCount++
          } else {
            toast.add({severity: 'error', detail: data.message, life: 3000})
          }
        })
        .finally(() => submitting.value = false)
  }
}

const props = defineProps({
  replyPostId: { type: String, required: false, default: '' },
  showTopChain: { type: Boolean, required: false, default: false },
  focused: { type: Boolean, required: false, default: false }
});
const replyPost = computed<Post>(() => {
  return props.replyPostId ? store.getters.getCachedPost(props.replyPostId) : null
})
if (props.focused) {
  activated.value = true
}
</script>

<template>
  <div v-if="replyPost" class="flex flex-row justify-content-start" style="padding: 12px 16px;
    border-bottom: 1px;
    border-bottom-color: rgb(239, 243, 244);
    border-bottom-style: solid;">
    <div class="flex flex-column align-items-center" style="margin-right: 14px; height: 100%;">
      <div :class="{'post-top-chain': showTopChain, 'force': showTopChain}"></div>
      <Avatar :user="store.state.user"/>
    </div>
    <div style="flex: 1;">
      <div class="flex flex-row align-items-center">
        <div ref="postInputContainer" class="post-input" style="flex: 1;">
          <Textarea v-model="postContent" placeholder="发布你的回复" :autoResize="true" rows="1"
                    :autofocus="focused"
                    @focus="activated = true"
                    @keyup.ctrl.enter="onSubmit" />
        </div>
        <div v-if="!activated">
          <Button :label="'回复'" :disabled="true" class="p-button-rounded large primary disabled" />
        </div>
      </div>
      <div
          v-if="activated"
          class="flex flex-row justify-content-between align-items-center"
      >
        <div class="flex flex-row justify-content-start align-items-center" style="margin-left: -9px;">
          <IconButton :icon="['far', 'face-smile']" color="rgb(251, 114, 153)" hoverColor="rgb(251, 114, 153)" activeColor="rgb(251, 114, 153)" hoverBackgroundColor="rgba(251, 114, 153, 0.1)" activeBackgroundColor="rgba(251, 114, 153, 0.1)" @click="onEmoticonKeyboard" />
        </div>
        <div>
          <Button :label="'回复'" :disabled="!postContent || submitting" class="p-button-rounded large primary" @click="onSubmit" />
        </div>
      </div>
    </div>
  </div>
  <OverlayPanel ref="op">
    <TabView lazy scrollable style="width: 325px;">
      <TabPanel v-for="[index, pkg] in emoticonPackages.entries()" :key="pkg.id">
        <template #header>
          <div class="flex justify-content-center align-items-center" style="width: 36px; height: 36px; padding: 4px;" :style="{'margin-right': (index === emoticonPackages.length - 1 ? 48 : 0) + 'px'}">
            <img :title="pkg.name" :src="pkg.iconUrl" style="width: 36px; height: 36px; padding: 4px;" />
          </div>
        </template>
        <div style="height: 250px; overflow-y: scroll;">
          <div class="flex flex-wrap">
            <div v-for="emoticon in pkg.emoticons" :key="emoticon.text" style="padding: 4px;">
              <IconButton :title="emoticon.name" :text="emoticon.isText ? emoticon.text : ''" :src="emoticon.isText ? '' : emoticon.url" :size="pkg.large ? 68 : 36" :padding="4" @click="() => onEmoticon(emoticon)" />
            </div>
          </div>
        </div>
      </TabPanel>
    </TabView>
  </OverlayPanel>
</template>

<style scoped>
.post-input textarea {
  width: 100%;
  font-size: 20px;
  color: #0F1419;
  padding: 12px 0;
  border: none !important;
  box-shadow: none !important;
}
</style>
