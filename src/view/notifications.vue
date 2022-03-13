<script setup lang="ts">

import {defineExpose, onMounted, ref} from "vue";
import TopBar from './components/topBar.vue'
import PostCard from "@/view/components/postCard.vue";
import {Notification, NotificationType, ObjectIdHelper, ObjectType, Post, PostType, User} from "@/models/models";
import Avatar from "@/view/components/avatar.vue";
import PostText from "@/view/components/postText.vue";
import {useStore} from "vuex";
import {parseNotificationUser} from "@/utils/parsers";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()
const path = router.currentRoute.value.fullPath

const notifications = ref<Notification[]>([])
let loadMoreAbortController: AbortController

let likeCursor: any
let replyCursor: any
let atCursor: any
let firstLoad: boolean

const getPostTypeName = (type: PostType) => {
  switch (type) {
    case PostType.Comment: return '评论'
    case PostType.Repost: return '转发'
    case PostType.Album: return '动态'
    case PostType.Text: return '动态'
    case PostType.Video: return '视频'
    case PostType.ShortVideo: return '视频'
    case PostType.Column: return '文章'
    case PostType.Live1:
    case PostType.Live2:
      return '直播'
    default: return '动态'
  }
}

onMounted(() => refresh())

const refresh = (resetTab: boolean = true) => {
  console.log('Refreshing')

  if (resetTab) tabActiveIndex.value = 0

  likeCursor = { id: 0, time: 0, is_end: false }
  replyCursor = { id: 0, time: 0, is_end: false }
  atCursor = { id: 0, time: 0, is_end: false }
  notifications.value = []
  firstLoad = true

  loadMoreNotifications({loaded: () => {}, error: () => {}, complete: () => {}})
}

