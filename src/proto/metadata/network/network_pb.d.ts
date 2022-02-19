import * as jspb from 'google-protobuf'



export class Network extends jspb.Message {
  getType(): NetworkType;
  setType(value: NetworkType): Network;

  getTf(): TFType;
  setTf(value: TFType): Network;

  getOid(): string;
  setOid(value: string): Network;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    type: NetworkType,
    tf: TFType,
    oid: string,
  }
}

export enum NetworkType { 
  NT_UNKNOWN = 0,
  WIFI = 1,
  CELLULAR = 2,
  OFFLINE = 3,
  OTHERNET = 4,
  ETHERNET = 5,
}
export enum TFType { 
  TF_UNKNOWN = 0,
  U_CARD = 1,
  U_PKG = 2,
  C_CARD = 3,
  C_PKG = 4,
  T_CARD = 5,
  T_PKG = 6,
}
