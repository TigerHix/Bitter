import * as jspb from 'google-protobuf'

import * as bilibili_app_dynamic_v2_dynamic_pb from '../../../proto/app/dynamic/v2/dynamic_pb';


export class AtGroup extends jspb.Message {
  getGroupType(): AtGroupType;
  setGroupType(value: AtGroupType): AtGroup;

  getGroupName(): string;
  setGroupName(value: string): AtGroup;

  getItemsList(): Array<AtItem>;
  setItemsList(value: Array<AtItem>): AtGroup;
  clearItemsList(): AtGroup;
  addItems(value?: AtItem, index?: number): AtItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtGroup.AsObject;
  static toObject(includeInstance: boolean, msg: AtGroup): AtGroup.AsObject;
  static serializeBinaryToWriter(message: AtGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtGroup;
  static deserializeBinaryFromReader(message: AtGroup, reader: jspb.BinaryReader): AtGroup;
}

export namespace AtGroup {
  export type AsObject = {
    groupType: AtGroupType,
    groupName: string,
    itemsList: Array<AtItem.AsObject>,
  }
}

export class AtItem extends jspb.Message {
  getUid(): number;
  setUid(value: number): AtItem;

  getName(): string;
  setName(value: string): AtItem;

  getFace(): string;
  setFace(value: string): AtItem;

  getFans(): number;
  setFans(value: number): AtItem;

  getOfficialVerifyType(): number;
  setOfficialVerifyType(value: number): AtItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtItem.AsObject;
  static toObject(includeInstance: boolean, msg: AtItem): AtItem.AsObject;
  static serializeBinaryToWriter(message: AtItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtItem;
  static deserializeBinaryFromReader(message: AtItem, reader: jspb.BinaryReader): AtItem;
}

export namespace AtItem {
  export type AsObject = {
    uid: number,
    name: string,
    face: string,
    fans: number,
    officialVerifyType: number,
  }
}

export class AtListReq extends jspb.Message {
  getUid(): number;
  setUid(value: number): AtListReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtListReq.AsObject;
  static toObject(includeInstance: boolean, msg: AtListReq): AtListReq.AsObject;
  static serializeBinaryToWriter(message: AtListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtListReq;
  static deserializeBinaryFromReader(message: AtListReq, reader: jspb.BinaryReader): AtListReq;
}

export namespace AtListReq {
  export type AsObject = {
    uid: number,
  }
}

export class AtListRsp extends jspb.Message {
  getGroupsList(): Array<AtGroup>;
  setGroupsList(value: Array<AtGroup>): AtListRsp;
  clearGroupsList(): AtListRsp;
  addGroups(value?: AtGroup, index?: number): AtGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtListRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AtListRsp): AtListRsp.AsObject;
  static serializeBinaryToWriter(message: AtListRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtListRsp;
  static deserializeBinaryFromReader(message: AtListRsp, reader: jspb.BinaryReader): AtListRsp;
}

export namespace AtListRsp {
  export type AsObject = {
    groupsList: Array<AtGroup.AsObject>,
  }
}

export class AtSearchReq extends jspb.Message {
  getUid(): number;
  setUid(value: number): AtSearchReq;

  getKeyword(): string;
  setKeyword(value: string): AtSearchReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtSearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: AtSearchReq): AtSearchReq.AsObject;
  static serializeBinaryToWriter(message: AtSearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtSearchReq;
  static deserializeBinaryFromReader(message: AtSearchReq, reader: jspb.BinaryReader): AtSearchReq;
}

export namespace AtSearchReq {
  export type AsObject = {
    uid: number,
    keyword: string,
  }
}

export class BottomBusiness extends jspb.Message {
  getRid(): number;
  setRid(value: number): BottomBusiness;

  getType(): number;
  setType(value: number): BottomBusiness;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BottomBusiness.AsObject;
  static toObject(includeInstance: boolean, msg: BottomBusiness): BottomBusiness.AsObject;
  static serializeBinaryToWriter(message: BottomBusiness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BottomBusiness;
  static deserializeBinaryFromReader(message: BottomBusiness, reader: jspb.BinaryReader): BottomBusiness;
}

export namespace BottomBusiness {
  export type AsObject = {
    rid: number,
    type: number,
  }
}

export class CreateActivity extends jspb.Message {
  getActivityId(): number;
  setActivityId(value: number): CreateActivity;

  getActivityState(): number;
  setActivityState(value: number): CreateActivity;

  getIsNewActivity(): number;
  setIsNewActivity(value: number): CreateActivity;

  getAction(): number;
  setAction(value: number): CreateActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateActivity.AsObject;
  static toObject(includeInstance: boolean, msg: CreateActivity): CreateActivity.AsObject;
  static serializeBinaryToWriter(message: CreateActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateActivity;
  static deserializeBinaryFromReader(message: CreateActivity, reader: jspb.BinaryReader): CreateActivity;
}

export namespace CreateActivity {
  export type AsObject = {
    activityId: number,
    activityState: number,
    isNewActivity: number,
    action: number,
  }
}

export class CreateAttachCard extends jspb.Message {
  getGoods(): CreateGoodsCard | undefined;
  setGoods(value?: CreateGoodsCard): CreateAttachCard;
  hasGoods(): boolean;
  clearGoods(): CreateAttachCard;

  getCommonCard(): CreateCommonAttachCard | undefined;
  setCommonCard(value?: CreateCommonAttachCard): CreateAttachCard;
  hasCommonCard(): boolean;
  clearCommonCard(): CreateAttachCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAttachCard.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAttachCard): CreateAttachCard.AsObject;
  static serializeBinaryToWriter(message: CreateAttachCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAttachCard;
  static deserializeBinaryFromReader(message: CreateAttachCard, reader: jspb.BinaryReader): CreateAttachCard;
}

export namespace CreateAttachCard {
  export type AsObject = {
    goods?: CreateGoodsCard.AsObject,
    commonCard?: CreateCommonAttachCard.AsObject,
  }
}

export class CreateCheckResp extends jspb.Message {
  getSetting(): PublishSetting | undefined;
  setSetting(value?: PublishSetting): CreateCheckResp;
  hasSetting(): boolean;
  clearSetting(): CreateCheckResp;

  getPermission(): UpPermission | undefined;
  setPermission(value?: UpPermission): CreateCheckResp;
  hasPermission(): boolean;
  clearPermission(): CreateCheckResp;

  getShareInfo(): ShareChannel | undefined;
  setShareInfo(value?: ShareChannel): CreateCheckResp;
  hasShareInfo(): boolean;
  clearShareInfo(): CreateCheckResp;

  getYellowBar(): PublishYellowBar | undefined;
  setYellowBar(value?: PublishYellowBar): CreateCheckResp;
  hasYellowBar(): boolean;
  clearYellowBar(): CreateCheckResp;

  getPlusRedDot(): PlusRedDot | undefined;
  setPlusRedDot(value?: PlusRedDot): CreateCheckResp;
  hasPlusRedDot(): boolean;
  clearPlusRedDot(): CreateCheckResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCheckResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCheckResp): CreateCheckResp.AsObject;
  static serializeBinaryToWriter(message: CreateCheckResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCheckResp;
  static deserializeBinaryFromReader(message: CreateCheckResp, reader: jspb.BinaryReader): CreateCheckResp;
}

export namespace CreateCheckResp {
  export type AsObject = {
    setting?: PublishSetting.AsObject,
    permission?: UpPermission.AsObject,
    shareInfo?: ShareChannel.AsObject,
    yellowBar?: PublishYellowBar.AsObject,
    plusRedDot?: PlusRedDot.AsObject,
  }
}

export class CreateCommonAttachCard extends jspb.Message {
  getType(): AttachCardType;
  setType(value: AttachCardType): CreateCommonAttachCard;

