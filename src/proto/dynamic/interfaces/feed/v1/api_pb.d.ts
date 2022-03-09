import * as jspb from 'google-protobuf'

import * as bilibili_dynamic_common_dynamic_pb from '../../../../../proto/dynamic/common/dynamic_pb';


export class CreateDynReq extends jspb.Message {
  getMeta(): bilibili_dynamic_common_dynamic_pb.UserCreateMeta | undefined;
  setMeta(value?: bilibili_dynamic_common_dynamic_pb.UserCreateMeta): CreateDynReq;
  hasMeta(): boolean;
  clearMeta(): CreateDynReq;

  getContent(): bilibili_dynamic_common_dynamic_pb.CreateContent | undefined;
  setContent(value?: bilibili_dynamic_common_dynamic_pb.CreateContent): CreateDynReq;
  hasContent(): boolean;
  clearContent(): CreateDynReq;

  getScene(): bilibili_dynamic_common_dynamic_pb.CreateScene;
  setScene(value: bilibili_dynamic_common_dynamic_pb.CreateScene): CreateDynReq;

  getPicsList(): Array<bilibili_dynamic_common_dynamic_pb.CreatePic>;
  setPicsList(value: Array<bilibili_dynamic_common_dynamic_pb.CreatePic>): CreateDynReq;
  clearPicsList(): CreateDynReq;
  addPics(value?: bilibili_dynamic_common_dynamic_pb.CreatePic, index?: number): bilibili_dynamic_common_dynamic_pb.CreatePic;

  getRepostSrc(): bilibili_dynamic_common_dynamic_pb.DynIdentity | undefined;
  setRepostSrc(value?: bilibili_dynamic_common_dynamic_pb.DynIdentity): CreateDynReq;
  hasRepostSrc(): boolean;
  clearRepostSrc(): CreateDynReq;

  getVideo(): bilibili_dynamic_common_dynamic_pb.CreateDynVideo | undefined;
  setVideo(value?: bilibili_dynamic_common_dynamic_pb.CreateDynVideo): CreateDynReq;
  hasVideo(): boolean;
  clearVideo(): CreateDynReq;

  getSketchType(): number;
  setSketchType(value: number): CreateDynReq;

  getSketch(): bilibili_dynamic_common_dynamic_pb.Sketch | undefined;
  setSketch(value?: bilibili_dynamic_common_dynamic_pb.Sketch): CreateDynReq;
  hasSketch(): boolean;
  clearSketch(): CreateDynReq;

  getProgram(): bilibili_dynamic_common_dynamic_pb.Program | undefined;
  setProgram(value?: bilibili_dynamic_common_dynamic_pb.Program): CreateDynReq;
  hasProgram(): boolean;
  clearProgram(): CreateDynReq;

  getDynTag(): bilibili_dynamic_common_dynamic_pb.CreateTag | undefined;
  setDynTag(value?: bilibili_dynamic_common_dynamic_pb.CreateTag): CreateDynReq;
  hasDynTag(): boolean;
  clearDynTag(): CreateDynReq;

  getAttachCard(): bilibili_dynamic_common_dynamic_pb.CreateAttachCard | undefined;
  setAttachCard(value?: bilibili_dynamic_common_dynamic_pb.CreateAttachCard): CreateDynReq;
  hasAttachCard(): boolean;
  clearAttachCard(): CreateDynReq;

  getOption(): bilibili_dynamic_common_dynamic_pb.CreateOption | undefined;
  setOption(value?: bilibili_dynamic_common_dynamic_pb.CreateOption): CreateDynReq;
  hasOption(): boolean;
  clearOption(): CreateDynReq;

  getTopic(): bilibili_dynamic_common_dynamic_pb.CreateTopic | undefined;
  setTopic(value?: bilibili_dynamic_common_dynamic_pb.CreateTopic): CreateDynReq;
  hasTopic(): boolean;
  clearTopic(): CreateDynReq;

