/**
 * @fileoverview gRPC-Web generated client stub for bilibili.app.dynamic.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var bilibili_app_archive_middleware_v1_preload_pb = require('../../../../proto/app/archive/middleware/v1/preload_pb.js')
const proto = {};
proto.bilibili = {};
proto.bilibili.app = {};
proto.bilibili.app.dynamic = {};
proto.bilibili.app.dynamic.v2 = require('./dynamic_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.bilibili.app.dynamic.v2.DynamicClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynVideoReq,
 *   !proto.bilibili.app.dynamic.v2.DynVideoReply>}
 */
const methodDescriptor_Dynamic_DynVideo = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynVideo',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynVideoReq,
  proto.bilibili.app.dynamic.v2.DynVideoReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynVideoReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynVideoReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynVideoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynVideoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynVideoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynVideo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideo',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynVideo,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynVideoReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynVideoReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynVideo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideo',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynVideo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynAllReq,
 *   !proto.bilibili.app.dynamic.v2.DynAllReply>}
 */
const methodDescriptor_Dynamic_DynAll = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynAll',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynAllReq,
  proto.bilibili.app.dynamic.v2.DynAllReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynAllReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynAllReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynAllReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynAllReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynAllReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAll',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynAll,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynAllReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynAllReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAll',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynDetailsReq,
 *   !proto.bilibili.app.dynamic.v2.DynDetailsReply>}
 */
const methodDescriptor_Dynamic_DynDetails = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynDetails',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynDetailsReq,
  proto.bilibili.app.dynamic.v2.DynDetailsReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynDetailsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynDetailsReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynDetailsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynDetailsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynDetailsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynDetails',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynDetails,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynDetailsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynDetailsReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynDetails',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynVideoPersonalReq,
 *   !proto.bilibili.app.dynamic.v2.DynVideoPersonalReply>}
 */
const methodDescriptor_Dynamic_DynVideoPersonal = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynVideoPersonal',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynVideoPersonalReq,
  proto.bilibili.app.dynamic.v2.DynVideoPersonalReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynVideoPersonalReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynVideoPersonalReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynVideoPersonalReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynVideoPersonalReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynVideoPersonalReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynVideoPersonal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideoPersonal',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynVideoPersonal,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynVideoPersonalReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynVideoPersonalReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynVideoPersonal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideoPersonal',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynVideoPersonal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynVideoUpdOffsetReq,
 *   !proto.bilibili.app.dynamic.v2.NoReply>}
 */
const methodDescriptor_Dynamic_DynVideoUpdOffset = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynVideoUpdOffset',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynVideoUpdOffsetReq,
  proto.bilibili.app.dynamic.v2.NoReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynVideoUpdOffsetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.NoReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynVideoUpdOffsetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.NoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.NoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynVideoUpdOffset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideoUpdOffset',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynVideoUpdOffset,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynVideoUpdOffsetReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.NoReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynVideoUpdOffset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVideoUpdOffset',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynVideoUpdOffset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReq,
 *   !proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReply>}
 */
const methodDescriptor_Dynamic_DynAdditionCommonFollow = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynAdditionCommonFollow',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReq,
  proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynAdditionCommonFollow =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAdditionCommonFollow',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynAdditionCommonFollow,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynAdditionCommonFollowReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynAdditionCommonFollow =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAdditionCommonFollow',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynAdditionCommonFollow);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynThumbReq,
 *   !proto.bilibili.app.dynamic.v2.NoReply>}
 */
const methodDescriptor_Dynamic_DynThumb = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynThumb',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynThumbReq,
  proto.bilibili.app.dynamic.v2.NoReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynThumbReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.NoReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynThumbReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.NoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.NoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynThumb =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynThumb',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynThumb,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynThumbReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.NoReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynThumb =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynThumb',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynThumb);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynFakeCardReq,
 *   !proto.bilibili.app.dynamic.v2.DynFakeCardReply>}
 */
