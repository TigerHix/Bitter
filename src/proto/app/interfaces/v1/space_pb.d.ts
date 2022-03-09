import * as jspb from 'google-protobuf'

import * as bilibili_app_archive_middleware_v1_preload_pb from '../../../../proto/app/archive/middleware/v1/preload_pb';
import * as bilibili_app_archive_v1_archive_pb from '../../../../proto/app/archive/v1/archive_pb';
import * as bilibili_app_dynamic_v2_dynamic_pb from '../../../../proto/app/dynamic/v2/dynamic_pb';


export class Arc extends jspb.Message {
  getArchive(): bilibili_app_archive_v1_archive_pb.Arc | undefined;
  setArchive(value?: bilibili_app_archive_v1_archive_pb.Arc): Arc;
  hasArchive(): boolean;
  clearArchive(): Arc;

  getUri(): string;
  setUri(value: string): Arc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Arc.AsObject;
  static toObject(includeInstance: boolean, msg: Arc): Arc.AsObject;
  static serializeBinaryToWriter(message: Arc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Arc;
  static deserializeBinaryFromReader(message: Arc, reader: jspb.BinaryReader): Arc;
}

export namespace Arc {
  export type AsObject = {
    archive?: bilibili_app_archive_v1_archive_pb.Arc.AsObject,
    uri: string,
  }
}

export class Dynamic extends jspb.Message {
  getDynamic(): bilibili_app_dynamic_v2_dynamic_pb.DynamicItem | undefined;
  setDynamic(value?: bilibili_app_dynamic_v2_dynamic_pb.DynamicItem): Dynamic;
  hasDynamic(): boolean;
  clearDynamic(): Dynamic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dynamic.AsObject;
  static toObject(includeInstance: boolean, msg: Dynamic): Dynamic.AsObject;
  static serializeBinaryToWriter(message: Dynamic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dynamic;
  static deserializeBinaryFromReader(message: Dynamic, reader: jspb.BinaryReader): Dynamic;
}

export namespace Dynamic {
  export type AsObject = {
    dynamic?: bilibili_app_dynamic_v2_dynamic_pb.DynamicItem.AsObject,
  }
}

export class OfficialVerify extends jspb.Message {
  getType(): number;
  setType(value: number): OfficialVerify;

  getDesc(): string;
  setDesc(value: string): OfficialVerify;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialVerify.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialVerify): OfficialVerify.AsObject;
  static serializeBinaryToWriter(message: OfficialVerify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialVerify;
  static deserializeBinaryFromReader(message: OfficialVerify, reader: jspb.BinaryReader): OfficialVerify;
}

export namespace OfficialVerify {
  export type AsObject = {
    type: number,
    desc: string,
  }
}

export class SearchTabReply extends jspb.Message {
  getFocus(): number;
  setFocus(value: number): SearchTabReply;

  getTabsList(): Array<Tab>;
  setTabsList(value: Array<Tab>): SearchTabReply;
  clearTabsList(): SearchTabReply;
  addTabs(value?: Tab, index?: number): Tab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTabReply.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTabReply): SearchTabReply.AsObject;
  static serializeBinaryToWriter(message: SearchTabReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTabReply;
  static deserializeBinaryFromReader(message: SearchTabReply, reader: jspb.BinaryReader): SearchTabReply;
}

export namespace SearchTabReply {
  export type AsObject = {
    focus: number,
    tabsList: Array<Tab.AsObject>,
  }
}

export class SearchTabReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): SearchTabReq;

  getMid(): number;
  setMid(value: number): SearchTabReq;

  getFrom(): number;
  setFrom(value: number): SearchTabReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTabReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTabReq): SearchTabReq.AsObject;
  static serializeBinaryToWriter(message: SearchTabReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTabReq;
  static deserializeBinaryFromReader(message: SearchTabReq, reader: jspb.BinaryReader): SearchTabReq;
}

