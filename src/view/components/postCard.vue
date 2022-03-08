<script setup lang="ts">
import Avatar from "./avatar"
import VideoCard from "./videoCard"
import ColumnCard from "./columnCard"
import { Post, PostImage, PostType, User } from "./../../models/models"
import { computed, defineProps, onMounted, ref } from "vue"
import { formatTimeAgo, formatTime } from "./../../utils/formatTimestamp"
import { fetchDynamicDetail } from "@/utils/webRequests"
import { RouteLocationRaw, useRouter } from "vue-router";
import TopBar from "./topBar.vue"
import AvatarCard from "./avatarCard.vue"
import LikeButton from './likeButton.vue'
import IconButton from './iconButton.vue'
import { LikeListReply, LikeListReq } from "@/proto/app/dynamic/v2/dynamic_pb"
import { dynamicClient, makeHeaders } from "../../utils/appRequests"
import { useStore } from 'vuex'
import PostText from "./postText.vue"
import {parsePost} from "@/utils/parsers";
const router = useRouter()
const store = useStore()

const removeRouterGuard = router.beforeEach(() => {
  likedUsersDialog.value = false
  removeRouterGuard()
})

const props = defineProps({ 
  postId: { type: String, required: true },
  resolvePostId: { type: Boolean, required: false, default: true },
  updatePost: { type: Boolean, required: false, default: false },
  embedded: { type: Boolean, required: false, default: false },
  large: { type: Boolean, required: false, default: false },
  link: { type: Boolean, required: false, default: false },
  noPadding: { type: Boolean, required: false, default: false }
});
let postDeleted = ref(false)
const post = computed<Post>(() => {
  return store.getters.getCachedPost(props.postId)
})

if ((!post.value && props.resolvePostId) || props.updatePost) {
  fetchDynamicDetail(props.postId, (data: any) => {
    console.log(data)
      if (!data.data.card) {
        postDeleted.value = true
      } else {
        console.log('Parsing: ')
        console.log(data)
        store.commit('cachePost', parsePost(data.data.card))
      }
    })
}

const isVideoRepost = (post: Post) => {
  return post.sourcePostId && post.type === PostType.Video && !post.text
}
const getSingleImageThumbnail = (image: PostImage) => {
  if (props.large) return image.url + `@600w.webp`
  if (image.width < image.height) {
    return image.url + `@${Math.floor((image.width / image.height) * 510)}w_510h${getImageThumbnailSuffix(image)}.webp`
  } else {
    return image.url + `@510w_${Math.floor((image.height / image.width) * 510)}h${getImageThumbnailSuffix(image)}.webp`
  }
};
const getDoubleImageThumbnail = (image: PostImage) => {
  return image.url + `@281w_318h${getImageThumbnailSuffix(image)}.webp`
};
const getTripleImageThumbnail = (image: PostImage) => {
  return image.url + `@300w_300h${getImageThumbnailSuffix(image)}.webp`
}
const getImageThumbnailSuffix = (image: PostImage) => {
  if (image.height / image.width >= 3) {
    return '_!header'
  } else {
    return '_1e_1c'
  }
}
const onLink = (newTab: boolean = false) => {
  const p = post.value
  let args: RouteLocationRaw
  if (p.type === PostType.Comment) {
    args = { name: 'comment', params: { type: p.commentType, objectId: p.commentObjectId, rootId: p.commentRootId, targetId: p.id, threadId: p.commentThreadId }}
  } else {
    args = { name: 'post', params: { postId: p.id }}
  }
  if (newTab) {
    window.open(router.resolve(args).href, '_blank')
  } else {
    router.push(args)
    if (p.type !== PostType.Comment) {
      const remove = router.afterEach(() => {
        window.scrollTo(0, 0)
        remove()
      })
    }
  }
  return true
}

