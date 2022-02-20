import * as timeago from 'timeago.js';
import { DateTime } from 'luxon';

const locale = function(diff: number, idx: number, totalSec?: number): [string, string] {
  const arr = [
    ['刚刚', '刚刚'],
    ['%s 秒前', '刚刚'],
    ['1 分钟前', '刚刚'],
    ['%s 分钟前', '刚刚'],
    ['1 小时前', '刚刚'],
    ['%s 小时前', '刚刚'],
    ['1 天前', '刚刚'],
    ['%s 天前', '刚刚'],
    ['1 星期前', '刚刚'],
    ['%s 星期前', '刚刚'],
    ['1 月前', '刚刚'],
    ['%s 月前', '刚刚'],
    ['1 年前', '刚刚'],
    ['%s 年前', '刚刚']
  ][idx]
  return [arr[0], arr[1]]
};
timeago.register('zh_CN', locale);

const formatTimeAgo = (timestamp: number) => {
  return timeago.format(timestamp * 1000, 'zh_CN')
}

const formatTime = (timestamp: number) => {
  const date = DateTime.fromSeconds(timestamp)
  return date.toLocaleString(DateTime.TIME_SIMPLE) + ' · ' + date.toLocaleString(DateTime.DATE_MED)
}

const formatYearMonth = (timestamp: number) => {
  const date = DateTime.fromSeconds(timestamp)
  return date.toFormat('y') + ' 年 ' + date.toFormat('L') + ' 月'
}

export { formatTimeAgo, formatTime, formatYearMonth }
