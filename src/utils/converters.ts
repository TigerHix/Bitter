import {DescType, DynamicItem, DynModuleType, LocalIconType} from "@/proto/app/dynamic/v2/dynamic_pb";
import {Post} from "@/models/models";
import {DateTime} from 'luxon';

export const convertDynamicItemToPost = (item: DynamicItem): Post => {
  console.log(item.toObject())
  const extend = item.getExtend()!
  const post: Partial<Post> = {
    id: extend.getDynIdStr(),
    type: extend.getDynType(),

    isAd: false,
    emoticons: [],
    likedBy: [],
    repliedBy: [],
    mentions: [],
    mentionedUsers: []
  }
  const modules = item.getModulesList()
  for (const module of modules) {
    switch (module.getModuleType()) {
      case DynModuleType.MODULE_AUTHOR: {
        const author = module.getModuleAuthor()!.getAuthor()!
        post.user = {
          uid: author.getMid(),
          name: author.getName(),
          avatarUrl: author.getFace()
        }
        let label = module.getModuleAuthor()?.getPtimeLabelText()
        if (label) {
          label = label.split('·')[0].trim() // "23小时前 · 投稿了视频"
          if (Array.from(label.matchAll(new RegExp('-', 'g'))).length === 1) {
            label = DateTime.now().toObject().year + '-' + label
          }
          const date = DateTime.fromISO(label)
          if (!date.invalid) {
            post.timestamp = date.toSeconds()
          } else {
            // Add space between number and text
            const regExp = new RegExp('([0-9])+', 'g')
            const match = label.match(regExp)
            if (match) {
              post.timestampLabel = label.substring(0, match[0].length) + ' ' + label.substring(match[0].length)
            } else {
              post.timestampLabel = label
            }
          }
        } else {
          post.timestampLabel = '刚刚'
        }
        break
      }
      case DynModuleType.MODULE_DESC: {
        const desc = module.getModuleDesc()!
        post.text = desc.getText()

        for (const d of desc.getDescList()) {
          switch (d.getType()) {
            case DescType.DESC_TYPE_EMOJI:
              post.emoticons!.push({
                name: d.getText(),
                text: d.getText(),
                url: d.getUri()
              })
              break;
            case DescType.DESC_TYPE_AITE:
              post.mentionedUsers!.push({
                uid: +d.getRid(),
                name: d.getText().substring(1).trim()
              })
              console.log(post.mentionedUsers)
              break;
          }
        }
        break
      }
      case DynModuleType.MODULE_DYNAMIC: {
        const dyn = module.getModuleDynamic()!
        // Album
        if (dyn.getDynDraw()) {
          const draw = dyn.getDynDraw()!

          post.album = {
            id: draw.getId(),
            images: draw.getItemsList().map(item => ({
              width: item.getWidth(),
              height: item.getHeight(),
              url: item.getSrc()
            }))
          }
        }
        // Video
        if (dyn.getDynArchive()) {
          const video = dyn.getDynArchive()!

          post.video = {
            aid: video.getAvid(),
            cid: video.getCid(),
            title: video.getTitle(),
            url: 'https://www.bilibili.com/video/' + video.getBvid(),
            thumbnailUrl: video.getCover(),
            duration: video.getDuration(),
            viewCount: video.getView(),
          }

          // Extract danmaku count
          if (video.getCoverLeftText3().includes('弹幕')) {
            const regExp = new RegExp('([0-9])+', 'g')
            const match = video.getCoverLeftText3().match(regExp)
            if (match) {
              post.video!.danmakuCount = Number(video.getCoverLeftText3().substring(0, match[0].length))
            }
          }
        }
        // Column
        if (dyn.getDynArticle()) {
          const article = dyn.getDynArticle()!

          let id = 0
          const regExp = new RegExp('article\\/([0-9]+)')
          const match = extend.getCardUrl().match(regExp)
          if (match) {
            id = Number(match[1])
          }

          post.column = {
            id: id,
            title: article.getTitle(),
            url: 'https://www.bilibili.com/read/cv' + id,
            thumbnailUrl: article.getCoversList()[0]
          }
        }
        break
      }
      case DynModuleType.MODULE_STAT: {
        const stat = module.getModuleStat()!
        post.likeCount = stat.getLike()
        post.repostCount = stat.getRepost()
        post.commentCount = stat.getReply()
        post.viewCount = 0 // TODO: Mark as unknown?
        post.isLiked = stat.getLikeInfo()?.getIsLike()
        break
      }
      case DynModuleType.MODULE_INTERACTION: {
        const regExp = new RegExp('space\\/([0-9]+)')
        const int = module.getModuleInteraction()!
        for (const item of int.getInteractionItemList()) {
          if (item.getIconType() == LocalIconType.LOCAL_ICON_LIKE) {
            for (const d of item.getDescList()) {
              if (d.getType() == DescType.DESC_TYPE_USER) {
                const match = d.getUri().match(regExp)
                if (match) {
                  post.likedBy!.push({
                    uid: Number(match[1]),
                    name: d.getText().replaceAll('、', '').trim()
                  })
                }
              }
            }
          }
        }
      }
    }
  }

  if (post.video) {
    post.video.commentCount = post.commentCount
    post.video.likeCount = post.likeCount
    post.video.shareCount = post.repostCount // This is a lower bound
    post.video.timestamp = post.timestamp
    post.video.uploader = post.user // Is this correct?
  }

  if (extend.getOrigDynIdStr()) post.sourcePostId = extend.getOrigDynIdStr()

  return <Post>post
}
