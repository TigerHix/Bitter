import {
  CommentSection,
  ObjectType,
  Emoticon,
  Post,
  PostType,
  toObjectType, Topic,
  User
} from "@/models/models";

export const parseAndFilterPosts = (data: any) => {
  return data
    .filter((it: any) => it.desc.user_profile) // Example: Bangumi update
    .map(parsePost)
    .filter((it: Post) => it.type <= PostType.Column && !it.isAd);
}

export const parseCommentTypeAndObjectId = (post: Post): [ObjectType, any] => {
  let type = ObjectType.Post
  let oid: any = post.id
  switch (post.type) {
      case PostType.Album:
          type = ObjectType.Album
          oid = post.album?.id
          break
      case PostType.Video:
          type = ObjectType.Video
          oid = post.video?.aid
          break
      case PostType.ShortVideo:
          type = ObjectType.ShortVideo
          oid = post.video?.aid
          break
      case PostType.Column:
          type = ObjectType.Column
          oid = post.column?.id
          break
  }
  return [type, oid]
}

export const parseCommentSection = (data: any, post: Post): CommentSection => {
  const [commentType, commentObjectId] = parseCommentTypeAndObjectId(post)
  return {
    cursor: data.cursor,

    sort: data.cursor?.mode,
    availableSorts: data.cursor.support_mode ?? (data.cursor ? [data.cursor.mode] : []),

    comments: (data.replies ?? (data.root ? (data.root.replies ? [data.root, ...data.root.replies] : [data.root]) : [])).map((it: any) => parseComment(it, commentType, commentObjectId)),
  }
}

export const parseCommentSectionByTypeAndObjectId = (data: any, type: ObjectType, objectId: string): CommentSection => {
  return {
    cursor: data.cursor,

    sort: data.cursor?.mode,
    availableSorts: data.cursor.support_mode ?? (data.cursor ? [data.cursor.mode] : []),

    comments: (data.replies ?? (data.root ? (data.root.replies ? [data.root, ...data.root.replies] : [data.root]) : [])).map((it: any) => parseComment(it, type, objectId)),
  }
}

export const parseComment = (data: any, type: ObjectType, objectId: string): Post => {
  return {
    id: data.rpid_str,
    user: {
      uid: data.member.mid,
      name: data.member.uname,
      avatarUrl: data.member.avatar
    },
    type: PostType.Comment,

    timestamp: data.ctime,
    viewCount: 0,
    repostCount: 0,
    commentCount: data.rcount,
    likeCount: data.like,

    isLiked: data.action === 1,

    text: data.content.message,

    emoticons: parseCommentEmoticonDict(data.content.emote),
    likedBy: [],
    repliedBy: [],
    mentions: [],
    mentionedUsers: data.content.members.map((it: any) => { return { uid: it.mid, name: it.uname, avatarUrl: it.avatar }}),

    chainedPosts: data.replies?.map((it: any) => parseComment(it, type, objectId)),

    isAd: false,

    commentType: type,
    commentObjectId: objectId,
    commentRootId: data.root === 0 ? data.rpid_str : data.root.toString(),
    commentThreadId: data.dialog.toString()
  }
}

const parseCommentEmoticonDict = (dict: any) => {
  if (!dict) return []
  const emoticons: Emoticon[] = []
  Object.entries<any>(dict).forEach(
    ([key, value]) => emoticons.push({ name: key, text: value.text, url: value.url })
  );
  return emoticons
}

export const parseColumn = (data: any) => {
  return {
    id: data.id,

    title: data.title,
    url: 'https://www.bilibili.com/read/cv' + data.id,
    thumbnailUrl: data.image_urls[0],

    viewCount: data.stats.view,
    coinCount: data.stats.coin,
    commentCount: data.stats.reply,
    likeCount: data.stats.like,
    favoriteCount: data.stats.favorite,
    shareCount: data.stats.share,
  }
}

