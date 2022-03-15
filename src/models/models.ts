import {fetchUser} from "@/utils/webRequests";

export interface Post {
  id: string
  user: User
  type: PostType

  timestamp: number
  timestampLabel?: string
  viewCount: number
  repostCount: number
  commentCount: number
  likeCount: number

  isLiked: boolean

  text: string
  album?: PostAlbum
  video?: PostVideo
  column?: PostColumn

  emoticons: Emoticon[]
  likedBy: User[]
  repliedBy: User[]
  mentions: PostMention[]
  mentionedUsers: User[]

  sourcePostId?: string
  sourcePostDeleted?: boolean
  chainedPosts?: Post[]

  isAd: boolean

  commentType: ObjectType // type == Comment
  commentObjectId: string
  commentRootId?: string
  commentThreadId?: string

  isPinned?: boolean
  headerMessage?: string
}

export interface Emoticon {
  name: string
  text: string
  url: string
  isText?: boolean
}

export interface EmoticonPackage {
  id: number
  name: string
  iconUrl: string
  emoticons: Emoticon[]
  large: boolean
}

export interface PostMention {
  location: number,
  length: number,
  data: string
}

export interface PostAlbum {
  id: number
  images: PostImage[]
}

export interface PostImage {
  width: number,
  height: number,
  url: string
}

export interface PostVideo {
  aid: number
  cid?: number

  title: string
  url: string
  thumbnailUrl: string
  duration?: number

  uploader?: User

  description?: string
  timestamp?: number

  danmakuCount?: number
  viewCount?: number
  coinCount?: number
  commentCount?: number
  likeCount?: number
  favoriteCount?: number
  shareCount?: number
}

export interface PostColumn {
  id: number

  title: string
  url: string
  thumbnailUrl: string

  viewCount?: number
  coinCount?: number
  commentCount?: number
  likeCount?: number
  favoriteCount?: number
  shareCount?: number
}

export enum PostType {
  Comment = -1,
  Repost = 1,
  Album = 2,
  Text = 4,
  Video = 8,
  ShortVideo = 16,
  Column = 64,
  Live1 = 4201,
  Live2 = 4308 // or 4201
}

export interface CommentSection {
  cursor: any // This is such a weird object...

  sort: CommentSectionSort
  availableSorts: CommentSectionSort[]

  comments: Post[]
}

export enum ObjectType {
  Video = 1,
  ShortVideo = 5,
  Live = 8,
  Album = 11,
  Column = 12,
  Post = 17
}

export const toObjectType = (postType: PostType): ObjectType => {
  switch (postType) {
    case PostType.Comment:
      throw new Error('This should not happen!')
    case PostType.Repost: return ObjectType.Post
    case PostType.Album: return ObjectType.Album
    case PostType.Text: return ObjectType.Post
    case PostType.Video: return ObjectType.Video
    case PostType.ShortVideo: return ObjectType.ShortVideo
    case PostType.Column: return ObjectType.Column
    case PostType.Live1: case PostType.Live2: return ObjectType.Live
  }
}

export enum CommentSectionSort {
  Date = 2,
  Hot = 3,
  Both = 1
}

export interface User {
  uid: number
  name: string
  avatarUrl?: string

  bio?: string
  following?: boolean
  secretFollowing?: boolean
  followedBy?: boolean
  specialFollowedBy?: boolean

  followerCount?: number
  followingCount?: number

  coverUrl?: string

  // Me only
  followingGroups?: FollowingGroup[]
  registrationTimestamp?: number
}

export interface FollowingGroup {
  default: boolean

  id: string
  name: string
  count: number
  users: Map<number, User>
}

export interface Topic {
  id: number
  name: string
  description: number
  viewCount: number
  postCount: number
  type: string
}

export enum NotificationType {
  Like, Reply, At
}

export interface Notification {
  id: number
  timestamp: number
  type: NotificationType

  parentPostId: string // Only if liked post or replied post is comment
  post: Post

  likeCount: number
  likedUsers: User[]
  reply: Post
  replyCount: number
  repliedUsers: User[]

  unread: boolean
}

