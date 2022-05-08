import {ObjectIdHelper, Post, User} from "@/models/models";
import {parsePost} from "@/utils/parsers";
import {Store} from "vuex";
const limit = require('simple-rate-limiter')

export const fetchAndCachePost = (store: Store<any>, postId: string, update: boolean = true): Promise<Post | null> => {
  const cachedPost = store.getters.getCachedPost(postId)
  if (!update && cachedPost) {
    return Promise.resolve(cachedPost)
  } else {
    let promise
    if (!ObjectIdHelper.isPostId(postId)) {
      promise = ObjectIdHelper.fetchContext(postId)
        .then(post => {
          if (!post) return null
          console.log('Comment context: ')
          console.log(post)
          post.mentionedUsers.push(store.state.user)
          store.commit('cachePost', post)
          return post
        })
    } else {
      promise = fetchDynamicDetail(postId)
        .then((data: any) => {
          console.log('Fetched data:')
          console.log(data)
          if (!data.data.card) return null
          const post = parsePost(data.data.card)
          post.mentionedUsers.push(store.state.user)
          console.log('Converted to post:')
          console.log(post)
          store.commit('cachePost', post)
          return post
        })
    }
    if (cachedPost) {
      // Return the cached copy - post updated in the background
      return Promise.resolve(cachedPost)
    }
    return promise
  }
}

export const fetchUser = (mid: number): Promise<User> => Promise.all([
    fetch(`https://api.bilibili.com/x/web-interface/card?mid=${mid}&photo=1`).then((res) => res.json()),
    fetch(`https://api.bilibili.com/x/space/acc/relation?mid=${mid}`).then((res) => res.json())
  ])
  .then(([card, relation]) => ({
    uid: Number(card.data.card.mid),
    name: card.data.card.name,
    avatarUrl: card.data.card.face,

    bio: card.data.card.sign,
    following: relation.data.relation.attribute === 2 || relation.data.relation.attribute === 6,
    secretFollowing: relation.data.relation.attribute === 1,
    followedBy: relation.data.be_relation.attribute === 1 || relation.data.be_relation.attribute === 2 || relation.data.be_relation.attribute === 6,
    specialFollowedBy: relation.data.be_relation.special === 1,

    followerCount: card.data.card.fans,
    followingCount: card.data.card.attention,

    coverUrl: card.data.space.l_img ?? card.data.space.s_img
  }))

const fetchDynamicDetailRateLimiter = limit((dynamicId: string, callback: any): any => {
  fetch(`https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/get_dynamic_detail?dynamic_id=${dynamicId}`)
    .then((res) => res.json())
    .then((data) => callback(data))
}).to(1).per(500)

export const fetchDynamicDetail = (postId: string): Promise<any> => new Promise((resolve) => fetchDynamicDetailRateLimiter(postId, (data: any) => resolve(data)))
