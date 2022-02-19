import * as jspb from 'google-protobuf'



export class FawkesReply extends jspb.Message {
  getConfig(): string;
  setConfig(value: string): FawkesReply;

  getFf(): string;
  setFf(value: string): FawkesReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FawkesReply.AsObject;
  static toObject(includeInstance: boolean, msg: FawkesReply): FawkesReply.AsObject;
  static serializeBinaryToWriter(message: FawkesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FawkesReply;
  static deserializeBinaryFromReader(message: FawkesReply, reader: jspb.BinaryReader): FawkesReply;
}

export namespace FawkesReply {
  export type AsObject = {
    config: string,
    ff: string,
  }
}

export class FawkesReq extends jspb.Message {
  getAppkey(): string;
  setAppkey(value: string): FawkesReq;

  getEnv(): string;
  setEnv(value: string): FawkesReq;

  getSessionId(): string;
  setSessionId(value: string): FawkesReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FawkesReq.AsObject;
  static toObject(includeInstance: boolean, msg: FawkesReq): FawkesReq.AsObject;
  static serializeBinaryToWriter(message: FawkesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FawkesReq;
  static deserializeBinaryFromReader(message: FawkesReq, reader: jspb.BinaryReader): FawkesReq;
}

export namespace FawkesReq {
  export type AsObject = {
    appkey: string,
    env: string,
    sessionId: string,
  }
}