const methodDescriptor_Dynamic_DynFakeCard = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynFakeCard',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynFakeCardReq,
  proto.bilibili.app.dynamic.v2.DynFakeCardReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynFakeCardReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynFakeCardReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynFakeCardReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynFakeCardReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynFakeCardReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynFakeCard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynFakeCard',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynFakeCard,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynFakeCardReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynFakeCardReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynFakeCard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynFakeCard',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynFakeCard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReq,
 *   !proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReply>}
 */
const methodDescriptor_Dynamic_DynRcmdUpExchange = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynRcmdUpExchange',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReq,
  proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynRcmdUpExchange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynRcmdUpExchange',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynRcmdUpExchange,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynRcmdUpExchangeReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynRcmdUpExchange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynRcmdUpExchange',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynRcmdUpExchange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynAllPersonalReq,
 *   !proto.bilibili.app.dynamic.v2.DynAllPersonalReply>}
 */
const methodDescriptor_Dynamic_DynAllPersonal = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynAllPersonal',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynAllPersonalReq,
  proto.bilibili.app.dynamic.v2.DynAllPersonalReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynAllPersonalReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynAllPersonalReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynAllPersonalReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynAllPersonalReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynAllPersonalReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynAllPersonal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAllPersonal',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynAllPersonal,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynAllPersonalReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynAllPersonalReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynAllPersonal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAllPersonal',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynAllPersonal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynAllUpdOffsetReq,
 *   !proto.bilibili.app.dynamic.v2.NoReply>}
 */
const methodDescriptor_Dynamic_DynAllUpdOffset = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynAllUpdOffset',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynAllUpdOffsetReq,
  proto.bilibili.app.dynamic.v2.NoReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynAllUpdOffsetReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.NoReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynAllUpdOffsetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.NoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.NoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynAllUpdOffset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAllUpdOffset',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynAllUpdOffset,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynAllUpdOffsetReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.NoReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynAllUpdOffset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynAllUpdOffset',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynAllUpdOffset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynVoteReq,
 *   !proto.bilibili.app.dynamic.v2.DynVoteReply>}
 */
const methodDescriptor_Dynamic_DynVote = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynVote',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynVoteReq,
  proto.bilibili.app.dynamic.v2.DynVoteReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynVoteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynVoteReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynVoteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynVoteReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynVoteReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynVote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVote',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynVote,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynVoteReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynVoteReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynVote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynVote',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynVote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReq,
 *   !proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReply>}
 */
const methodDescriptor_Dynamic_DynMixUpListViewMore = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynMixUpListViewMore',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReq,
  proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynMixUpListViewMore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynMixUpListViewMore',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynMixUpListViewMore,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynMixUpListViewMoreReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynMixUpListViewMore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynMixUpListViewMore',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynMixUpListViewMore);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynLightReq,
 *   !proto.bilibili.app.dynamic.v2.DynLightReply>}
 */
const methodDescriptor_Dynamic_DynLight = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynLight',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynLightReq,
  proto.bilibili.app.dynamic.v2.DynLightReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynLightReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynLightReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynLightReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynLightReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynLightReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynLight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynLight',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynLight,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynLightReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynLightReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynLight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynLight',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynLight);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynDetailReq,
 *   !proto.bilibili.app.dynamic.v2.DynDetailReply>}
 */
const methodDescriptor_Dynamic_DynDetail = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynDetail',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynDetailReq,
  proto.bilibili.app.dynamic.v2.DynDetailReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynDetailReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynDetailReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynDetailReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynDetailReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynDetailReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynDetail',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynDetail,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynDetailReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynDetailReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynDetail',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynDetail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.LikeListReq,
 *   !proto.bilibili.app.dynamic.v2.LikeListReply>}
 */