// Liked users
const likedUsersDialog = ref(false)
const likedUsers = ref<User[]>([])
let nextPage = 0
const loadMoreLikedUsers = async $state => {
  console.log("Loading more liked users");

  const request = new LikeListReq()
  request.setDynamicId(post.value.id)
  request.setPage(++nextPage)
  if (likedUsers.value.length > 0) request.setUidOffset(likedUsers.value[likedUsers.value.length - 1].uid)

  let completed = false
  dynamicClient.likeList(request, await makeHeaders(), (err, reply: LikeListReply) => {
    if (err) {
      console.log(err)
      $state.error()
      completed = true
      return
    }
    
    console.log(reply.toObject())
    
    likedUsers.value.push(...reply.getListList().map(it => { return { 
      uid: it.getAuthor().getMid(),
      name: it.getAuthor().getName(),
      avatarUrl: it.getAuthor().getFace(),
      bio: it.getAuthor().getSign(),
      following: it.getAttend() === 1
    } }))

    if (reply.getHasMore()) {
      $state.loaded()
    } else {
      $state.complete()
    }
    completed = true
  })

  while (!completed) {
    await new Promise(resolve => setTimeout(resolve, 10))
  }
}
const openLikedUsersDialog = () => {
  likedUsersDialog.value = true
  loadMoreLikedUsers({ error: () => {}, loaded: () => {}, complete: () => {} })
}

const postContainer = ref(null)

onMounted(() => {
  if (postContainer.value) postContainer.value.onmousedown = function(e) { if (e.button === 1 && props.link) return false; }
})
</script>

