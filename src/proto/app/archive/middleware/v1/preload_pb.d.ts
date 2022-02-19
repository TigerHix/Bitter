import * as jspb from 'google-protobuf'



export class PlayerArgs extends jspb.Message {
  getQn(): number;
  setQn(value: number): PlayerArgs;

  getFnver(): number;
  setFnver(value: number): PlayerArgs;

  getFnval(): number;
  setFnval(value: number): PlayerArgs;

  getForceHost(): number;
  setForceHost(value: number): PlayerArgs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerArgs.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerArgs): PlayerArgs.AsObject;
  static serializeBinaryToWriter(message: PlayerArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerArgs;
  static deserializeBinaryFromReader(message: PlayerArgs, reader: jspb.BinaryReader): PlayerArgs;
}

export namespace PlayerArgs {
  export type AsObject = {
    qn: number,
    fnver: number,
    fnval: number,
    forceHost: number,
  }
}