  getBizId(): number;
  setBizId(value: number): CreateCommonAttachCard;

  getReserveSource(): number;
  setReserveSource(value: number): CreateCommonAttachCard;

  getReserveLottery(): number;
  setReserveLottery(value: number): CreateCommonAttachCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommonAttachCard.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommonAttachCard): CreateCommonAttachCard.AsObject;
  static serializeBinaryToWriter(message: CreateCommonAttachCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommonAttachCard;
  static deserializeBinaryFromReader(message: CreateCommonAttachCard, reader: jspb.BinaryReader): CreateCommonAttachCard;
}

export namespace CreateCommonAttachCard {
  export type AsObject = {
    type: AttachCardType,
    bizId: number,
    reserveSource: number,
    reserveLottery: number,
  }
}

export class CreateContent extends jspb.Message {
  getContentsList(): Array<CreateContentItem>;
  setContentsList(value: Array<CreateContentItem>): CreateContent;
  clearContentsList(): CreateContent;
  addContents(value?: CreateContentItem, index?: number): CreateContentItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContent.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContent): CreateContent.AsObject;
  static serializeBinaryToWriter(message: CreateContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContent;
  static deserializeBinaryFromReader(message: CreateContent, reader: jspb.BinaryReader): CreateContent;
}

export namespace CreateContent {
  export type AsObject = {
    contentsList: Array<CreateContentItem.AsObject>,
  }
}

export class CreateContentItem extends jspb.Message {
  getRawText(): string;
  setRawText(value: string): CreateContentItem;

  getType(): ContentType;
  setType(value: ContentType): CreateContentItem;

  getBizId(): string;
  setBizId(value: string): CreateContentItem;

  getGoods(): GoodsContent | undefined;
  setGoods(value?: GoodsContent): CreateContentItem;
  hasGoods(): boolean;
  clearGoods(): CreateContentItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContentItem.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContentItem): CreateContentItem.AsObject;
  static serializeBinaryToWriter(message: CreateContentItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContentItem;
  static deserializeBinaryFromReader(message: CreateContentItem, reader: jspb.BinaryReader): CreateContentItem;
}

export namespace CreateContentItem {
  export type AsObject = {
    rawText: string,
    type: ContentType,
    bizId: string,
    goods?: GoodsContent.AsObject,
  }
}

export class CreateDynVideo extends jspb.Message {
  getRelationFrom(): string;
  setRelationFrom(value: string): CreateDynVideo;

  getBizFrom(): number;
  setBizFrom(value: number): CreateDynVideo;

  getCopyright(): number;
  setCopyright(value: number): CreateDynVideo;

  getNoPublic(): number;
  setNoPublic(value: number): CreateDynVideo;

  getNoReprint(): number;
  setNoReprint(value: number): CreateDynVideo;

  getSource(): string;
  setSource(value: string): CreateDynVideo;

  getCover(): string;
  setCover(value: string): CreateDynVideo;

  getTitle(): string;
  setTitle(value: string): CreateDynVideo;

  getTid(): number;
  setTid(value: number): CreateDynVideo;

  getTag(): string;
  setTag(value: string): CreateDynVideo;

  getDesc(): string;
  setDesc(value: string): CreateDynVideo;

  getDescFormatId(): number;
  setDescFormatId(value: number): CreateDynVideo;

  getOpenElec(): number;
  setOpenElec(value: number): CreateDynVideo;

  getDtime(): number;
  setDtime(value: number): CreateDynVideo;

  getVideosList(): Array<DynVideoMultiP>;
  setVideosList(value: Array<DynVideoMultiP>): CreateDynVideo;
  clearVideosList(): CreateDynVideo;
  addVideos(value?: DynVideoMultiP, index?: number): DynVideoMultiP;

  getWatermark(): DynVideoWatermark | undefined;
  setWatermark(value?: DynVideoWatermark): CreateDynVideo;
  hasWatermark(): boolean;
  clearWatermark(): CreateDynVideo;

  getMissionId(): number;
  setMissionId(value: number): CreateDynVideo;

  getDynamic(): string;
  setDynamic(value: string): CreateDynVideo;

  getDynamicExtension(): string;
  setDynamicExtension(value: string): CreateDynVideo;

  getDynamicCtrl(): string;
  setDynamicCtrl(value: string): CreateDynVideo;

  getDynamicFrom(): string;
  setDynamicFrom(value: string): CreateDynVideo;

  getLotteryId(): number;
  setLotteryId(value: number): CreateDynVideo;

  getVote(): DynVideoVote | undefined;
  setVote(value?: DynVideoVote): CreateDynVideo;
  hasVote(): boolean;
  clearVote(): CreateDynVideo;

  getUpSelectionReply(): boolean;
  setUpSelectionReply(value: boolean): CreateDynVideo;

  getUpCloseReply(): boolean;
  setUpCloseReply(value: boolean): CreateDynVideo;

  getUpCloseDanmu(): boolean;
  setUpCloseDanmu(value: boolean): CreateDynVideo;

  getUpFrom(): number;
  setUpFrom(value: number): CreateDynVideo;

  getDuration(): number;
  setDuration(value: number): CreateDynVideo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDynVideo.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDynVideo): CreateDynVideo.AsObject;
  static serializeBinaryToWriter(message: CreateDynVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDynVideo;
  static deserializeBinaryFromReader(message: CreateDynVideo, reader: jspb.BinaryReader): CreateDynVideo;
}

export namespace CreateDynVideo {
  export type AsObject = {
    relationFrom: string,
    bizFrom: number,
    copyright: number,
    noPublic: number,
    noReprint: number,
    source: string,
    cover: string,
    title: string,
    tid: number,
    tag: string,
    desc: string,
    descFormatId: number,
    openElec: number,
    dtime: number,
    videosList: Array<DynVideoMultiP.AsObject>,
    watermark?: DynVideoWatermark.AsObject,
    missionId: number,
    dynamic: string,
    dynamicExtension: string,
    dynamicCtrl: string,
    dynamicFrom: string,
    lotteryId: number,
    vote?: DynVideoVote.AsObject,
    upSelectionReply: boolean,
    upCloseReply: boolean,
    upCloseDanmu: boolean,
    upFrom: number,
    duration: number,
  }
}

export class CreateDynVideoResult extends jspb.Message {
  getAid(): number;
  setAid(value: number): CreateDynVideoResult;

  getMessage(): string;
  setMessage(value: string): CreateDynVideoResult;

  getSubmitactBanner(): DynVideoSubmitActBanner | undefined;
  setSubmitactBanner(value?: DynVideoSubmitActBanner): CreateDynVideoResult;
  hasSubmitactBanner(): boolean;
  clearSubmitactBanner(): CreateDynVideoResult;

