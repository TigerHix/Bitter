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

    commentType: CommentSectionType // type == Comment
    commentObjectId: string
    commentRootId?: string
    commentThreadId?: string
    
    isPinned?: boolean
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

export enum CommentSectionType {
    Video = 1,
    ShortVideo = 5,
    Live = 8,
    Album = 11,
    Column = 12,
    Post = 17
}

export const toCommentSectionType = (postType: PostType): CommentSectionType => {
    switch (postType) {
        case PostType.Comment:
            throw new Error('This should not happen!')
        case PostType.Repost: return CommentSectionType.Post
        case PostType.Album: return CommentSectionType.Album
        case PostType.Text: return CommentSectionType.Post
        case PostType.Video: return CommentSectionType.Video
        case PostType.ShortVideo: return CommentSectionType.ShortVideo
        case PostType.Column: return CommentSectionType.Column
        case PostType.Live1: case PostType.Live2: return CommentSectionType.Live
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

    likedPost: Post
    likeCount: number
    likedUsers: User[]

    repliedPostId: string
    replyRoot?: Post
    reply?: Post
    replyCount: number
    repliedUsers: User[]

    unread: boolean
}