export const parseVideo = (data: any) => {
  return {
    aid: data.aid,
    cid: data.cid,

    title: data.title,
    url: data.short_link_v2,
    description: data.desc,
    timestamp: data.pubdate,

    danmakuCount: data.stat.danmaku,
    viewCount: data.stat.view,
    coinCount: data.stat.coin,
    commentCount: data.stat.reply,
    likeCount: data.stat.like,
    favoriteCount: data.stat.favorite,
    shareCount: data.stat.share,

    uploader: {
      uid: data.owner.mid,
      name: data.owner.name,
      avatarUrl: data.owner.face
    },
    thumbnailUrl: data.pic,
    duration: data.duration
  }
}

export const parsePost = (data: any): Post => {
  const card = JSON.parse(data.card)
  const extend = JSON.parse(data.extend_json)
  const type = data.desc.type
  const post: Post = {
    id: data.desc.dynamic_id_str,

    user: parseUser(data.desc.user_profile),
    type: type,

    timestamp: data.desc.timestamp,
    viewCount: data.desc.view,
    repostCount: data.desc.repost,
    commentCount: data.desc.comment,
    likeCount: data.desc.like,

    isLiked: data.desc.is_liked,

    text: card.item?.content,

    emoticons: data.display?.emoji_info?.emoji_details?.map(parseEmoticon) ?? [],
    likedBy: data.display?.like_info?.like_users?.map((it: any) => ({ uid: it.uid, name: it.uname })) ?? [],
    repliedBy: [],

    mentions: card.item?.at_control ? JSON.parse(card.item.at_control) : (card.item?.ctrl ? JSON.parse(card.item.ctrl) : []),
    mentionedUsers: [],

    sourcePostId: data.desc.orig_dy_id_str != '0' ? data.desc.orig_dy_id_str : null,

    isAd: data.display?.add_on_card_info?.at(0)?.goods_card,

    commentType: toObjectType(type),
    commentObjectId: toObjectType(type) === ObjectType.Post ? data.desc.dynamic_id_str : data.desc.rid_str,

    isPinned: data.extra?.is_space_top === 1,
    headerMessage: extend.dispute?.content ?? null
  };

  if (type == PostType.Album) {
    post.text = card.item.description
    post.album = { id: card.item.id, images: card.item.pictures.map(parseImage) }
  } else if (type == PostType.Video) {
    post.video = parseVideo(card)
    if (post.video.commentCount) post.commentCount = post.video.commentCount
    if (post.sourcePostId) {
      // Replace with quote text
      post.text = card.dynamic
    }
  } else if (type == PostType.Column) {
    post.column = parseColumn(card)
    if (post.column.commentCount) post.commentCount = post.column.commentCount
  }

  // console.log(post.user.name + ": " + post.text)
  // console.log(data)

  return post;
};

export const parseTopic = (data: any): Topic => {
  return {
    id: data.id,
    name: data.name,
    viewCount: data.view,
    postCount: data.discuss,
    description: data.description,
    type: data.server_info
  }
}

export const parseUser = (data: any): User => {
  return {
    uid: data.info.uid,
    name: data.info.uname,
    avatarUrl: data.info.face,
  };
};

export const parseNotificationUser = (data: any): User => {
  return {
    uid: data.mid,
    name: data.nickname,
    avatarUrl: data.avatar
  }
}

export const parseSearchResultUser = (data: any): User => {
  return {
    uid: data.mid,
    name: data.uname,
    avatarUrl: data.upic.startsWith('https://') ? data.upic : ('https://' + data.upic),
    bio: data.usign,
    followerCount: data.fans
  };
};


export const parseDetailedUser = (data: any): User => {
  const user: User = {
    uid: data.mid,
    name: data.uname,
    avatarUrl: data.face,
    bio: data.sign
  }
  parseAndSetUserRelation(user, data)
  return user
}

export const parseAndSetUserRelation = (user: User, data: any) => {
  switch (data.attribute) {
    case 1:
      user.secretFollowing = true
      break
    case 2:
      user.following = true
      break
    case 6:
      user.following = true
      user.followedBy = true
      break
  }
}

export const parseImage = (data: any) => {
  return {
    width: data.img_width,
    height: data.img_height,
    url: data.img_src
  }
}

export const parseEmoticon = (data: any) => {
  return {
    name: data.emoji_name,
    text: data.text,
    url: data.url
  }
}
