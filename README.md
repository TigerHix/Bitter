# Bitter

Bilibili, but Twitter.

- 时间线
![](https://i.imgur.com/hpYmt9D.jpg)
- 话题
![](https://i.imgur.com/VZEfECB.jpg)
- 搜索（动态）
![](https://i.imgur.com/h4AvnTo.jpg)
- 搜索（用户）
![](https://i.imgur.com/aXxltgd.jpg)

## 这是什么？

Bitter（*Bi*libili + Twi*tter*）是一个 Chrome 插件，让你可以用推特的方式刷 Bilibili。

开发契机是我想只查看 ~~VTubers~~ 特定用户分组的动态，结果做着做着就上头了.jpg

目前比较有意思的特性：
- 时间线可以分组查看最新动态
- 可以看到用户是否特别关注了你
- 可以查看动态点赞用户
- 可以看到动态的转发详情
- 以内容或 #tag# 搜索全站动态
- 查看动态热门话题

未来打算加入的特性：
- 时间线过滤动态，比如只看图片类动态
- 搜索特定用户动态
- 动态更新推送
- 书签功能

打算做完一个我心目中「能用」的版本后再发布 .crx。

## 项目上手
```
yarn
yarn serve
```
打开 Chrome 的[插件页](chrome://extensions)，打开 Developer Mode，点击 Load unpacked，选择 `dist` 文件夹即可。

## 特别感谢
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect/)
- [Bili.Uwp](https://github.com/Richasy/Bili.Uwp)
