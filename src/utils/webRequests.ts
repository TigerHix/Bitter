const limit = require('simple-rate-limiter')

export const fetchDynamicDetail = limit((dynamicId: string, callback: any): any => {
  fetch(`https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/get_dynamic_detail?dynamic_id=${dynamicId}`)
    .then((res) => res.json())
    .then((data) => callback(data))
}).to(1).per(500)