  getUploadId(): string;
  setUploadId(value: string): CreateDynReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDynReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDynReq): CreateDynReq.AsObject;
  static serializeBinaryToWriter(message: CreateDynReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDynReq;
  static deserializeBinaryFromReader(message: CreateDynReq, reader: jspb.BinaryReader): CreateDynReq;
}

export namespace CreateDynReq {
  export type AsObject = {
    meta?: bilibili_dynamic_common_dynamic_pb.UserCreateMeta.AsObject,
    content?: bilibili_dynamic_common_dynamic_pb.CreateContent.AsObject,
    scene: bilibili_dynamic_common_dynamic_pb.CreateScene,
    picsList: Array<bilibili_dynamic_common_dynamic_pb.CreatePic.AsObject>,
    repostSrc?: bilibili_dynamic_common_dynamic_pb.DynIdentity.AsObject,
    video?: bilibili_dynamic_common_dynamic_pb.CreateDynVideo.AsObject,
    sketchType: number,
    sketch?: bilibili_dynamic_common_dynamic_pb.Sketch.AsObject,
    program?: bilibili_dynamic_common_dynamic_pb.Program.AsObject,
    dynTag?: bilibili_dynamic_common_dynamic_pb.CreateTag.AsObject,
    attachCard?: bilibili_dynamic_common_dynamic_pb.CreateAttachCard.AsObject,
    option?: bilibili_dynamic_common_dynamic_pb.CreateOption.AsObject,
    topic?: bilibili_dynamic_common_dynamic_pb.CreateTopic.AsObject,
    uploadId: string,
  }
}

export class CreateInitCheckReq extends jspb.Message {
  getScene(): number;
  setScene(value: number): CreateInitCheckReq;

  getMeta(): bilibili_dynamic_common_dynamic_pb.MetaDataCtrl | undefined;
  setMeta(value?: bilibili_dynamic_common_dynamic_pb.MetaDataCtrl): CreateInitCheckReq;
  hasMeta(): boolean;
  clearMeta(): CreateInitCheckReq;

  getRepost(): bilibili_dynamic_common_dynamic_pb.RepostInitCheck | undefined;
  setRepost(value?: bilibili_dynamic_common_dynamic_pb.RepostInitCheck): CreateInitCheckReq;
  hasRepost(): boolean;
  clearRepost(): CreateInitCheckReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInitCheckReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInitCheckReq): CreateInitCheckReq.AsObject;
  static serializeBinaryToWriter(message: CreateInitCheckReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInitCheckReq;
  static deserializeBinaryFromReader(message: CreateInitCheckReq, reader: jspb.BinaryReader): CreateInitCheckReq;
}

export namespace CreateInitCheckReq {
  export type AsObject = {
    scene: number,
    meta?: bilibili_dynamic_common_dynamic_pb.MetaDataCtrl.AsObject,
    repost?: bilibili_dynamic_common_dynamic_pb.RepostInitCheck.AsObject,
  }
}

export class CreatePageInfosReq extends jspb.Message {
  getTopicId(): number;
  setTopicId(value: number): CreatePageInfosReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePageInfosReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePageInfosReq): CreatePageInfosReq.AsObject;
  static serializeBinaryToWriter(message: CreatePageInfosReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePageInfosReq;
  static deserializeBinaryFromReader(message: CreatePageInfosReq, reader: jspb.BinaryReader): CreatePageInfosReq;
}

export namespace CreatePageInfosReq {
  export type AsObject = {
    topicId: number,
  }
}

export class CreatePageInfosRsp extends jspb.Message {
  getTopic(): CreatePageTopicInfo | undefined;
  setTopic(value?: CreatePageTopicInfo): CreatePageInfosRsp;
  hasTopic(): boolean;
  clearTopic(): CreatePageInfosRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePageInfosRsp.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePageInfosRsp): CreatePageInfosRsp.AsObject;
  static serializeBinaryToWriter(message: CreatePageInfosRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePageInfosRsp;
  static deserializeBinaryFromReader(message: CreatePageInfosRsp, reader: jspb.BinaryReader): CreatePageInfosRsp;
}