const loadMoreNotifications = async ($state: any) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  if ((tabActiveIndex.value === 1 && likeCursor.is_end)
      || (tabActiveIndex.value === 2 && replyCursor.is_end)
      || (tabActiveIndex.value === 3 && atCursor.is_end)) {
    $state.loaded()
    return
  }

  try {
    let currentNotifications = [...notifications.value]

    loadMoreAbortController?.abort()
    loadMoreAbortController = new AbortController()
    const [likeData, replyData, atData] = await Promise.all([
      likeCursor.is_end ? Promise.resolve(null) : fetch(`https://api.bilibili.com/x/msgfeed/like?id=${likeCursor.id}&like_time=${likeCursor.time}&platform=web&build=0&mobi_app=web`, {signal: loadMoreAbortController.signal}).then(res => res.json()),
      replyCursor.is_end ? Promise.resolve(null) : fetch(`https://api.bilibili.com/x/msgfeed/reply?id=${replyCursor.id}&reply_time=${replyCursor.time}&platform=web&build=0&mobi_app=web`, {signal: loadMoreAbortController.signal}).then(res => res.json()),
      atCursor.is_end ? Promise.resolve(null) : fetch(`https://api.bilibili.com/x/msgfeed/at?id=${atCursor.id}&at_time=${atCursor.time}&platform=web&build=0&mobi_app=web`, {signal: loadMoreAbortController.signal}).then(res => res.json())
    ])

    const parsePostType = (str: string) => {
      switch (str) {
        case 'video': return PostType.Video
        case 'album': return PostType.Album
        case 'article': return PostType.Column
        case 'reply': return PostType.Comment
        case 'dynamic': return PostType.Text
      }
      return null
    }
    const commentUriRegExp = new RegExp('bilibili://comment/[^/]*/([0-9]+)/([0-9]+)/([0-9]+)')
    const postIdUriRegExp = new RegExp('t.bilibili.com/([0-9]+)')
    const videoIdUriRegExp = new RegExp('bilibili.com/video/([^/]*)')
    const parsePost = (item: any, user: User, isAtData: boolean = false) => {
      const data = item.item
      const postType = parsePostType(data.type)
      if (!postType) return null
      let post: Partial<Post> = {
        user: user,
        type: postType,
        viewCount: 0,
        repostCount: 0,
        commentCount: 0,
        likeCount: 0,
        isLiked: false,

        emoticons: [],
        likedBy: [],
        repliedBy: [],
        mentions: [],
        mentionedUsers: [store.state.user],

        isAd: false
      }
      if (!isAtData) {
        post.timestamp = -1
        post.timestampLabel = ''
      } else {
        post.timestamp = item.at_time
      }

      if (post.type === PostType.Album) {
        post.text = data.desc
      } else if (post.type === PostType.Text) {
        post.text = data.title
        if (!post.text) return null // Probably deleted
      } else if (post.type === PostType.Comment) {
        if (!data.target_reply_content) data.target_reply_content = undefined
        if (!data.root_reply_content) data.root_reply_content = undefined
        if (!data.source_content) data.source_content = undefined

        const text = data.target_reply_content ?? data.root_reply_content ?? data.source_content ?? data.title ?? ''
        post.text = text.match('回复 @[^:]*:(.*)')?.[1] ?? text
      }

      if (post.type === PostType.Text) {
        post.id = data.uri.match(postIdUriRegExp)[1]
      } else if (post.type === PostType.Album) {
        if (isAtData) return null // Should be impossible
        post.album = {
          id: data.item_id ?? data.subject_id,
          images: []
        }
        post.id = ObjectIdHelper.fromAlbum(post.album)
      } else if (post.type === PostType.Video) {
        if (isAtData) {
          const id = ObjectIdHelper.fromTypeAndId(ObjectType.Video, data.uri.match(videoIdUriRegExp)[1])
          if (!id) return null
          post.id = id
          post.text = data.source_content ?? data.title
        } else {
          post.video = {
            aid: data.item_id ?? data.subject_id,
            title: data.title,
            url: data.uri,
            thumbnailUrl: data.image,
            description: data.desc.replace('\n', ' '),
            timestamp: data.ctime,
            uploader: store.state.user
          }
          post.id = ObjectIdHelper.fromVideo(post.video)
          post.text = post.video.title
        }
      } else if (post.type === PostType.Column) {
        if (isAtData) return null // Should be impossible
        post.column = {
          id: data.item_id ?? data.subject_id,
          title: data.title,
          url: data.uri,
          thumbnailUrl: data.image
        }
        post.id = ObjectIdHelper.fromColumn(post.column)
        post.text = post.column.title
      } else if (post.type === PostType.Comment) {
        const match = data.native_uri.match(commentUriRegExp)
        if (match && match.length === 4) {
          post.commentType = Number(match[1])
          post.commentObjectId = match[2]
          post.commentRootId = match[3]
          if (!isAtData) {
            post.id = (data.item_id ?? data.target_id ?? post.commentRootId).toString()
          } else {
            post.id = data.source_id.toString()
          }
          post.commentThreadId = '-1'
        }
      } else {
        return null; // Unsupported
      }
      return post
    }
    const parseComment = (data: any) => {
      let post: Partial<Post> = {
        id: data.item.source_id.toString(),
        user: parseNotificationUser(data.user),
        type: PostType.Comment,
        timestamp: data.reply_time,
        viewCount: 0,
        repostCount: 0,
        commentCount: 0,
        likeCount: 0,
        isLiked: false,

        emoticons: [],
        likedBy: [],
        repliedBy: [],
        mentions: [],
        mentionedUsers: [store.state.user],

        isAd: false,

        text: data.item.source_content
      }
      const match = data.item.native_uri.match(commentUriRegExp)
      if (match && match.length === 4) {
        post.commentType = Number(match[1])
        post.commentObjectId = match[2]
        post.commentRootId = match[3]
        post.commentThreadId = '-1'
      }
      return post
    }

    if (likeData) {
      likeCursor = likeData.data.total.cursor

      const parseParentPostId = (data: any) => {
        if (data.type !== 'reply') return null

        const postIdRegExp = new RegExp('t.bilibili.com/([0-9]+)')
        const columnIdRegExp = new RegExp('read/cv([0-9]+)')
        const videoIdRegExp = new RegExp('video/([^/]*)')
        const albumIdRegExp = new RegExp('ywh/([^/]*)')

        if (postIdRegExp.test(data.uri)) {
          return ObjectIdHelper.fromTypeAndId(ObjectType.Post, data.uri.match(postIdRegExp)[1])
        }
        if (columnIdRegExp.test(data.uri)) {
          return ObjectIdHelper.fromTypeAndId(ObjectType.Column, data.uri.match(postIdRegExp)[1])
        }
        if (videoIdRegExp.test(data.uri)) {
          return ObjectIdHelper.fromTypeAndId(ObjectType.Video, data.uri.match(videoIdRegExp)[1])
        }
        if (albumIdRegExp.test(data.uri)) {
          return ObjectIdHelper.fromTypeAndId(ObjectType.Album, data.uri.match(albumIdRegExp)[1])
        }
        return null // Should be impossible
      }
      const parseLikeItem = (item: any) => ({
        id: item.id,
        type: NotificationType.Like,
        parentPostId: parseParentPostId(item.item),
        post: parsePost(item, store.state.user),
        likeCount: item.counts,
        likedUsers: item.users.map(parseNotificationUser),
        unread: item.like_time > likeData.data.latest.last_view_at && firstLoad,
        timestamp: item.like_time
      })

      currentNotifications.push(
        ...likeData.data.latest.items.map(parseLikeItem).filter((it: any) => it.post),
        ...likeData.data.total.items.map(parseLikeItem).filter((it: any) => it.post)
      )
    }
    if (replyData) {
      replyCursor = replyData.data.cursor

      const parseParentPostId = (data: any) => {
        return ObjectIdHelper.fromTypeAndId(data.business_id, data.subject_id)
      }
      const parseReplyItem = (item: any) => ({
        id: item.id,
        type: NotificationType.Reply,
        parentPostId: parseParentPostId(item.item),
        post: parsePost(item, store.state.user),
        reply: parseComment(item),
        replyCount: item.counts,
        repliedUsers: [parseNotificationUser(item.user)],
        unread: item.reply_time > replyData.data.last_view_at && firstLoad,
        timestamp: item.reply_time
      })

      currentNotifications.push(...replyData.data.items.map(parseReplyItem).filter((it: any) => it.post))
    }
    if (atData) {
      atCursor = atData.data.cursor

      const parseParentPostId = (data: any) => {
        return ObjectIdHelper.fromTypeAndId(data.business_id, data.subject_id)
      }
      const parseAtItem = (item: any) => ({
        id: item.id,
        type: NotificationType.At,
        parentPostId: parseParentPostId(item.item),
        post: parsePost(item, parseNotificationUser(item.user), true),
        unread: item.at_time > atData.data.last_view_at && firstLoad,
        timestamp: item.at_time
      })

      currentNotifications.push(...atData.data.items.map(parseAtItem).filter((it: any) => it.post))
    }

    currentNotifications.sort((a, b) => b.timestamp - a.timestamp)
    currentNotifications.forEach(it => {
      if (it.type === NotificationType.Reply && it.reply) store.commit('cachePost', it.reply)
      if (it.type === NotificationType.At && it.post) store.commit('cachePost', it.post)
    })
    console.log(currentNotifications)
    notifications.value = currentNotifications
    if (likeCursor.is_end && replyCursor.is_end && atCursor.is_end) {
      $state.complete()
    } else {
      $state.loaded()
    }

    firstLoad = false
  } catch (e) {
    console.log(e)
    $state.error()
  }
}