const methodDescriptor_Dynamic_LikeList = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/LikeList',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.LikeListReq,
  proto.bilibili.app.dynamic.v2.LikeListReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.LikeListReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.LikeListReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.LikeListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.LikeListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.LikeListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.likeList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/LikeList',
      request,
      metadata || {},
      methodDescriptor_Dynamic_LikeList,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.LikeListReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.LikeListReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.likeList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/LikeList',
      request,
      metadata || {},
      methodDescriptor_Dynamic_LikeList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.RepostListReq,
 *   !proto.bilibili.app.dynamic.v2.RepostListRsp>}
 */
const methodDescriptor_Dynamic_RepostList = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/RepostList',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.RepostListReq,
  proto.bilibili.app.dynamic.v2.RepostListRsp,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.RepostListReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.RepostListRsp.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.RepostListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.RepostListRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.RepostListRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.repostList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/RepostList',
      request,
      metadata || {},
      methodDescriptor_Dynamic_RepostList,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.RepostListReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.RepostListRsp>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.repostList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/RepostList',
      request,
      metadata || {},
      methodDescriptor_Dynamic_RepostList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynSpaceReq,
 *   !proto.bilibili.app.dynamic.v2.DynSpaceRsp>}
 */
const methodDescriptor_Dynamic_DynSpace = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynSpace',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynSpaceReq,
  proto.bilibili.app.dynamic.v2.DynSpaceRsp,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynSpaceReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynSpaceRsp.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynSpaceReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynSpaceRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynSpaceRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSpace',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynSpace,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynSpaceReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynSpaceRsp>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSpace',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynSpace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynRcmdReq,
 *   !proto.bilibili.app.dynamic.v2.DynRcmdReply>}
 */
const methodDescriptor_Dynamic_DynUnLoginRcmd = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynUnLoginRcmd',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynRcmdReq,
  proto.bilibili.app.dynamic.v2.DynRcmdReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynRcmdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynRcmdReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynRcmdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynRcmdReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynRcmdReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynUnLoginRcmd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynUnLoginRcmd',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynUnLoginRcmd,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynRcmdReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynRcmdReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynUnLoginRcmd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynUnLoginRcmd',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynUnLoginRcmd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynServerDetailsReq,
 *   !proto.bilibili.app.dynamic.v2.DynServerDetailsReply>}
 */
const methodDescriptor_Dynamic_DynServerDetails = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynServerDetails',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynServerDetailsReq,
  proto.bilibili.app.dynamic.v2.DynServerDetailsReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynServerDetailsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynServerDetailsReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynServerDetailsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynServerDetailsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynServerDetailsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynServerDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynServerDetails',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynServerDetails,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynServerDetailsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynServerDetailsReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynServerDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynServerDetails',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynServerDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynSearchReq,
 *   !proto.bilibili.app.dynamic.v2.DynSearchReply>}
 */
const methodDescriptor_Dynamic_DynSearch = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynSearch',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynSearchReq,
  proto.bilibili.app.dynamic.v2.DynSearchReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynSearchReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynSearchReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynSearchReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynSearchReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynSearchReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynSearch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSearch',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynSearch,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynSearchReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynSearchReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynSearch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSearch',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynSearch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.SetDecisionReq,
 *   !proto.bilibili.app.dynamic.v2.NoReply>}
 */
const methodDescriptor_Dynamic_SetDecision = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/SetDecision',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.SetDecisionReq,
  proto.bilibili.app.dynamic.v2.NoReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.SetDecisionReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.NoReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.SetDecisionReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.NoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.NoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.setDecision =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SetDecision',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SetDecision,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.SetDecisionReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.NoReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.setDecision =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SetDecision',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SetDecision);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.AlumniDynamicsReq,
 *   !proto.bilibili.app.dynamic.v2.AlumniDynamicsReply>}
 */