<template>
  <div v-if="postDeleted" class="post-deleted">
    此动态已被删除。
  </div>
  <div v-if="post" ref="postContainer" class="post-container" :class="{ 'post-container-link': link, 'large': large, 'no-padding': noPadding }"  @click="link && onLink() && $event.stopPropagation()" @click.middle="link && onLink(true) && $event.stopPropagation()">
    <div v-if="post.isPinned && !embedded" class="flex post-header" :class="{ 'large': large }">
      <div class="flex justify-content-center align-items-center" style="font-size: 16px; margin-right: 12px; width: 20px;">
        <font-awesome-icon :icon="['fas', 'thumbtack']" />
      </div>
      <div>
        <span class="post-link" style="padding-top: 2px;">{{ post.type === PostType.Comment ? '置顶评论' : '置顶动态' }}</span>
      </div>
    </div>
    <div v-else-if="post.likedBy?.length > 0 && !embedded" class="flex post-header" :class="{ 'large': large, 'embedded': embedded }">
      <div class="flex justify-content-center align-items-center" style="font-size: 16px; margin-right: 12px; width: 20px;">
        <font-awesome-icon :icon="['fas', 'heart']" />
      </div>
      <div style="margin-top: 1px;">
        <span class="post-link" style="padding-top: 2px;">
          <span v-for="(user, index) in post.likedBy" :key="index">
            <Avatar :user="user">
              <router-link @click.stop @click.middle.stop :to="`/profile/${ user.uid }`">
                <a class="post-link">{{ user.name }}</a>
              </router-link>
            </Avatar>
            <span v-if="index < post.likedBy.length - 1">、</span>
          </span>
          点赞了
        </span>
      </div>
    </div>

    <div v-if="isVideoRepost(post)">
      <div class="flex post-header" :class="{ 'large': large }">
        <div style="font-size: 16px; margin-right: 12px;">
          <font-awesome-icon :icon="['fas', 'retweet']" />
        </div>
        <div style="margin-top: 1px;">
          <Avatar :user="post.user">
            <router-link @click.stop @click.middle.stop :to="`/profile/${ post.user.uid }`">
              <a class="post-link" style="padding-top: 2px;">{{ post.user.name }} 转发了</a>
            </router-link>
          </Avatar>
        </div>
      </div>
      <PostCard :postId="post.sourcePostId" :large="large" :noPadding="true" />
    </div>
    <div v-else class="flex flex-row justify-content-start">
      <div v-if="!large && !embedded">
        <div class="flex flex-column align-items-center" style="margin-right: 14px; height: 100%;">
          <div class="post-top-chain"></div>
          <Avatar :user="post.user" />
          <div class="post-bottom-chain"></div>
        </div>
      </div>
      <div style="flex: 1;">
        <div
          class="flex flex-row justify-content-start align-items-center"
          :style="{'margin-bottom': large ? '16px' : '4px'}"
        >
          <div v-if="!large && embedded">
            <div style="margin-right: 6px; padding-top: 2px;">
              <Avatar :user="post.user" :small="true" />
            </div>
          </div>
          <div v-if="large">
            <div class="flex flex-column align-items-center" style="margin-right: 16px; height: 48px">
              <div class="post-top-chain"></div>
              <Avatar :user="post.user" />
            </div>
          </div>
          <div class="post-username" :class="{ 'large': large }">
            {{ post.user.name }}
          </div>
          <div v-if="!large" class="flex flex-row">
            <div
              class="post-timestamp"
              style="padding-left: 4px; padding-right: 4px"
            >
              ·
            </div>
            <div class="post-timestamp">
              {{ post.timestampLabel ? post.timestampLabel : formatTimeAgo(post.timestamp) }}
            </div>
          </div>
        </div>
        
        <div class="post-text" :class="{ 'large': large }">
          <PostText :post="post" />
        </div>

        <div v-if="post.album" style="margin-top: 14px;">
          <div v-if="post.album.images.length == 1">
            <div class="post-single-image-container" @click.stop>
              <photo-provider :default-backdrop-opacity="0.9">
                <photo-consumer :src="post.album.images[0].url">
                  <img :src="getSingleImageThumbnail(post.album.images[0])" />
                </photo-consumer>
              </photo-provider>
            </div>
          </div>
          <div v-else-if="post.album.images.length == 2">
            <div class="flex flex-row">
              <div class="post-double-image-container left" @click.stop>
                <photo-provider :default-backdrop-opacity="0.9">
                  <photo-consumer v-for="(src, index) in post.album.images.map(it => it.url)" :key="index" :src="src">
                    <img v-if="index === 0" :src="getDoubleImageThumbnail(post.album.images[0])" />
                  </photo-consumer>
                </photo-provider>
              </div>
              <div class="post-double-image-container right" @click.stop>
                <photo-provider :default-backdrop-opacity="0.9">
                  <photo-consumer v-for="(src, index) in post.album.images.map(it => it.url)" :key="index" :src="src">
                    <img v-if="index === 1" :src="getDoubleImageThumbnail(post.album.images[1])" />
                  </photo-consumer>
                </photo-provider>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="grid px-2 py-2">
              <div v-for="(image, index) in post.album.images" :key="image.url" class="col-4 p-0">
                <div class="post-triple-image-container" :class="{ 'large': large }" @click.stop>
                  <photo-provider :default-backdrop-opacity="0.9">
                    <photo-consumer v-for="(src, index2) in post.album.images.map(it => it.url)" :key="index2" :src="src">
                      <img v-if="index === index2" :src="getTripleImageThumbnail(image)" />
                    </photo-consumer>
                  </photo-provider>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="post.video && !post.text" class="post-video-container" style="margin-top: 14px;">
          <VideoCard :video="post.video" :link="true" />
        </div>

        <div v-if="post.column" class="post-column-container" style="margin-top: 14px;">
          <ColumnCard :column="post.column" :link="true" />
        </div>

        <div v-if="post.sourcePostId" class="post-embedded-post-container" style="margin-top: 14px; border-radius: 16px;">
          <PostCard :postId="post.sourcePostId" :embedded="true" :link="true" />
        </div>

        <div v-if="large" class="post-timestamp mt-3">
          {{ post.timestampLabel ? post.timestampLabel : formatTime(post.timestamp) }}
        </div>

        <div v-if="large" class="mt-3" />

        <div v-if="large && (post.commentCount > 0 || post.repostCount > 0 || post.likeCount > 0)" class="post-stats py-3">
          <span v-if="post.commentCount > 0" style="margin-right: 20px;"><span class="post-stats-number">{{ post.commentCount }}</span> 评论</span>
          <router-link :to="`/post/${post.id}/reposts`" class="post-stats-link">
            <span v-if="post.repostCount > 0" style="margin-right: 20px;">
              <span class="post-stats-number">{{ post.repostCount }}</span>
              <span style="color: #536471;"> 转发</span>
            </span>
          </router-link>
          <a @click="openLikedUsersDialog()" class="post-stats-link">
            <span v-if="post.likeCount > 0">
              <span class="post-stats-number">{{ post.likeCount }}</span>
              <span style="color: #536471;"> 点赞</span>
            </span>
          </a>
        </div>

        <div v-if="large" class="post-actions large">
          <div class="grid m-0 w-100 h-100" style="padding: 4px;">
            <div class="col-3 p-0 flex justify-content-center align-items-center">
              <font-awesome-icon :icon="['far', 'comment']" />
            </div>
            <div class="col-3 p-0 flex justify-content-center align-items-center">
              <font-awesome-icon :icon="['fas', 'retweet']" />
            </div>
            <div class="col-3 p-0 flex justify-content-center align-items-center">
              <LikeButton :post="post" :size="40" :fontSize="20" />
            </div>
            <div class="col-3 p-0 flex justify-content-center align-items-center">
              <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" />
            </div>
          </div>
        </div>
        <div v-else-if="!embedded" class="post-actions" style="height: 34px;">
          <div class="grid m-0 w-100 h-100" style="padding-top: 6px; margin-bottom: -12px;">
            <div class="col-3 p-0 flex justify-content-start align-items-center post-action-comment">
              <IconButton :icon="['far', 'comment']" :size="36" :fontSize="18" color="rgb(83, 100, 113)" hoverColor="rgb(29, 155, 240)" activeColor="rgb(29, 155, 240)" hoverBackgroundColor="rgba(29, 155, 240, 0.1)" activeBackgroundColor="rgba(29, 155, 240, 0.2)">
                <span v-if="post.commentCount > 0" class="post-action-count">{{ post.commentCount }}</span>
              </IconButton>
            </div>
            <div class="col-3 p-0 flex justify-content-start align-items-center post-action-repost">
              <IconButton :icon="['fas', 'retweet']" :size="36" :fontSize="18" color="rgb(83, 100, 113)" hoverColor="rgb(0, 186, 124)" activeColor="rgb(0, 186, 124)" hoverBackgroundColor="rgba(0, 186, 124, 0.1)" activeBackgroundColor="rgba(0, 186, 124, 0.2)">
                <span v-if="post.repostCount > 0" class="post-action-count">{{ post.repostCount }}</span>
              </IconButton>
            </div>
            <div class="col-3 p-0 flex justify-content-start align-items-center post-action-like">
              <LikeButton :post="post" :size="36" :fontSize="18">
                <span v-if="post.likeCount > 0" class="post-action-count">{{ post.likeCount }}</span>
              </LikeButton>
            </div>
            <div class="col-3 p-0 flex justify-content-start align-items-center">
              <IconButton :icon="['fas', 'arrow-up-from-bracket']" :size="36" :fontSize="18" color="rgb(83, 100, 113)" hoverColor="rgb(29, 155, 240)" activeColor="rgb(29, 155, 240)" hoverBackgroundColor="rgba(29, 155, 240, 0.1)" activeBackgroundColor="rgba(29, 155, 240, 0.2)">
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog header="Header" v-model:visible="likedUsersDialog" :dismissableMask="true" :closable="true" :show-header="false" :draggable="false" :modal="true">
    <div class="liked-users-dialog-container" style="overflow: auto; max-height: 660px;">
      <TopBar title="点赞者" :icon="['fas', 'xmark']" :click-handler="() => likedUsersDialog = false" />
      <div id="liked-users">
        <AvatarCard v-for="likedUser in likedUsers" :key="likedUser.uid" :user="likedUser" :link="true" />
        <InfiniteLoading v-if="likedUsersDialog" :firstLoad="true" target=".liked-users-dialog-container" :likedUsers="likedUsers" @infinite="loadMoreLikedUsers" class="flex justify-content-center py-4">
          <template #complete>
            &nbsp;
          </template>
        </InfiniteLoading>
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
.post-deleted {
  background-color: rgb(247, 249, 249);
  color: #536471;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 15px;
  line-height: 20px;
}
.post-container {
  width: 100%;
  padding: 12px 16px;
}
.post-container.large {
  width: 100%;
  padding-bottom: 0;
}
.post-container.no-padding {
  padding: 0;
}
.post-container-link {
  transition: background-color 0.2s ease-out 0s;
  cursor: pointer;
}
.post-container-link:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
.post-header {
  color: #536471;
  padding-left: 30px;
  margin-top: -8px;
  margin-bottom: 4px;
}
.post-header .post-link {
  color: #536471;
  font-size: 13px;
  font-weight: bold;
}
.post-stats-link {
  color: #0f1419;
  text-decoration: none;
}
.post-stats-link:hover, .post-stats-link:active {
  text-decoration: underline;
}
.post-header.large {
  padding-top: 6px;
  padding-left: 0;
  margin-top: -16px;
  margin-bottom: 4px;
}
.post-header.embedded {
  padding-left: 0;
}
.post-username {
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: #0f1419;
}
.post-username.large {
  margin-top: -2px;
}
.post-timestamp {
  font-size: 15px;
  line-height: 20px;
  color: #536471;
}
.post-stats {
  font-size: 15px;
  line-height: 20px;
  border-top-color: rgb(239, 243, 244);
  border-top-width: 1px;
  border-top-style: solid;
  color: #536471;
}
.post-actions {
  font-size: 18px;
  color: rgb(83, 100, 113);
}
.post-actions.large {
  font-size: 20px;
  border-top-color: rgb(239, 243, 244);
  border-top-width: 1px;
  border-top-style: solid;
  border-bottom-color: rgb(239, 243, 244);
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.post-action-count {
  padding: 0 4px;
  font-size: 13px;
}
.post-stats-number {
  color: #0f1419;
  font-weight: bold;
}
.post-text {
  font-size: 15px;
  line-height: 20px;
  color: #0f1419;
  overflow-wrap: anywhere;
}
.post-text.large {
  font-size: 23px;
  line-height: 28px;
  color: #0f1419;
}
.post-single-image-container {
  width: fit-content;
}
.post-single-image-container img {
  border-color: rgb(207, 217, 222);
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  max-width: 100%;
  object-fit: cover;
}
.post-double-image-container {
  width: fit-content;
}
.post-double-image-container.left img {
  border-color: rgb(207, 217, 222);
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  max-width: 100%;
  border-right: none;
  border-radius: 16px 0 0 16px;
  width: 251px;
  height: 284px;
  object-fit: cover;
}
.post-double-image-container.right img {
  padding-left: 2px;
  border-color: rgb(207, 217, 222);
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  max-width: 100%;
  border-left: none;
  border-radius: 0 16px 16px 0;
  width: 251px;
  height: 284px;
  object-fit: cover;
}
.post-triple-image-container {
  height: 168px;
}
.post-triple-image-container.large {
  height: 188px;
}
.post-triple-image-container img {
  border-color: rgb(207, 217, 222);
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  max-width: 100%;
  width: 168px;
  height: 168px;
  object-fit: cover;
}
.post-triple-image-container.large img {
  width: 188px;
  height: 188px;
}
.post-video-container {
  border-color: rgb(207, 217, 222);
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
}
.post-column-container {
  border-color: rgb(207, 217, 222);
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
}
.post-embedded-post-container {
  border-color: rgb(207, 217, 222);
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
}
</style>
