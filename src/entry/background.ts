/// <reference types="chrome"/>

import { DynDetailReq } from "@/proto/app/dynamic/v2/dynamic_pb";
import { makeGrpcRequest } from "@/utils/appRequests";

chrome.runtime.onInstalled.addListener(() => {
    console.log('Installed');
});

chrome.action.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("app.html") });
});

// chrome.webRequest.onBeforeSendHeaders.addListener(
//     function(details: any) {
//         for (let i = 0; i < details.requestHeaders.length; ++i) {
//             console.log(details.requestHeaders[i]);
//         }
//         return { requestHeaders: details.requestHeaders };
//     },
//     {urls: ['https://api.vc.bilibili.com/*']},
//     ['blocking', 'requestHeaders', 'extraHeaders']
// );