const methodDescriptor_Dynamic_AlumniDynamics = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/AlumniDynamics',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.AlumniDynamicsReq,
  proto.bilibili.app.dynamic.v2.AlumniDynamicsReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.AlumniDynamicsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.AlumniDynamicsReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.AlumniDynamicsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.AlumniDynamicsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.AlumniDynamicsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.alumniDynamics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/AlumniDynamics',
      request,
      metadata || {},
      methodDescriptor_Dynamic_AlumniDynamics,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.AlumniDynamicsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.AlumniDynamicsReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.alumniDynamics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/AlumniDynamics',
      request,
      metadata || {},
      methodDescriptor_Dynamic_AlumniDynamics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.CampusRcmdReq,
 *   !proto.bilibili.app.dynamic.v2.CampusRcmdReply>}
 */
const methodDescriptor_Dynamic_CampusRcmd = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/CampusRcmd',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.CampusRcmdReq,
  proto.bilibili.app.dynamic.v2.CampusRcmdReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.CampusRcmdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.CampusRcmdReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusRcmdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.CampusRcmdReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.CampusRcmdReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.campusRcmd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRcmd',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusRcmd,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusRcmdReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.CampusRcmdReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.campusRcmd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRcmd',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusRcmd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.SubscribeCampusReq,
 *   !proto.bilibili.app.dynamic.v2.NoReply>}
 */
const methodDescriptor_Dynamic_SubscribeCampus = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/SubscribeCampus',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.SubscribeCampusReq,
  proto.bilibili.app.dynamic.v2.NoReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.SubscribeCampusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.NoReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.SubscribeCampusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.NoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.NoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.subscribeCampus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SubscribeCampus',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SubscribeCampus,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.SubscribeCampusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.NoReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.subscribeCampus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SubscribeCampus',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SubscribeCampus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.SetRecentCampusReq,
 *   !proto.bilibili.app.dynamic.v2.NoReply>}
 */
const methodDescriptor_Dynamic_SetRecentCampus = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/SetRecentCampus',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.SetRecentCampusReq,
  proto.bilibili.app.dynamic.v2.NoReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.SetRecentCampusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.NoReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.SetRecentCampusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.NoReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.NoReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.setRecentCampus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SetRecentCampus',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SetRecentCampus,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.SetRecentCampusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.NoReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.setRecentCampus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SetRecentCampus',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SetRecentCampus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynTabReq,
 *   !proto.bilibili.app.dynamic.v2.DynTabReply>}
 */
const methodDescriptor_Dynamic_DynTab = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynTab',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynTabReq,
  proto.bilibili.app.dynamic.v2.DynTabReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynTabReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynTabReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynTabReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynTabReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynTabReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynTab =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynTab',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynTab,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynTabReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynTabReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynTab =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynTab',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynTab);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.SchoolSearchReq,
 *   !proto.bilibili.app.dynamic.v2.SchoolSearchReply>}
 */
const methodDescriptor_Dynamic_SchoolSearch = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/SchoolSearch',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.SchoolSearchReq,
  proto.bilibili.app.dynamic.v2.SchoolSearchReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.SchoolSearchReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.SchoolSearchReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.SchoolSearchReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.SchoolSearchReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.SchoolSearchReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.schoolSearch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SchoolSearch',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SchoolSearch,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.SchoolSearchReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.SchoolSearchReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.schoolSearch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SchoolSearch',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SchoolSearch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.SchoolRecommendReq,
 *   !proto.bilibili.app.dynamic.v2.SchoolRecommendReply>}
 */
const methodDescriptor_Dynamic_SchoolRecommend = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/SchoolRecommend',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.SchoolRecommendReq,
  proto.bilibili.app.dynamic.v2.SchoolRecommendReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.SchoolRecommendReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.SchoolRecommendReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.SchoolRecommendReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.SchoolRecommendReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.SchoolRecommendReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.schoolRecommend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SchoolRecommend',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SchoolRecommend,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.SchoolRecommendReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.SchoolRecommendReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.schoolRecommend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/SchoolRecommend',
      request,
      metadata || {},
      methodDescriptor_Dynamic_SchoolRecommend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReq,
 *   !proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReply>}
 */
