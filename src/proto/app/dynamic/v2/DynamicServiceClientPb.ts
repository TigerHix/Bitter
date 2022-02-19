/**
 * @fileoverview gRPC-Web generated client stub for bilibili.app.dynamic.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as bilibili_app_dynamic_v2_dynamic_pb from '../../../../proto/app/dynamic/v2/dynamic_pb';


export class DynamicClient {
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

  methodDescriptorDynVideo = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynVideo',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynVideoReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynVideoReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynVideoReply.deserializeBinary
  );

  dynVideo(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynVideoReply>;

  dynVideo(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynVideoReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynVideoReply>;

  dynVideo(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynVideoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynVideo',
        request,
        metadata || {},
        this.methodDescriptorDynVideo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideo',
    request,
    metadata || {},
    this.methodDescriptorDynVideo);
  }

  methodDescriptorDynAll = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynAll',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynAllReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynAllReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynAllReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynAllReply.deserializeBinary
  );

  dynAll(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynAllReply>;

  dynAll(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynAllReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynAllReply>;

  dynAll(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynAllReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynAll',
        request,
        metadata || {},
        this.methodDescriptorDynAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAll',
    request,
    metadata || {},
    this.methodDescriptorDynAll);
  }

  methodDescriptorDynDetails = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynDetails',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReply.deserializeBinary
  );

  dynDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReply>;

  dynDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReply>;

  dynDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynDetailsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynDetails',
        request,
        metadata || {},
        this.methodDescriptorDynDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynDetails',
    request,
    metadata || {},
    this.methodDescriptorDynDetails);
  }

  methodDescriptorDynVideoPersonal = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynVideoPersonal',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReply.deserializeBinary
  );

  dynVideoPersonal(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReply>;

  dynVideoPersonal(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReply>;

  dynVideoPersonal(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynVideoPersonalReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynVideoPersonal',
        request,
        metadata || {},
        this.methodDescriptorDynVideoPersonal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideoPersonal',
    request,
    metadata || {},
    this.methodDescriptorDynVideoPersonal);
  }

  methodDescriptorDynVideoUpdOffset = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynVideoUpdOffset',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynVideoUpdOffsetReq,
    bilibili_app_dynamic_v2_dynamic_pb.NoReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoUpdOffsetReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.NoReply.deserializeBinary
  );

  dynVideoUpdOffset(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoUpdOffsetReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  dynVideoUpdOffset(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoUpdOffsetReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  dynVideoUpdOffset(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVideoUpdOffsetReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynVideoUpdOffset',
        request,
        metadata || {},
        this.methodDescriptorDynVideoUpdOffset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideoUpdOffset',
    request,
    metadata || {},
    this.methodDescriptorDynVideoUpdOffset);
  }

  methodDescriptorDynAdditionCommonFollow = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynAdditionCommonFollow',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReply.deserializeBinary
  );

  dynAdditionCommonFollow(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReply>;

  dynAdditionCommonFollow(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReply>;

  dynAdditionCommonFollow(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynAdditionCommonFollowReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynAdditionCommonFollow',
        request,
        metadata || {},
        this.methodDescriptorDynAdditionCommonFollow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAdditionCommonFollow',
    request,
    metadata || {},
    this.methodDescriptorDynAdditionCommonFollow);
  }

  methodDescriptorDynThumb = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynThumb',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynThumbReq,
    bilibili_app_dynamic_v2_dynamic_pb.NoReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynThumbReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.NoReply.deserializeBinary
  );

  dynThumb(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynThumbReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  dynThumb(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynThumbReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  dynThumb(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynThumbReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynThumb',
        request,
        metadata || {},
        this.methodDescriptorDynThumb,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynThumb',
    request,
    metadata || {},
    this.methodDescriptorDynThumb);
  }

  methodDescriptorDynFakeCard = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynFakeCard',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReply.deserializeBinary
  );

  dynFakeCard(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReply>;

  dynFakeCard(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReply>;

  dynFakeCard(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynFakeCardReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynFakeCard',
        request,
        metadata || {},
        this.methodDescriptorDynFakeCard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynFakeCard',
    request,
    metadata || {},
    this.methodDescriptorDynFakeCard);
  }

  methodDescriptorDynRcmdUpExchange = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynRcmdUpExchange',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReply.deserializeBinary
  );

  dynRcmdUpExchange(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReply>;

  dynRcmdUpExchange(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReply>;

  dynRcmdUpExchange(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdUpExchangeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynRcmdUpExchange',
        request,
        metadata || {},
        this.methodDescriptorDynRcmdUpExchange,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynRcmdUpExchange',
    request,
    metadata || {},
    this.methodDescriptorDynRcmdUpExchange);
  }

  methodDescriptorDynAllPersonal = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynAllPersonal',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReply.deserializeBinary
  );

  dynAllPersonal(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReply>;

  dynAllPersonal(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReply>;

  dynAllPersonal(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynAllPersonalReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynAllPersonal',
        request,
        metadata || {},
        this.methodDescriptorDynAllPersonal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAllPersonal',
    request,
    metadata || {},
    this.methodDescriptorDynAllPersonal);
  }

  methodDescriptorDynAllUpdOffset = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynAllUpdOffset',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynAllUpdOffsetReq,
    bilibili_app_dynamic_v2_dynamic_pb.NoReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynAllUpdOffsetReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.NoReply.deserializeBinary
  );

  dynAllUpdOffset(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllUpdOffsetReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  dynAllUpdOffset(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllUpdOffsetReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  dynAllUpdOffset(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynAllUpdOffsetReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynAllUpdOffset',
        request,
        metadata || {},
        this.methodDescriptorDynAllUpdOffset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAllUpdOffset',
    request,
    metadata || {},
    this.methodDescriptorDynAllUpdOffset);
  }

  methodDescriptorDynVote = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynVote',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynVoteReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynVoteReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynVoteReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynVoteReply.deserializeBinary
  );

  dynVote(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVoteReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynVoteReply>;

  dynVote(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVoteReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynVoteReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynVoteReply>;

  dynVote(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynVoteReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynVoteReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynVote',
        request,
        metadata || {},
        this.methodDescriptorDynVote,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVote',
    request,
    metadata || {},
    this.methodDescriptorDynVote);
  }

  methodDescriptorDynMixUpListViewMore = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynMixUpListViewMore',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReply.deserializeBinary
  );

  dynMixUpListViewMore(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReply>;

  dynMixUpListViewMore(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReply>;

  dynMixUpListViewMore(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynMixUpListViewMoreReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynMixUpListViewMore',
        request,
        metadata || {},
        this.methodDescriptorDynMixUpListViewMore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynMixUpListViewMore',
    request,
    metadata || {},
    this.methodDescriptorDynMixUpListViewMore);
  }

  methodDescriptorDynLight = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynLight',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynLightReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynLightReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynLightReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynLightReply.deserializeBinary
  );

  dynLight(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynLightReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynLightReply>;

  dynLight(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynLightReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynLightReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynLightReply>;

  dynLight(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynLightReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynLightReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynLight',
        request,
        metadata || {},
        this.methodDescriptorDynLight,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynLight',
    request,
    metadata || {},
    this.methodDescriptorDynLight);
  }

  methodDescriptorDynDetail = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynDetail',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynDetailReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynDetailReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynDetailReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynDetailReply.deserializeBinary
  );

  dynDetail(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynDetailReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynDetailReply>;

  dynDetail(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynDetailReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynDetailReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynDetailReply>;

  dynDetail(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynDetailReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynDetailReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynDetail',
        request,
        metadata || {},
        this.methodDescriptorDynDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynDetail',
    request,
    metadata || {},
    this.methodDescriptorDynDetail);
  }

  methodDescriptorLikeList = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/LikeList',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.LikeListReq,
    bilibili_app_dynamic_v2_dynamic_pb.LikeListReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.LikeListReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.LikeListReply.deserializeBinary
  );

  likeList(
    request: bilibili_app_dynamic_v2_dynamic_pb.LikeListReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.LikeListReply>;

  likeList(
    request: bilibili_app_dynamic_v2_dynamic_pb.LikeListReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.LikeListReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.LikeListReply>;

  likeList(
    request: bilibili_app_dynamic_v2_dynamic_pb.LikeListReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.LikeListReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/LikeList',
        request,
        metadata || {},
        this.methodDescriptorLikeList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/LikeList',
    request,
    metadata || {},
    this.methodDescriptorLikeList);
  }

  methodDescriptorRepostList = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/RepostList',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.RepostListReq,
    bilibili_app_dynamic_v2_dynamic_pb.RepostListRsp,
    (request: bilibili_app_dynamic_v2_dynamic_pb.RepostListReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.RepostListRsp.deserializeBinary
  );

  repostList(
    request: bilibili_app_dynamic_v2_dynamic_pb.RepostListReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.RepostListRsp>;

  repostList(
    request: bilibili_app_dynamic_v2_dynamic_pb.RepostListReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.RepostListRsp) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.RepostListRsp>;

  repostList(
    request: bilibili_app_dynamic_v2_dynamic_pb.RepostListReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.RepostListRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/RepostList',
        request,
        metadata || {},
        this.methodDescriptorRepostList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/RepostList',
    request,
    metadata || {},
    this.methodDescriptorRepostList);
  }

  methodDescriptorDynSpace = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynSpace',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynSpaceReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynSpaceRsp,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynSpaceRsp.deserializeBinary
  );

  dynSpace(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynSpaceRsp>;

  dynSpace(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceRsp) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynSpaceRsp>;

  dynSpace(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceRsp) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynSpace',
        request,
        metadata || {},
        this.methodDescriptorDynSpace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSpace',
    request,
    metadata || {},
    this.methodDescriptorDynSpace);
  }

  methodDescriptorDynUnLoginRcmd = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynUnLoginRcmd',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReply.deserializeBinary
  );

  dynUnLoginRcmd(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReply>;

  dynUnLoginRcmd(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReply>;

  dynUnLoginRcmd(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynRcmdReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynUnLoginRcmd',
        request,
        metadata || {},
        this.methodDescriptorDynUnLoginRcmd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynUnLoginRcmd',
    request,
    metadata || {},
    this.methodDescriptorDynUnLoginRcmd);
  }

  methodDescriptorDynServerDetails = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynServerDetails',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReply.deserializeBinary
  );

  dynServerDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReply>;

  dynServerDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReply>;

  dynServerDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynServerDetailsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynServerDetails',
        request,
        metadata || {},
        this.methodDescriptorDynServerDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynServerDetails',
    request,
    metadata || {},
    this.methodDescriptorDynServerDetails);
  }

  methodDescriptorDynSearch = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynSearch',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynSearchReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynSearchReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynSearchReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynSearchReply.deserializeBinary
  );

  dynSearch(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSearchReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynSearchReply>;

  dynSearch(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSearchReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynSearchReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynSearchReply>;

  dynSearch(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSearchReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynSearchReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynSearch',
        request,
        metadata || {},
        this.methodDescriptorDynSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSearch',
    request,
    metadata || {},
    this.methodDescriptorDynSearch);
  }

  methodDescriptorSetDecision = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/SetDecision',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.SetDecisionReq,
    bilibili_app_dynamic_v2_dynamic_pb.NoReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.SetDecisionReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.NoReply.deserializeBinary
  );

  setDecision(
    request: bilibili_app_dynamic_v2_dynamic_pb.SetDecisionReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  setDecision(
    request: bilibili_app_dynamic_v2_dynamic_pb.SetDecisionReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  setDecision(
    request: bilibili_app_dynamic_v2_dynamic_pb.SetDecisionReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/SetDecision',
        request,
        metadata || {},
        this.methodDescriptorSetDecision,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SetDecision',
    request,
    metadata || {},
    this.methodDescriptorSetDecision);
  }

  methodDescriptorAlumniDynamics = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/AlumniDynamics',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReq,
    bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReply.deserializeBinary
  );

  alumniDynamics(
    request: bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReply>;

  alumniDynamics(
    request: bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReply>;

  alumniDynamics(
    request: bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.AlumniDynamicsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/AlumniDynamics',
        request,
        metadata || {},
        this.methodDescriptorAlumniDynamics,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/AlumniDynamics',
    request,
    metadata || {},
    this.methodDescriptorAlumniDynamics);
  }

  methodDescriptorCampusRcmd = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/CampusRcmd',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReq,
    bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReply.deserializeBinary
  );

  campusRcmd(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReply>;

  campusRcmd(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReply>;

  campusRcmd(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/CampusRcmd',
        request,
        metadata || {},
        this.methodDescriptorCampusRcmd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRcmd',
    request,
    metadata || {},
    this.methodDescriptorCampusRcmd);
  }

  methodDescriptorSubscribeCampus = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/SubscribeCampus',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.SubscribeCampusReq,
    bilibili_app_dynamic_v2_dynamic_pb.NoReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.SubscribeCampusReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.NoReply.deserializeBinary
  );

  subscribeCampus(
    request: bilibili_app_dynamic_v2_dynamic_pb.SubscribeCampusReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  subscribeCampus(
    request: bilibili_app_dynamic_v2_dynamic_pb.SubscribeCampusReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  subscribeCampus(
    request: bilibili_app_dynamic_v2_dynamic_pb.SubscribeCampusReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/SubscribeCampus',
        request,
        metadata || {},
        this.methodDescriptorSubscribeCampus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SubscribeCampus',
    request,
    metadata || {},
    this.methodDescriptorSubscribeCampus);
  }

  methodDescriptorSetRecentCampus = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/SetRecentCampus',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.SetRecentCampusReq,
    bilibili_app_dynamic_v2_dynamic_pb.NoReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.SetRecentCampusReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.NoReply.deserializeBinary
  );

  setRecentCampus(
    request: bilibili_app_dynamic_v2_dynamic_pb.SetRecentCampusReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  setRecentCampus(
    request: bilibili_app_dynamic_v2_dynamic_pb.SetRecentCampusReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.NoReply>;

  setRecentCampus(
    request: bilibili_app_dynamic_v2_dynamic_pb.SetRecentCampusReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.NoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/SetRecentCampus',
        request,
        metadata || {},
        this.methodDescriptorSetRecentCampus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SetRecentCampus',
    request,
    metadata || {},
    this.methodDescriptorSetRecentCampus);
  }

  methodDescriptorDynTab = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynTab',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynTabReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynTabReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynTabReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynTabReply.deserializeBinary
  );

  dynTab(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynTabReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynTabReply>;

  dynTab(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynTabReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynTabReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynTabReply>;

  dynTab(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynTabReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynTabReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynTab',
        request,
        metadata || {},
        this.methodDescriptorDynTab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynTab',
    request,
    metadata || {},
    this.methodDescriptorDynTab);
  }

  methodDescriptorSchoolSearch = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/SchoolSearch',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReq,
    bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReply.deserializeBinary
  );

  schoolSearch(
    request: bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReply>;

  schoolSearch(
    request: bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReply>;

  schoolSearch(
    request: bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.SchoolSearchReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/SchoolSearch',
        request,
        metadata || {},
        this.methodDescriptorSchoolSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SchoolSearch',
    request,
    metadata || {},
    this.methodDescriptorSchoolSearch);
  }

  methodDescriptorSchoolRecommend = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/SchoolRecommend',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReq,
    bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReply.deserializeBinary
  );

  schoolRecommend(
    request: bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReply>;

  schoolRecommend(
    request: bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReply>;

  schoolRecommend(
    request: bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.SchoolRecommendReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/SchoolRecommend',
        request,
        metadata || {},
        this.methodDescriptorSchoolRecommend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SchoolRecommend',
    request,
    metadata || {},
    this.methodDescriptorSchoolRecommend);
  }

  methodDescriptorDynSpaceSearchDetails = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/DynSpaceSearchDetails',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReq,
    bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReply.deserializeBinary
  );

  dynSpaceSearchDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReply>;

  dynSpaceSearchDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReply>;

  dynSpaceSearchDetails(
    request: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.DynSpaceSearchDetailsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/DynSpaceSearchDetails',
        request,
        metadata || {},
        this.methodDescriptorDynSpaceSearchDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSpaceSearchDetails',
    request,
    metadata || {},
    this.methodDescriptorDynSpaceSearchDetails);
  }

  methodDescriptorOfficialAccounts = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/OfficialAccounts',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReq,
    bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReply.deserializeBinary
  );

  officialAccounts(
    request: bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReply>;

  officialAccounts(
    request: bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReply>;

  officialAccounts(
    request: bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.OfficialAccountsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/OfficialAccounts',
        request,
        metadata || {},
        this.methodDescriptorOfficialAccounts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/OfficialAccounts',
    request,
    metadata || {},
    this.methodDescriptorOfficialAccounts);
  }

  methodDescriptorOfficialDynamics = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/OfficialDynamics',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReq,
    bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReply.deserializeBinary
  );

  officialDynamics(
    request: bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReply>;

  officialDynamics(
    request: bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReply>;

  officialDynamics(
    request: bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.OfficialDynamicsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/OfficialDynamics',
        request,
        metadata || {},
        this.methodDescriptorOfficialDynamics,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/OfficialDynamics',
    request,
    metadata || {},
    this.methodDescriptorOfficialDynamics);
  }

  methodDescriptorCampusRedDot = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/CampusRedDot',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReq,
    bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReply.deserializeBinary
  );

  campusRedDot(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReply>;

  campusRedDot(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReply>;

  campusRedDot(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusRedDotReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/CampusRedDot',
        request,
        metadata || {},
        this.methodDescriptorCampusRedDot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRedDot',
    request,
    metadata || {},
    this.methodDescriptorCampusRedDot);
  }

  methodDescriptorCampusRcmdFeed = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/CampusRcmdFeed',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReq,
    bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReply.deserializeBinary
  );

  campusRcmdFeed(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReply>;

  campusRcmdFeed(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReply>;

  campusRcmdFeed(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusRcmdFeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/CampusRcmdFeed',
        request,
        metadata || {},
        this.methodDescriptorCampusRcmdFeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRcmdFeed',
    request,
    metadata || {},
    this.methodDescriptorCampusRcmdFeed);
  }

  methodDescriptorTopicSquare = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/TopicSquare',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReq,
    bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReply.deserializeBinary
  );

  topicSquare(
    request: bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReply>;

  topicSquare(
    request: bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReply>;

  topicSquare(
    request: bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.TopicSquareReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/TopicSquare',
        request,
        metadata || {},
        this.methodDescriptorTopicSquare,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/TopicSquare',
    request,
    metadata || {},
    this.methodDescriptorTopicSquare);
  }

  methodDescriptorTopicList = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/TopicList',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.TopicListReq,
    bilibili_app_dynamic_v2_dynamic_pb.TopicListReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.TopicListReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.TopicListReply.deserializeBinary
  );

  topicList(
    request: bilibili_app_dynamic_v2_dynamic_pb.TopicListReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.TopicListReply>;

  topicList(
    request: bilibili_app_dynamic_v2_dynamic_pb.TopicListReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.TopicListReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.TopicListReply>;

  topicList(
    request: bilibili_app_dynamic_v2_dynamic_pb.TopicListReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.TopicListReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/TopicList',
        request,
        metadata || {},
        this.methodDescriptorTopicList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/TopicList',
    request,
    metadata || {},
    this.methodDescriptorTopicList);
  }

  methodDescriptorCampusMateLikeList = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/CampusMateLikeList',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReq,
    bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReply.deserializeBinary
  );

  campusMateLikeList(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReply>;

  campusMateLikeList(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReply>;

  campusMateLikeList(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusMateLikeListReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/CampusMateLikeList',
        request,
        metadata || {},
        this.methodDescriptorCampusMateLikeList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusMateLikeList',
    request,
    metadata || {},
    this.methodDescriptorCampusMateLikeList);
  }

  methodDescriptorCampusFeedback = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/CampusFeedback',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReq,
    bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReply.deserializeBinary
  );

  campusFeedback(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReply>;

  campusFeedback(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReply>;

  campusFeedback(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusFeedbackReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/CampusFeedback',
        request,
        metadata || {},
        this.methodDescriptorCampusFeedback,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusFeedback',
    request,
    metadata || {},
    this.methodDescriptorCampusFeedback);
  }

  methodDescriptorCampusBillboard = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/CampusBillboard',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReq,
    bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply.deserializeBinary
  );

  campusBillboard(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply>;

  campusBillboard(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply>;

  campusBillboard(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/CampusBillboard',
        request,
        metadata || {},
        this.methodDescriptorCampusBillboard,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusBillboard',
    request,
    metadata || {},
    this.methodDescriptorCampusBillboard);
  }

  methodDescriptorCampusBillboardInternal = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/CampusBillboardInternal',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.CampusBillboardInternalReq,
    bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.CampusBillboardInternalReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply.deserializeBinary
  );

  campusBillboardInternal(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusBillboardInternalReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply>;

  campusBillboardInternal(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusBillboardInternalReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply>;

  campusBillboardInternal(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusBillboardInternalReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusBillBoardReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/CampusBillboardInternal',
        request,
        metadata || {},
        this.methodDescriptorCampusBillboardInternal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusBillboardInternal',
    request,
    metadata || {},
    this.methodDescriptorCampusBillboardInternal);
  }

  methodDescriptorCampusTopicRcmdFeed = new grpcWeb.MethodDescriptor(
    '/bilibili.app.dynamic.v2.Dynamic/CampusTopicRcmdFeed',
    grpcWeb.MethodType.UNARY,
    bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReq,
    bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReply,
    (request: bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReq) => {
      return request.serializeBinary();
    },
    bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReply.deserializeBinary
  );

  campusTopicRcmdFeed(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReply>;

  campusTopicRcmdFeed(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReply) => void): grpcWeb.ClientReadableStream<bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReply>;

  campusTopicRcmdFeed(
    request: bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_dynamic_v2_dynamic_pb.CampusTopicRcmdFeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.dynamic.v2.Dynamic/CampusTopicRcmdFeed',
        request,
        metadata || {},
        this.methodDescriptorCampusTopicRcmdFeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusTopicRcmdFeed',
    request,
    metadata || {},
    this.methodDescriptorCampusTopicRcmdFeed);
  }

}