  getPushIntro(): DynVideoPushIntro | undefined;
  setPushIntro(value?: DynVideoPushIntro): CreateDynVideoResult;
  hasPushIntro(): boolean;
  clearPushIntro(): CreateDynVideoResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDynVideoResult.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDynVideoResult): CreateDynVideoResult.AsObject;
  static serializeBinaryToWriter(message: CreateDynVideoResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDynVideoResult;
  static deserializeBinaryFromReader(message: CreateDynVideoResult, reader: jspb.BinaryReader): CreateDynVideoResult;
}

export namespace CreateDynVideoResult {
  export type AsObject = {
    aid: number,
    message: string,
    submitactBanner?: DynVideoSubmitActBanner.AsObject,
    pushIntro?: DynVideoPushIntro.AsObject,
  }
}

export class CreateGoodsCard extends jspb.Message {
  getItemIdList(): Array<string>;
  setItemIdList(value: Array<string>): CreateGoodsCard;
  clearItemIdList(): CreateGoodsCard;
  addItemId(value: string, index?: number): CreateGoodsCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGoodsCard.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGoodsCard): CreateGoodsCard.AsObject;
  static serializeBinaryToWriter(message: CreateGoodsCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGoodsCard;
  static deserializeBinaryFromReader(message: CreateGoodsCard, reader: jspb.BinaryReader): CreateGoodsCard;
}

export namespace CreateGoodsCard {
  export type AsObject = {
    itemIdList: Array<string>,
  }
}

export class CreateOption extends jspb.Message {
  getUpChooseComment(): number;
  setUpChooseComment(value: number): CreateOption;

  getCloseComment(): number;
  setCloseComment(value: number): CreateOption;

  getFoldExclude(): number;
  setFoldExclude(value: number): CreateOption;

  getAuditLevel(): number;
  setAuditLevel(value: number): CreateOption;

  getSyncToComment(): number;
  setSyncToComment(value: number): CreateOption;

  getVideoShareInfo(): VideoShareInfo | undefined;
  setVideoShareInfo(value?: VideoShareInfo): CreateOption;
  hasVideoShareInfo(): boolean;
  clearVideoShareInfo(): CreateOption;

  getActivity(): CreateActivity | undefined;
  setActivity(value?: CreateActivity): CreateOption;
  hasActivity(): boolean;
  clearActivity(): CreateOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOption.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOption): CreateOption.AsObject;
  static serializeBinaryToWriter(message: CreateOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOption;
  static deserializeBinaryFromReader(message: CreateOption, reader: jspb.BinaryReader): CreateOption;
}

export namespace CreateOption {
  export type AsObject = {
    upChooseComment: number,
    closeComment: number,
    foldExclude: number,
    auditLevel: number,
    syncToComment: number,
    videoShareInfo?: VideoShareInfo.AsObject,
    activity?: CreateActivity.AsObject,
  }
}

export class CreatePic extends jspb.Message {
  getImgSrc(): string;
  setImgSrc(value: string): CreatePic;

  getImgWidth(): number;
  setImgWidth(value: number): CreatePic;

  getImgHeight(): number;
  setImgHeight(value: number): CreatePic;

  getImgSize(): number;
  setImgSize(value: number): CreatePic;

  getImgTagsList(): Array<CreatePicTag>;
  setImgTagsList(value: Array<CreatePicTag>): CreatePic;
  clearImgTagsList(): CreatePic;
  addImgTags(value?: CreatePicTag, index?: number): CreatePicTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePic.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePic): CreatePic.AsObject;
  static serializeBinaryToWriter(message: CreatePic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePic;
  static deserializeBinaryFromReader(message: CreatePic, reader: jspb.BinaryReader): CreatePic;
}

export namespace CreatePic {
  export type AsObject = {
    imgSrc: string,
    imgWidth: number,
    imgHeight: number,
    imgSize: number,
    imgTagsList: Array<CreatePicTag.AsObject>,
  }
}

export class CreatePicTag extends jspb.Message {
  getItemId(): number;
  setItemId(value: number): CreatePicTag;

  getTid(): number;
  setTid(value: number): CreatePicTag;

  getMid(): number;
  setMid(value: number): CreatePicTag;

  getText(): string;
  setText(value: string): CreatePicTag;

  getTextString(): string;
  setTextString(value: string): CreatePicTag;

  getType(): number;
  setType(value: number): CreatePicTag;

  getSourceType(): number;
  setSourceType(value: number): CreatePicTag;

  getUrl(): string;
  setUrl(value: string): CreatePicTag;

  getSchemaUrl(): string;
  setSchemaUrl(value: string): CreatePicTag;

  getJumpUrl(): string;
  setJumpUrl(value: string): CreatePicTag;

  getOrientation(): number;
  setOrientation(value: number): CreatePicTag;

  getX(): number;
  setX(value: number): CreatePicTag;

  getY(): number;
  setY(value: number): CreatePicTag;

  getPoi(): string;
  setPoi(value: string): CreatePicTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePicTag.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePicTag): CreatePicTag.AsObject;
  static serializeBinaryToWriter(message: CreatePicTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePicTag;
  static deserializeBinaryFromReader(message: CreatePicTag, reader: jspb.BinaryReader): CreatePicTag;
}

export namespace CreatePicTag {
  export type AsObject = {
    itemId: number,
    tid: number,
    mid: number,
    text: string,
    textString: string,
    type: number,
    sourceType: number,
    url: string,
    schemaUrl: string,
    jumpUrl: string,
    orientation: number,
    x: number,
    y: number,
    poi: string,
  }
}

export class CreateResp extends jspb.Message {
  getDynId(): number;
  setDynId(value: number): CreateResp;

  getDynIdStr(): string;
  setDynIdStr(value: string): CreateResp;

  getDynType(): number;
  setDynType(value: number): CreateResp;

  getDynRid(): number;
  setDynRid(value: number): CreateResp;

  getFakeCard(): bilibili_app_dynamic_v2_dynamic_pb.DynamicItem | undefined;
  setFakeCard(value?: bilibili_app_dynamic_v2_dynamic_pb.DynamicItem): CreateResp;
  hasFakeCard(): boolean;
  clearFakeCard(): CreateResp;

  getVideoResult(): CreateDynVideoResult | undefined;
  setVideoResult(value?: CreateDynVideoResult): CreateResp;
  hasVideoResult(): boolean;
  clearVideoResult(): CreateResp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResp): CreateResp.AsObject;
  static serializeBinaryToWriter(message: CreateResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResp;
  static deserializeBinaryFromReader(message: CreateResp, reader: jspb.BinaryReader): CreateResp;
}

export namespace CreateResp {
  export type AsObject = {
    dynId: number,
    dynIdStr: string,
    dynType: number,
    dynRid: number,
    fakeCard?: bilibili_app_dynamic_v2_dynamic_pb.DynamicItem.AsObject,
    videoResult?: CreateDynVideoResult.AsObject,
  }
}

export class CreateTag extends jspb.Message {
  getLbs(): ExtLbs | undefined;
  setLbs(value?: ExtLbs): CreateTag;
  hasLbs(): boolean;
  clearLbs(): CreateTag;

  getSdkGame(): BottomBusiness | undefined;
  setSdkGame(value?: BottomBusiness): CreateTag;
  hasSdkGame(): boolean;
  clearSdkGame(): CreateTag;

  getDiversion(): BottomBusiness | undefined;
  setDiversion(value?: BottomBusiness): CreateTag;
  hasDiversion(): boolean;
  clearDiversion(): CreateTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTag.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTag): CreateTag.AsObject;
  static serializeBinaryToWriter(message: CreateTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTag;
  static deserializeBinaryFromReader(message: CreateTag, reader: jspb.BinaryReader): CreateTag;
}

export namespace CreateTag {
  export type AsObject = {
    lbs?: ExtLbs.AsObject,
    sdkGame?: BottomBusiness.AsObject,
    diversion?: BottomBusiness.AsObject,
  }
}

export class CreateTopic extends jspb.Message {
  getId(): number;
  setId(value: number): CreateTopic;

