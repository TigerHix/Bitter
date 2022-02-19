<script setup lang="ts">
import { CommentSection, Post } from "./../models/models";
import { defineProps, PropType, ref, nextTick, computed } from "vue";
import { parseComment, parseCommentSection, parseCommentSectionByTypeAndObjectId, parsePost } from "../utils/parsers";
import PostCard from "./components/postCard.vue";
import TopBar from "./components/topBar.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const path = router.currentRoute.value.fullPath

const props = defineProps({ 
  type: { type: Number, required: true },
  objectId: { type: String, required: true },
  rootId: { type: String, required: true },
  postId: { type: String, required: true },
  postObject: { type: Object as PropType<Post>, required: false, default: null },
  targetId: { type: String, required: false, default: -1 },
  targetObject: { type: Object as PropType<Post>, required: false, default: null },
  threadId: { type: String, required: false, default: -1 }
});

const commentSection = ref<CommentSection>(null)
const abovePosts = ref<Post[]>([])
const mainPost = ref<Post>()
const belowPosts = ref<Post[]>([])

const loaded = ref(false)
const mainPostDiv = ref(null)

const containerHeightPixels = ref(0)
const containerHeight = computed(() => containerHeightPixels.value + 'px')

// Thread ID is given -> Show thread context
// Target ID is given -> Locate target, or show root

fetch(`https://api.bilibili.com/x/v2/reply/detail?type=${props.type}&oid=${props.objectId}&root=${props.targetId}`)
  .then((res) => res.json())
  .then((data) => {
    commentSection.value = parseCommentSectionByTypeAndObjectId(data.data, props.type, props.objectId)
    mainPost.value = commentSection.value.comments[0]
    belowPosts.value = commentSection.value.comments.slice(1)
    if (props.postObject) {
      return Promise.resolve(props.postObject)
    } else {
      return fetch(`https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/get_dynamic_detail?dynamic_id=${props.postId}`)
        .then((res) => res.json())
        .then((data) => {
          return Promise.resolve(parsePost(data.data.card))
        });
    }
  })
  .then((postObject) => {
    abovePosts.value.push(postObject)
    // Load root comment
    if (!props.rootId || props.rootId === props.targetId) {
      return Promise.resolve(null)
    } else {
      return fetch(`https://api.bilibili.com/x/v2/reply/detail?type=${props.type}&oid=${props.objectId}&root=${props.rootId}`)
        .then((res) => res.json())
        .then((data) => {
          return Promise.resolve(parseComment(data.data.root, props.type, props.objectId))
        });
    }
  })
  .then((rootCommentObject) => {
    if (rootCommentObject) {
      abovePosts.value.push(rootCommentObject)
    }
    if (props.threadId !== '0') {
      // Load up the entire thread
      return fetch(`http://api.bilibili.com/x/v2/reply/dialog/cursor?type=${props.type}&oid=${props.objectId}&root=${props.rootId}&dialog=${props.threadId}&size=9999`)
          .then((res) => res.json())
          .then((data) => {
            return Promise.resolve(parseCommentSection(data.data, abovePosts.value[0]))
          });
    } else {
      return Promise.resolve(null)
    }
  })
  .then((threadObject?: CommentSection) => {
    if (threadObject) {
      belowPosts.value = []

      let addBelow = false
      for (let comment of threadObject.comments) {
        if (addBelow) {
          belowPosts.value.push(comment)
        } else if (comment.id !== props.targetId) {
          abovePosts.value.push(comment)
        }
        if (comment.id === props.targetId) {
          addBelow = true
        }
      }
    }

    // Done
    loaded.value = true
    nextTick(() => {
      containerHeightPixels.value = mainPostDiv.value.offsetTop - 53 * 2 + window.innerHeight
      console.log(mainPostDiv.value.offsetTop - 53)
      nextTick(() => {
        window.scrollTo(0, mainPostDiv.value.offsetTop - 53) // TODO: Change hardcode?
      })
    })
  })

const loadMoreComments = async $state => {
  if (router.currentRoute.value.fullPath != path) {
    $state.loaded()
    return;
  }

  console.log("Loading more comments");
  console.log(commentSection.value)
  try {
    const response = await fetch(
      `https://api.bilibili.com/x/v2/reply/detail?type=${props.type}&oid=${props.objectId}&root=${props.targetId}&next=${commentSection.value.cursor.next}`
    );
    const data = await response.json()
    if (data.code != 0) {
      console.log('Error!')
      console.log(data)
      $state.error()
    } else {
      commentSection.value = parseCommentSectionByTypeAndObjectId(data.data, props.type, props.objectId)
      console.log(commentSection.value)
      belowPosts.value.push(...commentSection.value.comments.slice(1))
      if (commentSection.value.comments.length > 1) {
        $state.loaded();
      } else {
        $state.complete()
      }
    }
  } catch (error) {
    $state.error()
  }
};

</script>

<template>
  <div class="flex flex-column">
    <TopBar title="评论" />
    <div class="comment-page-container flex flex-column">
      <div v-show="loaded">
        <ul class="post-ul">
          <li v-for="post in abovePosts" :key="post.id" class="post-li">
            <PostCard :postObject="post" :link="true" /> 
          </li>
          <li ref="mainPostDiv" class="post-li">
            <PostCard :postObject="mainPost" :large="true" /> 
          </li>
        </ul>
        <div v-if="belowPosts">
          <ul class="post-ul">
            <li v-for="post in belowPosts" :key="post.id" class="post-li">
              <PostCard :postObject="post" :link="true" /> 
            </li>
          </ul>
          <InfiniteLoading v-if="loaded" :belowPosts="belowPosts" @infinite="loadMoreComments" class="flex justify-content-center py-4">
            <template #complete>
              &nbsp;
            </template>
          </InfiniteLoading>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment-page-container {
  min-height: v-bind(containerHeight);
}
</style>