const methodDescriptor_Dynamic_DynSpaceSearchDetails = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/DynSpaceSearchDetails',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReq,
  proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.dynSpaceSearchDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSpaceSearchDetails',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynSpaceSearchDetails,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.DynSpaceSearchDetailsReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.dynSpaceSearchDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/DynSpaceSearchDetails',
      request,
      metadata || {},
      methodDescriptor_Dynamic_DynSpaceSearchDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.OfficialAccountsReq,
 *   !proto.bilibili.app.dynamic.v2.OfficialAccountsReply>}
 */
const methodDescriptor_Dynamic_OfficialAccounts = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/OfficialAccounts',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.OfficialAccountsReq,
  proto.bilibili.app.dynamic.v2.OfficialAccountsReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.OfficialAccountsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.OfficialAccountsReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.OfficialAccountsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.OfficialAccountsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.OfficialAccountsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.officialAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/OfficialAccounts',
      request,
      metadata || {},
      methodDescriptor_Dynamic_OfficialAccounts,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.OfficialAccountsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.OfficialAccountsReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.officialAccounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/OfficialAccounts',
      request,
      metadata || {},
      methodDescriptor_Dynamic_OfficialAccounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.OfficialDynamicsReq,
 *   !proto.bilibili.app.dynamic.v2.OfficialDynamicsReply>}
 */
const methodDescriptor_Dynamic_OfficialDynamics = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/OfficialDynamics',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.OfficialDynamicsReq,
  proto.bilibili.app.dynamic.v2.OfficialDynamicsReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.OfficialDynamicsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.OfficialDynamicsReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.OfficialDynamicsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.OfficialDynamicsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.OfficialDynamicsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.officialDynamics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/OfficialDynamics',
      request,
      metadata || {},
      methodDescriptor_Dynamic_OfficialDynamics,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.OfficialDynamicsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.OfficialDynamicsReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.officialDynamics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/OfficialDynamics',
      request,
      metadata || {},
      methodDescriptor_Dynamic_OfficialDynamics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.CampusRedDotReq,
 *   !proto.bilibili.app.dynamic.v2.CampusRedDotReply>}
 */
const methodDescriptor_Dynamic_CampusRedDot = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/CampusRedDot',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.CampusRedDotReq,
  proto.bilibili.app.dynamic.v2.CampusRedDotReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.CampusRedDotReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.CampusRedDotReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusRedDotReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.CampusRedDotReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.CampusRedDotReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.campusRedDot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRedDot',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusRedDot,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusRedDotReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.CampusRedDotReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.campusRedDot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRedDot',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusRedDot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.CampusRcmdFeedReq,
 *   !proto.bilibili.app.dynamic.v2.CampusRcmdFeedReply>}
 */
const methodDescriptor_Dynamic_CampusRcmdFeed = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/CampusRcmdFeed',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.CampusRcmdFeedReq,
  proto.bilibili.app.dynamic.v2.CampusRcmdFeedReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.CampusRcmdFeedReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.CampusRcmdFeedReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusRcmdFeedReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.CampusRcmdFeedReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.CampusRcmdFeedReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.campusRcmdFeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRcmdFeed',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusRcmdFeed,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusRcmdFeedReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.CampusRcmdFeedReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.campusRcmdFeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusRcmdFeed',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusRcmdFeed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.TopicSquareReq,
 *   !proto.bilibili.app.dynamic.v2.TopicSquareReply>}
 */
const methodDescriptor_Dynamic_TopicSquare = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/TopicSquare',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.TopicSquareReq,
  proto.bilibili.app.dynamic.v2.TopicSquareReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.TopicSquareReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.TopicSquareReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.TopicSquareReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.TopicSquareReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.TopicSquareReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.topicSquare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/TopicSquare',
      request,
      metadata || {},
      methodDescriptor_Dynamic_TopicSquare,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.TopicSquareReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.TopicSquareReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.topicSquare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/TopicSquare',
      request,
      metadata || {},
      methodDescriptor_Dynamic_TopicSquare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.TopicListReq,
 *   !proto.bilibili.app.dynamic.v2.TopicListReply>}
 */