  getName(): string;
  setName(value: string): CreateTopic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTopic.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTopic): CreateTopic.AsObject;
  static serializeBinaryToWriter(message: CreateTopic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTopic;
  static deserializeBinaryFromReader(message: CreateTopic, reader: jspb.BinaryReader): CreateTopic;
}

export namespace CreateTopic {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class DynIdentity extends jspb.Message {
  getDynId(): number;
  setDynId(value: number): DynIdentity;

  getRevsId(): DynRevsId | undefined;
  setRevsId(value?: DynRevsId): DynIdentity;
  hasRevsId(): boolean;
  clearRevsId(): DynIdentity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: DynIdentity): DynIdentity.AsObject;
  static serializeBinaryToWriter(message: DynIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynIdentity;
  static deserializeBinaryFromReader(message: DynIdentity, reader: jspb.BinaryReader): DynIdentity;
}

export namespace DynIdentity {
  export type AsObject = {
    dynId: number,
    revsId?: DynRevsId.AsObject,
  }
}

export class DynRevsId extends jspb.Message {
  getDynType(): number;
  setDynType(value: number): DynRevsId;

  getRid(): number;
  setRid(value: number): DynRevsId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynRevsId.AsObject;
  static toObject(includeInstance: boolean, msg: DynRevsId): DynRevsId.AsObject;
  static serializeBinaryToWriter(message: DynRevsId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynRevsId;
  static deserializeBinaryFromReader(message: DynRevsId, reader: jspb.BinaryReader): DynRevsId;
}

export namespace DynRevsId {
  export type AsObject = {
    dynType: number,
    rid: number,
  }
}

export class DynVideoEditor extends jspb.Message {
  getCid(): number;
  setCid(value: number): DynVideoEditor;

  getUpfrom(): number;
  setUpfrom(value: number): DynVideoEditor;

  getFilters(): string;
  setFilters(value: string): DynVideoEditor;

  getFonts(): string;
  setFonts(value: string): DynVideoEditor;

  getSubtitles(): string;
  setSubtitles(value: string): DynVideoEditor;

  getBgms(): string;
  setBgms(value: string): DynVideoEditor;

  getStickers(): string;
  setStickers(value: string): DynVideoEditor;

  getVideoupStickers(): string;
  setVideoupStickers(value: string): DynVideoEditor;

  getTrans(): string;
  setTrans(value: string): DynVideoEditor;

  getMakeups(): string;
  setMakeups(value: string): DynVideoEditor;

  getSurgerys(): string;
  setSurgerys(value: string): DynVideoEditor;

  getVideofxs(): string;
  setVideofxs(value: string): DynVideoEditor;

  getThemes(): string;
  setThemes(value: string): DynVideoEditor;

  getCooperates(): string;
  setCooperates(value: string): DynVideoEditor;

  getRhythms(): string;
  setRhythms(value: string): DynVideoEditor;

  getEffects(): string;
  setEffects(value: string): DynVideoEditor;

  getBackgrounds(): string;
  setBackgrounds(value: string): DynVideoEditor;

  getVideos(): string;
  setVideos(value: string): DynVideoEditor;

  getSounds(): string;
  setSounds(value: string): DynVideoEditor;

  getFlowers(): string;
  setFlowers(value: string): DynVideoEditor;

  getCoverTemplates(): string;
  setCoverTemplates(value: string): DynVideoEditor;

  getTts(): string;
  setTts(value: string): DynVideoEditor;

  getOpenings(): string;
  setOpenings(value: string): DynVideoEditor;

  getRecordText(): boolean;
  setRecordText(value: boolean): DynVideoEditor;

  getVupers(): string;
  setVupers(value: string): DynVideoEditor;

  getFeatures(): string;
  setFeatures(value: string): DynVideoEditor;

  getBcutFeatures(): string;
  setBcutFeatures(value: string): DynVideoEditor;

  getAudioRecord(): number;
  setAudioRecord(value: number): DynVideoEditor;

  getCamera(): number;
  setCamera(value: number): DynVideoEditor;

  getSpeed(): number;
  setSpeed(value: number): DynVideoEditor;

  getCameraRotate(): number;
  setCameraRotate(value: number): DynVideoEditor;

  getScreenRecord(): number;
  setScreenRecord(value: number): DynVideoEditor;

  getDefaultEnd(): number;
  setDefaultEnd(value: number): DynVideoEditor;

  getDuration(): number;
  setDuration(value: number): DynVideoEditor;

  getPicCount(): number;
  setPicCount(value: number): DynVideoEditor;

  getVideoCount(): number;
  setVideoCount(value: number): DynVideoEditor;

  getShotDuration(): number;
  setShotDuration(value: number): DynVideoEditor;

  getShotGame(): string;
  setShotGame(value: string): DynVideoEditor;

  getHighlight(): boolean;
  setHighlight(value: boolean): DynVideoEditor;

  getHighlightCnt(): number;
  setHighlightCnt(value: number): DynVideoEditor;

  getPipCount(): number;
  setPipCount(value: number): DynVideoEditor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoEditor.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoEditor): DynVideoEditor.AsObject;
  static serializeBinaryToWriter(message: DynVideoEditor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoEditor;
  static deserializeBinaryFromReader(message: DynVideoEditor, reader: jspb.BinaryReader): DynVideoEditor;
}

export namespace DynVideoEditor {
  export type AsObject = {
    cid: number,
    upfrom: number,
    filters: string,
    fonts: string,
    subtitles: string,
    bgms: string,
    stickers: string,
    videoupStickers: string,
    trans: string,
    makeups: string,
    surgerys: string,
    videofxs: string,
    themes: string,
    cooperates: string,
    rhythms: string,
    effects: string,
    backgrounds: string,
    videos: string,
    sounds: string,
    flowers: string,
    coverTemplates: string,
    tts: string,
    openings: string,
    recordText: boolean,
    vupers: string,
    features: string,
    bcutFeatures: string,
    audioRecord: number,
    camera: number,
    speed: number,
    cameraRotate: number,
    screenRecord: number,
    defaultEnd: number,
    duration: number,
    picCount: number,
    videoCount: number,
    shotDuration: number,
    shotGame: string,
    highlight: boolean,
    highlightCnt: number,
    pipCount: number,
  }
}

export class DynVideoHotAct extends jspb.Message {
  getActId(): number;
  setActId(value: number): DynVideoHotAct;

  getEtime(): number;
  setEtime(value: number): DynVideoHotAct;

  getId(): number;
  setId(value: number): DynVideoHotAct;

  getPic(): string;
  setPic(value: string): DynVideoHotAct;

  getStime(): number;
  setStime(value: number): DynVideoHotAct;

  getTitle(): string;
  setTitle(value: string): DynVideoHotAct;

  getLink(): string;
  setLink(value: string): DynVideoHotAct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoHotAct.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoHotAct): DynVideoHotAct.AsObject;
  static serializeBinaryToWriter(message: DynVideoHotAct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoHotAct;
  static deserializeBinaryFromReader(message: DynVideoHotAct, reader: jspb.BinaryReader): DynVideoHotAct;
}

export namespace DynVideoHotAct {
  export type AsObject = {
    actId: number,
    etime: number,
    id: number,
    pic: string,
    stime: number,
    title: string,
    link: string,
  }
}

export class DynVideoMultiP extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): DynVideoMultiP;

  getFilename(): string;
  setFilename(value: string): DynVideoMultiP;

  getCid(): number;
  setCid(value: number): DynVideoMultiP;