const routePath = (path: string, newTab: boolean) => {
  console.log(path)
  if (newTab) window.open(router.resolve(path).href, '_blank')
  else {
    router.push(path)
    const remove = router.afterEach(() => {
      console.log('Scroll to top')
      window.scrollTo(0, 0)
      remove()
    })
  }
}

const viewPost = (noti: Notification, newTab: boolean = false) => {
  const post = noti.post
  let path
  if (noti.parentPostId && noti.parentPostId !== post.id) {
    path = `/post/${noti.parentPostId}/${post.commentType}/${post.commentObjectId}/${post.commentRootId}/${post.commentThreadId}/${post.id}`
  } else {
    path = `/post/${post.id}`
  }
  routePath(path, newTab)
}

const tabActiveIndex = ref(0)
const onTabChange = () => {
  window.scrollTo(0, 0)
  refresh(false)
}

defineExpose({ refresh })
</script>

<template>
  <div class="flex flex-column justify-content-start">
    <TopBar title="通知" :icon="null">
      <template #footer>
        <TabView lazy v-model:activeIndex="tabActiveIndex" class="space-around-tab-view" @tabChange="onTabChange">
          <TabPanel header="全部">
          </TabPanel>
          <TabPanel header="喜欢">
          </TabPanel>
          <TabPanel header="回复">
          </TabPanel>
          <TabPanel header="提及">
          </TabPanel>
        </TabView>
      </template>
    </TopBar>
    <div class="content flex flex-column justify-content-start">
      <div v-for="noti in notifications" :key="noti.id">
        <div v-if="noti.type === NotificationType.At && (tabActiveIndex === 0 || tabActiveIndex === 3)" class="bottom-separator">
          <PostCard
            :postId="noti.post.id"
            :parentPostId="noti.parentPostId"
            :backgroundColor="noti.unread ? 'rgba(251, 114, 153, 0.1)' : 'white'"
            :link="true"
          />
        </div>
        <div v-if="noti.type === NotificationType.Reply && (tabActiveIndex === 0 || tabActiveIndex === 2)">
          <div class="notification-card-container bottom-separator" @click.stop="viewPost(noti)" @click.middle.stop="viewPost(noti, true)"
            :style="{ 'background-color': noti.unread ? 'rgba(251, 114, 153, 0.1)' : 'white' }">
            <div class="flex flex-row">
              <div class="flex flex-column justify-content-start align-items-end" style="width: 48px; margin-right: 12px; font-size: 24px;">
                <font-awesome-icon :icon="['fas', 'comment']" style="color: rgb(29, 155, 240); margin-top: 3px; margin-right: 3px;" />
              </div>
              <div class="flex-1">
                <div class="flex flex-row">
                  <Avatar v-for="user in noti.repliedUsers" :key="user.uid" :user="user" :medium="true" style="margin-right: 8px;" />
                </div>
                <div style="margin-top: 12px;">
                  <div v-if="noti.replyCount === 1 && noti.repliedUsers.length === 1">
                    <span><Avatar :user="noti.repliedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 回复了你的{{
                        getPostTypeName(noti.post.type)
                      }}</span>
                  </div>
                  <div v-else-if="noti.replyCount === 2 && noti.repliedUsers.length === 2">
                    <span><Avatar :user="noti.repliedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 和 <Avatar :user="noti.repliedUsers[1]" mode="text" /> 回复了你的{{
                        getPostTypeName(noti.post.type)
                      }}</span>
                  </div>
                  <div v-else>
                    <span><Avatar :user="noti.repliedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 和另外 {{ noti.replyCount - 1 }} 人回复了你的{{
                        getPostTypeName(noti.post.type)
                      }}</span>
                  </div>
                </div>
                <div style="margin-top: 12px; color: #536471;" class="truncate-rows-2">
                  <PostText :post="noti.post" />
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-separator">
            <PostCard
              :postId="noti.reply.id"
              :parentPostId="noti.parentPostId"
              :backgroundColor="noti.unread ? 'rgba(251, 114, 153, 0.1)' : 'white'"
              :link="true"
            />
          </div>
        </div>
        <div v-if="noti.type === NotificationType.Like && (tabActiveIndex === 0 || tabActiveIndex === 1)">
          <div class="notification-card-container flex flex-row bottom-separator" @click.stop="viewPost(noti)" @click.middle.stop="viewPost(noti, true)"
               :style="{ 'background-color': noti.unread ? 'rgba(251, 114, 153, 0.1)' : 'white' }">
            <div class="flex flex-column justify-content-start align-items-end" style="width: 48px; margin-right: 12px; font-size: 24px;">
              <font-awesome-icon :icon="['fas', 'heart']" style="color: rgb(249, 24, 128); margin-top: 3px; margin-right: 3px;" />
            </div>
            <div class="flex-1">
              <div class="flex flex-row">
                <Avatar v-for="user in noti.likedUsers" :key="user.uid" :user="user" :medium="true" style="margin-right: 8px;" />
              </div>
              <div style="margin-top: 12px;">
                <div v-if="noti.likeCount === 1 && noti.likedUsers.length === 1">
                  <span><Avatar :user="noti.likedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 喜欢了你的{{ getPostTypeName(noti.post.type) }}</span>
                </div>
                <div v-else-if="noti.likeCount === 2 && noti.likedUsers.length === 2">
                  <span><Avatar :user="noti.likedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 和 <Avatar :user="noti.likedUsers[1]" mode="text" :bold="true" :prependAt="false" /> 喜欢了你的{{ getPostTypeName(noti.post.type) }}</span>
                </div>
                <div v-else>
                  <span><Avatar :user="noti.likedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 和另外 {{noti.likeCount - 1}} 人喜欢了你的{{ getPostTypeName(noti.post.type) }}</span>
                </div>
              </div>
              <div style="margin-top: 12px; color: #536471;" class="truncate-rows-2">
                <PostText :post="noti.post" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfiniteLoading :firstLoad="false" @infinite="loadMoreNotifications" class="flex justify-content-center py-4">
        <template #complete>
          &nbsp;
        </template>
      </InfiniteLoading>
    </div>
  </div>
</template>

<style>
.content {
  width: 100%;
}
.notification-card-container {
  padding: 12px 16px;
  transition: background-color 0.2s ease-out 0s;
  cursor: pointer;
  font-size: 15px;
  color: #0f1419;
}
.notification-card-container:hover {
  background-color: rgba(0, 0, 0, 0.03) !important;
}
.notification-card-container:active {
  background-color: rgba(0, 0, 0, 0.07) !important;
}
</style>
