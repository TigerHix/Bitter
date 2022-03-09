/**
 * @fileoverview gRPC-Web generated client stub for bilibili.main.dynamic.feed.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as bilibili_dynamic_common_dynamic_pb from '../../../../../proto/dynamic/common/dynamic_pb';
import * as bilibili_dynamic_interfaces_feed_v1_api_pb from '../../../../../proto/dynamic/interfaces/feed/v1/api_pb';


export class FeedClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateInitCheck = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/CreateInitCheck',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreateInitCheckReq,
    bilibili_dynamic_common_dynamic_pb.CreateCheckResp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreateInitCheckReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_common_dynamic_pb.CreateCheckResp.deserializeBinary
  );

  createInitCheck(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreateInitCheckReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_common_dynamic_pb.CreateCheckResp>;

  createInitCheck(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreateInitCheckReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.CreateCheckResp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_common_dynamic_pb.CreateCheckResp>;

  createInitCheck(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreateInitCheckReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.CreateCheckResp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/CreateInitCheck',
        request,
        metadata || {},
        this.methodDescriptorCreateInitCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/CreateInitCheck',
    request,
    metadata || {},
    this.methodDescriptorCreateInitCheck);
  }

  methodDescriptorSubmitCheck = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/SubmitCheck',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckReq,
    bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckRsp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckRsp.deserializeBinary
  );

  submitCheck(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckRsp>;

  submitCheck(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckRsp>;

  submitCheck(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.SubmitCheckRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/SubmitCheck',
        request,
        metadata || {},
        this.methodDescriptorSubmitCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/SubmitCheck',
    request,
    metadata || {},
    this.methodDescriptorSubmitCheck);
  }

  methodDescriptorCreateDyn = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/CreateDyn',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreateDynReq,
    bilibili_dynamic_common_dynamic_pb.CreateResp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreateDynReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_common_dynamic_pb.CreateResp.deserializeBinary
  );

  createDyn(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreateDynReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_common_dynamic_pb.CreateResp>;

  createDyn(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreateDynReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.CreateResp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_common_dynamic_pb.CreateResp>;

  createDyn(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreateDynReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.CreateResp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/CreateDyn',
        request,
        metadata || {},
        this.methodDescriptorCreateDyn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/CreateDyn',
    request,
    metadata || {},
    this.methodDescriptorCreateDyn);
  }

  methodDescriptorGetUidByName = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/GetUidByName',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_common_dynamic_pb.GetUidByNameReq,
    bilibili_dynamic_common_dynamic_pb.GetUidByNameRsp,
    (request: bilibili_dynamic_common_dynamic_pb.GetUidByNameReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_common_dynamic_pb.GetUidByNameRsp.deserializeBinary
  );

  getUidByName(
    request: bilibili_dynamic_common_dynamic_pb.GetUidByNameReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_common_dynamic_pb.GetUidByNameRsp>;

  getUidByName(
    request: bilibili_dynamic_common_dynamic_pb.GetUidByNameReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.GetUidByNameRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_common_dynamic_pb.GetUidByNameRsp>;

  getUidByName(
    request: bilibili_dynamic_common_dynamic_pb.GetUidByNameReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.GetUidByNameRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/GetUidByName',
        request,
        metadata || {},
        this.methodDescriptorGetUidByName,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/GetUidByName',
    request,
    metadata || {},
    this.methodDescriptorGetUidByName);
  }

  methodDescriptorAtList = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/AtList',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_common_dynamic_pb.AtListReq,
    bilibili_dynamic_common_dynamic_pb.AtListRsp,
    (request: bilibili_dynamic_common_dynamic_pb.AtListReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_common_dynamic_pb.AtListRsp.deserializeBinary
  );

  atList(
    request: bilibili_dynamic_common_dynamic_pb.AtListReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_common_dynamic_pb.AtListRsp>;

  atList(
    request: bilibili_dynamic_common_dynamic_pb.AtListReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.AtListRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_common_dynamic_pb.AtListRsp>;

  atList(
    request: bilibili_dynamic_common_dynamic_pb.AtListReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.AtListRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/AtList',
        request,
        metadata || {},
        this.methodDescriptorAtList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/AtList',
    request,
    metadata || {},
    this.methodDescriptorAtList);
  }

  methodDescriptorAtSearch = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/AtSearch',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_common_dynamic_pb.AtSearchReq,
    bilibili_dynamic_common_dynamic_pb.AtListRsp,
    (request: bilibili_dynamic_common_dynamic_pb.AtSearchReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_common_dynamic_pb.AtListRsp.deserializeBinary
  );

  atSearch(
    request: bilibili_dynamic_common_dynamic_pb.AtSearchReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_common_dynamic_pb.AtListRsp>;

  atSearch(
    request: bilibili_dynamic_common_dynamic_pb.AtSearchReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.AtListRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_common_dynamic_pb.AtListRsp>;

  atSearch(
    request: bilibili_dynamic_common_dynamic_pb.AtSearchReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_common_dynamic_pb.AtListRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/AtSearch',
        request,
        metadata || {},
        this.methodDescriptorAtSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/AtSearch',
    request,
    metadata || {},
    this.methodDescriptorAtSearch);
  }

  methodDescriptorReserveButtonClick = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/ReserveButtonClick',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickReq,
    bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickResp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickResp.deserializeBinary
  );

  reserveButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickResp>;

  reserveButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickResp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickResp>;

  reserveButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.ReserveButtonClickResp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/ReserveButtonClick',
        request,
        metadata || {},
        this.methodDescriptorReserveButtonClick,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/ReserveButtonClick',
    request,
    metadata || {},
    this.methodDescriptorReserveButtonClick);
  }

  methodDescriptorCreatePlusButtonClick = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/CreatePlusButtonClick',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickReq,
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickRsp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickRsp.deserializeBinary
  );

  createPlusButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickRsp>;

  createPlusButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickRsp>;

  createPlusButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePlusButtonClickRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/CreatePlusButtonClick',
        request,
        metadata || {},
        this.methodDescriptorCreatePlusButtonClick,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/CreatePlusButtonClick',
    request,
    metadata || {},
    this.methodDescriptorCreatePlusButtonClick);
  }

  methodDescriptorHotSearch = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/HotSearch',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchReq,
    bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchRsp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchRsp.deserializeBinary
  );

  hotSearch(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchRsp>;

  hotSearch(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchRsp>;

  hotSearch(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.HotSearchRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/HotSearch',
        request,
        metadata || {},
        this.methodDescriptorHotSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/HotSearch',
    request,
    metadata || {},
    this.methodDescriptorHotSearch);
  }

  methodDescriptorSuggest = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/Suggest',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestReq,
    bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestRsp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestRsp.deserializeBinary
  );

  suggest(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestRsp>;

  suggest(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestRsp>;

  suggest(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.SuggestRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/Suggest',
        request,
        metadata || {},
        this.methodDescriptorSuggest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/Suggest',
    request,
    metadata || {},
    this.methodDescriptorSuggest);
  }

  methodDescriptorDynamicButtonClick = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/DynamicButtonClick',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickReq,
    bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickRsp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickRsp.deserializeBinary
  );

  dynamicButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickRsp>;

  dynamicButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickRsp>;

  dynamicButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.DynamicButtonClickRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/DynamicButtonClick',
        request,
        metadata || {},
        this.methodDescriptorDynamicButtonClick,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/DynamicButtonClick',
    request,
    metadata || {},
    this.methodDescriptorDynamicButtonClick);
  }

  methodDescriptorCreatePermissionButtonClick = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/CreatePermissionButtonClick',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickReq,
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickRsp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickRsp.deserializeBinary
  );

  createPermissionButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickRsp>;

  createPermissionButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickRsp>;

  createPermissionButtonClick(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePermissionButtonClickRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/CreatePermissionButtonClick',
        request,
        metadata || {},
        this.methodDescriptorCreatePermissionButtonClick,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/CreatePermissionButtonClick',
    request,
    metadata || {},
    this.methodDescriptorCreatePermissionButtonClick);
  }

  methodDescriptorCreatePageInfos = new grpcWeb.MethodDescriptor(
    '/bilibili.main.dynamic.feed.v1.Feed/CreatePageInfos',
    grpcWeb.MethodType.UNARY,
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosReq,
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosRsp,
    (request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosReq) => {
      return request.serializeBinary();
    },
    bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosRsp.deserializeBinary
  );

  createPageInfos(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosRsp>;

  createPageInfos(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosRsp) => void): grpcWeb.ClientReadableStream<bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosRsp>;

  createPageInfos(
    request: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_dynamic_interfaces_feed_v1_api_pb.CreatePageInfosRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.main.dynamic.feed.v1.Feed/CreatePageInfos',
        request,
        metadata || {},
        this.methodDescriptorCreatePageInfos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.main.dynamic.feed.v1.Feed/CreatePageInfos',
    request,
    metadata || {},
    this.methodDescriptorCreatePageInfos);
  }

}