  getEditor(): DynVideoEditor | undefined;
  setEditor(value?: DynVideoEditor): DynVideoMultiP;
  hasEditor(): boolean;
  clearEditor(): DynVideoMultiP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoMultiP.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoMultiP): DynVideoMultiP.AsObject;
  static serializeBinaryToWriter(message: DynVideoMultiP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoMultiP;
  static deserializeBinaryFromReader(message: DynVideoMultiP, reader: jspb.BinaryReader): DynVideoMultiP;
}

export namespace DynVideoMultiP {
  export type AsObject = {
    title: string,
    filename: string,
    cid: number,
    editor?: DynVideoEditor.AsObject,
  }
}

export class DynVideoPushIntro extends jspb.Message {
  getShow(): number;
  setShow(value: number): DynVideoPushIntro;

  getText(): string;
  setText(value: string): DynVideoPushIntro;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoPushIntro.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoPushIntro): DynVideoPushIntro.AsObject;
  static serializeBinaryToWriter(message: DynVideoPushIntro, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoPushIntro;
  static deserializeBinaryFromReader(message: DynVideoPushIntro, reader: jspb.BinaryReader): DynVideoPushIntro;
}

export namespace DynVideoPushIntro {
  export type AsObject = {
    show: number,
    text: string,
  }
}

export class DynVideoSubmitActBanner extends jspb.Message {
  getHotactText(): string;
  setHotactText(value: string): DynVideoSubmitActBanner;

  getHotactUrl(): string;
  setHotactUrl(value: string): DynVideoSubmitActBanner;

  getListList(): Array<DynVideoHotAct>;
  setListList(value: Array<DynVideoHotAct>): DynVideoSubmitActBanner;
  clearListList(): DynVideoSubmitActBanner;
  addList(value?: DynVideoHotAct, index?: number): DynVideoHotAct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoSubmitActBanner.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoSubmitActBanner): DynVideoSubmitActBanner.AsObject;
  static serializeBinaryToWriter(message: DynVideoSubmitActBanner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoSubmitActBanner;
  static deserializeBinaryFromReader(message: DynVideoSubmitActBanner, reader: jspb.BinaryReader): DynVideoSubmitActBanner;
}

export namespace DynVideoSubmitActBanner {
  export type AsObject = {
    hotactText: string,
    hotactUrl: string,
    listList: Array<DynVideoHotAct.AsObject>,
  }
}

export class DynVideoVote extends jspb.Message {
  getVoteId(): number;
  setVoteId(value: number): DynVideoVote;

  getVoteTitle(): string;
  setVoteTitle(value: string): DynVideoVote;

  getTopForReply(): number;
  setTopForReply(value: number): DynVideoVote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoVote.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoVote): DynVideoVote.AsObject;
  static serializeBinaryToWriter(message: DynVideoVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoVote;
  static deserializeBinaryFromReader(message: DynVideoVote, reader: jspb.BinaryReader): DynVideoVote;
}

export namespace DynVideoVote {
  export type AsObject = {
    voteId: number,
    voteTitle: string,
    topForReply: number,
  }
}

export class DynVideoWatermark extends jspb.Message {
  getState(): number;
  setState(value: number): DynVideoWatermark;

  getType(): number;
  setType(value: number): DynVideoWatermark;

  getPosition(): number;
  setPosition(value: number): DynVideoWatermark;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoWatermark.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoWatermark): DynVideoWatermark.AsObject;
  static serializeBinaryToWriter(message: DynVideoWatermark, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoWatermark;
  static deserializeBinaryFromReader(message: DynVideoWatermark, reader: jspb.BinaryReader): DynVideoWatermark;
}

export namespace DynVideoWatermark {
  export type AsObject = {
    state: number,
    type: number,
    position: number,
  }
}

export class ExtLbs extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): ExtLbs;

  getDistance(): number;
  setDistance(value: number): ExtLbs;

  getType(): number;
  setType(value: number): ExtLbs;

  getPoi(): string;
  setPoi(value: string): ExtLbs;

  getLocation(): LbsLoc | undefined;
  setLocation(value?: LbsLoc): ExtLbs;
  hasLocation(): boolean;
  clearLocation(): ExtLbs;

  getShowTitle(): string;
  setShowTitle(value: string): ExtLbs;

  getTitle(): string;
  setTitle(value: string): ExtLbs;

  getShowDistance(): string;
  setShowDistance(value: string): ExtLbs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtLbs.AsObject;
  static toObject(includeInstance: boolean, msg: ExtLbs): ExtLbs.AsObject;
  static serializeBinaryToWriter(message: ExtLbs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtLbs;
  static deserializeBinaryFromReader(message: ExtLbs, reader: jspb.BinaryReader): ExtLbs;
}

export namespace ExtLbs {
  export type AsObject = {
    address: string,
    distance: number,
    type: number,
    poi: string,
    location?: LbsLoc.AsObject,
    showTitle: string,
    title: string,
    showDistance: string,
  }
}

export class GetUidByNameReq extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): GetUidByNameReq;
  clearNamesList(): GetUidByNameReq;
  addNames(value: string, index?: number): GetUidByNameReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUidByNameReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUidByNameReq): GetUidByNameReq.AsObject;
  static serializeBinaryToWriter(message: GetUidByNameReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUidByNameReq;
  static deserializeBinaryFromReader(message: GetUidByNameReq, reader: jspb.BinaryReader): GetUidByNameReq;
}

export namespace GetUidByNameReq {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class GetUidByNameRsp extends jspb.Message {
  getUidsMap(): jspb.Map<string, number>;
  clearUidsMap(): GetUidByNameRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUidByNameRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetUidByNameRsp): GetUidByNameRsp.AsObject;
  static serializeBinaryToWriter(message: GetUidByNameRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUidByNameRsp;
  static deserializeBinaryFromReader(message: GetUidByNameRsp, reader: jspb.BinaryReader): GetUidByNameRsp;
}

export namespace GetUidByNameRsp {
  export type AsObject = {
    uidsMap: Array<[string, number]>,
  }
}

export class GoodsContent extends jspb.Message {
  getSourceType(): number;
  setSourceType(value: number): GoodsContent;

  getItemId(): number;
  setItemId(value: number): GoodsContent;

  getShopId(): number;
  setShopId(value: number): GoodsContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoodsContent.AsObject;
  static toObject(includeInstance: boolean, msg: GoodsContent): GoodsContent.AsObject;
  static serializeBinaryToWriter(message: GoodsContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoodsContent;
  static deserializeBinaryFromReader(message: GoodsContent, reader: jspb.BinaryReader): GoodsContent;
}

export namespace GoodsContent {
  export type AsObject = {
    sourceType: number,
    itemId: number,
    shopId: number,
  }
}

export class LaunchedActivity extends jspb.Message {
  getModuleTitle(): string;
  setModuleTitle(value: string): LaunchedActivity;

  getActivitiesList(): Array<LaunchedActivityItem>;
  setActivitiesList(value: Array<LaunchedActivityItem>): LaunchedActivity;
  clearActivitiesList(): LaunchedActivity;
  addActivities(value?: LaunchedActivityItem, index?: number): LaunchedActivityItem;