export namespace CreatePageInfosRsp {
  export type AsObject = {
    topic?: CreatePageTopicInfo.AsObject,
  }
}

export class CreatePageTopicInfo extends jspb.Message {
  getTopicId(): number;
  setTopicId(value: number): CreatePageTopicInfo;

  getTopicName(): string;
  setTopicName(value: string): CreatePageTopicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePageTopicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePageTopicInfo): CreatePageTopicInfo.AsObject;
  static serializeBinaryToWriter(message: CreatePageTopicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePageTopicInfo;
  static deserializeBinaryFromReader(message: CreatePageTopicInfo, reader: jspb.BinaryReader): CreatePageTopicInfo;
}

export namespace CreatePageTopicInfo {
  export type AsObject = {
    topicId: number,
    topicName: string,
  }
}

export class CreatePermissionButtonClickReq extends jspb.Message {
  getType(): DynamicButtonClickBizType;
  setType(value: DynamicButtonClickBizType): CreatePermissionButtonClickReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePermissionButtonClickReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePermissionButtonClickReq): CreatePermissionButtonClickReq.AsObject;
  static serializeBinaryToWriter(message: CreatePermissionButtonClickReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePermissionButtonClickReq;
  static deserializeBinaryFromReader(message: CreatePermissionButtonClickReq, reader: jspb.BinaryReader): CreatePermissionButtonClickReq;
}

export namespace CreatePermissionButtonClickReq {
  export type AsObject = {
    type: DynamicButtonClickBizType,
  }
}

export class CreatePermissionButtonClickRsp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePermissionButtonClickRsp.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePermissionButtonClickRsp): CreatePermissionButtonClickRsp.AsObject;
  static serializeBinaryToWriter(message: CreatePermissionButtonClickRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePermissionButtonClickRsp;
  static deserializeBinaryFromReader(message: CreatePermissionButtonClickRsp, reader: jspb.BinaryReader): CreatePermissionButtonClickRsp;
}

export namespace CreatePermissionButtonClickRsp {
  export type AsObject = {
  }
}

export class CreatePlusButtonClickReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlusButtonClickReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlusButtonClickReq): CreatePlusButtonClickReq.AsObject;
  static serializeBinaryToWriter(message: CreatePlusButtonClickReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlusButtonClickReq;
  static deserializeBinaryFromReader(message: CreatePlusButtonClickReq, reader: jspb.BinaryReader): CreatePlusButtonClickReq;
}

export namespace CreatePlusButtonClickReq {
  export type AsObject = {
  }
}

export class CreatePlusButtonClickRsp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlusButtonClickRsp.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlusButtonClickRsp): CreatePlusButtonClickRsp.AsObject;
  static serializeBinaryToWriter(message: CreatePlusButtonClickRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlusButtonClickRsp;
  static deserializeBinaryFromReader(message: CreatePlusButtonClickRsp, reader: jspb.BinaryReader): CreatePlusButtonClickRsp;
}

export namespace CreatePlusButtonClickRsp {
  export type AsObject = {
  }
}

export class DynamicButtonClickReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicButtonClickReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicButtonClickReq): DynamicButtonClickReq.AsObject;
  static serializeBinaryToWriter(message: DynamicButtonClickReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicButtonClickReq;
  static deserializeBinaryFromReader(message: DynamicButtonClickReq, reader: jspb.BinaryReader): DynamicButtonClickReq;
}

export namespace DynamicButtonClickReq {
  export type AsObject = {
  }
}

export class DynamicButtonClickRsp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicButtonClickRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicButtonClickRsp): DynamicButtonClickRsp.AsObject;
  static serializeBinaryToWriter(message: DynamicButtonClickRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicButtonClickRsp;
  static deserializeBinaryFromReader(message: DynamicButtonClickRsp, reader: jspb.BinaryReader): DynamicButtonClickRsp;
}

export namespace DynamicButtonClickRsp {
  export type AsObject = {
  }
}

