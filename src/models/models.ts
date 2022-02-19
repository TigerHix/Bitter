export interface Post {
    id: string
    user: User
    type: PostType

    timestamp: number
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

    commentType?: CommentSectionType // type == Comment
    commentObjectId?: string
    commentRootId?: string
    commentThreadId?: string
    
    isPinned?: boolean
}

export interface Emoticon {
    name: string,
    text: string,
    url: string
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
    cid: number

    title: string
    url: string
    description: string
    timestamp: number
    
    danmakuCount: number
    viewCount: number
    coinCount: number
    commentCount: number
    likeCount: number
    favoriteCount: number
    shareCount: number

    uploader: User
    thumbnailUrl: string
    duration: number
}

export interface PostColumn {
    id: number

    title: string
    url: string
    thumbnailUrl: string

    viewCount: number
    coinCount: number
    commentCount: number
    likeCount: number
    favoriteCount: number
    shareCount: number
}

export interface CommentSection {
    cursor: any // This is such a weird object...

    sort: CommentSectionSort
    availableSorts: CommentSectionSort[]

    comments: Post[]
}

export enum CommentSectionType {
    Video = 1,
    ShortVideo = 5,
    Live = 8,
    Album = 11,
    Column = 12,
    Post = 17
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
    followedBy?: boolean
    specialFollowedBy?: boolean

    followerCount?: number
    followingCount?: number

    coverUrl?: string
}

export enum PostType {
    Comment = -1,
    Repost = 1, 
    Album = 2, 
    Text = 4,
    Video = 8,
    ShortVideo = 16,
    Column = 64,
    Live = 4308 // or 4201
}