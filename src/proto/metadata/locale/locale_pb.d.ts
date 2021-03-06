import * as jspb from 'google-protobuf'



export class Locale extends jspb.Message {
  getCLocale(): LocaleIds | undefined;
  setCLocale(value?: LocaleIds): Locale;
  hasCLocale(): boolean;
  clearCLocale(): Locale;

  getSLocale(): LocaleIds | undefined;
  setSLocale(value?: LocaleIds): Locale;
  hasSLocale(): boolean;
  clearSLocale(): Locale;

  getSimCode(): string;
  setSimCode(value: string): Locale;

  getTimezone(): string;
  setTimezone(value: string): Locale;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Locale.AsObject;
  static toObject(includeInstance: boolean, msg: Locale): Locale.AsObject;
  static serializeBinaryToWriter(message: Locale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Locale;
  static deserializeBinaryFromReader(message: Locale, reader: jspb.BinaryReader): Locale;
}

export namespace Locale {
  export type AsObject = {
    cLocale?: LocaleIds.AsObject,
    sLocale?: LocaleIds.AsObject,
    simCode: string,
    timezone: string,
  }
}

export class LocaleIds extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): LocaleIds;

  getScript(): string;
  setScript(value: string): LocaleIds;

  getRegion(): string;
  setRegion(value: string): LocaleIds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleIds.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleIds): LocaleIds.AsObject;
  static serializeBinaryToWriter(message: LocaleIds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleIds;
  static deserializeBinaryFromReader(message: LocaleIds, reader: jspb.BinaryReader): LocaleIds;
}

export namespace LocaleIds {
  export type AsObject = {
    language: string,
    script: string,
    region: string,
  }
}

