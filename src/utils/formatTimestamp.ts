import * as timeago from 'timeago.js';
import { DateTime } from 'luxon';

const locale = function(diff: number, idx: number, totalSec?: number): [string, string] {
  const arr = [
    ['刚刚', 'right now'],
    ['%s 秒前', 'in %s seconds'],
    ['1 分钟前', 'in 1 minute'],
    ['%s 分钟前', 'in %s minutes'],
    ['1 小时前', 'in 1 hour'],
    ['%s 小时前', 'in %s hours'],
    ['1 天前', 'in 1 day'],
    ['%s 天前', 'in %s days'],
    ['1 星期前', 'in 1 week'],
    ['%s 星期前', 'in %s weeks'],
    ['1 月前', 'in 1 month'],
    ['%s 月前', 'in %s months'],
    ['1 年前', 'in 1 year'],
    ['%s 年前', 'in %s years']
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

export { formatTimeAgo, formatTime }