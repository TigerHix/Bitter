/**
 * @fileoverview gRPC-Web generated client stub for bilibili.app.interfaces.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as bilibili_app_interfaces_v1_space_pb from '../../../../bilibili/app/interfaces/v1/space_pb';


export class SpaceClient {
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

  methodDescriptorSearchTab = new grpcWeb.MethodDescriptor(
    '/bilibili.app.interfaces.v1.Space/SearchTab',
    grpcWeb.MethodType.UNARY,
    bilibili_app_interfaces_v1_space_pb.SearchTabReq,
    bilibili_app_interfaces_v1_space_pb.SearchTabReply,
    (request: bilibili_app_interfaces_v1_space_pb.SearchTabReq) => {
      return request.serializeBinary();
    },
    bilibili_app_interfaces_v1_space_pb.SearchTabReply.deserializeBinary
  );

  searchTab(
    request: bilibili_app_interfaces_v1_space_pb.SearchTabReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_interfaces_v1_space_pb.SearchTabReply>;

  searchTab(
    request: bilibili_app_interfaces_v1_space_pb.SearchTabReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_interfaces_v1_space_pb.SearchTabReply) => void): grpcWeb.ClientReadableStream<bilibili_app_interfaces_v1_space_pb.SearchTabReply>;

  searchTab(
    request: bilibili_app_interfaces_v1_space_pb.SearchTabReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_interfaces_v1_space_pb.SearchTabReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.interfaces.v1.Space/SearchTab',
        request,
        metadata || {},
        this.methodDescriptorSearchTab,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.interfaces.v1.Space/SearchTab',
    request,
    metadata || {},
    this.methodDescriptorSearchTab);
  }

  methodDescriptorSearchArchive = new grpcWeb.MethodDescriptor(
    '/bilibili.app.interfaces.v1.Space/SearchArchive',
    grpcWeb.MethodType.UNARY,
    bilibili_app_interfaces_v1_space_pb.SearchArchiveReq,
    bilibili_app_interfaces_v1_space_pb.SearchArchiveReply,
    (request: bilibili_app_interfaces_v1_space_pb.SearchArchiveReq) => {
      return request.serializeBinary();
    },
    bilibili_app_interfaces_v1_space_pb.SearchArchiveReply.deserializeBinary
  );

  searchArchive(
    request: bilibili_app_interfaces_v1_space_pb.SearchArchiveReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_interfaces_v1_space_pb.SearchArchiveReply>;

  searchArchive(
    request: bilibili_app_interfaces_v1_space_pb.SearchArchiveReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_interfaces_v1_space_pb.SearchArchiveReply) => void): grpcWeb.ClientReadableStream<bilibili_app_interfaces_v1_space_pb.SearchArchiveReply>;

  searchArchive(
    request: bilibili_app_interfaces_v1_space_pb.SearchArchiveReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_interfaces_v1_space_pb.SearchArchiveReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.interfaces.v1.Space/SearchArchive',
        request,
        metadata || {},
        this.methodDescriptorSearchArchive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.interfaces.v1.Space/SearchArchive',
    request,
    metadata || {},
    this.methodDescriptorSearchArchive);
  }

  methodDescriptorSearchDynamic = new grpcWeb.MethodDescriptor(
    '/bilibili.app.interfaces.v1.Space/SearchDynamic',
    grpcWeb.MethodType.UNARY,
    bilibili_app_interfaces_v1_space_pb.SearchDynamicReq,
    bilibili_app_interfaces_v1_space_pb.SearchDynamicReply,
    (request: bilibili_app_interfaces_v1_space_pb.SearchDynamicReq) => {
      return request.serializeBinary();
    },
    bilibili_app_interfaces_v1_space_pb.SearchDynamicReply.deserializeBinary
  );

  searchDynamic(
    request: bilibili_app_interfaces_v1_space_pb.SearchDynamicReq,
    metadata: grpcWeb.Metadata | null): Promise<bilibili_app_interfaces_v1_space_pb.SearchDynamicReply>;

  searchDynamic(
    request: bilibili_app_interfaces_v1_space_pb.SearchDynamicReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: bilibili_app_interfaces_v1_space_pb.SearchDynamicReply) => void): grpcWeb.ClientReadableStream<bilibili_app_interfaces_v1_space_pb.SearchDynamicReply>;

  searchDynamic(
    request: bilibili_app_interfaces_v1_space_pb.SearchDynamicReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: bilibili_app_interfaces_v1_space_pb.SearchDynamicReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/bilibili.app.interfaces.v1.Space/SearchDynamic',
        request,
        metadata || {},
        this.methodDescriptorSearchDynamic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/bilibili.app.interfaces.v1.Space/SearchDynamic',
    request,
    metadata || {},
    this.methodDescriptorSearchDynamic);
  }

}

