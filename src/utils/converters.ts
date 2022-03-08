import {DescType, DynamicItem, DynModuleType} from "@/proto/app/dynamic/v2/dynamic_pb";
import {CommentSectionType, Post} from "@/models/models";
import {DateTime} from 'luxon';

export const convertDynamicItemToPost = (item: DynamicItem): Post => {
  console.log(item.toObject())
  const extend = item.getExtend()!
  const post: Partial<Post> = {
    id: extend.getDynIdStr(),
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
          if (Array.from(label.matchAll(new RegExp('-', 'g'))).length === 1) {
            label = DateTime.now().toObject().year + '-' + label
          }
          const date = DateTime.fromISO(label)
          if (date) {
            post.timestamp = date.toSeconds()
          } else {
            // Add space between number and text
            const regExp = new RegExp('([0-9])+', 'g')
            const match = label.match(regExp)
            if (match) {
              post.timestampLabel = label.substring(0, match[0].length) + ' ' + label.substring(match[0].length)
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
        // Not needed?
        break
      }
      case DynModuleType.MODULE_STAT: {
        const stat = module.getModuleStat()!
        post.likeCount = stat.getLike()
        post.repostCount = stat.getRepost()
        post.viewCount = post.commentCount = 0 // TODO: Mark as unknown?
        post.isLiked = stat.getLikeInfo()?.getIsLike()
        break
      }
    }
  }

  if (extend.getOrigDynIdStr()) post.sourcePostId = extend.getOrigDynIdStr()

  return <Post>post
}