  getShowMore(): ShowMoreLaunchedActivity | undefined;
  setShowMore(value?: ShowMoreLaunchedActivity): LaunchedActivity;
  hasShowMore(): boolean;
  clearShowMore(): LaunchedActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LaunchedActivity.AsObject;
  static toObject(includeInstance: boolean, msg: LaunchedActivity): LaunchedActivity.AsObject;
  static serializeBinaryToWriter(message: LaunchedActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LaunchedActivity;
  static deserializeBinaryFromReader(message: LaunchedActivity, reader: jspb.BinaryReader): LaunchedActivity;
}

export namespace LaunchedActivity {
  export type AsObject = {
    moduleTitle: string,
    activitiesList: Array<LaunchedActivityItem.AsObject>,
    showMore?: ShowMoreLaunchedActivity.AsObject,
  }
}

export class LaunchedActivityItem extends jspb.Message {
  getActivityId(): number;
  setActivityId(value: number): LaunchedActivityItem;

  getActivityName(): string;
  setActivityName(value: string): LaunchedActivityItem;

  getActivityState(): number;
  setActivityState(value: number): LaunchedActivityItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LaunchedActivityItem.AsObject;
  static toObject(includeInstance: boolean, msg: LaunchedActivityItem): LaunchedActivityItem.AsObject;
  static serializeBinaryToWriter(message: LaunchedActivityItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LaunchedActivityItem;
  static deserializeBinaryFromReader(message: LaunchedActivityItem, reader: jspb.BinaryReader): LaunchedActivityItem;
}

export namespace LaunchedActivityItem {
  export type AsObject = {
    activityId: number,
    activityName: string,
    activityState: number,
  }
}

export class LbsLoc extends jspb.Message {
  getLat(): number;
  setLat(value: number): LbsLoc;

  getLng(): number;
  setLng(value: number): LbsLoc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LbsLoc.AsObject;
  static toObject(includeInstance: boolean, msg: LbsLoc): LbsLoc.AsObject;
  static serializeBinaryToWriter(message: LbsLoc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LbsLoc;
  static deserializeBinaryFromReader(message: LbsLoc, reader: jspb.BinaryReader): LbsLoc;
}

export namespace LbsLoc {
  export type AsObject = {
    lat: number,
    lng: number,
  }
}

export class MetaDataCtrl extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): MetaDataCtrl;

  getBuild(): string;
  setBuild(value: string): MetaDataCtrl;

  getMobiApp(): string;
  setMobiApp(value: string): MetaDataCtrl;

  getBuvid(): string;
  setBuvid(value: string): MetaDataCtrl;

  getDevice(): string;
  setDevice(value: string): MetaDataCtrl;

  getFromSpmid(): string;
  setFromSpmid(value: string): MetaDataCtrl;

  getFrom(): string;
  setFrom(value: string): MetaDataCtrl;

  getTraceId(): string;
  setTraceId(value: string): MetaDataCtrl;

  getTeenagerMode(): number;
  setTeenagerMode(value: number): MetaDataCtrl;

  getColdStart(): number;
  setColdStart(value: number): MetaDataCtrl;

  getVersion(): string;
  setVersion(value: string): MetaDataCtrl;

  getNetwork(): number;
  setNetwork(value: number): MetaDataCtrl;

  getIp(): string;
  setIp(value: string): MetaDataCtrl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaDataCtrl.AsObject;
  static toObject(includeInstance: boolean, msg: MetaDataCtrl): MetaDataCtrl.AsObject;
  static serializeBinaryToWriter(message: MetaDataCtrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaDataCtrl;
  static deserializeBinaryFromReader(message: MetaDataCtrl, reader: jspb.BinaryReader): MetaDataCtrl;
}

export namespace MetaDataCtrl {
  export type AsObject = {
    platform: string,
    build: string,
    mobiApp: string,
    buvid: string,
    device: string,
    fromSpmid: string,
    from: string,
    traceId: string,
    teenagerMode: number,
    coldStart: number,
    version: string,
    network: number,
    ip: string,
  }
}

export class PlusRedDot extends jspb.Message {
  getPlusHasRedDot(): number;
  setPlusHasRedDot(value: number): PlusRedDot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlusRedDot.AsObject;
  static toObject(includeInstance: boolean, msg: PlusRedDot): PlusRedDot.AsObject;
  static serializeBinaryToWriter(message: PlusRedDot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlusRedDot;
  static deserializeBinaryFromReader(message: PlusRedDot, reader: jspb.BinaryReader): PlusRedDot;
}

export namespace PlusRedDot {
  export type AsObject = {
    plusHasRedDot: number,
  }
}

export class Program extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Program;

  getDesc(): string;
  setDesc(value: string): Program;

  getCover(): string;
  setCover(value: string): Program;

  getTargetUrl(): string;
  setTargetUrl(value: string): Program;

  getIcon(): string;
  setIcon(value: string): Program;

  getProgramText(): string;
  setProgramText(value: string): Program;

  getJumpText(): string;
  setJumpText(value: string): Program;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Program.AsObject;
  static toObject(includeInstance: boolean, msg: Program): Program.AsObject;
  static serializeBinaryToWriter(message: Program, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Program;
  static deserializeBinaryFromReader(message: Program, reader: jspb.BinaryReader): Program;
}

export namespace Program {
  export type AsObject = {
    title: string,
    desc: string,
    cover: string,
    targetUrl: string,
    icon: string,
    programText: string,
    jumpText: string,
  }
}

export class PublishSetting extends jspb.Message {
  getMinWordsToArticle(): number;
  setMinWordsToArticle(value: number): PublishSetting;

  getMaxWordsToArticle(): number;
  setMaxWordsToArticle(value: number): PublishSetting;

  getUploadSize(): number;
  setUploadSize(value: number): PublishSetting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishSetting.AsObject;
  static toObject(includeInstance: boolean, msg: PublishSetting): PublishSetting.AsObject;
  static serializeBinaryToWriter(message: PublishSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishSetting;
  static deserializeBinaryFromReader(message: PublishSetting, reader: jspb.BinaryReader): PublishSetting;
}

export namespace PublishSetting {
  export type AsObject = {
    minWordsToArticle: number,
    maxWordsToArticle: number,
    uploadSize: number,
  }
}

export class PublishYellowBar extends jspb.Message {
  getText(): string;
  setText(value: string): PublishYellowBar;

  getUrl(): string;
  setUrl(value: string): PublishYellowBar;

  getIcon(): string;
  setIcon(value: string): PublishYellowBar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishYellowBar.AsObject;
  static toObject(includeInstance: boolean, msg: PublishYellowBar): PublishYellowBar.AsObject;
  static serializeBinaryToWriter(message: PublishYellowBar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishYellowBar;
  static deserializeBinaryFromReader(message: PublishYellowBar, reader: jspb.BinaryReader): PublishYellowBar;
}

export namespace PublishYellowBar {
  export type AsObject = {
    text: string,
    url: string,
    icon: string,
  }
}

export class RepostInitCheck extends jspb.Message {
  getRepostSrc(): DynIdentity | undefined;
  setRepostSrc(value?: DynIdentity): RepostInitCheck;
  hasRepostSrc(): boolean;
  clearRepostSrc(): RepostInitCheck;

  getShareId(): string;
  setShareId(value: string): RepostInitCheck;

  getShareMode(): number;
  setShareMode(value: number): RepostInitCheck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepostInitCheck.AsObject;
  static toObject(includeInstance: boolean, msg: RepostInitCheck): RepostInitCheck.AsObject;
  static serializeBinaryToWriter(message: RepostInitCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepostInitCheck;
  static deserializeBinaryFromReader(message: RepostInitCheck, reader: jspb.BinaryReader): RepostInitCheck;
}

export namespace RepostInitCheck {
  export type AsObject = {
    repostSrc?: DynIdentity.AsObject,
    shareId: string,
    shareMode: number,
  }
}

export class ShareChannel extends jspb.Message {
  getShareOrigin(): string;
  setShareOrigin(value: string): ShareChannel;