const methodDescriptor_Dynamic_TopicList = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/TopicList',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.TopicListReq,
  proto.bilibili.app.dynamic.v2.TopicListReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.TopicListReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.TopicListReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.TopicListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.TopicListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.TopicListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.topicList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/TopicList',
      request,
      metadata || {},
      methodDescriptor_Dynamic_TopicList,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.TopicListReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.TopicListReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.topicList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/TopicList',
      request,
      metadata || {},
      methodDescriptor_Dynamic_TopicList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.CampusMateLikeListReq,
 *   !proto.bilibili.app.dynamic.v2.CampusMateLikeListReply>}
 */
const methodDescriptor_Dynamic_CampusMateLikeList = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/CampusMateLikeList',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.CampusMateLikeListReq,
  proto.bilibili.app.dynamic.v2.CampusMateLikeListReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.CampusMateLikeListReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.CampusMateLikeListReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusMateLikeListReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.CampusMateLikeListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.CampusMateLikeListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.campusMateLikeList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusMateLikeList',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusMateLikeList,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusMateLikeListReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.CampusMateLikeListReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.campusMateLikeList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusMateLikeList',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusMateLikeList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.CampusFeedbackReq,
 *   !proto.bilibili.app.dynamic.v2.CampusFeedbackReply>}
 */
const methodDescriptor_Dynamic_CampusFeedback = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/CampusFeedback',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.CampusFeedbackReq,
  proto.bilibili.app.dynamic.v2.CampusFeedbackReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.CampusFeedbackReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.CampusFeedbackReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusFeedbackReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.CampusFeedbackReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.CampusFeedbackReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.campusFeedback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusFeedback',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusFeedback,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusFeedbackReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.CampusFeedbackReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.campusFeedback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusFeedback',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusFeedback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.CampusBillBoardReq,
 *   !proto.bilibili.app.dynamic.v2.CampusBillBoardReply>}
 */
const methodDescriptor_Dynamic_CampusBillboard = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/CampusBillboard',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.CampusBillBoardReq,
  proto.bilibili.app.dynamic.v2.CampusBillBoardReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.CampusBillBoardReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.CampusBillBoardReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusBillBoardReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.CampusBillBoardReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.CampusBillBoardReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.campusBillboard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusBillboard',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusBillboard,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusBillBoardReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.CampusBillBoardReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.campusBillboard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusBillboard',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusBillboard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.CampusBillboardInternalReq,
 *   !proto.bilibili.app.dynamic.v2.CampusBillBoardReply>}
 */
const methodDescriptor_Dynamic_CampusBillboardInternal = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/CampusBillboardInternal',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.CampusBillboardInternalReq,
  proto.bilibili.app.dynamic.v2.CampusBillBoardReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.CampusBillboardInternalReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.CampusBillBoardReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusBillboardInternalReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.CampusBillBoardReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.CampusBillBoardReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.campusBillboardInternal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusBillboardInternal',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusBillboardInternal,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusBillboardInternalReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.CampusBillBoardReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.campusBillboardInternal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusBillboardInternal',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusBillboardInternal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReq,
 *   !proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReply>}
 */
const methodDescriptor_Dynamic_CampusTopicRcmdFeed = new grpc.web.MethodDescriptor(
  '/bilibili.app.dynamic.v2.Dynamic/CampusTopicRcmdFeed',
  grpc.web.MethodType.UNARY,
  proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReq,
  proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReply,
  /**
   * @param {!proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReply.deserializeBinary
);


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bilibili.app.dynamic.v2.DynamicClient.prototype.campusTopicRcmdFeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusTopicRcmdFeed',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusTopicRcmdFeed,
      callback);
};


/**
 * @param {!proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bilibili.app.dynamic.v2.CampusTopicRcmdFeedReply>}
 *     Promise that resolves to the response
 */
proto.bilibili.app.dynamic.v2.DynamicPromiseClient.prototype.campusTopicRcmdFeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bilibili.app.dynamic.v2.Dynamic/CampusTopicRcmdFeed',
      request,
      metadata || {},
      methodDescriptor_Dynamic_CampusTopicRcmdFeed);
};


module.exports = proto.bilibili.app.dynamic.v2;

