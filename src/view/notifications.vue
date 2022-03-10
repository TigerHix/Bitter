<script setup lang="ts">

import {ref} from "vue";
import TopBar from './components/topBar.vue'
import PostCard from "@/view/components/postCard.vue";
import {Notification, NotificationType, Post, PostType} from "@/models/models";
import Avatar from "@/view/components/avatar.vue";
import PostText from "@/view/components/postText.vue";
import {useStore} from "vuex";
import {parseNotificationUser} from "@/utils/parsers";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()
const path = router.currentRoute.value.fullPath

const notifications = ref<Notification[]>([])

let likeCursor: any = { id: 0, time: 0, is_end: false }
let replyCursor: any = { id: 0, time: 0, is_end: false }
let atCursor: any = { id: 0, time: 0, is_end: false }

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

const loadMoreNotifications = async ($state: any) => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  try {
    let [likeData, replyData, atData] = await Promise.all([
      likeCursor.is_end ? Promise.resolve(null) : fetch(`https://api.bilibili.com/x/msgfeed/like?id=${likeCursor.id}&like_time=${likeCursor.time}&platform=web&build=0&mobi_app=web`).then(res => res.json()),
      replyCursor.is_end ? Promise.resolve(null) : fetch(`https://api.bilibili.com/x/msgfeed/reply?id=${replyCursor.id}&reply_time=${replyCursor.time}&platform=web&build=0&mobi_app=web`).then(res => res.json()),
      atCursor.is_end ? Promise.resolve(null) : fetch(`https://api.bilibili.com/x/msgfeed/at?id=${atCursor.id}&at_time=${atCursor.time}&platform=web&build=0&mobi_app=web`).then(res => res.json())
    ])

    const currentNotifications = [...notifications.value]

    const parsePostType = (str: string) => {
      switch (str) {
        case 'video': return PostType.Video
        case 'album': return PostType.Album
        case 'article': return PostType.Column
        case 'reply': return PostType.Comment
        default: return PostType.Text
      }
    }
    const postIdRegExp = new RegExp('https://t.bilibili.com/([0-9]+)')
    const commentUriRegExp = new RegExp('bilibili://comment/[^/]*/([0-9]+)/([0-9]+)/([0-9]+)')
    const parsePost = (data: any) => {
      let post: Partial<Post> = {
        id: data.uri.match(postIdRegExp)?.[1],
        user: store.state.user,
        type: parsePostType(data.type),
        timestamp: -1,
        timestampLabel: '',
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
      if (post.type === PostType.Album) {
        post.text = data.desc
      } else if (post.type === PostType.Text) {
        post.text = data.title
      } else if (post.type === PostType.Comment) {
        const text = data.target_reply_content ?? data.title ?? ''
        post.text = text.match('回复 @[^:]*:(.*)')?.[1] ?? text
      }
      if (post.type === PostType.Album) {
        // Let's not show the album - only 1 image is provided
      } else if (post.type === PostType.Video) {
        post.video = {
          aid: data.item_id,
          title: data.title,
          url: data.uri,
          thumbnailUrl: data.image,
          description: data.desc.replace('\n', ' '),
          timestamp: data.ctime,
          uploader: store.state.user
        }
        post.text = post.video.title
      } else if (post.type === PostType.Column) {
        post.column = {
          id: data.item_id,
          title: data.title,
          url: data.uri,
          thumbnailUrl: data.image
        }
        post.text = post.column.title
      } else if (post.type === PostType.Comment) {
        const match = data.native_uri.match(commentUriRegExp)
        if (match && match.length === 4) {
          post.commentType = Number(match[1])
          post.commentObjectId = match[2]
          post.commentRootId = match[3]
          post.commentThreadId = data.target_id ?? '0'
          post.id = post.commentRootId
        }
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
        post.commentThreadId = data.item.target_id ?? '0'
      }
      return post
    }

    if (likeData) {
      likeCursor = likeData.data.total.cursor
      const parseLikeItem = (item: any) => ({
        id: item.id,
        type: NotificationType.Like,
        likedPost: parsePost(item.item),
        likeCount: item.counts,
        likedUsers: item.users.map(parseNotificationUser),
        unread: item.like_time > likeData.data.latest.last_view_at,
        timestamp: item.like_time
      })

      currentNotifications.push(...likeData.data.latest.items.map(parseLikeItem), ...likeData.data.total.items.map(parseLikeItem))
    }
    if (replyData) {
      replyCursor = replyData.data.cursor
      const parseReplyItem = (item: any) => ({
        id: item.id,
        type: NotificationType.Reply,
        repliedPostId: item.item.uri.match(postIdRegExp)?.[1], // TODO
        replyRoot: parsePost(item.item),
        reply: parseComment(item),
        replyCount: item.counts,
        repliedUsers: [parseNotificationUser(item.user)],
        unread: item.reply_time > replyData.data.last_view_at,
        timestamp: item.reply_time
      })

      currentNotifications.push(...replyData.data.items.map(parseReplyItem))
    }
    if (atData) {
      atCursor = atData.data.cursor
    }

    currentNotifications.sort((a, b) => b.timestamp - a.timestamp)
    currentNotifications.forEach(it => {
      if (it.reply) store.commit('cachePost', it.reply)
    })
    console.log(currentNotifications)
    notifications.value = currentNotifications
    if (likeCursor.is_end && replyCursor.is_end && atCursor.is_end) {
      $state.complete()
    } else {
      $state.loaded()
    }
  } catch (e) {
    console.log(e)
    $state.error()
  }
}