  getOid(): string;
  setOid(value: string): ShareChannel;

  getSid(): string;
  setSid(value: string): ShareChannel;

  getShareChannelsList(): Array<ShareChannelItem>;
  setShareChannelsList(value: Array<ShareChannelItem>): ShareChannel;
  clearShareChannelsList(): ShareChannel;
  addShareChannels(value?: ShareChannelItem, index?: number): ShareChannelItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareChannel.AsObject;
  static toObject(includeInstance: boolean, msg: ShareChannel): ShareChannel.AsObject;
  static serializeBinaryToWriter(message: ShareChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareChannel;
  static deserializeBinaryFromReader(message: ShareChannel, reader: jspb.BinaryReader): ShareChannel;
}

export namespace ShareChannel {
  export type AsObject = {
    shareOrigin: string,
    oid: string,
    sid: string,
    shareChannelsList: Array<ShareChannelItem.AsObject>,
  }
}

export class ShareChannelItem extends jspb.Message {
  getName(): string;
  setName(value: string): ShareChannelItem;

  getPicture(): string;
  setPicture(value: string): ShareChannelItem;

  getShareChannel(): string;
  setShareChannel(value: string): ShareChannelItem;

  getReserve(): ShareReserve | undefined;
  setReserve(value?: ShareReserve): ShareChannelItem;
  hasReserve(): boolean;
  clearReserve(): ShareChannelItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareChannelItem.AsObject;
  static toObject(includeInstance: boolean, msg: ShareChannelItem): ShareChannelItem.AsObject;
  static serializeBinaryToWriter(message: ShareChannelItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareChannelItem;
  static deserializeBinaryFromReader(message: ShareChannelItem, reader: jspb.BinaryReader): ShareChannelItem;
}

export namespace ShareChannelItem {
  export type AsObject = {
    name: string,
    picture: string,
    shareChannel: string,
    reserve?: ShareReserve.AsObject,
  }
}

export class ShareReserve extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ShareReserve;

  getDesc(): string;
  setDesc(value: string): ShareReserve;

  getQrCodeIcon(): string;
  setQrCodeIcon(value: string): ShareReserve;

  getQrCodeText(): string;
  setQrCodeText(value: string): ShareReserve;

  getQrCodeUrl(): string;
  setQrCodeUrl(value: string): ShareReserve;

  getName(): string;
  setName(value: string): ShareReserve;

  getFace(): string;
  setFace(value: string): ShareReserve;

  getPoster(): ShareReservePoster | undefined;
  setPoster(value?: ShareReservePoster): ShareReserve;
  hasPoster(): boolean;
  clearPoster(): ShareReserve;

  getReserveLottery(): ShareReserveLottery | undefined;
  setReserveLottery(value?: ShareReserveLottery): ShareReserve;
  hasReserveLottery(): boolean;
  clearReserveLottery(): ShareReserve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareReserve.AsObject;
  static toObject(includeInstance: boolean, msg: ShareReserve): ShareReserve.AsObject;
  static serializeBinaryToWriter(message: ShareReserve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareReserve;
  static deserializeBinaryFromReader(message: ShareReserve, reader: jspb.BinaryReader): ShareReserve;
}

export namespace ShareReserve {
  export type AsObject = {
    title: string,
    desc: string,
    qrCodeIcon: string,
    qrCodeText: string,
    qrCodeUrl: string,
    name: string,
    face: string,
    poster?: ShareReservePoster.AsObject,
    reserveLottery?: ShareReserveLottery.AsObject,
  }
}

export class ShareReserveLottery extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ShareReserveLottery;

  getText(): string;
  setText(value: string): ShareReserveLottery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareReserveLottery.AsObject;
  static toObject(includeInstance: boolean, msg: ShareReserveLottery): ShareReserveLottery.AsObject;
  static serializeBinaryToWriter(message: ShareReserveLottery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareReserveLottery;
  static deserializeBinaryFromReader(message: ShareReserveLottery, reader: jspb.BinaryReader): ShareReserveLottery;
}

export namespace ShareReserveLottery {
  export type AsObject = {
    icon: string,
    text: string,
  }
}

export class ShareReservePoster extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ShareReservePoster;

  getWidth(): number;
  setWidth(value: number): ShareReservePoster;

  getHeight(): number;
  setHeight(value: number): ShareReservePoster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareReservePoster.AsObject;
  static toObject(includeInstance: boolean, msg: ShareReservePoster): ShareReservePoster.AsObject;
  static serializeBinaryToWriter(message: ShareReservePoster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareReservePoster;
  static deserializeBinaryFromReader(message: ShareReservePoster, reader: jspb.BinaryReader): ShareReservePoster;
}

export namespace ShareReservePoster {
  export type AsObject = {
    url: string,
    width: number,
    height: number,
  }
}

export class ShareResult extends jspb.Message {
  getShareEnable(): number;
  setShareEnable(value: number): ShareResult;

  getToast(): string;
  setToast(value: string): ShareResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareResult.AsObject;
  static toObject(includeInstance: boolean, msg: ShareResult): ShareResult.AsObject;
  static serializeBinaryToWriter(message: ShareResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareResult;
  static deserializeBinaryFromReader(message: ShareResult, reader: jspb.BinaryReader): ShareResult;
}

export namespace ShareResult {
  export type AsObject = {
    shareEnable: number,
    toast: string,
  }
}

export class ShowMoreLaunchedActivity extends jspb.Message {
  getButtonText(): string;
  setButtonText(value: string): ShowMoreLaunchedActivity;

  getJumpUrl(): string;
  setJumpUrl(value: string): ShowMoreLaunchedActivity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowMoreLaunchedActivity.AsObject;
  static toObject(includeInstance: boolean, msg: ShowMoreLaunchedActivity): ShowMoreLaunchedActivity.AsObject;
  static serializeBinaryToWriter(message: ShowMoreLaunchedActivity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowMoreLaunchedActivity;
  static deserializeBinaryFromReader(message: ShowMoreLaunchedActivity, reader: jspb.BinaryReader): ShowMoreLaunchedActivity;
}

export namespace ShowMoreLaunchedActivity {
  export type AsObject = {
    buttonText: string,
    jumpUrl: string,
  }
}

export class Sketch extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Sketch;

  getDescText(): string;
  setDescText(value: string): Sketch;

  getText(): string;
  setText(value: string): Sketch;

  getBizId(): number;
  setBizId(value: number): Sketch;

  getBizType(): number;
  setBizType(value: number): Sketch;

  getCoverUrl(): string;
  setCoverUrl(value: string): Sketch;

  getTargetUrl(): string;
  setTargetUrl(value: string): Sketch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sketch.AsObject;
  static toObject(includeInstance: boolean, msg: Sketch): Sketch.AsObject;
  static serializeBinaryToWriter(message: Sketch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sketch;
  static deserializeBinaryFromReader(message: Sketch, reader: jspb.BinaryReader): Sketch;
}

export namespace Sketch {
  export type AsObject = {
    title: string,
    descText: string,
    text: string,
    bizId: number,
    bizType: number,
    coverUrl: string,
    targetUrl: string,
  }
}

export class UpPermission extends jspb.Message {
  getItemsList(): Array<UpPermissionItem>;
  setItemsList(value: Array<UpPermissionItem>): UpPermission;
  clearItemsList(): UpPermission;
  addItems(value?: UpPermissionItem, index?: number): UpPermissionItem;