export class ObjectIdHelper {
  static fromAlbum(album: PostAlbum) {
    return 'a' + album.id
  }
  static fromVideo(video: PostVideo) {
    return 'v' + video.aid
  }
  static fromColumn(column: PostColumn) {
    return 'c' + column.id
  }
  static fromTypeAndId(type: ObjectType, id: string | number) {
    switch (type) {
      case ObjectType.Video: return 'v' + id
      case ObjectType.Album: return 'a' + id
      case ObjectType.Column: return 'c' + id
      case ObjectType.Post: return id.toString()
    }
    return null
  }
  static isPostId(id: string) {
    return id[0] >= '0' && id[0] <= '9'
  }
  static fetchContext(id: string): Promise<Post | null> {
    if (this.isPostId(id)) return Promise.resolve(null)
    if (id.startsWith('v')) {
      return fetch(
        id[1] == 'B'
          ? `https://api.bilibili.com/x/web-interface/view?bvid=${id.slice(1)}`
          : `https://api.bilibili.com/x/web-interface/view?aid=${id.slice(1)}`
      )
        .then(res => res.json())
        .then((data: any) => data.data)
        .then((data: any) => ({
          id: id,
          user: {
            uid: data.owner.mid,
            name: data.owner.name,
            avatarUrl: data.owner.face
          },
          type: PostType.Video,
          timestamp: data.ctime,
          viewCount: data.stat.view,
          repostCount: data.stat.share,
          commentCount: data.stat.reply,
          likeCount: data.stat.like,
          isLiked: false,
          text: data.desc,
          video: {
            aid: Number(data.aid),
            title: data.title,
            url: 'https://www.bilibili.com/video/' + data.bvid,
            thumbnailUrl: data.pic,
            uploader: {
              uid: data.owner.mid,
              name: data.owner.name,
              avatarUrl: data.owner.face
            }
          },
          emoticons: [],
          likedBy: [],
          repliedBy: [],
          mentions: [],
          mentionedUsers: [],
          isAd: false,
          commentType: ObjectType.Video,
          commentObjectId: data.aid
        }))
    } else if (id.startsWith('c')) {
      let post: Post
      return fetch(`https://api.bilibili.com/x/article/viewinfo?id=${id.slice(1)}`)
        .then(res => res.json())
        .then((data: any) => data.data)
        .then((data: any) => {
          post = {
            id: id,
            user: {
              uid: data.mid,
              name: data.author_name,
              avatarUrl: '' // Fetched below
            },
            type: PostType.Column,
            timestamp: 0,
            timestampLabel: '',
            viewCount: data.stats.view,
            repostCount: data.stats.share,
            commentCount: data.stats.reply,
            likeCount: data.stats.like,
            isLiked: data.like > 0,
            text: data.title,
            column: {
              id: Number(id.slice(1)),
              title: data.title,
              url: 'https://www.bilibili.com/read/cv' + id.slice(1),
              thumbnailUrl: data.image_urls[0]
            },
            emoticons: [],
            likedBy: [],
            repliedBy: [],
            mentions: [],
            mentionedUsers: [],
            isAd: false,
            commentType: ObjectType.Column,
            commentObjectId: id.slice(1)
          }
          return fetchUser(post.user.uid)
        })
        .then((user) => {
          post.user = user
          return post
        })
    } else if (id.startsWith('a')) {
      return fetch(`https://api.vc.bilibili.com/link_draw/v1/doc/detail?doc_id=${id.slice(1)}`)
        .then(res => res.json())
        .then((data: any) => data.data)
        .then((data: any) => ({
          id: id,
          user: {
            uid: data.user.uid,
            name: data.user.name,
            avatarUrl: data.user.head_url
          },
          type: PostType.Album,
          timestamp: data.item.upload_timestamp,
          viewCount: data.item.view_count,
          repostCount: 0,
          commentCount: data.item.comment_count,
          likeCount: data.item.vote_count,
          isLiked: data.item.already_voted,
          text: data.item.description,
          album: {
            id: data.item.doc_id,
            images: data.item.pictures.map((it: any) => ({
              width: it.img_width,
              height: it.img_height,
              url: it.img_src
            }))
          },
          emoticons: [],
          likedBy: [],
          repliedBy: [],
          mentions: [],
          mentionedUsers: [],
          isAd: false,
          commentType: ObjectType.Album,
          commentObjectId: data.item.doc_id
        }))
    }
    return Promise.resolve(null)
  }
}
