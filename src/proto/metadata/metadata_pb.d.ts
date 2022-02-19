import * as jspb from 'google-protobuf'



export class Metadata extends jspb.Message {
  getAccessKey(): string;
  setAccessKey(value: string): Metadata;

  getMobiApp(): string;
  setMobiApp(value: string): Metadata;

  getDevice(): string;
  setDevice(value: string): Metadata;

  getBuild(): number;
  setBuild(value: number): Metadata;

  getChannel(): string;
  setChannel(value: string): Metadata;

  getBuvid(): string;
  setBuvid(value: string): Metadata;

  getPlatform(): string;
  setPlatform(value: string): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    accessKey: string,
    mobiApp: string,
    device: string,
    build: number,
    channel: string,
    buvid: string,
    platform: string,
  }
}