  getLaunchedActivity(): LaunchedActivity | undefined;
  setLaunchedActivity(value?: LaunchedActivity): UpPermission;
  hasLaunchedActivity(): boolean;
  clearLaunchedActivity(): UpPermission;

  getShareResult(): ShareResult | undefined;
  setShareResult(value?: ShareResult): UpPermission;
  hasShareResult(): boolean;
  clearShareResult(): UpPermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpPermission.AsObject;
  static toObject(includeInstance: boolean, msg: UpPermission): UpPermission.AsObject;
  static serializeBinaryToWriter(message: UpPermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpPermission;
  static deserializeBinaryFromReader(message: UpPermission, reader: jspb.BinaryReader): UpPermission;
}

export namespace UpPermission {
  export type AsObject = {
    itemsList: Array<UpPermissionItem.AsObject>,
    launchedActivity?: LaunchedActivity.AsObject,
    shareResult?: ShareResult.AsObject,
  }
}

export class UpPermissionItem extends jspb.Message {
  getType(): number;
  setType(value: number): UpPermissionItem;

  getPermission(): number;
  setPermission(value: number): UpPermissionItem;

  getTitle(): string;
  setTitle(value: string): UpPermissionItem;

  getSubtitle(): string;
  setSubtitle(value: string): UpPermissionItem;

  getIcon(): string;
  setIcon(value: string): UpPermissionItem;

  getJumpUrl(): string;
  setJumpUrl(value: string): UpPermissionItem;

  getToast(): string;
  setToast(value: string): UpPermissionItem;

  getHasRedDot(): number;
  setHasRedDot(value: number): UpPermissionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpPermissionItem.AsObject;
  static toObject(includeInstance: boolean, msg: UpPermissionItem): UpPermissionItem.AsObject;
  static serializeBinaryToWriter(message: UpPermissionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpPermissionItem;
  static deserializeBinaryFromReader(message: UpPermissionItem, reader: jspb.BinaryReader): UpPermissionItem;
}

export namespace UpPermissionItem {
  export type AsObject = {
    type: number,
    permission: number,
    title: string,
    subtitle: string,
    icon: string,
    jumpUrl: string,
    toast: string,
    hasRedDot: number,
  }
}

export class UserCreateMeta extends jspb.Message {
  getAppMeta(): MetaDataCtrl | undefined;
  setAppMeta(value?: MetaDataCtrl): UserCreateMeta;
  hasAppMeta(): boolean;
  clearAppMeta(): UserCreateMeta;

  getLoc(): LbsLoc | undefined;
  setLoc(value?: LbsLoc): UserCreateMeta;
  hasLoc(): boolean;
  clearLoc(): UserCreateMeta;

  getRepostMode(): number;
  setRepostMode(value: number): UserCreateMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCreateMeta.AsObject;
  static toObject(includeInstance: boolean, msg: UserCreateMeta): UserCreateMeta.AsObject;
  static serializeBinaryToWriter(message: UserCreateMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCreateMeta;
  static deserializeBinaryFromReader(message: UserCreateMeta, reader: jspb.BinaryReader): UserCreateMeta;
}

export namespace UserCreateMeta {
  export type AsObject = {
    appMeta?: MetaDataCtrl.AsObject,
    loc?: LbsLoc.AsObject,
    repostMode: number,
  }
}

export class VideoShareInfo extends jspb.Message {
  getCid(): number;
  setCid(value: number): VideoShareInfo;

  getPart(): number;
  setPart(value: number): VideoShareInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoShareInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoShareInfo): VideoShareInfo.AsObject;
  static serializeBinaryToWriter(message: VideoShareInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoShareInfo;
  static deserializeBinaryFromReader(message: VideoShareInfo, reader: jspb.BinaryReader): VideoShareInfo;
}

export namespace VideoShareInfo {
  export type AsObject = {
    cid: number,
    part: number,
  }
}

export enum AtGroupType { 
  AT_GROUP_TYPE_DEFAULT = 0,
  AT_GROUP_TYPE_RECENT = 1,
  AT_GROUP_TYPE_FOLLOW = 2,
  AT_GROUP_TYPE_FANS = 3,
  AT_GROUP_TYPE_OTHERS = 4,
}
export enum AttachCardType { 
  ATTACH_CARD_NONE = 0,
  ATTACH_CARD_GOODS = 1,
  ATTACH_CARD_VOTE = 2,
  ATTACH_CARD_UGC = 3,
  ATTACH_CARD_ACTIVITY = 4,
  ATTACH_CARD_OFFICIAL_ACTIVITY = 5,
  ATTACH_CARD_TOPIC = 6,
  ATTACH_CARD_OGV = 7,
  ATTACH_CARD_AUTO_OGV = 8,
  ATTACH_CARD_GAME = 9,
  ATTACH_CARD_MANGA = 10,
  ATTACH_CARD_DECORATION = 11,
  ATTACH_CARD_MATCH = 12,
  ATTACH_CARD_PUGV = 13,
  ATTACH_CARD_RESERVE = 14,
  ATTACH_CARD_UP_TOPIC = 15,
}
export enum ContentType { 
  CONTENT_TYPE_NONE = 0,
  TEXT = 1,
  AT = 2,
  LOTTERY = 3,
  VOTE = 4,
  TOPIC = 5,
  GOODS = 6,
  BV = 7,
  AV = 8,
  EMOJI = 9,
  USER = 10,
  CV = 11,
  VC = 12,
  WEB = 13,
  TAOBAO = 14,
  MAIL = 15,
  OGV_SEASON = 16,
  OGV_EP = 17,
}
export enum CreateInitCheckScene { 
  CREATE_INIT_CHECK_SCENE_INVALID = 0,
  CREATE_INIT_CHECK_SCENE_NORMAL = 1,
  CREATE_INIT_CHECK_SCENE_REPOST = 2,
  CREATE_INIT_CHECK_SCENE_SHARE = 3,
  CREATE_INIT_CHECK_SCENE_RESERVE_SHARE = 4,
}
export enum CreateScene { 
  CREATE_SCENE_INVALID = 0,
  CREATE_SCENE_CREATE_WORD = 1,
  CREATE_SCENE_CREATE_DRAW = 2,
  CREATE_SCENE_CREATE_DYN_VIDEO = 3,
  CREATE_SCENE_REPOST = 4,
  CREATE_SCENE_SHARE_BIZ = 5,
  CREATE_SCENE_SHARE_PAGE = 6,
  CREATE_SCENE_SHARE_PROGRAM = 7,
  CREATE_SCENE_REPLY_SYNC = 8,
  CREATE_SCENE_REPLY_CREATE_ACTIVITY = 9,
}
export enum ReserveSource { 
  RESERVE_SOURCE_NEW = 0,
  RESERVE_SOURCE_ASSOCIATED = 1,
}
export enum UpPermissionType { 
  UP_PERMISSION_TYPE_NONE = 0,
  UP_PERMISSION_TYPE_LOTTERY = 1,
  UP_PERMISSION_TYPE_CLIP_PUBLISHED = 2,
  UP_PERMISSION_TYPE_UGC_ATTACH_CARD = 3,
  UP_PERMISSION_TYPE_GOODS_ATTACH_CARD = 4,
  UP_PERMISSION_TYPE_CHOOSE_COMMENT = 5,
  UP_PERMISSION_TYPE_CONTROL_COMMENT = 6,
  UP_PERMISSION_TYPE_CONTROL_DANMU = 7,
  UP_PERMISSION_TYPE_VIDEO_RESERVE = 8,
  UP_PERMISSION_TYPE_LIVE_RESERVE = 9,
}
