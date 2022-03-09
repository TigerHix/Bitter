import {User} from "@/models/models";

const limit = require('simple-rate-limiter')
const promisify = require('util').promisify

export const fetchUser = (mid: number): Promise<User> => Promise.all([
    fetch(`https://api.bilibili.com/x/web-interface/card?mid=${mid}&photo=1`).then((res) => res.json()),
    fetch(`https://api.bilibili.com/x/space/acc/relation?mid=${mid}`).then((res) => res.json())
  ])
  .then(([card, relation]) => ({
    uid: card.data.card.mid,
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