export class HotSearchReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotSearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: HotSearchReq): HotSearchReq.AsObject;
  static serializeBinaryToWriter(message: HotSearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotSearchReq;
  static deserializeBinaryFromReader(message: HotSearchReq, reader: jspb.BinaryReader): HotSearchReq;
}

export namespace HotSearchReq {
  export type AsObject = {
  }
}

export class HotSearchRsp extends jspb.Message {
  getItemsList(): Array<HotSearchRsp.Item>;
  setItemsList(value: Array<HotSearchRsp.Item>): HotSearchRsp;
  clearItemsList(): HotSearchRsp;
  addItems(value?: HotSearchRsp.Item, index?: number): HotSearchRsp.Item;

  getVersion(): string;
  setVersion(value: string): HotSearchRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotSearchRsp.AsObject;
  static toObject(includeInstance: boolean, msg: HotSearchRsp): HotSearchRsp.AsObject;
  static serializeBinaryToWriter(message: HotSearchRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotSearchRsp;
  static deserializeBinaryFromReader(message: HotSearchRsp, reader: jspb.BinaryReader): HotSearchRsp;
}

export namespace HotSearchRsp {
  export type AsObject = {
    itemsList: Array<HotSearchRsp.Item.AsObject>,
    version: string,
  }

  export class Item extends jspb.Message {
    getWords(): string;
    setWords(value: string): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      words: string,
    }
  }

}

export class ReserveButtonClickReq extends jspb.Message {
  getUid(): number;
  setUid(value: number): ReserveButtonClickReq;

  getReserveId(): number;
  setReserveId(value: number): ReserveButtonClickReq;

  getReserveTotal(): number;
  setReserveTotal(value: number): ReserveButtonClickReq;

  getCurBtnStatus(): number;
  setCurBtnStatus(value: number): ReserveButtonClickReq;

  getSpmid(): string;
  setSpmid(value: string): ReserveButtonClickReq;

  getDynId(): number;
  setDynId(value: number): ReserveButtonClickReq;

  getDynType(): number;
  setDynType(value: number): ReserveButtonClickReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveButtonClickReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveButtonClickReq): ReserveButtonClickReq.AsObject;
  static serializeBinaryToWriter(message: ReserveButtonClickReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveButtonClickReq;
  static deserializeBinaryFromReader(message: ReserveButtonClickReq, reader: jspb.BinaryReader): ReserveButtonClickReq;
}

export namespace ReserveButtonClickReq {
  export type AsObject = {
    uid: number,
    reserveId: number,
    reserveTotal: number,
    curBtnStatus: number,
    spmid: string,
    dynId: number,
    dynType: number,
  }
}

export class ReserveButtonClickResp extends jspb.Message {
  getFinalBtnStatus(): ReserveButtonStatus;
  setFinalBtnStatus(value: ReserveButtonStatus): ReserveButtonClickResp;

  getBtnMode(): ReserveButtonMode;
  setBtnMode(value: ReserveButtonMode): ReserveButtonClickResp;

  getReserveUpdate(): number;
  setReserveUpdate(value: number): ReserveButtonClickResp;

  getDescUpdate(): string;
  setDescUpdate(value: string): ReserveButtonClickResp;

  getHasActivity(): boolean;
  setHasActivity(value: boolean): ReserveButtonClickResp;

  getActivityUrl(): string;
  setActivityUrl(value: string): ReserveButtonClickResp;

  getToast(): string;
  setToast(value: string): ReserveButtonClickResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReserveButtonClickResp.AsObject;
  static toObject(includeInstance: boolean, msg: ReserveButtonClickResp): ReserveButtonClickResp.AsObject;
  static serializeBinaryToWriter(message: ReserveButtonClickResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReserveButtonClickResp;
  static deserializeBinaryFromReader(message: ReserveButtonClickResp, reader: jspb.BinaryReader): ReserveButtonClickResp;
}

export namespace ReserveButtonClickResp {
  export type AsObject = {
    finalBtnStatus: ReserveButtonStatus,
    btnMode: ReserveButtonMode,
    reserveUpdate: number,
    descUpdate: string,
    hasActivity: boolean,
    activityUrl: string,
    toast: string,
  }
}

export class SubmitCheckReq extends jspb.Message {
  getContent(): bilibili_dynamic_common_dynamic_pb.CreateContent | undefined;
  setContent(value?: bilibili_dynamic_common_dynamic_pb.CreateContent): SubmitCheckReq;
  hasContent(): boolean;
  clearContent(): SubmitCheckReq;

