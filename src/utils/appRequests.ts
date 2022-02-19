import { DynamicClient } from '../proto/app/dynamic/v2/DynamicServiceClientPb';
import { Md5 } from 'ts-md5/dist/md5';
import { GrpcConfig } from './grpcConfig';

export enum ClientType {
    iOS, Android
}

export interface UserToken {
    mid: number,
    access_token: string,
    refresh_token: string,
    expires_in: string
}

export const fetchUserProfile = async (uid: number) => {
    return await makeRequest('https://app.bilibili.com/x/v2/space', 'get', {
        vmid: uid
    })
}

export const fetchAndParseUserProfile = async (uid: number) => {
    return fetchUserProfile(uid)
        .then(res => res.json())
        .then(data => {
            data = data.data
            console.log(data)
            const user: any = {}
            user.uid = uid
            user.name = data.card.name
            user.avatarUrl = data.card.face
            user.bio = data.card.sign
            user.following = data.card.relation?.is_follow === 1
            user.followedBy = data.card.relation?.is_followed === 1
            user.specialFollowedBy = data.guest_special === 1
            user.followerCount = data.card.fans
            user.followingCount = data.card.attention
            user.coverUrl = data.images.imgUrl
            return user
        })
}

export const makeRequest = async (url: string, method: string, params: any = {}, clientType: ClientType = ClientType.Android) => {
    method = method.toLowerCase()
    const token = await getUserToken();
    params['build'] = "5520400";
    if (clientType === ClientType.iOS) {
        params["appkey"] = "4ebafd7c4951b366";
        params["mobi_app"] = "iphone";
        params["platform"] = "ios";
        params["ts"] = Math.floor((+new Date()) / 1000);
    } else if (clientType === ClientType.Android) {
        params["appkey"] = "4409e2ce8ffd12b8";
        params["mobi_app"] = "android";
        params["platform"] = "android";
        params["ts"] = Math.floor((+new Date()) / 1000);
    }
    if (token) {
        params['access_key'] = token.access_token;
    }
    signParams(params, clientType);
    console.log(params);
    if (method == 'post') {
        const body = new URLSearchParams(params);
        return fetch(url, {
            method: method,
            body: body
        });
    } else {
        const strings = Object.entries(params).map(it => `${it[0]}=${it[1]}`);
        strings.sort();
        const query = strings.join('&');
        url += `?${query}`;
        return fetch(url, { method: method });
    }
}

export const makeHeaders = async () => {
    const token = await getUserToken()
    const headers: any = {}
    const config = new GrpcConfig(token)

    headers['Authorization'] = `identify_v1 ${token.access_token}`
    headers['APP-KEY'] = config.MobileApp
    headers['x-bili-device-bin'] = config.getDevice()
    headers['x-bili-fawkes-req-bin'] = config.getFawkesReq()
    headers['x-bili-locale-bin'] = config.getLocale()
    headers['x-bili-metadata-bin'] = config.getMetadata()
    headers['x-bili-network-bin'] = config.getNetwork()
    headers['x-bili-restriction-bin'] = config.getRestriction()
    headers['grpc-accept-encoding'] = 'identity,deflate,gzip'
    headers['grpc-timeout'] = '20100m'
    headers['env'] = config.Environment
    
    return headers
}

export const makeGrpcRequest = async (url: string, message: any) => {
    console.log('grpc payload:')
    console.log(message)
    const token = await getUserToken();
    const config = new GrpcConfig(token);
    const headers: any = {};
    const userAgent = "bili-universal/62800300 "
        + `os/ios model/${config.Model} mobi_app/iphone `
        + `osVer/${config.OSVersion} `
        + `network/${config.NetworkType} `
        + `grpc-objc/1.32.0 grpc-c/12.0.0 (ios; cronet_http)`;
    headers['Authorization'] = `identify_v1 ${token.access_token}`;
    headers['User-Agent'] = userAgent;
    headers['APP-KEY'] = config.MobileApp;
    headers['x-bili-device-bin'] = config.getDevice();
    headers['x-bili-fawkes-req-bin'] = config.getFawkesReq();
    headers['x-bili-locale-bin'] = config.getLocale();
    headers['x-bili-metadata-bin'] = config.getMetadata();
    headers['x-bili-network-bin'] = config.getNetwork();
    headers['x-bili-restriction-bin'] = config.getRestriction();
    headers['grpc-accept-encoding'] = 'identity,deflate,gzip';
    headers['grpc-timeout'] = '20100m';
    headers['env'] = config.Environment;
    headers['Transfer-Encoding'] = 'chunked';
    headers['TE'] = 'trailers';
    const messageBytes: Uint8Array = message.serializeBinary();
    const stateBytes = new Uint8Array([0, 0, 0, 0, messageBytes.length]);
    const bodyBytes = new Uint8Array([...stateBytes, ...messageBytes]);
    headers['Content-Type'] = 'application/grpc';
    const blob = new Blob([bodyBytes]);
    console.log(headers);
    return await fetch(url, {
        method: 'post',
        body: blob,
        headers: headers
    });
}

const signParams = (params: any, clientType: ClientType) => {
    const strings = Object.entries(params).map(it => `${it[0]}=${it[1]}`)
    strings.sort()

    let apiSecret = ''
    if (clientType === ClientType.iOS) {
        apiSecret = '8cb98205e9b2ad3669aad0fce12a4c13'
    } else if (clientType === ClientType.Android) {
        apiSecret = '59b43e04ad6965f34319062b478f83dd'
    }

    const query = strings.join('&') + apiSecret
    const signature = Md5.hashStr(query).toLowerCase()

    params['sign'] = signature
}

export const setUserToken = (token: UserToken) => {
    chrome.storage.sync.set({token: token});
}

export const getUserToken = () => {
    return new Promise<UserToken>((resolve, reject) => {
        chrome.storage.sync.get(['token'], res => {
            resolve(res.token)
        });
    })
}

export const dynamicClient = new DynamicClient('https://grpc.biliapi.net', {}, {})