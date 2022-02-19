import * as jspb from 'google-protobuf'



export class Exp extends jspb.Message {
  getId(): number;
  setId(value: number): Exp;

  getBucket(): number;
  setBucket(value: number): Exp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exp.AsObject;
  static toObject(includeInstance: boolean, msg: Exp): Exp.AsObject;
  static serializeBinaryToWriter(message: Exp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exp;
  static deserializeBinaryFromReader(message: Exp, reader: jspb.BinaryReader): Exp;
}

export namespace Exp {
  export type AsObject = {
    id: number,
    bucket: number,
  }
}

export class Exps extends jspb.Message {
  getExpsList(): Array<Exp>;
  setExpsList(value: Array<Exp>): Exps;
  clearExpsList(): Exps;
  addExps(value?: Exp, index?: number): Exp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exps.AsObject;
  static toObject(includeInstance: boolean, msg: Exps): Exps.AsObject;
  static serializeBinaryToWriter(message: Exps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exps;
  static deserializeBinaryFromReader(message: Exps, reader: jspb.BinaryReader): Exps;
}

export namespace Exps {
  export type AsObject = {
    expsList: Array<Exp.AsObject>,
  }
}