  getPicsList(): Array<bilibili_dynamic_common_dynamic_pb.CreatePic>;
  setPicsList(value: Array<bilibili_dynamic_common_dynamic_pb.CreatePic>): SubmitCheckReq;
  clearPicsList(): SubmitCheckReq;
  addPics(value?: bilibili_dynamic_common_dynamic_pb.CreatePic, index?: number): bilibili_dynamic_common_dynamic_pb.CreatePic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitCheckReq.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitCheckReq): SubmitCheckReq.AsObject;
  static serializeBinaryToWriter(message: SubmitCheckReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitCheckReq;
  static deserializeBinaryFromReader(message: SubmitCheckReq, reader: jspb.BinaryReader): SubmitCheckReq;
}

export namespace SubmitCheckReq {
  export type AsObject = {
    content?: bilibili_dynamic_common_dynamic_pb.CreateContent.AsObject,
    picsList: Array<bilibili_dynamic_common_dynamic_pb.CreatePic.AsObject>,
  }
}

export class SubmitCheckRsp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitCheckRsp.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitCheckRsp): SubmitCheckRsp.AsObject;
  static serializeBinaryToWriter(message: SubmitCheckRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitCheckRsp;
  static deserializeBinaryFromReader(message: SubmitCheckRsp, reader: jspb.BinaryReader): SubmitCheckRsp;
}

export namespace SubmitCheckRsp {
  export type AsObject = {
  }
}

export class SuggestReq extends jspb.Message {
  getS(): string;
  setS(value: string): SuggestReq;

  getType(): number;
  setType(value: number): SuggestReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestReq.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestReq): SuggestReq.AsObject;
  static serializeBinaryToWriter(message: SuggestReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestReq;
  static deserializeBinaryFromReader(message: SuggestReq, reader: jspb.BinaryReader): SuggestReq;
}

export namespace SuggestReq {
  export type AsObject = {
    s: string,
    type: number,
  }
}

export class SuggestRsp extends jspb.Message {
  getListList(): Array<string>;
  setListList(value: Array<string>): SuggestRsp;
  clearListList(): SuggestRsp;
  addList(value: string, index?: number): SuggestRsp;

  getTrackId(): string;
  setTrackId(value: string): SuggestRsp;

  getVersion(): string;
  setVersion(value: string): SuggestRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestRsp.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestRsp): SuggestRsp.AsObject;
  static serializeBinaryToWriter(message: SuggestRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestRsp;
  static deserializeBinaryFromReader(message: SuggestRsp, reader: jspb.BinaryReader): SuggestRsp;
}

export namespace SuggestRsp {
  export type AsObject = {
    listList: Array<string>,
    trackId: string,
    version: string,
  }
}

export enum DynamicButtonClickBizType { 
  DYNAMIC_BUTTON_CLICK_BIZ_TYPE_NONE = 0,
  DYNAMIC_BUTTON_CLICK_BIZ_TYPE_LIVE = 1,
  DYNAMIC_BUTTON_CLICK_BIZ_TYPE_DYN_UP = 2,
}
export enum ReserveButtonMode { 
  RESERVE_BUTTON_MODE_NONE = 0,
  RESERVE_BUTTON_MODE_RESERVE = 1,
  RESERVE_BUTTON_MODE_UP_CANCEL = 2,
}
export enum ReserveButtonStatus { 
  RESERVE_BUTTON_STATUS_NONE = 0,
  RESERVE_BUTTON_STATUS_UNCHECK = 1,
  RESERVE_BUTTON_STATUS_CHECK = 2,
}
