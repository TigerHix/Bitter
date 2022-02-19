import * as jspb from 'google-protobuf'



export class Restriction extends jspb.Message {
  getTeenagersMode(): boolean;
  setTeenagersMode(value: boolean): Restriction;

  getLessonsMode(): boolean;
  setLessonsMode(value: boolean): Restriction;

  getMode(): ModeType;
  setMode(value: ModeType): Restriction;

  getReview(): boolean;
  setReview(value: boolean): Restriction;

  getDisableRcmd(): boolean;
  setDisableRcmd(value: boolean): Restriction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Restriction.AsObject;
  static toObject(includeInstance: boolean, msg: Restriction): Restriction.AsObject;
  static serializeBinaryToWriter(message: Restriction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Restriction;
  static deserializeBinaryFromReader(message: Restriction, reader: jspb.BinaryReader): Restriction;
}

export namespace Restriction {
  export type AsObject = {
    teenagersMode: boolean,
    lessonsMode: boolean,
    mode: ModeType,
    review: boolean,
    disableRcmd: boolean,
  }
}

export enum ModeType { 
  NORMAL = 0,
  TEENAGERS = 1,
  LESSONS = 2,
}