export namespace SearchTabReq {
  export type AsObject = {
    keyword: string,
    mid: number,
    from: number,
  }
}

export class SearchArchiveReply extends jspb.Message {
  getArchivesList(): Array<Arc>;
  setArchivesList(value: Array<Arc>): SearchArchiveReply;
  clearArchivesList(): SearchArchiveReply;
  addArchives(value?: Arc, index?: number): Arc;

  getTotal(): number;
  setTotal(value: number): SearchArchiveReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchArchiveReply.AsObject;
  static toObject(includeInstance: boolean, msg: SearchArchiveReply): SearchArchiveReply.AsObject;
  static serializeBinaryToWriter(message: SearchArchiveReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchArchiveReply;
  static deserializeBinaryFromReader(message: SearchArchiveReply, reader: jspb.BinaryReader): SearchArchiveReply;
}

export namespace SearchArchiveReply {
  export type AsObject = {
    archivesList: Array<Arc.AsObject>,
    total: number,
  }
}

export class SearchArchiveReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): SearchArchiveReq;

  getMid(): number;
  setMid(value: number): SearchArchiveReq;

  getPn(): number;
  setPn(value: number): SearchArchiveReq;

  getPs(): number;
  setPs(value: number): SearchArchiveReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): SearchArchiveReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): SearchArchiveReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchArchiveReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchArchiveReq): SearchArchiveReq.AsObject;
  static serializeBinaryToWriter(message: SearchArchiveReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchArchiveReq;
  static deserializeBinaryFromReader(message: SearchArchiveReq, reader: jspb.BinaryReader): SearchArchiveReq;
}

export namespace SearchArchiveReq {
  export type AsObject = {
    keyword: string,
    mid: number,
    pn: number,
    ps: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class SearchDynamicReply extends jspb.Message {
  getDynamicsList(): Array<Dynamic>;
  setDynamicsList(value: Array<Dynamic>): SearchDynamicReply;
  clearDynamicsList(): SearchDynamicReply;
  addDynamics(value?: Dynamic, index?: number): Dynamic;

  getTotal(): number;
  setTotal(value: number): SearchDynamicReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchDynamicReply.AsObject;
  static toObject(includeInstance: boolean, msg: SearchDynamicReply): SearchDynamicReply.AsObject;
  static serializeBinaryToWriter(message: SearchDynamicReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchDynamicReply;
  static deserializeBinaryFromReader(message: SearchDynamicReply, reader: jspb.BinaryReader): SearchDynamicReply;
}

export namespace SearchDynamicReply {
  export type AsObject = {
    dynamicsList: Array<Dynamic.AsObject>,
    total: number,
  }
}

export class SearchDynamicReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): SearchDynamicReq;

  getMid(): number;
  setMid(value: number): SearchDynamicReq;

  getPn(): number;
  setPn(value: number): SearchDynamicReq;

  getPs(): number;
  setPs(value: number): SearchDynamicReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): SearchDynamicReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): SearchDynamicReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchDynamicReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchDynamicReq): SearchDynamicReq.AsObject;
  static serializeBinaryToWriter(message: SearchDynamicReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchDynamicReq;
  static deserializeBinaryFromReader(message: SearchDynamicReq, reader: jspb.BinaryReader): SearchDynamicReq;
}

export namespace SearchDynamicReq {
  export type AsObject = {
    keyword: string,
    mid: number,
    pn: number,
    ps: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class Tab extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Tab;

  getUri(): string;
  setUri(value: string): Tab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tab.AsObject;
  static toObject(includeInstance: boolean, msg: Tab): Tab.AsObject;
  static serializeBinaryToWriter(message: Tab, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tab;
  static deserializeBinaryFromReader(message: Tab, reader: jspb.BinaryReader): Tab;
}

export namespace Tab {
  export type AsObject = {
    title: string,
    uri: string,
  }
}

export enum From { 
  ARCHIVETAB = 0,
  DYNAMICTAB = 1,
}