const onLink = (post: Post, postId: string, newTab: boolean = false) => {
  let path
  if (post.type == PostType.Comment) {
    path = `/post/${postId}/${post.commentType}/${post.commentObjectId}/${post.commentRootId}/${post.commentThreadId}/${post.commentRootId}`
  } else {
    path = `/post/${postId}`
  }
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

</script>

<template>
  <div class="flex flex-column justify-content-start">
    <TopBar title="通知" :icon="null" />
    <div class="content flex flex-column justify-content-start">
      <div v-for="noti in notifications" :key="noti.id">
        <PostCard
          v-if="noti.type === NotificationType.At"
          :postId="noti.post.id"
          :resolvePostId="false"
          />
        <div v-if="noti.type === NotificationType.Reply">
          <div class="notification-card-container bottom-separator" @click.stop="onLink(noti.replyRoot, noti.repliedPostId)" @click.middle.stop="onLink(noti.replyRoot, noti.repliedPostId, true)">
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
                    <span><Avatar :user="noti.repliedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 回复了你的{{ getPostTypeName(noti.replyRoot.type) }}</span>
                  </div>
                  <div v-else-if="noti.replyCount === 2 && noti.repliedUsers.length === 2">
                    <span><Avatar :user="noti.repliedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 和 <Avatar :user="noti.repliedUsers[1]" mode="text" /> 回复了你的{{ getPostTypeName(noti.replyRoot.type) }}</span>
                  </div>
                  <div v-else>
                    <span><Avatar :user="noti.repliedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 和另外 {{noti.replyCount - 1}} 人回复了你的{{ getPostTypeName(noti.replyRoot.type) }}</span>
                  </div>
                </div>
                <div style="margin-top: 12px; color: #536471;">
                  <PostText :post="noti.replyRoot" :truncate="true" />
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-separator">
            <PostCard
              :postId="noti.reply.id"
              :parentPostId="noti.repliedPostId"
              :resolvePostId="false"
              :link="true"
            />
          </div>
        </div>
        <div v-if="noti.type === NotificationType.Like" >
          <div class="notification-card-container flex flex-row bottom-separator" @click.stop="onLink(noti.likedPost, noti.likedPost.id)" @click.middle.stop="onLink(noti.likedPost, noti.likedPost.id, true)">
            <div class="flex flex-column justify-content-start align-items-end" style="width: 48px; margin-right: 12px; font-size: 24px;">
              <font-awesome-icon :icon="['fas', 'heart']" style="color: rgb(249, 24, 128); margin-top: 3px; margin-right: 3px;" />
            </div>
            <div class="flex-1">
              <div class="flex flex-row">
                <Avatar v-for="user in noti.likedUsers" :key="user.uid" :user="user" :medium="true" style="margin-right: 8px;" />
              </div>
              <div style="margin-top: 12px;">
                <div v-if="noti.likeCount === 1 && noti.likedUsers.length === 1">
                  <span><Avatar :user="noti.likedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 喜欢了你的{{ getPostTypeName(noti.likedPost.type) }}</span>
                </div>
                <div v-else-if="noti.likeCount === 2 && noti.likedUsers.length === 2">
                  <span><Avatar :user="noti.likedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 和 <Avatar :user="noti.likedUsers[1]" mode="text" /> 喜欢了你的{{ getPostTypeName(noti.likedPost.type) }}</span>
                </div>
                <div v-else>
                  <span><Avatar :user="noti.likedUsers[0]" mode="text" :bold="true" :prependAt="false" /> 和另外 {{noti.likeCount - 1}} 人喜欢了你的{{ getPostTypeName(noti.likedPost.type) }}</span>
                </div>
              </div>
              <div style="margin-top: 12px; color: #536471;">
                <PostText :post="noti.likedPost" :truncate="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfiniteLoading @infinite="loadMoreNotifications" :firstLoad="true" class="flex justify-content-center py-4">
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
  background-color: rgba(0, 0, 0, 0.03);
}
.notification-card-container:active {
  background-color: rgba(0, 0, 0, 0.07);
}
</style>
