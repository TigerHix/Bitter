import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as bilibili_app_archive_middleware_v1_preload_pb from '../../../../proto/app/archive/middleware/v1/preload_pb';


export class AdParam extends jspb.Message {
  getAdExtra(): string;
  setAdExtra(value: string): AdParam;

  getRequestId(): string;
  setRequestId(value: string): AdParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdParam.AsObject;
  static toObject(includeInstance: boolean, msg: AdParam): AdParam.AsObject;
  static serializeBinaryToWriter(message: AdParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdParam;
  static deserializeBinaryFromReader(message: AdParam, reader: jspb.BinaryReader): AdParam;
}

export namespace AdParam {
  export type AsObject = {
    adExtra: string,
    requestId: string,
  }
}

export class AdditionCommon extends jspb.Message {
  getHeadText(): string;
  setHeadText(value: string): AdditionCommon;

  getTitle(): string;
  setTitle(value: string): AdditionCommon;

  getImageUrl(): string;
  setImageUrl(value: string): AdditionCommon;

  getDescText1(): string;
  setDescText1(value: string): AdditionCommon;

  getDescText2(): string;
  setDescText2(value: string): AdditionCommon;

  getUrl(): string;
  setUrl(value: string): AdditionCommon;

  getButton(): AdditionalButton | undefined;
  setButton(value?: AdditionalButton): AdditionCommon;
  hasButton(): boolean;
  clearButton(): AdditionCommon;

  getHeadIcon(): string;
  setHeadIcon(value: string): AdditionCommon;

  getStyle(): ImageStyle;
  setStyle(value: ImageStyle): AdditionCommon;

  getType(): string;
  setType(value: string): AdditionCommon;

  getCardType(): string;
  setCardType(value: string): AdditionCommon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionCommon.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionCommon): AdditionCommon.AsObject;
  static serializeBinaryToWriter(message: AdditionCommon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionCommon;
  static deserializeBinaryFromReader(message: AdditionCommon, reader: jspb.BinaryReader): AdditionCommon;
}

export namespace AdditionCommon {
  export type AsObject = {
    headText: string,
    title: string,
    imageUrl: string,
    descText1: string,
    descText2: string,
    url: string,
    button?: AdditionalButton.AsObject,
    headIcon: string,
    style: ImageStyle,
    type: string,
    cardType: string,
  }
}

export class AdditionEsport extends jspb.Message {
  getStyle(): EspaceStyle;
  setStyle(value: EspaceStyle): AdditionEsport;

  getAdditionEsportMoba(): AdditionEsportMoba | undefined;
  setAdditionEsportMoba(value?: AdditionEsportMoba): AdditionEsport;
  hasAdditionEsportMoba(): boolean;
  clearAdditionEsportMoba(): AdditionEsport;

  getType(): string;
  setType(value: string): AdditionEsport;

  getCardType(): string;
  setCardType(value: string): AdditionEsport;

  getItemCase(): AdditionEsport.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionEsport.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionEsport): AdditionEsport.AsObject;
  static serializeBinaryToWriter(message: AdditionEsport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionEsport;
  static deserializeBinaryFromReader(message: AdditionEsport, reader: jspb.BinaryReader): AdditionEsport;
}

export namespace AdditionEsport {
  export type AsObject = {
    style: EspaceStyle,
    additionEsportMoba?: AdditionEsportMoba.AsObject,
    type: string,
    cardType: string,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    ADDITION_ESPORT_MOBA = 2,
  }
}

export class AdditionEsportMoba extends jspb.Message {
  getHeadText(): string;
  setHeadText(value: string): AdditionEsportMoba;

  getTitle(): string;
  setTitle(value: string): AdditionEsportMoba;

  getMatchTeamList(): Array<MatchTeam>;
  setMatchTeamList(value: Array<MatchTeam>): AdditionEsportMoba;
  clearMatchTeamList(): AdditionEsportMoba;
  addMatchTeam(value?: MatchTeam, index?: number): MatchTeam;

  getAdditionEsportMobaStatus(): AdditionEsportMobaStatus | undefined;
  setAdditionEsportMobaStatus(value?: AdditionEsportMobaStatus): AdditionEsportMoba;
  hasAdditionEsportMobaStatus(): boolean;
  clearAdditionEsportMobaStatus(): AdditionEsportMoba;

  getUri(): string;
  setUri(value: string): AdditionEsportMoba;

  getButton(): AdditionalButton | undefined;
  setButton(value?: AdditionalButton): AdditionEsportMoba;
  hasButton(): boolean;
  clearButton(): AdditionEsportMoba;

  getSubTitle(): string;
  setSubTitle(value: string): AdditionEsportMoba;

  getType(): string;
  setType(value: string): AdditionEsportMoba;

  getCardType(): string;
  setCardType(value: string): AdditionEsportMoba;

  getHeadIcon(): string;
  setHeadIcon(value: string): AdditionEsportMoba;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionEsportMoba.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionEsportMoba): AdditionEsportMoba.AsObject;
  static serializeBinaryToWriter(message: AdditionEsportMoba, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionEsportMoba;
  static deserializeBinaryFromReader(message: AdditionEsportMoba, reader: jspb.BinaryReader): AdditionEsportMoba;
}

export namespace AdditionEsportMoba {
  export type AsObject = {
    headText: string,
    title: string,
    matchTeamList: Array<MatchTeam.AsObject>,
    additionEsportMobaStatus?: AdditionEsportMobaStatus.AsObject,
    uri: string,
    button?: AdditionalButton.AsObject,
    subTitle: string,
    type: string,
    cardType: string,
    headIcon: string,
  }
}

export class AdditionEsportMobaStatus extends jspb.Message {
  getAdditionEsportMobaStatusDescList(): Array<AdditionEsportMobaStatusDesc>;
  setAdditionEsportMobaStatusDescList(value: Array<AdditionEsportMobaStatusDesc>): AdditionEsportMobaStatus;
  clearAdditionEsportMobaStatusDescList(): AdditionEsportMobaStatus;
  addAdditionEsportMobaStatusDesc(value?: AdditionEsportMobaStatusDesc, index?: number): AdditionEsportMobaStatusDesc;

  getTitle(): string;
  setTitle(value: string): AdditionEsportMobaStatus;

  getStatus(): number;
  setStatus(value: number): AdditionEsportMobaStatus;

  getColor(): string;
  setColor(value: string): AdditionEsportMobaStatus;

  getNightColor(): string;
  setNightColor(value: string): AdditionEsportMobaStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionEsportMobaStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionEsportMobaStatus): AdditionEsportMobaStatus.AsObject;
  static serializeBinaryToWriter(message: AdditionEsportMobaStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionEsportMobaStatus;
  static deserializeBinaryFromReader(message: AdditionEsportMobaStatus, reader: jspb.BinaryReader): AdditionEsportMobaStatus;
}

export namespace AdditionEsportMobaStatus {
  export type AsObject = {
    additionEsportMobaStatusDescList: Array<AdditionEsportMobaStatusDesc.AsObject>,
    title: string,
    status: number,
    color: string,
    nightColor: string,
  }
}

export class AdditionEsportMobaStatusDesc extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): AdditionEsportMobaStatusDesc;

  getColor(): string;
  setColor(value: string): AdditionEsportMobaStatusDesc;

  getNightColor(): string;
  setNightColor(value: string): AdditionEsportMobaStatusDesc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionEsportMobaStatusDesc.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionEsportMobaStatusDesc): AdditionEsportMobaStatusDesc.AsObject;
  static serializeBinaryToWriter(message: AdditionEsportMobaStatusDesc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionEsportMobaStatusDesc;
  static deserializeBinaryFromReader(message: AdditionEsportMobaStatusDesc, reader: jspb.BinaryReader): AdditionEsportMobaStatusDesc;
}

export namespace AdditionEsportMobaStatusDesc {
  export type AsObject = {
    title: string,
    color: string,
    nightColor: string,
  }
}

export class AdditionGoods extends jspb.Message {
  getRcmdDesc(): string;
  setRcmdDesc(value: string): AdditionGoods;

  getGoodsItemsList(): Array<GoodsItem>;
  setGoodsItemsList(value: Array<GoodsItem>): AdditionGoods;
  clearGoodsItemsList(): AdditionGoods;
  addGoodsItems(value?: GoodsItem, index?: number): GoodsItem;

  getCardType(): string;
  setCardType(value: string): AdditionGoods;

  getIcon(): string;
  setIcon(value: string): AdditionGoods;

  getUri(): string;
  setUri(value: string): AdditionGoods;

  getSourceType(): number;
  setSourceType(value: number): AdditionGoods;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionGoods.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionGoods): AdditionGoods.AsObject;
  static serializeBinaryToWriter(message: AdditionGoods, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionGoods;
  static deserializeBinaryFromReader(message: AdditionGoods, reader: jspb.BinaryReader): AdditionGoods;
}

export namespace AdditionGoods {
  export type AsObject = {
    rcmdDesc: string,
    goodsItemsList: Array<GoodsItem.AsObject>,
    cardType: string,
    icon: string,
    uri: string,
    sourceType: number,
  }
}

export class AdditionUP extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): AdditionUP;

  getDescText1(): HighlightText | undefined;
  setDescText1(value?: HighlightText): AdditionUP;
  hasDescText1(): boolean;
  clearDescText1(): AdditionUP;

  getDescText2(): string;
  setDescText2(value: string): AdditionUP;

  getUrl(): string;
  setUrl(value: string): AdditionUP;

  getButton(): AdditionalButton | undefined;
  setButton(value?: AdditionalButton): AdditionUP;
  hasButton(): boolean;
  clearButton(): AdditionUP;

  getCardType(): string;
  setCardType(value: string): AdditionUP;

  getReserveTotal(): number;
  setReserveTotal(value: number): AdditionUP;

  getActSkin(): AdditionalActSkin | undefined;
  setActSkin(value?: AdditionalActSkin): AdditionUP;
  hasActSkin(): boolean;
  clearActSkin(): AdditionUP;

  getRid(): number;
  setRid(value: number): AdditionUP;

  getLotteryType(): number;
  setLotteryType(value: number): AdditionUP;

  getDescText3(): HighlightText | undefined;
  setDescText3(value?: HighlightText): AdditionUP;
  hasDescText3(): boolean;
  clearDescText3(): AdditionUP;

  getUpMid(): number;
  setUpMid(value: number): AdditionUP;

  getUserInfo(): AdditionUserInfo | undefined;
  setUserInfo(value?: AdditionUserInfo): AdditionUP;
  hasUserInfo(): boolean;
  clearUserInfo(): AdditionUP;

  getDynamicId(): string;
  setDynamicId(value: string): AdditionUP;

  getShowText2(): boolean;
  setShowText2(value: boolean): AdditionUP;

  getDynType(): number;
  setDynType(value: number): AdditionUP;

  getBusinessId(): string;
  setBusinessId(value: string): AdditionUP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionUP.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionUP): AdditionUP.AsObject;
  static serializeBinaryToWriter(message: AdditionUP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionUP;
  static deserializeBinaryFromReader(message: AdditionUP, reader: jspb.BinaryReader): AdditionUP;
}

export namespace AdditionUP {
  export type AsObject = {
    title: string,
    descText1?: HighlightText.AsObject,
    descText2: string,
    url: string,
    button?: AdditionalButton.AsObject,
    cardType: string,
    reserveTotal: number,
    actSkin?: AdditionalActSkin.AsObject,
    rid: number,
    lotteryType: number,
    descText3?: HighlightText.AsObject,
    upMid: number,
    userInfo?: AdditionUserInfo.AsObject,
    dynamicId: string,
    showText2: boolean,
    dynType: number,
    businessId: string,
  }
}

export class AdditionUgc extends jspb.Message {
  getHeadText(): string;
  setHeadText(value: string): AdditionUgc;

  getTitle(): string;
  setTitle(value: string): AdditionUgc;

  getCover(): string;
  setCover(value: string): AdditionUgc;

  getDescText1(): string;
  setDescText1(value: string): AdditionUgc;

  getDescText2(): string;
  setDescText2(value: string): AdditionUgc;

  getUri(): string;
  setUri(value: string): AdditionUgc;

  getDuration(): string;
  setDuration(value: string): AdditionUgc;

  getLineFeed(): boolean;
  setLineFeed(value: boolean): AdditionUgc;

  getCardType(): string;
  setCardType(value: string): AdditionUgc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionUgc.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionUgc): AdditionUgc.AsObject;
  static serializeBinaryToWriter(message: AdditionUgc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionUgc;
  static deserializeBinaryFromReader(message: AdditionUgc, reader: jspb.BinaryReader): AdditionUgc;
}

export namespace AdditionUgc {
  export type AsObject = {
    headText: string,
    title: string,
    cover: string,
    descText1: string,
    descText2: string,
    uri: string,
    duration: string,
    lineFeed: boolean,
    cardType: string,
  }
}

export class AdditionUserInfo extends jspb.Message {
  getName(): string;
  setName(value: string): AdditionUserInfo;

  getFace(): string;
  setFace(value: string): AdditionUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionUserInfo): AdditionUserInfo.AsObject;
  static serializeBinaryToWriter(message: AdditionUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionUserInfo;
  static deserializeBinaryFromReader(message: AdditionUserInfo, reader: jspb.BinaryReader): AdditionUserInfo;
}

export namespace AdditionUserInfo {
  export type AsObject = {
    name: string,
    face: string,
  }
}

export class AdditionVote extends jspb.Message {
  getImageUrl(): string;
  setImageUrl(value: string): AdditionVote;

  getTitle(): string;
  setTitle(value: string): AdditionVote;

  getText1(): string;
  setText1(value: string): AdditionVote;

  getButtonText(): string;
  setButtonText(value: string): AdditionVote;

  getUrl(): string;
  setUrl(value: string): AdditionVote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionVote.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionVote): AdditionVote.AsObject;
  static serializeBinaryToWriter(message: AdditionVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionVote;
  static deserializeBinaryFromReader(message: AdditionVote, reader: jspb.BinaryReader): AdditionVote;
}

export namespace AdditionVote {
  export type AsObject = {
    imageUrl: string,
    title: string,
    text1: string,
    buttonText: string,
    url: string,
  }
}

export class AdditionVote2 extends jspb.Message {
  getAdditionVoteType(): AdditionVoteType;
  setAdditionVoteType(value: AdditionVoteType): AdditionVote2;

  getVoteId(): number;
  setVoteId(value: number): AdditionVote2;

  getTitle(): string;
  setTitle(value: string): AdditionVote2;

  getLabel(): string;
  setLabel(value: string): AdditionVote2;

  getDeadline(): number;
  setDeadline(value: number): AdditionVote2;

  getOpenText(): string;
  setOpenText(value: string): AdditionVote2;

  getCloseText(): string;
  setCloseText(value: string): AdditionVote2;

  getVotedText(): string;
  setVotedText(value: string): AdditionVote2;

  getState(): AdditionVoteState;
  setState(value: AdditionVoteState): AdditionVote2;

  getAdditionVoteWord(): AdditionVoteWord | undefined;
  setAdditionVoteWord(value?: AdditionVoteWord): AdditionVote2;
  hasAdditionVoteWord(): boolean;
  clearAdditionVoteWord(): AdditionVote2;

  getAdditionVotePic(): AdditionVotePic | undefined;
  setAdditionVotePic(value?: AdditionVotePic): AdditionVote2;
  hasAdditionVotePic(): boolean;
  clearAdditionVotePic(): AdditionVote2;

  getAdditionVoteDefaule(): AdditionVoteDefaule | undefined;
  setAdditionVoteDefaule(value?: AdditionVoteDefaule): AdditionVote2;
  hasAdditionVoteDefaule(): boolean;
  clearAdditionVoteDefaule(): AdditionVote2;

  getBizType(): number;
  setBizType(value: number): AdditionVote2;

  getTotal(): number;
  setTotal(value: number): AdditionVote2;

  getCardType(): string;
  setCardType(value: string): AdditionVote2;

  getTips(): string;
  setTips(value: string): AdditionVote2;

  getUri(): string;
  setUri(value: string): AdditionVote2;

  getIsVoted(): boolean;
  setIsVoted(value: boolean): AdditionVote2;

  getChoiceCnt(): number;
  setChoiceCnt(value: number): AdditionVote2;

  getDefauleSelectShare(): boolean;
  setDefauleSelectShare(value: boolean): AdditionVote2;

  getItemCase(): AdditionVote2.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionVote2.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionVote2): AdditionVote2.AsObject;
  static serializeBinaryToWriter(message: AdditionVote2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionVote2;
  static deserializeBinaryFromReader(message: AdditionVote2, reader: jspb.BinaryReader): AdditionVote2;
}

export namespace AdditionVote2 {
  export type AsObject = {
    additionVoteType: AdditionVoteType,
    voteId: number,
    title: string,
    label: string,
    deadline: number,
    openText: string,
    closeText: string,
    votedText: string,
    state: AdditionVoteState,
    additionVoteWord?: AdditionVoteWord.AsObject,
    additionVotePic?: AdditionVotePic.AsObject,
    additionVoteDefaule?: AdditionVoteDefaule.AsObject,
    bizType: number,
    total: number,
    cardType: string,
    tips: string,
    uri: string,
    isVoted: boolean,
    choiceCnt: number,
    defauleSelectShare: boolean,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    ADDITION_VOTE_WORD = 10,
    ADDITION_VOTE_PIC = 11,
    ADDITION_VOTE_DEFAULE = 12,
  }
}

export class AdditionVoteDefaule extends jspb.Message {
  getCoverList(): Array<string>;
  setCoverList(value: Array<string>): AdditionVoteDefaule;
  clearCoverList(): AdditionVoteDefaule;
  addCover(value: string, index?: number): AdditionVoteDefaule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionVoteDefaule.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionVoteDefaule): AdditionVoteDefaule.AsObject;
  static serializeBinaryToWriter(message: AdditionVoteDefaule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionVoteDefaule;
  static deserializeBinaryFromReader(message: AdditionVoteDefaule, reader: jspb.BinaryReader): AdditionVoteDefaule;
}

export namespace AdditionVoteDefaule {
  export type AsObject = {
    coverList: Array<string>,
  }
}

export class AdditionVotePic extends jspb.Message {
  getItemList(): Array<AdditionVotePicItem>;
  setItemList(value: Array<AdditionVotePicItem>): AdditionVotePic;
  clearItemList(): AdditionVotePic;
  addItem(value?: AdditionVotePicItem, index?: number): AdditionVotePicItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionVotePic.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionVotePic): AdditionVotePic.AsObject;
  static serializeBinaryToWriter(message: AdditionVotePic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionVotePic;
  static deserializeBinaryFromReader(message: AdditionVotePic, reader: jspb.BinaryReader): AdditionVotePic;
}

export namespace AdditionVotePic {
  export type AsObject = {
    itemList: Array<AdditionVotePicItem.AsObject>,
  }
}

export class AdditionVotePicItem extends jspb.Message {
  getOptIdx(): number;
  setOptIdx(value: number): AdditionVotePicItem;

  getCover(): string;
  setCover(value: string): AdditionVotePicItem;

  getIsVote(): boolean;
  setIsVote(value: boolean): AdditionVotePicItem;

  getTotal(): number;
  setTotal(value: number): AdditionVotePicItem;

  getPersent(): number;
  setPersent(value: number): AdditionVotePicItem;

  getTitle(): string;
  setTitle(value: string): AdditionVotePicItem;

  getIsMaxOption(): boolean;
  setIsMaxOption(value: boolean): AdditionVotePicItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionVotePicItem.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionVotePicItem): AdditionVotePicItem.AsObject;
  static serializeBinaryToWriter(message: AdditionVotePicItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionVotePicItem;
  static deserializeBinaryFromReader(message: AdditionVotePicItem, reader: jspb.BinaryReader): AdditionVotePicItem;
}

export namespace AdditionVotePicItem {
  export type AsObject = {
    optIdx: number,
    cover: string,
    isVote: boolean,
    total: number,
    persent: number,
    title: string,
    isMaxOption: boolean,
  }
}

export class AdditionVoteWord extends jspb.Message {
  getItemList(): Array<AdditionVoteWordItem>;
  setItemList(value: Array<AdditionVoteWordItem>): AdditionVoteWord;
  clearItemList(): AdditionVoteWord;
  addItem(value?: AdditionVoteWordItem, index?: number): AdditionVoteWordItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionVoteWord.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionVoteWord): AdditionVoteWord.AsObject;
  static serializeBinaryToWriter(message: AdditionVoteWord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionVoteWord;
  static deserializeBinaryFromReader(message: AdditionVoteWord, reader: jspb.BinaryReader): AdditionVoteWord;
}

export namespace AdditionVoteWord {
  export type AsObject = {
    itemList: Array<AdditionVoteWordItem.AsObject>,
  }
}

export class AdditionVoteWordItem extends jspb.Message {
  getOptIdx(): number;
  setOptIdx(value: number): AdditionVoteWordItem;

  getTitle(): string;
  setTitle(value: string): AdditionVoteWordItem;

  getIsVote(): boolean;
  setIsVote(value: boolean): AdditionVoteWordItem;

  getTotal(): number;
  setTotal(value: number): AdditionVoteWordItem;

  getPersent(): number;
  setPersent(value: number): AdditionVoteWordItem;

  getIsMaxOption(): boolean;
  setIsMaxOption(value: boolean): AdditionVoteWordItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionVoteWordItem.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionVoteWordItem): AdditionVoteWordItem.AsObject;
  static serializeBinaryToWriter(message: AdditionVoteWordItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionVoteWordItem;
  static deserializeBinaryFromReader(message: AdditionVoteWordItem, reader: jspb.BinaryReader): AdditionVoteWordItem;
}

export namespace AdditionVoteWordItem {
  export type AsObject = {
    optIdx: number,
    title: string,
    isVote: boolean,
    total: number,
    persent: number,
    isMaxOption: boolean,
  }
}

export class AdditionalActSkin extends jspb.Message {
  getSvga(): string;
  setSvga(value: string): AdditionalActSkin;

  getLastImage(): string;
  setLastImage(value: string): AdditionalActSkin;

  getPlayTimes(): number;
  setPlayTimes(value: number): AdditionalActSkin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalActSkin.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalActSkin): AdditionalActSkin.AsObject;
  static serializeBinaryToWriter(message: AdditionalActSkin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalActSkin;
  static deserializeBinaryFromReader(message: AdditionalActSkin, reader: jspb.BinaryReader): AdditionalActSkin;
}

export namespace AdditionalActSkin {
  export type AsObject = {
    svga: string,
    lastImage: string,
    playTimes: number,
  }
}

export class AdditionalButton extends jspb.Message {
  getType(): AddButtonType;
  setType(value: AddButtonType): AdditionalButton;

  getJumpStyle(): AdditionalButtonStyle | undefined;
  setJumpStyle(value?: AdditionalButtonStyle): AdditionalButton;
  hasJumpStyle(): boolean;
  clearJumpStyle(): AdditionalButton;

  getJumpUrl(): string;
  setJumpUrl(value: string): AdditionalButton;

  getUncheck(): AdditionalButtonStyle | undefined;
  setUncheck(value?: AdditionalButtonStyle): AdditionalButton;
  hasUncheck(): boolean;
  clearUncheck(): AdditionalButton;

  getCheck(): AdditionalButtonStyle | undefined;
  setCheck(value?: AdditionalButtonStyle): AdditionalButton;
  hasCheck(): boolean;
  clearCheck(): AdditionalButton;

  getStatus(): AdditionalButtonStatus;
  setStatus(value: AdditionalButtonStatus): AdditionalButton;

  getClickType(): AdditionalButtonClickType;
  setClickType(value: AdditionalButtonClickType): AdditionalButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalButton.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalButton): AdditionalButton.AsObject;
  static serializeBinaryToWriter(message: AdditionalButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalButton;
  static deserializeBinaryFromReader(message: AdditionalButton, reader: jspb.BinaryReader): AdditionalButton;
}

export namespace AdditionalButton {
  export type AsObject = {
    type: AddButtonType,
    jumpStyle?: AdditionalButtonStyle.AsObject,
    jumpUrl: string,
    uncheck?: AdditionalButtonStyle.AsObject,
    check?: AdditionalButtonStyle.AsObject,
    status: AdditionalButtonStatus,
    clickType: AdditionalButtonClickType,
  }
}

export class AdditionalButtonInteractive extends jspb.Message {
  getPopups(): string;
  setPopups(value: string): AdditionalButtonInteractive;

  getConfirm(): string;
  setConfirm(value: string): AdditionalButtonInteractive;

  getCancel(): string;
  setCancel(value: string): AdditionalButtonInteractive;

  getDesc(): string;
  setDesc(value: string): AdditionalButtonInteractive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalButtonInteractive.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalButtonInteractive): AdditionalButtonInteractive.AsObject;
  static serializeBinaryToWriter(message: AdditionalButtonInteractive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalButtonInteractive;
  static deserializeBinaryFromReader(message: AdditionalButtonInteractive, reader: jspb.BinaryReader): AdditionalButtonInteractive;
}

export namespace AdditionalButtonInteractive {
  export type AsObject = {
    popups: string,
    confirm: string,
    cancel: string,
    desc: string,
  }
}

export class AdditionalButtonShare extends jspb.Message {
  getShow(): number;
  setShow(value: number): AdditionalButtonShare;

  getIcon(): string;
  setIcon(value: string): AdditionalButtonShare;

  getText(): string;
  setText(value: string): AdditionalButtonShare;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalButtonShare.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalButtonShare): AdditionalButtonShare.AsObject;
  static serializeBinaryToWriter(message: AdditionalButtonShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalButtonShare;
  static deserializeBinaryFromReader(message: AdditionalButtonShare, reader: jspb.BinaryReader): AdditionalButtonShare;
}

export namespace AdditionalButtonShare {
  export type AsObject = {
    show: number,
    icon: string,
    text: string,
  }
}

export class AdditionalButtonStyle extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): AdditionalButtonStyle;

  getText(): string;
  setText(value: string): AdditionalButtonStyle;

  getInteractive(): AdditionalButtonInteractive | undefined;
  setInteractive(value?: AdditionalButtonInteractive): AdditionalButtonStyle;
  hasInteractive(): boolean;
  clearInteractive(): AdditionalButtonStyle;

  getBgStyle(): AddButtonBgStyle;
  setBgStyle(value: AddButtonBgStyle): AdditionalButtonStyle;

  getToast(): string;
  setToast(value: string): AdditionalButtonStyle;

  getDisable(): DisableState;
  setDisable(value: DisableState): AdditionalButtonStyle;

  getShare(): AdditionalButtonShare | undefined;
  setShare(value?: AdditionalButtonShare): AdditionalButtonStyle;
  hasShare(): boolean;
  clearShare(): AdditionalButtonStyle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalButtonStyle.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalButtonStyle): AdditionalButtonStyle.AsObject;
  static serializeBinaryToWriter(message: AdditionalButtonStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalButtonStyle;
  static deserializeBinaryFromReader(message: AdditionalButtonStyle, reader: jspb.BinaryReader): AdditionalButtonStyle;
}

export namespace AdditionalButtonStyle {
  export type AsObject = {
    icon: string,
    text: string,
    interactive?: AdditionalButtonInteractive.AsObject,
    bgStyle: AddButtonBgStyle,
    toast: string,
    disable: DisableState,
    share?: AdditionalButtonShare.AsObject,
  }
}

export class AdditionalPGC extends jspb.Message {
  getHeadText(): string;
  setHeadText(value: string): AdditionalPGC;

  getTitle(): string;
  setTitle(value: string): AdditionalPGC;

  getImageUrl(): string;
  setImageUrl(value: string): AdditionalPGC;

  getDescText1(): string;
  setDescText1(value: string): AdditionalPGC;

  getDescText2(): string;
  setDescText2(value: string): AdditionalPGC;

  getUrl(): string;
  setUrl(value: string): AdditionalPGC;

  getButton(): AdditionalButton | undefined;
  setButton(value?: AdditionalButton): AdditionalPGC;
  hasButton(): boolean;
  clearButton(): AdditionalPGC;

  getHeadIcon(): string;
  setHeadIcon(value: string): AdditionalPGC;

  getStyle(): ImageStyle;
  setStyle(value: ImageStyle): AdditionalPGC;

  getType(): string;
  setType(value: string): AdditionalPGC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalPGC.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalPGC): AdditionalPGC.AsObject;
  static serializeBinaryToWriter(message: AdditionalPGC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalPGC;
  static deserializeBinaryFromReader(message: AdditionalPGC, reader: jspb.BinaryReader): AdditionalPGC;
}

export namespace AdditionalPGC {
  export type AsObject = {
    headText: string,
    title: string,
    imageUrl: string,
    descText1: string,
    descText2: string,
    url: string,
    button?: AdditionalButton.AsObject,
    headIcon: string,
    style: ImageStyle,
    type: string,
  }
}

export class AlumniDynamicsReply extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): AlumniDynamicsReply;
  clearListList(): AlumniDynamicsReply;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getToast(): string;
  setToast(value: string): AlumniDynamicsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlumniDynamicsReply.AsObject;
  static toObject(includeInstance: boolean, msg: AlumniDynamicsReply): AlumniDynamicsReply.AsObject;
  static serializeBinaryToWriter(message: AlumniDynamicsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlumniDynamicsReply;
  static deserializeBinaryFromReader(message: AlumniDynamicsReply, reader: jspb.BinaryReader): AlumniDynamicsReply;
}

export namespace AlumniDynamicsReply {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    toast: string,
  }
}

export class AlumniDynamicsReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): AlumniDynamicsReq;

  getFirstTime(): number;
  setFirstTime(value: number): AlumniDynamicsReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): AlumniDynamicsReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): AlumniDynamicsReq;

  getLocalTime(): number;
  setLocalTime(value: number): AlumniDynamicsReq;

  getPage(): number;
  setPage(value: number): AlumniDynamicsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlumniDynamicsReq.AsObject;
  static toObject(includeInstance: boolean, msg: AlumniDynamicsReq): AlumniDynamicsReq.AsObject;
  static serializeBinaryToWriter(message: AlumniDynamicsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlumniDynamicsReq;
  static deserializeBinaryFromReader(message: AlumniDynamicsReq, reader: jspb.BinaryReader): AlumniDynamicsReq;
}

export namespace AlumniDynamicsReq {
  export type AsObject = {
    campusId: number,
    firstTime: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    localTime: number,
    page: number,
  }
}

export class CampusBannerInfo extends jspb.Message {
  getImage(): string;
  setImage(value: string): CampusBannerInfo;

  getJumpUrl(): string;
  setJumpUrl(value: string): CampusBannerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusBannerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CampusBannerInfo): CampusBannerInfo.AsObject;
  static serializeBinaryToWriter(message: CampusBannerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusBannerInfo;
  static deserializeBinaryFromReader(message: CampusBannerInfo, reader: jspb.BinaryReader): CampusBannerInfo;
}

export namespace CampusBannerInfo {
  export type AsObject = {
    image: string,
    jumpUrl: string,
  }
}

export class CampusBillBoardReply extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CampusBillBoardReply;

  getHelpUri(): string;
  setHelpUri(value: string): CampusBillBoardReply;

  getCampusName(): string;
  setCampusName(value: string): CampusBillBoardReply;

  getBuildTime(): number;
  setBuildTime(value: number): CampusBillBoardReply;

  getVersionCode(): string;
  setVersionCode(value: string): CampusBillBoardReply;

  getListList(): Array<OfficialItem>;
  setListList(value: Array<OfficialItem>): CampusBillBoardReply;
  clearListList(): CampusBillBoardReply;
  addList(value?: OfficialItem, index?: number): OfficialItem;

  getShareUri(): string;
  setShareUri(value: string): CampusBillBoardReply;

  getBindNotice(): number;
  setBindNotice(value: number): CampusBillBoardReply;

  getUpdateToast(): string;
  setUpdateToast(value: string): CampusBillBoardReply;

  getCampusId(): number;
  setCampusId(value: number): CampusBillBoardReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusBillBoardReply.AsObject;
  static toObject(includeInstance: boolean, msg: CampusBillBoardReply): CampusBillBoardReply.AsObject;
  static serializeBinaryToWriter(message: CampusBillBoardReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusBillBoardReply;
  static deserializeBinaryFromReader(message: CampusBillBoardReply, reader: jspb.BinaryReader): CampusBillBoardReply;
}

export namespace CampusBillBoardReply {
  export type AsObject = {
    title: string,
    helpUri: string,
    campusName: string,
    buildTime: number,
    versionCode: string,
    listList: Array<OfficialItem.AsObject>,
    shareUri: string,
    bindNotice: number,
    updateToast: string,
    campusId: number,
  }
}

export class CampusBillBoardReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): CampusBillBoardReq;

  getVersionCode(): string;
  setVersionCode(value: string): CampusBillBoardReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): CampusBillBoardReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): CampusBillBoardReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusBillBoardReq.AsObject;
  static toObject(includeInstance: boolean, msg: CampusBillBoardReq): CampusBillBoardReq.AsObject;
  static serializeBinaryToWriter(message: CampusBillBoardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusBillBoardReq;
  static deserializeBinaryFromReader(message: CampusBillBoardReq, reader: jspb.BinaryReader): CampusBillBoardReq;
}

export namespace CampusBillBoardReq {
  export type AsObject = {
    campusId: number,
    versionCode: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class CampusBillboardInternalReq extends jspb.Message {
  getMid(): number;
  setMid(value: number): CampusBillboardInternalReq;

  getCampusId(): number;
  setCampusId(value: number): CampusBillboardInternalReq;

  getVersionCode(): string;
  setVersionCode(value: string): CampusBillboardInternalReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusBillboardInternalReq.AsObject;
  static toObject(includeInstance: boolean, msg: CampusBillboardInternalReq): CampusBillboardInternalReq.AsObject;
  static serializeBinaryToWriter(message: CampusBillboardInternalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusBillboardInternalReq;
  static deserializeBinaryFromReader(message: CampusBillboardInternalReq, reader: jspb.BinaryReader): CampusBillboardInternalReq;
}

export namespace CampusBillboardInternalReq {
  export type AsObject = {
    mid: number,
    campusId: number,
    versionCode: string,
  }
}

export class CampusFeedbackInfo extends jspb.Message {
  getBizType(): number;
  setBizType(value: number): CampusFeedbackInfo;

  getBizId(): number;
  setBizId(value: number): CampusFeedbackInfo;

  getCampusId(): number;
  setCampusId(value: number): CampusFeedbackInfo;

  getReason(): string;
  setReason(value: string): CampusFeedbackInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusFeedbackInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CampusFeedbackInfo): CampusFeedbackInfo.AsObject;
  static serializeBinaryToWriter(message: CampusFeedbackInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusFeedbackInfo;
  static deserializeBinaryFromReader(message: CampusFeedbackInfo, reader: jspb.BinaryReader): CampusFeedbackInfo;
}

export namespace CampusFeedbackInfo {
  export type AsObject = {
    bizType: number,
    bizId: number,
    campusId: number,
    reason: string,
  }
}

export class CampusFeedbackReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): CampusFeedbackReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusFeedbackReply.AsObject;
  static toObject(includeInstance: boolean, msg: CampusFeedbackReply): CampusFeedbackReply.AsObject;
  static serializeBinaryToWriter(message: CampusFeedbackReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusFeedbackReply;
  static deserializeBinaryFromReader(message: CampusFeedbackReply, reader: jspb.BinaryReader): CampusFeedbackReply;
}

export namespace CampusFeedbackReply {
  export type AsObject = {
    message: string,
  }
}

export class CampusFeedbackReq extends jspb.Message {
  getInfosList(): Array<CampusFeedbackInfo>;
  setInfosList(value: Array<CampusFeedbackInfo>): CampusFeedbackReq;
  clearInfosList(): CampusFeedbackReq;
  addInfos(value?: CampusFeedbackInfo, index?: number): CampusFeedbackInfo;

  getFrom(): number;
  setFrom(value: number): CampusFeedbackReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusFeedbackReq.AsObject;
  static toObject(includeInstance: boolean, msg: CampusFeedbackReq): CampusFeedbackReq.AsObject;
  static serializeBinaryToWriter(message: CampusFeedbackReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusFeedbackReq;
  static deserializeBinaryFromReader(message: CampusFeedbackReq, reader: jspb.BinaryReader): CampusFeedbackReq;
}

export namespace CampusFeedbackReq {
  export type AsObject = {
    infosList: Array<CampusFeedbackInfo.AsObject>,
    from: number,
  }
}

export class CampusInfo extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): CampusInfo;

  getCampusName(): string;
  setCampusName(value: string): CampusInfo;

  getDesc(): string;
  setDesc(value: string): CampusInfo;

  getOnline(): number;
  setOnline(value: number): CampusInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CampusInfo): CampusInfo.AsObject;
  static serializeBinaryToWriter(message: CampusInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusInfo;
  static deserializeBinaryFromReader(message: CampusInfo, reader: jspb.BinaryReader): CampusInfo;
}

export namespace CampusInfo {
  export type AsObject = {
    campusId: number,
    campusName: string,
    desc: string,
    online: number,
  }
}

export class CampusLabel extends jspb.Message {
  getText(): string;
  setText(value: string): CampusLabel;

  getUrl(): string;
  setUrl(value: string): CampusLabel;

  getDesc(): string;
  setDesc(value: string): CampusLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusLabel.AsObject;
  static toObject(includeInstance: boolean, msg: CampusLabel): CampusLabel.AsObject;
  static serializeBinaryToWriter(message: CampusLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusLabel;
  static deserializeBinaryFromReader(message: CampusLabel, reader: jspb.BinaryReader): CampusLabel;
}

export namespace CampusLabel {
  export type AsObject = {
    text: string,
    url: string,
    desc: string,
  }
}

export class CampusMateLikeListReply extends jspb.Message {
  getListList(): Array<ModuleAuthor>;
  setListList(value: Array<ModuleAuthor>): CampusMateLikeListReply;
  clearListList(): CampusMateLikeListReply;
  addList(value?: ModuleAuthor, index?: number): ModuleAuthor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusMateLikeListReply.AsObject;
  static toObject(includeInstance: boolean, msg: CampusMateLikeListReply): CampusMateLikeListReply.AsObject;
  static serializeBinaryToWriter(message: CampusMateLikeListReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusMateLikeListReply;
  static deserializeBinaryFromReader(message: CampusMateLikeListReply, reader: jspb.BinaryReader): CampusMateLikeListReply;
}

export namespace CampusMateLikeListReply {
  export type AsObject = {
    listList: Array<ModuleAuthor.AsObject>,
  }
}

export class CampusMateLikeListReq extends jspb.Message {
  getDynamicId(): number;
  setDynamicId(value: number): CampusMateLikeListReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusMateLikeListReq.AsObject;
  static toObject(includeInstance: boolean, msg: CampusMateLikeListReq): CampusMateLikeListReq.AsObject;
  static serializeBinaryToWriter(message: CampusMateLikeListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusMateLikeListReq;
  static deserializeBinaryFromReader(message: CampusMateLikeListReq, reader: jspb.BinaryReader): CampusMateLikeListReq;
}

export namespace CampusMateLikeListReq {
  export type AsObject = {
    dynamicId: number,
  }
}

export class CampusNoticeInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CampusNoticeInfo;

  getDesc(): string;
  setDesc(value: string): CampusNoticeInfo;

  getButton(): CampusLabel | undefined;
  setButton(value?: CampusLabel): CampusNoticeInfo;
  hasButton(): boolean;
  clearButton(): CampusNoticeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusNoticeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CampusNoticeInfo): CampusNoticeInfo.AsObject;
  static serializeBinaryToWriter(message: CampusNoticeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusNoticeInfo;
  static deserializeBinaryFromReader(message: CampusNoticeInfo, reader: jspb.BinaryReader): CampusNoticeInfo;
}

export namespace CampusNoticeInfo {
  export type AsObject = {
    title: string,
    desc: string,
    button?: CampusLabel.AsObject,
  }
}

export class CampusRcmdFeedReply extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): CampusRcmdFeedReply;
  clearListList(): CampusRcmdFeedReply;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getToast(): string;
  setToast(value: string): CampusRcmdFeedReply;

  getGuideBar(): GuideBarInfo | undefined;
  setGuideBar(value?: GuideBarInfo): CampusRcmdFeedReply;
  hasGuideBar(): boolean;
  clearGuideBar(): CampusRcmdFeedReply;

  getHasMore(): boolean;
  setHasMore(value: boolean): CampusRcmdFeedReply;

  getUpdate(): boolean;
  setUpdate(value: boolean): CampusRcmdFeedReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRcmdFeedReply.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRcmdFeedReply): CampusRcmdFeedReply.AsObject;
  static serializeBinaryToWriter(message: CampusRcmdFeedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRcmdFeedReply;
  static deserializeBinaryFromReader(message: CampusRcmdFeedReply, reader: jspb.BinaryReader): CampusRcmdFeedReply;
}

export namespace CampusRcmdFeedReply {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    toast: string,
    guideBar?: GuideBarInfo.AsObject,
    hasMore: boolean,
    update: boolean,
  }
}

export class CampusRcmdFeedReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): CampusRcmdFeedReq;

  getFirstTime(): number;
  setFirstTime(value: number): CampusRcmdFeedReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): CampusRcmdFeedReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): CampusRcmdFeedReq;

  getLocalTime(): number;
  setLocalTime(value: number): CampusRcmdFeedReq;

  getPage(): number;
  setPage(value: number): CampusRcmdFeedReq;

  getScroll(): number;
  setScroll(value: number): CampusRcmdFeedReq;

  getViewDynId(): string;
  setViewDynId(value: string): CampusRcmdFeedReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRcmdFeedReq.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRcmdFeedReq): CampusRcmdFeedReq.AsObject;
  static serializeBinaryToWriter(message: CampusRcmdFeedReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRcmdFeedReq;
  static deserializeBinaryFromReader(message: CampusRcmdFeedReq, reader: jspb.BinaryReader): CampusRcmdFeedReq;
}

export namespace CampusRcmdFeedReq {
  export type AsObject = {
    campusId: number,
    firstTime: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    localTime: number,
    page: number,
    scroll: number,
    viewDynId: string,
  }
}

export class CampusRcmdInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CampusRcmdInfo;

  getItemsList(): Array<CampusRcmdItem>;
  setItemsList(value: Array<CampusRcmdItem>): CampusRcmdInfo;
  clearItemsList(): CampusRcmdInfo;
  addItems(value?: CampusRcmdItem, index?: number): CampusRcmdItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRcmdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRcmdInfo): CampusRcmdInfo.AsObject;
  static serializeBinaryToWriter(message: CampusRcmdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRcmdInfo;
  static deserializeBinaryFromReader(message: CampusRcmdInfo, reader: jspb.BinaryReader): CampusRcmdInfo;
}

export namespace CampusRcmdInfo {
  export type AsObject = {
    title: string,
    itemsList: Array<CampusRcmdItem.AsObject>,
  }
}

export class CampusRcmdItem extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CampusRcmdItem;

  getItemsList(): Array<RcmdItem>;
  setItemsList(value: Array<RcmdItem>): CampusRcmdItem;
  clearItemsList(): CampusRcmdItem;
  addItems(value?: RcmdItem, index?: number): RcmdItem;

  getCampusId(): number;
  setCampusId(value: number): CampusRcmdItem;

  getEntryLabel(): CampusLabel | undefined;
  setEntryLabel(value?: CampusLabel): CampusRcmdItem;
  hasEntryLabel(): boolean;
  clearEntryLabel(): CampusRcmdItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRcmdItem.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRcmdItem): CampusRcmdItem.AsObject;
  static serializeBinaryToWriter(message: CampusRcmdItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRcmdItem;
  static deserializeBinaryFromReader(message: CampusRcmdItem, reader: jspb.BinaryReader): CampusRcmdItem;
}

export namespace CampusRcmdItem {
  export type AsObject = {
    title: string,
    itemsList: Array<RcmdItem.AsObject>,
    campusId: number,
    entryLabel?: CampusLabel.AsObject,
  }
}

export class CampusRcmdReply extends jspb.Message {
  getTop(): CampusRcmdTop | undefined;
  setTop(value?: CampusRcmdTop): CampusRcmdReply;
  hasTop(): boolean;
  clearTop(): CampusRcmdReply;

  getRcmd(): CampusRcmdInfo | undefined;
  setRcmd(value?: CampusRcmdInfo): CampusRcmdReply;
  hasRcmd(): boolean;
  clearRcmd(): CampusRcmdReply;

  getCampusTop(): CampusTop | undefined;
  setCampusTop(value?: CampusTop): CampusRcmdReply;
  hasCampusTop(): boolean;
  clearCampusTop(): CampusRcmdReply;

  getPageType(): number;
  setPageType(value: number): CampusRcmdReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRcmdReply.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRcmdReply): CampusRcmdReply.AsObject;
  static serializeBinaryToWriter(message: CampusRcmdReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRcmdReply;
  static deserializeBinaryFromReader(message: CampusRcmdReply, reader: jspb.BinaryReader): CampusRcmdReply;
}

export namespace CampusRcmdReply {
  export type AsObject = {
    top?: CampusRcmdTop.AsObject,
    rcmd?: CampusRcmdInfo.AsObject,
    campusTop?: CampusTop.AsObject,
    pageType: number,
  }
}

export class CampusRcmdReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): CampusRcmdReq;

  getCampusName(): string;
  setCampusName(value: string): CampusRcmdReq;

  getLat(): number;
  setLat(value: number): CampusRcmdReq;

  getLng(): number;
  setLng(value: number): CampusRcmdReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): CampusRcmdReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): CampusRcmdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRcmdReq.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRcmdReq): CampusRcmdReq.AsObject;
  static serializeBinaryToWriter(message: CampusRcmdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRcmdReq;
  static deserializeBinaryFromReader(message: CampusRcmdReq, reader: jspb.BinaryReader): CampusRcmdReq;
}

export namespace CampusRcmdReq {
  export type AsObject = {
    campusId: number,
    campusName: string,
    lat: number,
    lng: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class CampusRcmdTop extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): CampusRcmdTop;

  getCampusName(): string;
  setCampusName(value: string): CampusRcmdTop;

  getTitle(): string;
  setTitle(value: string): CampusRcmdTop;

  getDesc(): string;
  setDesc(value: string): CampusRcmdTop;

  getType(): number;
  setType(value: number): CampusRcmdTop;

  getButton(): RcmdTopButton | undefined;
  setButton(value?: RcmdTopButton): CampusRcmdTop;
  hasButton(): boolean;
  clearButton(): CampusRcmdTop;

  getSwitchLabel(): CampusLabel | undefined;
  setSwitchLabel(value?: CampusLabel): CampusRcmdTop;
  hasSwitchLabel(): boolean;
  clearSwitchLabel(): CampusRcmdTop;

  getNoticeLabel(): CampusLabel | undefined;
  setNoticeLabel(value?: CampusLabel): CampusRcmdTop;
  hasNoticeLabel(): boolean;
  clearNoticeLabel(): CampusRcmdTop;

  getDesc2(): string;
  setDesc2(value: string): CampusRcmdTop;

  getDesc3(): string;
  setDesc3(value: string): CampusRcmdTop;

  getInviteLabel(): CampusLabel | undefined;
  setInviteLabel(value?: CampusLabel): CampusRcmdTop;
  hasInviteLabel(): boolean;
  clearInviteLabel(): CampusRcmdTop;

  getReserveLabel(): CampusLabel | undefined;
  setReserveLabel(value?: CampusLabel): CampusRcmdTop;
  hasReserveLabel(): boolean;
  clearReserveLabel(): CampusRcmdTop;

  getReserveNumber(): number;
  setReserveNumber(value: number): CampusRcmdTop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRcmdTop.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRcmdTop): CampusRcmdTop.AsObject;
  static serializeBinaryToWriter(message: CampusRcmdTop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRcmdTop;
  static deserializeBinaryFromReader(message: CampusRcmdTop, reader: jspb.BinaryReader): CampusRcmdTop;
}

export namespace CampusRcmdTop {
  export type AsObject = {
    campusId: number,
    campusName: string,
    title: string,
    desc: string,
    type: number,
    button?: RcmdTopButton.AsObject,
    switchLabel?: CampusLabel.AsObject,
    noticeLabel?: CampusLabel.AsObject,
    desc2: string,
    desc3: string,
    inviteLabel?: CampusLabel.AsObject,
    reserveLabel?: CampusLabel.AsObject,
    reserveNumber: number,
  }
}

export class CampusRedDotReply extends jspb.Message {
  getRedDot(): number;
  setRedDot(value: number): CampusRedDotReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRedDotReply.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRedDotReply): CampusRedDotReply.AsObject;
  static serializeBinaryToWriter(message: CampusRedDotReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRedDotReply;
  static deserializeBinaryFromReader(message: CampusRedDotReply, reader: jspb.BinaryReader): CampusRedDotReply;
}

export namespace CampusRedDotReply {
  export type AsObject = {
    redDot: number,
  }
}

export class CampusRedDotReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): CampusRedDotReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusRedDotReq.AsObject;
  static toObject(includeInstance: boolean, msg: CampusRedDotReq): CampusRedDotReq.AsObject;
  static serializeBinaryToWriter(message: CampusRedDotReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusRedDotReq;
  static deserializeBinaryFromReader(message: CampusRedDotReq, reader: jspb.BinaryReader): CampusRedDotReq;
}

export namespace CampusRedDotReq {
  export type AsObject = {
    campusId: number,
  }
}

export class CampusShowTabInfo extends jspb.Message {
  getName(): string;
  setName(value: string): CampusShowTabInfo;

  getUrl(): string;
  setUrl(value: string): CampusShowTabInfo;

  getType(): number;
  setType(value: number): CampusShowTabInfo;

  getRedDot(): number;
  setRedDot(value: number): CampusShowTabInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusShowTabInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CampusShowTabInfo): CampusShowTabInfo.AsObject;
  static serializeBinaryToWriter(message: CampusShowTabInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusShowTabInfo;
  static deserializeBinaryFromReader(message: CampusShowTabInfo, reader: jspb.BinaryReader): CampusShowTabInfo;
}

export namespace CampusShowTabInfo {
  export type AsObject = {
    name: string,
    url: string,
    type: number,
    redDot: number,
  }
}

export class CampusTop extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): CampusTop;

  getCampusName(): string;
  setCampusName(value: string): CampusTop;

  getTabsList(): Array<CampusShowTabInfo>;
  setTabsList(value: Array<CampusShowTabInfo>): CampusTop;
  clearTabsList(): CampusTop;
  addTabs(value?: CampusShowTabInfo, index?: number): CampusShowTabInfo;

  getSwitchLabel(): CampusLabel | undefined;
  setSwitchLabel(value?: CampusLabel): CampusTop;
  hasSwitchLabel(): boolean;
  clearSwitchLabel(): CampusTop;

  getTitle(): string;
  setTitle(value: string): CampusTop;

  getBannerList(): Array<CampusBannerInfo>;
  setBannerList(value: Array<CampusBannerInfo>): CampusTop;
  clearBannerList(): CampusTop;
  addBanner(value?: CampusBannerInfo, index?: number): CampusBannerInfo;

  getInviteLabel(): CampusLabel | undefined;
  setInviteLabel(value?: CampusLabel): CampusTop;
  hasInviteLabel(): boolean;
  clearInviteLabel(): CampusTop;

  getNotice(): CampusNoticeInfo | undefined;
  setNotice(value?: CampusNoticeInfo): CampusTop;
  hasNotice(): boolean;
  clearNotice(): CampusTop;

  getTopicSquare(): TopicSquareInfo | undefined;
  setTopicSquare(value?: TopicSquareInfo): CampusTop;
  hasTopicSquare(): boolean;
  clearTopicSquare(): CampusTop;

  getCampusBadge(): string;
  setCampusBadge(value: string): CampusTop;

  getCampusBackground(): string;
  setCampusBackground(value: string): CampusTop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusTop.AsObject;
  static toObject(includeInstance: boolean, msg: CampusTop): CampusTop.AsObject;
  static serializeBinaryToWriter(message: CampusTop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusTop;
  static deserializeBinaryFromReader(message: CampusTop, reader: jspb.BinaryReader): CampusTop;
}

export namespace CampusTop {
  export type AsObject = {
    campusId: number,
    campusName: string,
    tabsList: Array<CampusShowTabInfo.AsObject>,
    switchLabel?: CampusLabel.AsObject,
    title: string,
    bannerList: Array<CampusBannerInfo.AsObject>,
    inviteLabel?: CampusLabel.AsObject,
    notice?: CampusNoticeInfo.AsObject,
    topicSquare?: TopicSquareInfo.AsObject,
    campusBadge: string,
    campusBackground: string,
  }
}

export class CampusTopicRcmdFeedReply extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): CampusTopicRcmdFeedReply;
  clearListList(): CampusTopicRcmdFeedReply;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getToast(): string;
  setToast(value: string): CampusTopicRcmdFeedReply;

  getHasMore(): boolean;
  setHasMore(value: boolean): CampusTopicRcmdFeedReply;

  getOffset(): string;
  setOffset(value: string): CampusTopicRcmdFeedReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusTopicRcmdFeedReply.AsObject;
  static toObject(includeInstance: boolean, msg: CampusTopicRcmdFeedReply): CampusTopicRcmdFeedReply.AsObject;
  static serializeBinaryToWriter(message: CampusTopicRcmdFeedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusTopicRcmdFeedReply;
  static deserializeBinaryFromReader(message: CampusTopicRcmdFeedReply, reader: jspb.BinaryReader): CampusTopicRcmdFeedReply;
}

export namespace CampusTopicRcmdFeedReply {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    toast: string,
    hasMore: boolean,
    offset: string,
  }
}

export class CampusTopicRcmdFeedReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): CampusTopicRcmdFeedReq;

  getOffset(): string;
  setOffset(value: string): CampusTopicRcmdFeedReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): CampusTopicRcmdFeedReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): CampusTopicRcmdFeedReq;

  getLocalTime(): number;
  setLocalTime(value: number): CampusTopicRcmdFeedReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampusTopicRcmdFeedReq.AsObject;
  static toObject(includeInstance: boolean, msg: CampusTopicRcmdFeedReq): CampusTopicRcmdFeedReq.AsObject;
  static serializeBinaryToWriter(message: CampusTopicRcmdFeedReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampusTopicRcmdFeedReq;
  static deserializeBinaryFromReader(message: CampusTopicRcmdFeedReq, reader: jspb.BinaryReader): CampusTopicRcmdFeedReq;
}

export namespace CampusTopicRcmdFeedReq {
  export type AsObject = {
    campusId: number,
    offset: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    localTime: number,
  }
}

export class CardVideoDynList extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): CardVideoDynList;
  clearListList(): CardVideoDynList;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getUpdateNum(): number;
  setUpdateNum(value: number): CardVideoDynList;

  getHistoryOffset(): string;
  setHistoryOffset(value: string): CardVideoDynList;

  getUpdateBaseline(): string;
  setUpdateBaseline(value: string): CardVideoDynList;

  getHasMore(): boolean;
  setHasMore(value: boolean): CardVideoDynList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardVideoDynList.AsObject;
  static toObject(includeInstance: boolean, msg: CardVideoDynList): CardVideoDynList.AsObject;
  static serializeBinaryToWriter(message: CardVideoDynList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardVideoDynList;
  static deserializeBinaryFromReader(message: CardVideoDynList, reader: jspb.BinaryReader): CardVideoDynList;
}

export namespace CardVideoDynList {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    updateNum: number,
    historyOffset: string,
    updateBaseline: string,
    hasMore: boolean,
  }
}

export class CardVideoFollowList extends jspb.Message {
  getViewAllLink(): string;
  setViewAllLink(value: string): CardVideoFollowList;

  getListList(): Array<FollowListItem>;
  setListList(value: Array<FollowListItem>): CardVideoFollowList;
  clearListList(): CardVideoFollowList;
  addList(value?: FollowListItem, index?: number): FollowListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardVideoFollowList.AsObject;
  static toObject(includeInstance: boolean, msg: CardVideoFollowList): CardVideoFollowList.AsObject;
  static serializeBinaryToWriter(message: CardVideoFollowList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardVideoFollowList;
  static deserializeBinaryFromReader(message: CardVideoFollowList, reader: jspb.BinaryReader): CardVideoFollowList;
}

export namespace CardVideoFollowList {
  export type AsObject = {
    viewAllLink: string,
    listList: Array<FollowListItem.AsObject>,
  }
}

export class CardVideoUpList extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CardVideoUpList;

  getListList(): Array<UpListItem>;
  setListList(value: Array<UpListItem>): CardVideoUpList;
  clearListList(): CardVideoUpList;
  addList(value?: UpListItem, index?: number): UpListItem;

  getFootprint(): string;
  setFootprint(value: string): CardVideoUpList;

  getShowLiveNum(): number;
  setShowLiveNum(value: number): CardVideoUpList;

  getMoreLabel(): UpListMoreLabel | undefined;
  setMoreLabel(value?: UpListMoreLabel): CardVideoUpList;
  hasMoreLabel(): boolean;
  clearMoreLabel(): CardVideoUpList;

  getTitleSwitch(): number;
  setTitleSwitch(value: number): CardVideoUpList;

  getShowMoreLabel(): boolean;
  setShowMoreLabel(value: boolean): CardVideoUpList;

  getShowInPersonal(): boolean;
  setShowInPersonal(value: boolean): CardVideoUpList;

  getShowMoreButton(): boolean;
  setShowMoreButton(value: boolean): CardVideoUpList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardVideoUpList.AsObject;
  static toObject(includeInstance: boolean, msg: CardVideoUpList): CardVideoUpList.AsObject;
  static serializeBinaryToWriter(message: CardVideoUpList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardVideoUpList;
  static deserializeBinaryFromReader(message: CardVideoUpList, reader: jspb.BinaryReader): CardVideoUpList;
}

export namespace CardVideoUpList {
  export type AsObject = {
    title: string,
    listList: Array<UpListItem.AsObject>,
    footprint: string,
    showLiveNum: number,
    moreLabel?: UpListMoreLabel.AsObject,
    titleSwitch: number,
    showMoreLabel: boolean,
    showInPersonal: boolean,
    showMoreButton: boolean,
  }
}

export class ChannelInfo extends jspb.Message {
  getChannelId(): number;
  setChannelId(value: number): ChannelInfo;

  getChannelName(): string;
  setChannelName(value: string): ChannelInfo;

  getDesc(): string;
  setDesc(value: string): ChannelInfo;

  getIsAtten(): boolean;
  setIsAtten(value: boolean): ChannelInfo;

  getTypeIcon(): string;
  setTypeIcon(value: string): ChannelInfo;

  getItemsList(): Array<RcmdItem>;
  setItemsList(value: Array<RcmdItem>): ChannelInfo;
  clearItemsList(): ChannelInfo;
  addItems(value?: RcmdItem, index?: number): RcmdItem;

  getIcon(): string;
  setIcon(value: string): ChannelInfo;

  getJumpUri(): string;
  setJumpUri(value: string): ChannelInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelInfo): ChannelInfo.AsObject;
  static serializeBinaryToWriter(message: ChannelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelInfo;
  static deserializeBinaryFromReader(message: ChannelInfo, reader: jspb.BinaryReader): ChannelInfo;
}

export namespace ChannelInfo {
  export type AsObject = {
    channelId: number,
    channelName: string,
    desc: string,
    isAtten: boolean,
    typeIcon: string,
    itemsList: Array<RcmdItem.AsObject>,
    icon: string,
    jumpUri: string,
  }
}

export class CmtShowItem extends jspb.Message {
  getUid(): number;
  setUid(value: number): CmtShowItem;

  getUname(): string;
  setUname(value: string): CmtShowItem;

  getUri(): string;
  setUri(value: string): CmtShowItem;

  getComment(): string;
  setComment(value: string): CmtShowItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmtShowItem.AsObject;
  static toObject(includeInstance: boolean, msg: CmtShowItem): CmtShowItem.AsObject;
  static serializeBinaryToWriter(message: CmtShowItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmtShowItem;
  static deserializeBinaryFromReader(message: CmtShowItem, reader: jspb.BinaryReader): CmtShowItem;
}

export namespace CmtShowItem {
  export type AsObject = {
    uid: number,
    uname: string,
    uri: string,
    comment: string,
  }
}

export class CommentDetail extends jspb.Message {
  getCanModify(): boolean;
  setCanModify(value: boolean): CommentDetail;

  getStatus(): number;
  setStatus(value: number): CommentDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentDetail.AsObject;
  static toObject(includeInstance: boolean, msg: CommentDetail): CommentDetail.AsObject;
  static serializeBinaryToWriter(message: CommentDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentDetail;
  static deserializeBinaryFromReader(message: CommentDetail, reader: jspb.BinaryReader): CommentDetail;
}

export namespace CommentDetail {
  export type AsObject = {
    canModify: boolean,
    status: number,
  }
}

export class DecoCardFan extends jspb.Message {
  getIsFan(): number;
  setIsFan(value: number): DecoCardFan;

  getNumber(): number;
  setNumber(value: number): DecoCardFan;

  getNumberStr(): string;
  setNumberStr(value: string): DecoCardFan;

  getColor(): string;
  setColor(value: string): DecoCardFan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecoCardFan.AsObject;
  static toObject(includeInstance: boolean, msg: DecoCardFan): DecoCardFan.AsObject;
  static serializeBinaryToWriter(message: DecoCardFan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecoCardFan;
  static deserializeBinaryFromReader(message: DecoCardFan, reader: jspb.BinaryReader): DecoCardFan;
}

export namespace DecoCardFan {
  export type AsObject = {
    isFan: number,
    number: number,
    numberStr: string,
    color: string,
  }
}

export class DecorateCard extends jspb.Message {
  getId(): number;
  setId(value: number): DecorateCard;

  getCardUrl(): string;
  setCardUrl(value: string): DecorateCard;

  getJumpUrl(): string;
  setJumpUrl(value: string): DecorateCard;

  getFan(): DecoCardFan | undefined;
  setFan(value?: DecoCardFan): DecorateCard;
  hasFan(): boolean;
  clearFan(): DecorateCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecorateCard.AsObject;
  static toObject(includeInstance: boolean, msg: DecorateCard): DecorateCard.AsObject;
  static serializeBinaryToWriter(message: DecorateCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecorateCard;
  static deserializeBinaryFromReader(message: DecorateCard, reader: jspb.BinaryReader): DecorateCard;
}

export namespace DecorateCard {
  export type AsObject = {
    id: number,
    cardUrl: string,
    jumpUrl: string,
    fan?: DecoCardFan.AsObject,
  }
}

export class Description extends jspb.Message {
  getText(): string;
  setText(value: string): Description;

  getType(): DescType;
  setType(value: DescType): Description;

  getUri(): string;
  setUri(value: string): Description;

  getEmojiType(): EmojiType;
  setEmojiType(value: EmojiType): Description;

  getGoodsType(): string;
  setGoodsType(value: string): Description;

  getIconUrl(): string;
  setIconUrl(value: string): Description;

  getIconName(): string;
  setIconName(value: string): Description;

  getRid(): string;
  setRid(value: string): Description;

  getGoods(): ModuleDescGoods | undefined;
  setGoods(value?: ModuleDescGoods): Description;
  hasGoods(): boolean;
  clearGoods(): Description;

  getOrigText(): string;
  setOrigText(value: string): Description;

  getEmojiSize(): number;
  setEmojiSize(value: number): Description;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Description.AsObject;
  static toObject(includeInstance: boolean, msg: Description): Description.AsObject;
  static serializeBinaryToWriter(message: Description, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Description;
  static deserializeBinaryFromReader(message: Description, reader: jspb.BinaryReader): Description;
}

export namespace Description {
  export type AsObject = {
    text: string,
    type: DescType,
    uri: string,
    emojiType: EmojiType,
    goodsType: string,
    iconUrl: string,
    iconName: string,
    rid: string,
    goods?: ModuleDescGoods.AsObject,
    origText: string,
    emojiSize: number,
  }
}

export class Dimension extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): Dimension;

  getWidth(): number;
  setWidth(value: number): Dimension;

  getRotate(): number;
  setRotate(value: number): Dimension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dimension.AsObject;
  static toObject(includeInstance: boolean, msg: Dimension): Dimension.AsObject;
  static serializeBinaryToWriter(message: Dimension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dimension;
  static deserializeBinaryFromReader(message: Dimension, reader: jspb.BinaryReader): Dimension;
}

export namespace Dimension {
  export type AsObject = {
    height: number,
    width: number,
    rotate: number,
  }
}

export class DynAdditionCommonFollowReply extends jspb.Message {
  getStatus(): AdditionalButtonStatus;
  setStatus(value: AdditionalButtonStatus): DynAdditionCommonFollowReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynAdditionCommonFollowReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynAdditionCommonFollowReply): DynAdditionCommonFollowReply.AsObject;
  static serializeBinaryToWriter(message: DynAdditionCommonFollowReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynAdditionCommonFollowReply;
  static deserializeBinaryFromReader(message: DynAdditionCommonFollowReply, reader: jspb.BinaryReader): DynAdditionCommonFollowReply;
}

export namespace DynAdditionCommonFollowReply {
  export type AsObject = {
    status: AdditionalButtonStatus,
  }
}

export class DynAdditionCommonFollowReq extends jspb.Message {
  getStatus(): AdditionalButtonStatus;
  setStatus(value: AdditionalButtonStatus): DynAdditionCommonFollowReq;

  getDynId(): string;
  setDynId(value: string): DynAdditionCommonFollowReq;

  getCardType(): string;
  setCardType(value: string): DynAdditionCommonFollowReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynAdditionCommonFollowReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynAdditionCommonFollowReq): DynAdditionCommonFollowReq.AsObject;
  static serializeBinaryToWriter(message: DynAdditionCommonFollowReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynAdditionCommonFollowReq;
  static deserializeBinaryFromReader(message: DynAdditionCommonFollowReq, reader: jspb.BinaryReader): DynAdditionCommonFollowReq;
}

export namespace DynAdditionCommonFollowReq {
  export type AsObject = {
    status: AdditionalButtonStatus,
    dynId: string,
    cardType: string,
  }
}

export class DynAllPersonalReply extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): DynAllPersonalReply;
  clearListList(): DynAllPersonalReply;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getOffset(): string;
  setOffset(value: string): DynAllPersonalReply;

  getHasMore(): boolean;
  setHasMore(value: boolean): DynAllPersonalReply;

  getReadOffset(): string;
  setReadOffset(value: string): DynAllPersonalReply;

  getRelation(): Relation | undefined;
  setRelation(value?: Relation): DynAllPersonalReply;
  hasRelation(): boolean;
  clearRelation(): DynAllPersonalReply;

  getAdditionUp(): TopAdditionUP | undefined;
  setAdditionUp(value?: TopAdditionUP): DynAllPersonalReply;
  hasAdditionUp(): boolean;
  clearAdditionUp(): DynAllPersonalReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynAllPersonalReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynAllPersonalReply): DynAllPersonalReply.AsObject;
  static serializeBinaryToWriter(message: DynAllPersonalReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynAllPersonalReply;
  static deserializeBinaryFromReader(message: DynAllPersonalReply, reader: jspb.BinaryReader): DynAllPersonalReply;
}

export namespace DynAllPersonalReply {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    offset: string,
    hasMore: boolean,
    readOffset: string,
    relation?: Relation.AsObject,
    additionUp?: TopAdditionUP.AsObject,
  }
}

export class DynAllPersonalReq extends jspb.Message {
  getHostUid(): number;
  setHostUid(value: number): DynAllPersonalReq;

  getOffset(): string;
  setOffset(value: string): DynAllPersonalReq;

  getPage(): number;
  setPage(value: number): DynAllPersonalReq;

  getIsPreload(): number;
  setIsPreload(value: number): DynAllPersonalReq;

  getPlayurlParam(): PlayurlParam | undefined;
  setPlayurlParam(value?: PlayurlParam): DynAllPersonalReq;
  hasPlayurlParam(): boolean;
  clearPlayurlParam(): DynAllPersonalReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynAllPersonalReq;

  getFootprint(): string;
  setFootprint(value: string): DynAllPersonalReq;

  getFrom(): string;
  setFrom(value: string): DynAllPersonalReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynAllPersonalReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynAllPersonalReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynAllPersonalReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynAllPersonalReq): DynAllPersonalReq.AsObject;
  static serializeBinaryToWriter(message: DynAllPersonalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynAllPersonalReq;
  static deserializeBinaryFromReader(message: DynAllPersonalReq, reader: jspb.BinaryReader): DynAllPersonalReq;
}

export namespace DynAllPersonalReq {
  export type AsObject = {
    hostUid: number,
    offset: string,
    page: number,
    isPreload: number,
    playurlParam?: PlayurlParam.AsObject,
    localTime: number,
    footprint: string,
    from: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class DynAllReply extends jspb.Message {
  getDynamicList(): DynamicList | undefined;
  setDynamicList(value?: DynamicList): DynAllReply;
  hasDynamicList(): boolean;
  clearDynamicList(): DynAllReply;

  getUpList(): CardVideoUpList | undefined;
  setUpList(value?: CardVideoUpList): DynAllReply;
  hasUpList(): boolean;
  clearUpList(): DynAllReply;

  getTopicList(): TopicList | undefined;
  setTopicList(value?: TopicList): DynAllReply;
  hasTopicList(): boolean;
  clearTopicList(): DynAllReply;

  getUnfollow(): Unfollow | undefined;
  setUnfollow(value?: Unfollow): DynAllReply;
  hasUnfollow(): boolean;
  clearUnfollow(): DynAllReply;

  getRegionRcmd(): DynRegionRcmd | undefined;
  setRegionRcmd(value?: DynRegionRcmd): DynAllReply;
  hasRegionRcmd(): boolean;
  clearRegionRcmd(): DynAllReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynAllReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynAllReply): DynAllReply.AsObject;
  static serializeBinaryToWriter(message: DynAllReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynAllReply;
  static deserializeBinaryFromReader(message: DynAllReply, reader: jspb.BinaryReader): DynAllReply;
}

export namespace DynAllReply {
  export type AsObject = {
    dynamicList?: DynamicList.AsObject,
    upList?: CardVideoUpList.AsObject,
    topicList?: TopicList.AsObject,
    unfollow?: Unfollow.AsObject,
    regionRcmd?: DynRegionRcmd.AsObject,
  }
}

export class DynAllReq extends jspb.Message {
  getUpdateBaseline(): string;
  setUpdateBaseline(value: string): DynAllReq;

  getOffset(): string;
  setOffset(value: string): DynAllReq;

  getPage(): number;
  setPage(value: number): DynAllReq;

  getRefreshType(): Refresh;
  setRefreshType(value: Refresh): DynAllReq;

  getPlayurlParam(): PlayurlParam | undefined;
  setPlayurlParam(value?: PlayurlParam): DynAllReq;
  hasPlayurlParam(): boolean;
  clearPlayurlParam(): DynAllReq;

  getAssistBaseline(): string;
  setAssistBaseline(value: string): DynAllReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynAllReq;

  getRcmdUpsParam(): RcmdUPsParam | undefined;
  setRcmdUpsParam(value?: RcmdUPsParam): DynAllReq;
  hasRcmdUpsParam(): boolean;
  clearRcmdUpsParam(): DynAllReq;

  getAdParam(): AdParam | undefined;
  setAdParam(value?: AdParam): DynAllReq;
  hasAdParam(): boolean;
  clearAdParam(): DynAllReq;

  getColdStart(): number;
  setColdStart(value: number): DynAllReq;

  getFrom(): string;
  setFrom(value: string): DynAllReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynAllReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynAllReq;

  getTabRecallUid(): number;
  setTabRecallUid(value: number): DynAllReq;

  getTabRecallType(): number;
  setTabRecallType(value: number): DynAllReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynAllReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynAllReq): DynAllReq.AsObject;
  static serializeBinaryToWriter(message: DynAllReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynAllReq;
  static deserializeBinaryFromReader(message: DynAllReq, reader: jspb.BinaryReader): DynAllReq;
}

export namespace DynAllReq {
  export type AsObject = {
    updateBaseline: string,
    offset: string,
    page: number,
    refreshType: Refresh,
    playurlParam?: PlayurlParam.AsObject,
    assistBaseline: string,
    localTime: number,
    rcmdUpsParam?: RcmdUPsParam.AsObject,
    adParam?: AdParam.AsObject,
    coldStart: number,
    from: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    tabRecallUid: number,
    tabRecallType: number,
  }
}

export class DynAllUpdOffsetReq extends jspb.Message {
  getHostUid(): number;
  setHostUid(value: number): DynAllUpdOffsetReq;

  getReadOffset(): string;
  setReadOffset(value: string): DynAllUpdOffsetReq;

  getFootprint(): string;
  setFootprint(value: string): DynAllUpdOffsetReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynAllUpdOffsetReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynAllUpdOffsetReq): DynAllUpdOffsetReq.AsObject;
  static serializeBinaryToWriter(message: DynAllUpdOffsetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynAllUpdOffsetReq;
  static deserializeBinaryFromReader(message: DynAllUpdOffsetReq, reader: jspb.BinaryReader): DynAllUpdOffsetReq;
}

export namespace DynAllUpdOffsetReq {
  export type AsObject = {
    hostUid: number,
    readOffset: string,
    footprint: string,
  }
}

export class DynDetailReply extends jspb.Message {
  getItem(): DynamicItem | undefined;
  setItem(value?: DynamicItem): DynDetailReply;
  hasItem(): boolean;
  clearItem(): DynDetailReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynDetailReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynDetailReply): DynDetailReply.AsObject;
  static serializeBinaryToWriter(message: DynDetailReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynDetailReply;
  static deserializeBinaryFromReader(message: DynDetailReply, reader: jspb.BinaryReader): DynDetailReply;
}

export namespace DynDetailReply {
  export type AsObject = {
    item?: DynamicItem.AsObject,
  }
}

export class DynDetailReq extends jspb.Message {
  getUid(): number;
  setUid(value: number): DynDetailReq;

  getDynamicId(): string;
  setDynamicId(value: string): DynDetailReq;

  getDynType(): number;
  setDynType(value: number): DynDetailReq;

  getRid(): number;
  setRid(value: number): DynDetailReq;

  getAdParam(): AdParam | undefined;
  setAdParam(value?: AdParam): DynDetailReq;
  hasAdParam(): boolean;
  clearAdParam(): DynDetailReq;

  getFrom(): string;
  setFrom(value: string): DynDetailReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynDetailReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynDetailReq;

  getShareId(): string;
  setShareId(value: string): DynDetailReq;

  getShareMode(): number;
  setShareMode(value: number): DynDetailReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynDetailReq;

  getPattern(): string;
  setPattern(value: string): DynDetailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynDetailReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynDetailReq): DynDetailReq.AsObject;
  static serializeBinaryToWriter(message: DynDetailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynDetailReq;
  static deserializeBinaryFromReader(message: DynDetailReq, reader: jspb.BinaryReader): DynDetailReq;
}

export namespace DynDetailReq {
  export type AsObject = {
    uid: number,
    dynamicId: string,
    dynType: number,
    rid: number,
    adParam?: AdParam.AsObject,
    from: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    shareId: string,
    shareMode: number,
    localTime: number,
    pattern: string,
  }
}

export class DynDetailsReply extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): DynDetailsReply;
  clearListList(): DynDetailsReply;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynDetailsReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynDetailsReply): DynDetailsReply.AsObject;
  static serializeBinaryToWriter(message: DynDetailsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynDetailsReply;
  static deserializeBinaryFromReader(message: DynDetailsReply, reader: jspb.BinaryReader): DynDetailsReply;
}

export namespace DynDetailsReply {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
  }
}

export class DynDetailsReq extends jspb.Message {
  getDynamicIds(): string;
  setDynamicIds(value: string): DynDetailsReq;

  getPlayurlParam(): PlayurlParam | undefined;
  setPlayurlParam(value?: PlayurlParam): DynDetailsReq;
  hasPlayurlParam(): boolean;
  clearPlayurlParam(): DynDetailsReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynDetailsReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynDetailsReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynDetailsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynDetailsReq): DynDetailsReq.AsObject;
  static serializeBinaryToWriter(message: DynDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynDetailsReq;
  static deserializeBinaryFromReader(message: DynDetailsReq, reader: jspb.BinaryReader): DynDetailsReq;
}

export namespace DynDetailsReq {
  export type AsObject = {
    dynamicIds: string,
    playurlParam?: PlayurlParam.AsObject,
    localTime: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class DynFakeCardReply extends jspb.Message {
  getItem(): DynamicItem | undefined;
  setItem(value?: DynamicItem): DynFakeCardReply;
  hasItem(): boolean;
  clearItem(): DynFakeCardReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynFakeCardReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynFakeCardReply): DynFakeCardReply.AsObject;
  static serializeBinaryToWriter(message: DynFakeCardReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynFakeCardReply;
  static deserializeBinaryFromReader(message: DynFakeCardReply, reader: jspb.BinaryReader): DynFakeCardReply;
}

export namespace DynFakeCardReply {
  export type AsObject = {
    item?: DynamicItem.AsObject,
  }
}

export class DynFakeCardReq extends jspb.Message {
  getContent(): string;
  setContent(value: string): DynFakeCardReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynFakeCardReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynFakeCardReq): DynFakeCardReq.AsObject;
  static serializeBinaryToWriter(message: DynFakeCardReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynFakeCardReq;
  static deserializeBinaryFromReader(message: DynFakeCardReq, reader: jspb.BinaryReader): DynFakeCardReq;
}

export namespace DynFakeCardReq {
  export type AsObject = {
    content: string,
  }
}

export class DynLightReply extends jspb.Message {
  getDynamicList(): DynamicList | undefined;
  setDynamicList(value?: DynamicList): DynLightReply;
  hasDynamicList(): boolean;
  clearDynamicList(): DynLightReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynLightReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynLightReply): DynLightReply.AsObject;
  static serializeBinaryToWriter(message: DynLightReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynLightReply;
  static deserializeBinaryFromReader(message: DynLightReply, reader: jspb.BinaryReader): DynLightReply;
}

export namespace DynLightReply {
  export type AsObject = {
    dynamicList?: DynamicList.AsObject,
  }
}

export class DynLightReq extends jspb.Message {
  getHistoryOffset(): string;
  setHistoryOffset(value: string): DynLightReq;

  getPage(): number;
  setPage(value: number): DynLightReq;

  getFrom(): string;
  setFrom(value: string): DynLightReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynLightReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynLightReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynLightReq;

  getFromType(): number;
  setFromType(value: number): DynLightReq;

  getFakeUid(): number;
  setFakeUid(value: number): DynLightReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynLightReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynLightReq): DynLightReq.AsObject;
  static serializeBinaryToWriter(message: DynLightReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynLightReq;
  static deserializeBinaryFromReader(message: DynLightReq, reader: jspb.BinaryReader): DynLightReq;
}

export namespace DynLightReq {
  export type AsObject = {
    historyOffset: string,
    page: number,
    from: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    localTime: number,
    fromType: number,
    fakeUid: number,
  }
}

export class DynMixUpListViewMoreReply extends jspb.Message {
  getItemsList(): Array<MixUpListItem>;
  setItemsList(value: Array<MixUpListItem>): DynMixUpListViewMoreReply;
  clearItemsList(): DynMixUpListViewMoreReply;
  addItems(value?: MixUpListItem, index?: number): MixUpListItem;

  getSearchDefaultText(): string;
  setSearchDefaultText(value: string): DynMixUpListViewMoreReply;

  getSortTypesList(): Array<SortType>;
  setSortTypesList(value: Array<SortType>): DynMixUpListViewMoreReply;
  clearSortTypesList(): DynMixUpListViewMoreReply;
  addSortTypes(value?: SortType, index?: number): SortType;

  getShowMoreSortTypes(): boolean;
  setShowMoreSortTypes(value: boolean): DynMixUpListViewMoreReply;

  getDefaultSortType(): number;
  setDefaultSortType(value: number): DynMixUpListViewMoreReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynMixUpListViewMoreReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynMixUpListViewMoreReply): DynMixUpListViewMoreReply.AsObject;
  static serializeBinaryToWriter(message: DynMixUpListViewMoreReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynMixUpListViewMoreReply;
  static deserializeBinaryFromReader(message: DynMixUpListViewMoreReply, reader: jspb.BinaryReader): DynMixUpListViewMoreReply;
}

export namespace DynMixUpListViewMoreReply {
  export type AsObject = {
    itemsList: Array<MixUpListItem.AsObject>,
    searchDefaultText: string,
    sortTypesList: Array<SortType.AsObject>,
    showMoreSortTypes: boolean,
    defaultSortType: number,
  }
}

export class DynMixUpListViewMoreReq extends jspb.Message {
  getSortType(): number;
  setSortType(value: number): DynMixUpListViewMoreReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynMixUpListViewMoreReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynMixUpListViewMoreReq): DynMixUpListViewMoreReq.AsObject;
  static serializeBinaryToWriter(message: DynMixUpListViewMoreReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynMixUpListViewMoreReq;
  static deserializeBinaryFromReader(message: DynMixUpListViewMoreReq, reader: jspb.BinaryReader): DynMixUpListViewMoreReq;
}

export namespace DynMixUpListViewMoreReq {
  export type AsObject = {
    sortType: number,
  }
}

export class DynRcmdReply extends jspb.Message {
  getRegionRcmd(): DynRegionRcmd | undefined;
  setRegionRcmd(value?: DynRegionRcmd): DynRcmdReply;
  hasRegionRcmd(): boolean;
  clearRegionRcmd(): DynRcmdReply;

  getDynamicList(): DynamicList | undefined;
  setDynamicList(value?: DynamicList): DynRcmdReply;
  hasDynamicList(): boolean;
  clearDynamicList(): DynRcmdReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynRcmdReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynRcmdReply): DynRcmdReply.AsObject;
  static serializeBinaryToWriter(message: DynRcmdReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynRcmdReply;
  static deserializeBinaryFromReader(message: DynRcmdReply, reader: jspb.BinaryReader): DynRcmdReply;
}

export namespace DynRcmdReply {
  export type AsObject = {
    regionRcmd?: DynRegionRcmd.AsObject,
    dynamicList?: DynamicList.AsObject,
  }
}

export class DynRcmdReq extends jspb.Message {
  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynRcmdReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynRcmdReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynRcmdReq;

  getFakeUid(): number;
  setFakeUid(value: number): DynRcmdReq;

  getIsRefresh(): boolean;
  setIsRefresh(value: boolean): DynRcmdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynRcmdReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynRcmdReq): DynRcmdReq.AsObject;
  static serializeBinaryToWriter(message: DynRcmdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynRcmdReq;
  static deserializeBinaryFromReader(message: DynRcmdReq, reader: jspb.BinaryReader): DynRcmdReq;
}

export namespace DynRcmdReq {
  export type AsObject = {
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    localTime: number,
    fakeUid: number,
    isRefresh: boolean,
  }
}

export class DynRcmdUpExchangeReply extends jspb.Message {
  getUnfollow(): Unfollow | undefined;
  setUnfollow(value?: Unfollow): DynRcmdUpExchangeReply;
  hasUnfollow(): boolean;
  clearUnfollow(): DynRcmdUpExchangeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynRcmdUpExchangeReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynRcmdUpExchangeReply): DynRcmdUpExchangeReply.AsObject;
  static serializeBinaryToWriter(message: DynRcmdUpExchangeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynRcmdUpExchangeReply;
  static deserializeBinaryFromReader(message: DynRcmdUpExchangeReply, reader: jspb.BinaryReader): DynRcmdUpExchangeReply;
}

export namespace DynRcmdUpExchangeReply {
  export type AsObject = {
    unfollow?: Unfollow.AsObject,
  }
}

export class DynRcmdUpExchangeReq extends jspb.Message {
  getUid(): number;
  setUid(value: number): DynRcmdUpExchangeReq;

  getDislikets(): number;
  setDislikets(value: number): DynRcmdUpExchangeReq;

  getFrom(): string;
  setFrom(value: string): DynRcmdUpExchangeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynRcmdUpExchangeReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynRcmdUpExchangeReq): DynRcmdUpExchangeReq.AsObject;
  static serializeBinaryToWriter(message: DynRcmdUpExchangeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynRcmdUpExchangeReq;
  static deserializeBinaryFromReader(message: DynRcmdUpExchangeReq, reader: jspb.BinaryReader): DynRcmdUpExchangeReq;
}

export namespace DynRcmdUpExchangeReq {
  export type AsObject = {
    uid: number,
    dislikets: number,
    from: string,
  }
}

export class DynRegionRcmd extends jspb.Message {
  getItemsList(): Array<DynRegionRcmdItem>;
  setItemsList(value: Array<DynRegionRcmdItem>): DynRegionRcmd;
  clearItemsList(): DynRegionRcmd;
  addItems(value?: DynRegionRcmdItem, index?: number): DynRegionRcmdItem;

  getOpts(): RcmdOption | undefined;
  setOpts(value?: RcmdOption): DynRegionRcmd;
  hasOpts(): boolean;
  clearOpts(): DynRegionRcmd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynRegionRcmd.AsObject;
  static toObject(includeInstance: boolean, msg: DynRegionRcmd): DynRegionRcmd.AsObject;
  static serializeBinaryToWriter(message: DynRegionRcmd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynRegionRcmd;
  static deserializeBinaryFromReader(message: DynRegionRcmd, reader: jspb.BinaryReader): DynRegionRcmd;
}

export namespace DynRegionRcmd {
  export type AsObject = {
    itemsList: Array<DynRegionRcmdItem.AsObject>,
    opts?: RcmdOption.AsObject,
  }
}

export class DynRegionRcmdItem extends jspb.Message {
  getRid(): number;
  setRid(value: number): DynRegionRcmdItem;

  getTitle(): string;
  setTitle(value: string): DynRegionRcmdItem;

  getItemsList(): Array<ModuleRcmd>;
  setItemsList(value: Array<ModuleRcmd>): DynRegionRcmdItem;
  clearItemsList(): DynRegionRcmdItem;
  addItems(value?: ModuleRcmd, index?: number): ModuleRcmd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynRegionRcmdItem.AsObject;
  static toObject(includeInstance: boolean, msg: DynRegionRcmdItem): DynRegionRcmdItem.AsObject;
  static serializeBinaryToWriter(message: DynRegionRcmdItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynRegionRcmdItem;
  static deserializeBinaryFromReader(message: DynRegionRcmdItem, reader: jspb.BinaryReader): DynRegionRcmdItem;
}

export namespace DynRegionRcmdItem {
  export type AsObject = {
    rid: number,
    title: string,
    itemsList: Array<ModuleRcmd.AsObject>,
  }
}

export class DynSearchReply extends jspb.Message {
  getChannelInfo(): SearchChannel | undefined;
  setChannelInfo(value?: SearchChannel): DynSearchReply;
  hasChannelInfo(): boolean;
  clearChannelInfo(): DynSearchReply;

  getSearchTopic(): SearchTopic | undefined;
  setSearchTopic(value?: SearchTopic): DynSearchReply;
  hasSearchTopic(): boolean;
  clearSearchTopic(): DynSearchReply;

  getSearchInfo(): SearchInfo | undefined;
  setSearchInfo(value?: SearchInfo): DynSearchReply;
  hasSearchInfo(): boolean;
  clearSearchInfo(): DynSearchReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynSearchReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynSearchReply): DynSearchReply.AsObject;
  static serializeBinaryToWriter(message: DynSearchReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynSearchReply;
  static deserializeBinaryFromReader(message: DynSearchReply, reader: jspb.BinaryReader): DynSearchReply;
}

export namespace DynSearchReply {
  export type AsObject = {
    channelInfo?: SearchChannel.AsObject,
    searchTopic?: SearchTopic.AsObject,
    searchInfo?: SearchInfo.AsObject,
  }
}

export class DynSearchReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): DynSearchReq;

  getPage(): number;
  setPage(value: number): DynSearchReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynSearchReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynSearchReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynSearchReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynSearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynSearchReq): DynSearchReq.AsObject;
  static serializeBinaryToWriter(message: DynSearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynSearchReq;
  static deserializeBinaryFromReader(message: DynSearchReq, reader: jspb.BinaryReader): DynSearchReq;
}

export namespace DynSearchReq {
  export type AsObject = {
    keyword: string,
    page: number,
    localTime: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class DynServerDetailsReply extends jspb.Message {
  getItemsMap(): jspb.Map<number, DynamicItem>;
  clearItemsMap(): DynServerDetailsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynServerDetailsReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynServerDetailsReply): DynServerDetailsReply.AsObject;
  static serializeBinaryToWriter(message: DynServerDetailsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynServerDetailsReply;
  static deserializeBinaryFromReader(message: DynServerDetailsReply, reader: jspb.BinaryReader): DynServerDetailsReply;
}

export namespace DynServerDetailsReply {
  export type AsObject = {
    itemsMap: Array<[number, DynamicItem.AsObject]>,
  }
}

export class DynServerDetailsReq extends jspb.Message {
  getLocalTime(): number;
  setLocalTime(value: number): DynServerDetailsReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynServerDetailsReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynServerDetailsReq;

  getMobiApp(): string;
  setMobiApp(value: string): DynServerDetailsReq;

  getDevice(): string;
  setDevice(value: string): DynServerDetailsReq;

  getBuvid(): string;
  setBuvid(value: string): DynServerDetailsReq;

  getBuild(): number;
  setBuild(value: number): DynServerDetailsReq;

  getMid(): number;
  setMid(value: number): DynServerDetailsReq;

  getPlatform(): string;
  setPlatform(value: string): DynServerDetailsReq;

  getIsMaster(): boolean;
  setIsMaster(value: boolean): DynServerDetailsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynServerDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynServerDetailsReq): DynServerDetailsReq.AsObject;
  static serializeBinaryToWriter(message: DynServerDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynServerDetailsReq;
  static deserializeBinaryFromReader(message: DynServerDetailsReq, reader: jspb.BinaryReader): DynServerDetailsReq;
}

export namespace DynServerDetailsReq {
  export type AsObject = {
    localTime: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    mobiApp: string,
    device: string,
    buvid: string,
    build: number,
    mid: number,
    platform: string,
    isMaster: boolean,
  }
}

export class DynSpaceReq extends jspb.Message {
  getHostUid(): number;
  setHostUid(value: number): DynSpaceReq;

  getHistoryOffset(): string;
  setHistoryOffset(value: string): DynSpaceReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynSpaceReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynSpaceReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynSpaceReq;

  getPage(): number;
  setPage(value: number): DynSpaceReq;

  getFrom(): string;
  setFrom(value: string): DynSpaceReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynSpaceReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynSpaceReq): DynSpaceReq.AsObject;
  static serializeBinaryToWriter(message: DynSpaceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynSpaceReq;
  static deserializeBinaryFromReader(message: DynSpaceReq, reader: jspb.BinaryReader): DynSpaceReq;
}

export namespace DynSpaceReq {
  export type AsObject = {
    hostUid: number,
    historyOffset: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    localTime: number,
    page: number,
    from: string,
  }
}

export class DynSpaceRsp extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): DynSpaceRsp;
  clearListList(): DynSpaceRsp;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getHistoryOffset(): string;
  setHistoryOffset(value: string): DynSpaceRsp;

  getHasMore(): boolean;
  setHasMore(value: boolean): DynSpaceRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynSpaceRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DynSpaceRsp): DynSpaceRsp.AsObject;
  static serializeBinaryToWriter(message: DynSpaceRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynSpaceRsp;
  static deserializeBinaryFromReader(message: DynSpaceRsp, reader: jspb.BinaryReader): DynSpaceRsp;
}

export namespace DynSpaceRsp {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    historyOffset: string,
    hasMore: boolean,
  }
}

export class DynSpaceSearchDetailsReply extends jspb.Message {
  getItemsMap(): jspb.Map<number, DynamicItem>;
  clearItemsMap(): DynSpaceSearchDetailsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynSpaceSearchDetailsReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynSpaceSearchDetailsReply): DynSpaceSearchDetailsReply.AsObject;
  static serializeBinaryToWriter(message: DynSpaceSearchDetailsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynSpaceSearchDetailsReply;
  static deserializeBinaryFromReader(message: DynSpaceSearchDetailsReply, reader: jspb.BinaryReader): DynSpaceSearchDetailsReply;
}

export namespace DynSpaceSearchDetailsReply {
  export type AsObject = {
    itemsMap: Array<[number, DynamicItem.AsObject]>,
  }
}

export class DynSpaceSearchDetailsReq extends jspb.Message {
  getSearchWordsList(): Array<string>;
  setSearchWordsList(value: Array<string>): DynSpaceSearchDetailsReq;
  clearSearchWordsList(): DynSpaceSearchDetailsReq;
  addSearchWords(value: string, index?: number): DynSpaceSearchDetailsReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynSpaceSearchDetailsReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynSpaceSearchDetailsReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynSpaceSearchDetailsReq;

  getMobiApp(): string;
  setMobiApp(value: string): DynSpaceSearchDetailsReq;

  getDevice(): string;
  setDevice(value: string): DynSpaceSearchDetailsReq;

  getBuvid(): string;
  setBuvid(value: string): DynSpaceSearchDetailsReq;

  getBuild(): number;
  setBuild(value: number): DynSpaceSearchDetailsReq;

  getMid(): number;
  setMid(value: number): DynSpaceSearchDetailsReq;

  getPlatform(): string;
  setPlatform(value: string): DynSpaceSearchDetailsReq;

  getIp(): string;
  setIp(value: string): DynSpaceSearchDetailsReq;

  getNetType(): number;
  setNetType(value: number): DynSpaceSearchDetailsReq;

  getTfType(): number;
  setTfType(value: number): DynSpaceSearchDetailsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynSpaceSearchDetailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynSpaceSearchDetailsReq): DynSpaceSearchDetailsReq.AsObject;
  static serializeBinaryToWriter(message: DynSpaceSearchDetailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynSpaceSearchDetailsReq;
  static deserializeBinaryFromReader(message: DynSpaceSearchDetailsReq, reader: jspb.BinaryReader): DynSpaceSearchDetailsReq;
}

export namespace DynSpaceSearchDetailsReq {
  export type AsObject = {
    searchWordsList: Array<string>,
    localTime: number,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
    mobiApp: string,
    device: string,
    buvid: string,
    build: number,
    mid: number,
    platform: string,
    ip: string,
    netType: number,
    tfType: number,
  }
}

export class DynTab extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): DynTab;

  getUri(): string;
  setUri(value: string): DynTab;

  getBubble(): string;
  setBubble(value: string): DynTab;

  getRedPoint(): number;
  setRedPoint(value: number): DynTab;

  getCityId(): number;
  setCityId(value: number): DynTab;

  getIsPopup(): number;
  setIsPopup(value: number): DynTab;

  getPopup(): Popup | undefined;
  setPopup(value?: Popup): DynTab;
  hasPopup(): boolean;
  clearPopup(): DynTab;

  getDefaultTab(): boolean;
  setDefaultTab(value: boolean): DynTab;

  getSubTitle(): string;
  setSubTitle(value: string): DynTab;

  getAnchor(): string;
  setAnchor(value: string): DynTab;

  getInternalTest(): string;
  setInternalTest(value: string): DynTab;

  getType(): number;
  setType(value: number): DynTab;

  getBackUp(): DynTab | undefined;
  setBackUp(value?: DynTab): DynTab;
  hasBackUp(): boolean;
  clearBackUp(): DynTab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynTab.AsObject;
  static toObject(includeInstance: boolean, msg: DynTab): DynTab.AsObject;
  static serializeBinaryToWriter(message: DynTab, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynTab;
  static deserializeBinaryFromReader(message: DynTab, reader: jspb.BinaryReader): DynTab;
}

export namespace DynTab {
  export type AsObject = {
    title: string,
    uri: string,
    bubble: string,
    redPoint: number,
    cityId: number,
    isPopup: number,
    popup?: Popup.AsObject,
    defaultTab: boolean,
    subTitle: string,
    anchor: string,
    internalTest: string,
    type: number,
    backUp?: DynTab.AsObject,
  }
}

export class DynTabReply extends jspb.Message {
  getDynTabList(): Array<DynTab>;
  setDynTabList(value: Array<DynTab>): DynTabReply;
  clearDynTabList(): DynTabReply;
  addDynTab(value?: DynTab, index?: number): DynTab;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynTabReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynTabReply): DynTabReply.AsObject;
  static serializeBinaryToWriter(message: DynTabReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynTabReply;
  static deserializeBinaryFromReader(message: DynTabReply, reader: jspb.BinaryReader): DynTabReply;
}

export namespace DynTabReply {
  export type AsObject = {
    dynTabList: Array<DynTab.AsObject>,
  }
}

export class DynTabReq extends jspb.Message {
  getTeenagersMode(): number;
  setTeenagersMode(value: number): DynTabReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynTabReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynTabReq): DynTabReq.AsObject;
  static serializeBinaryToWriter(message: DynTabReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynTabReq;
  static deserializeBinaryFromReader(message: DynTabReq, reader: jspb.BinaryReader): DynTabReq;
}

export namespace DynTabReq {
  export type AsObject = {
    teenagersMode: number,
  }
}

export class DynThumbReq extends jspb.Message {
  getUid(): number;
  setUid(value: number): DynThumbReq;

  getDynId(): string;
  setDynId(value: string): DynThumbReq;

  getDynType(): number;
  setDynType(value: number): DynThumbReq;

  getRid(): string;
  setRid(value: string): DynThumbReq;

  getType(): ThumbType;
  setType(value: ThumbType): DynThumbReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynThumbReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynThumbReq): DynThumbReq.AsObject;
  static serializeBinaryToWriter(message: DynThumbReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynThumbReq;
  static deserializeBinaryFromReader(message: DynThumbReq, reader: jspb.BinaryReader): DynThumbReq;
}

export namespace DynThumbReq {
  export type AsObject = {
    uid: number,
    dynId: string,
    dynType: number,
    rid: string,
    type: ThumbType,
  }
}

export class DynVideoPersonalReply extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): DynVideoPersonalReply;
  clearListList(): DynVideoPersonalReply;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getOffset(): string;
  setOffset(value: string): DynVideoPersonalReply;

  getHasMore(): boolean;
  setHasMore(value: boolean): DynVideoPersonalReply;

  getReadOffset(): string;
  setReadOffset(value: string): DynVideoPersonalReply;

  getRelation(): Relation | undefined;
  setRelation(value?: Relation): DynVideoPersonalReply;
  hasRelation(): boolean;
  clearRelation(): DynVideoPersonalReply;

  getAdditionUp(): TopAdditionUP | undefined;
  setAdditionUp(value?: TopAdditionUP): DynVideoPersonalReply;
  hasAdditionUp(): boolean;
  clearAdditionUp(): DynVideoPersonalReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoPersonalReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoPersonalReply): DynVideoPersonalReply.AsObject;
  static serializeBinaryToWriter(message: DynVideoPersonalReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoPersonalReply;
  static deserializeBinaryFromReader(message: DynVideoPersonalReply, reader: jspb.BinaryReader): DynVideoPersonalReply;
}

export namespace DynVideoPersonalReply {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    offset: string,
    hasMore: boolean,
    readOffset: string,
    relation?: Relation.AsObject,
    additionUp?: TopAdditionUP.AsObject,
  }
}

export class DynVideoPersonalReq extends jspb.Message {
  getHostUid(): number;
  setHostUid(value: number): DynVideoPersonalReq;

  getOffset(): string;
  setOffset(value: string): DynVideoPersonalReq;

  getPage(): number;
  setPage(value: number): DynVideoPersonalReq;

  getIsPreload(): number;
  setIsPreload(value: number): DynVideoPersonalReq;

  getPlayurlParam(): PlayurlParam | undefined;
  setPlayurlParam(value?: PlayurlParam): DynVideoPersonalReq;
  hasPlayurlParam(): boolean;
  clearPlayurlParam(): DynVideoPersonalReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynVideoPersonalReq;

  getFootprint(): string;
  setFootprint(value: string): DynVideoPersonalReq;

  getFrom(): string;
  setFrom(value: string): DynVideoPersonalReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynVideoPersonalReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynVideoPersonalReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoPersonalReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoPersonalReq): DynVideoPersonalReq.AsObject;
  static serializeBinaryToWriter(message: DynVideoPersonalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoPersonalReq;
  static deserializeBinaryFromReader(message: DynVideoPersonalReq, reader: jspb.BinaryReader): DynVideoPersonalReq;
}

export namespace DynVideoPersonalReq {
  export type AsObject = {
    hostUid: number,
    offset: string,
    page: number,
    isPreload: number,
    playurlParam?: PlayurlParam.AsObject,
    localTime: number,
    footprint: string,
    from: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class DynVideoReply extends jspb.Message {
  getDynamicList(): CardVideoDynList | undefined;
  setDynamicList(value?: CardVideoDynList): DynVideoReply;
  hasDynamicList(): boolean;
  clearDynamicList(): DynVideoReply;

  getVideoUpList(): CardVideoUpList | undefined;
  setVideoUpList(value?: CardVideoUpList): DynVideoReply;
  hasVideoUpList(): boolean;
  clearVideoUpList(): DynVideoReply;

  getVideoFollowList(): CardVideoFollowList | undefined;
  setVideoFollowList(value?: CardVideoFollowList): DynVideoReply;
  hasVideoFollowList(): boolean;
  clearVideoFollowList(): DynVideoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoReply): DynVideoReply.AsObject;
  static serializeBinaryToWriter(message: DynVideoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoReply;
  static deserializeBinaryFromReader(message: DynVideoReply, reader: jspb.BinaryReader): DynVideoReply;
}

export namespace DynVideoReply {
  export type AsObject = {
    dynamicList?: CardVideoDynList.AsObject,
    videoUpList?: CardVideoUpList.AsObject,
    videoFollowList?: CardVideoFollowList.AsObject,
  }
}

export class DynVideoReq extends jspb.Message {
  getUpdateBaseline(): string;
  setUpdateBaseline(value: string): DynVideoReq;

  getOffset(): string;
  setOffset(value: string): DynVideoReq;

  getPage(): number;
  setPage(value: number): DynVideoReq;

  getRefreshType(): Refresh;
  setRefreshType(value: Refresh): DynVideoReq;

  getPlayurlParam(): PlayurlParam | undefined;
  setPlayurlParam(value?: PlayurlParam): DynVideoReq;
  hasPlayurlParam(): boolean;
  clearPlayurlParam(): DynVideoReq;

  getAssistBaseline(): string;
  setAssistBaseline(value: string): DynVideoReq;

  getLocalTime(): number;
  setLocalTime(value: number): DynVideoReq;

  getFrom(): string;
  setFrom(value: string): DynVideoReq;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): DynVideoReq;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): DynVideoReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoReq): DynVideoReq.AsObject;
  static serializeBinaryToWriter(message: DynVideoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoReq;
  static deserializeBinaryFromReader(message: DynVideoReq, reader: jspb.BinaryReader): DynVideoReq;
}

export namespace DynVideoReq {
  export type AsObject = {
    updateBaseline: string,
    offset: string,
    page: number,
    refreshType: Refresh,
    playurlParam?: PlayurlParam.AsObject,
    assistBaseline: string,
    localTime: number,
    from: string,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class DynVideoUpdOffsetReq extends jspb.Message {
  getHostUid(): number;
  setHostUid(value: number): DynVideoUpdOffsetReq;

  getReadOffset(): string;
  setReadOffset(value: string): DynVideoUpdOffsetReq;

  getFootprint(): string;
  setFootprint(value: string): DynVideoUpdOffsetReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVideoUpdOffsetReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynVideoUpdOffsetReq): DynVideoUpdOffsetReq.AsObject;
  static serializeBinaryToWriter(message: DynVideoUpdOffsetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVideoUpdOffsetReq;
  static deserializeBinaryFromReader(message: DynVideoUpdOffsetReq, reader: jspb.BinaryReader): DynVideoUpdOffsetReq;
}

export namespace DynVideoUpdOffsetReq {
  export type AsObject = {
    hostUid: number,
    readOffset: string,
    footprint: string,
  }
}

export class DynVoteReply extends jspb.Message {
  getItem(): AdditionVote2 | undefined;
  setItem(value?: AdditionVote2): DynVoteReply;
  hasItem(): boolean;
  clearItem(): DynVoteReply;

  getToast(): string;
  setToast(value: string): DynVoteReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVoteReply.AsObject;
  static toObject(includeInstance: boolean, msg: DynVoteReply): DynVoteReply.AsObject;
  static serializeBinaryToWriter(message: DynVoteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVoteReply;
  static deserializeBinaryFromReader(message: DynVoteReply, reader: jspb.BinaryReader): DynVoteReply;
}

export namespace DynVoteReply {
  export type AsObject = {
    item?: AdditionVote2.AsObject,
    toast: string,
  }
}

export class DynVoteReq extends jspb.Message {
  getVoteId(): number;
  setVoteId(value: number): DynVoteReq;

  getVotesList(): Array<number>;
  setVotesList(value: Array<number>): DynVoteReq;
  clearVotesList(): DynVoteReq;
  addVotes(value: number, index?: number): DynVoteReq;

  getStatus(): VoteStatus;
  setStatus(value: VoteStatus): DynVoteReq;

  getDynamicId(): string;
  setDynamicId(value: string): DynVoteReq;

  getShare(): boolean;
  setShare(value: boolean): DynVoteReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynVoteReq.AsObject;
  static toObject(includeInstance: boolean, msg: DynVoteReq): DynVoteReq.AsObject;
  static serializeBinaryToWriter(message: DynVoteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynVoteReq;
  static deserializeBinaryFromReader(message: DynVoteReq, reader: jspb.BinaryReader): DynVoteReq;
}

export namespace DynVoteReq {
  export type AsObject = {
    voteId: number,
    votesList: Array<number>,
    status: VoteStatus,
    dynamicId: string,
    share: boolean,
  }
}

export class DynamicItem extends jspb.Message {
  getCardType(): DynamicType;
  setCardType(value: DynamicType): DynamicItem;

  getItemType(): DynamicType;
  setItemType(value: DynamicType): DynamicItem;

  getModulesList(): Array<Module>;
  setModulesList(value: Array<Module>): DynamicItem;
  clearModulesList(): DynamicItem;
  addModules(value?: Module, index?: number): Module;

  getExtend(): Extend | undefined;
  setExtend(value?: Extend): DynamicItem;
  hasExtend(): boolean;
  clearExtend(): DynamicItem;

  getHasFold(): number;
  setHasFold(value: number): DynamicItem;

  getServerInfo(): string;
  setServerInfo(value: string): DynamicItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicItem.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicItem): DynamicItem.AsObject;
  static serializeBinaryToWriter(message: DynamicItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicItem;
  static deserializeBinaryFromReader(message: DynamicItem, reader: jspb.BinaryReader): DynamicItem;
}

export namespace DynamicItem {
  export type AsObject = {
    cardType: DynamicType,
    itemType: DynamicType,
    modulesList: Array<Module.AsObject>,
    extend?: Extend.AsObject,
    hasFold: number,
    serverInfo: string,
  }
}

export class DynamicList extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): DynamicList;
  clearListList(): DynamicList;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getUpdateNum(): number;
  setUpdateNum(value: number): DynamicList;

  getHistoryOffset(): string;
  setHistoryOffset(value: string): DynamicList;

  getUpdateBaseline(): string;
  setUpdateBaseline(value: string): DynamicList;

  getHasMore(): boolean;
  setHasMore(value: boolean): DynamicList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicList.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicList): DynamicList.AsObject;
  static serializeBinaryToWriter(message: DynamicList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicList;
  static deserializeBinaryFromReader(message: DynamicList, reader: jspb.BinaryReader): DynamicList;
}

export namespace DynamicList {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    updateNum: number,
    historyOffset: string,
    updateBaseline: string,
    hasMore: boolean,
  }
}

export class ExtInfoCommon extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ExtInfoCommon;

  getUri(): string;
  setUri(value: string): ExtInfoCommon;

  getIcon(): string;
  setIcon(value: string): ExtInfoCommon;

  getPoiType(): number;
  setPoiType(value: number): ExtInfoCommon;

  getType(): DynExtendType;
  setType(value: DynExtendType): ExtInfoCommon;

  getSubModule(): string;
  setSubModule(value: string): ExtInfoCommon;

  getActionText(): string;
  setActionText(value: string): ExtInfoCommon;

  getActionUrl(): string;
  setActionUrl(value: string): ExtInfoCommon;

  getRid(): number;
  setRid(value: number): ExtInfoCommon;

  getIsShowLight(): boolean;
  setIsShowLight(value: boolean): ExtInfoCommon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtInfoCommon.AsObject;
  static toObject(includeInstance: boolean, msg: ExtInfoCommon): ExtInfoCommon.AsObject;
  static serializeBinaryToWriter(message: ExtInfoCommon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtInfoCommon;
  static deserializeBinaryFromReader(message: ExtInfoCommon, reader: jspb.BinaryReader): ExtInfoCommon;
}

export namespace ExtInfoCommon {
  export type AsObject = {
    title: string,
    uri: string,
    icon: string,
    poiType: number,
    type: DynExtendType,
    subModule: string,
    actionText: string,
    actionUrl: string,
    rid: number,
    isShowLight: boolean,
  }
}

export class ExtInfoGame extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ExtInfoGame;

  getUri(): string;
  setUri(value: string): ExtInfoGame;

  getIcon(): string;
  setIcon(value: string): ExtInfoGame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtInfoGame.AsObject;
  static toObject(includeInstance: boolean, msg: ExtInfoGame): ExtInfoGame.AsObject;
  static serializeBinaryToWriter(message: ExtInfoGame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtInfoGame;
  static deserializeBinaryFromReader(message: ExtInfoGame, reader: jspb.BinaryReader): ExtInfoGame;
}

export namespace ExtInfoGame {
  export type AsObject = {
    title: string,
    uri: string,
    icon: string,
  }
}

export class ExtInfoHot extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ExtInfoHot;

  getUri(): string;
  setUri(value: string): ExtInfoHot;

  getIcon(): string;
  setIcon(value: string): ExtInfoHot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtInfoHot.AsObject;
  static toObject(includeInstance: boolean, msg: ExtInfoHot): ExtInfoHot.AsObject;
  static serializeBinaryToWriter(message: ExtInfoHot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtInfoHot;
  static deserializeBinaryFromReader(message: ExtInfoHot, reader: jspb.BinaryReader): ExtInfoHot;
}

export namespace ExtInfoHot {
  export type AsObject = {
    title: string,
    uri: string,
    icon: string,
  }
}

export class ExtInfoLBS extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ExtInfoLBS;

  getUri(): string;
  setUri(value: string): ExtInfoLBS;

  getIcon(): string;
  setIcon(value: string): ExtInfoLBS;

  getPoiType(): number;
  setPoiType(value: number): ExtInfoLBS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtInfoLBS.AsObject;
  static toObject(includeInstance: boolean, msg: ExtInfoLBS): ExtInfoLBS.AsObject;
  static serializeBinaryToWriter(message: ExtInfoLBS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtInfoLBS;
  static deserializeBinaryFromReader(message: ExtInfoLBS, reader: jspb.BinaryReader): ExtInfoLBS;
}

export namespace ExtInfoLBS {
  export type AsObject = {
    title: string,
    uri: string,
    icon: string,
    poiType: number,
  }
}

export class ExtInfoOGV extends jspb.Message {
  getInfoOgvList(): Array<InfoOGV>;
  setInfoOgvList(value: Array<InfoOGV>): ExtInfoOGV;
  clearInfoOgvList(): ExtInfoOGV;
  addInfoOgv(value?: InfoOGV, index?: number): InfoOGV;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtInfoOGV.AsObject;
  static toObject(includeInstance: boolean, msg: ExtInfoOGV): ExtInfoOGV.AsObject;
  static serializeBinaryToWriter(message: ExtInfoOGV, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtInfoOGV;
  static deserializeBinaryFromReader(message: ExtInfoOGV, reader: jspb.BinaryReader): ExtInfoOGV;
}

export namespace ExtInfoOGV {
  export type AsObject = {
    infoOgvList: Array<InfoOGV.AsObject>,
  }
}

export class ExtInfoTopic extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ExtInfoTopic;

  getUri(): string;
  setUri(value: string): ExtInfoTopic;

  getIcon(): string;
  setIcon(value: string): ExtInfoTopic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtInfoTopic.AsObject;
  static toObject(includeInstance: boolean, msg: ExtInfoTopic): ExtInfoTopic.AsObject;
  static serializeBinaryToWriter(message: ExtInfoTopic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtInfoTopic;
  static deserializeBinaryFromReader(message: ExtInfoTopic, reader: jspb.BinaryReader): ExtInfoTopic;
}

export namespace ExtInfoTopic {
  export type AsObject = {
    title: string,
    uri: string,
    icon: string,
  }
}

export class Extend extends jspb.Message {
  getDynIdStr(): string;
  setDynIdStr(value: string): Extend;

  getBusinessId(): string;
  setBusinessId(value: string): Extend;

  getOrigDynIdStr(): string;
  setOrigDynIdStr(value: string): Extend;

  getOrigName(): string;
  setOrigName(value: string): Extend;

  getOrigImgUrl(): string;
  setOrigImgUrl(value: string): Extend;

  getOrigDescList(): Array<Description>;
  setOrigDescList(value: Array<Description>): Extend;
  clearOrigDescList(): Extend;
  addOrigDesc(value?: Description, index?: number): Description;

  getDescList(): Array<Description>;
  setDescList(value: Array<Description>): Extend;
  clearDescList(): Extend;
  addDesc(value?: Description, index?: number): Description;

  getOrigDynType(): DynamicType;
  setOrigDynType(value: DynamicType): Extend;

  getShareType(): string;
  setShareType(value: string): Extend;

  getShareScene(): string;
  setShareScene(value: string): Extend;

  getIsFastShare(): boolean;
  setIsFastShare(value: boolean): Extend;

  getRType(): number;
  setRType(value: number): Extend;

  getDynType(): number;
  setDynType(value: number): Extend;

  getUid(): number;
  setUid(value: number): Extend;

  getCardUrl(): string;
  setCardUrl(value: string): Extend;

  getSourceContent(): google_protobuf_any_pb.Any | undefined;
  setSourceContent(value?: google_protobuf_any_pb.Any): Extend;
  hasSourceContent(): boolean;
  clearSourceContent(): Extend;

  getOrigFace(): string;
  setOrigFace(value: string): Extend;

  getReply(): ExtendReply | undefined;
  setReply(value?: ExtendReply): Extend;
  hasReply(): boolean;
  clearReply(): Extend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Extend.AsObject;
  static toObject(includeInstance: boolean, msg: Extend): Extend.AsObject;
  static serializeBinaryToWriter(message: Extend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Extend;
  static deserializeBinaryFromReader(message: Extend, reader: jspb.BinaryReader): Extend;
}

export namespace Extend {
  export type AsObject = {
    dynIdStr: string,
    businessId: string,
    origDynIdStr: string,
    origName: string,
    origImgUrl: string,
    origDescList: Array<Description.AsObject>,
    descList: Array<Description.AsObject>,
    origDynType: DynamicType,
    shareType: string,
    shareScene: string,
    isFastShare: boolean,
    rType: number,
    dynType: number,
    uid: number,
    cardUrl: string,
    sourceContent?: google_protobuf_any_pb.Any.AsObject,
    origFace: string,
    reply?: ExtendReply.AsObject,
  }
}

export class ExtendReply extends jspb.Message {
  getUri(): string;
  setUri(value: string): ExtendReply;

  getParamsList(): Array<ExtendReplyParam>;
  setParamsList(value: Array<ExtendReplyParam>): ExtendReply;
  clearParamsList(): ExtendReply;
  addParams(value?: ExtendReplyParam, index?: number): ExtendReplyParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendReply.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendReply): ExtendReply.AsObject;
  static serializeBinaryToWriter(message: ExtendReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendReply;
  static deserializeBinaryFromReader(message: ExtendReply, reader: jspb.BinaryReader): ExtendReply;
}

export namespace ExtendReply {
  export type AsObject = {
    uri: string,
    paramsList: Array<ExtendReplyParam.AsObject>,
  }
}

export class ExtendReplyParam extends jspb.Message {
  getKey(): string;
  setKey(value: string): ExtendReplyParam;

  getValue(): string;
  setValue(value: string): ExtendReplyParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendReplyParam.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendReplyParam): ExtendReplyParam.AsObject;
  static serializeBinaryToWriter(message: ExtendReplyParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendReplyParam;
  static deserializeBinaryFromReader(message: ExtendReplyParam, reader: jspb.BinaryReader): ExtendReplyParam;
}

export namespace ExtendReplyParam {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class FollowListItem extends jspb.Message {
  getSeasonId(): number;
  setSeasonId(value: number): FollowListItem;

  getTitle(): string;
  setTitle(value: string): FollowListItem;

  getCover(): string;
  setCover(value: string): FollowListItem;

  getUrl(): string;
  setUrl(value: string): FollowListItem;

  getNewEp(): NewEP | undefined;
  setNewEp(value?: NewEP): FollowListItem;
  hasNewEp(): boolean;
  clearNewEp(): FollowListItem;

  getSubTitle(): string;
  setSubTitle(value: string): FollowListItem;

  getPos(): number;
  setPos(value: number): FollowListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FollowListItem.AsObject;
  static toObject(includeInstance: boolean, msg: FollowListItem): FollowListItem.AsObject;
  static serializeBinaryToWriter(message: FollowListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FollowListItem;
  static deserializeBinaryFromReader(message: FollowListItem, reader: jspb.BinaryReader): FollowListItem;
}

export namespace FollowListItem {
  export type AsObject = {
    seasonId: number,
    title: string,
    cover: string,
    url: string,
    newEp?: NewEP.AsObject,
    subTitle: string,
    pos: number,
  }
}

export class GoodsItem extends jspb.Message {
  getCover(): string;
  setCover(value: string): GoodsItem;

  getSchemaPackageName(): string;
  setSchemaPackageName(value: string): GoodsItem;

  getSourceType(): number;
  setSourceType(value: number): GoodsItem;

  getJumpUrl(): string;
  setJumpUrl(value: string): GoodsItem;

  getJumpDesc(): string;
  setJumpDesc(value: string): GoodsItem;

  getTitle(): string;
  setTitle(value: string): GoodsItem;

  getBrief(): string;
  setBrief(value: string): GoodsItem;

  getPrice(): string;
  setPrice(value: string): GoodsItem;

  getItemId(): number;
  setItemId(value: number): GoodsItem;

  getSchemaUrl(): string;
  setSchemaUrl(value: string): GoodsItem;

  getOpenWhiteListList(): Array<string>;
  setOpenWhiteListList(value: Array<string>): GoodsItem;
  clearOpenWhiteListList(): GoodsItem;
  addOpenWhiteList(value: string, index?: number): GoodsItem;

  getUserWebV2(): boolean;
  setUserWebV2(value: boolean): GoodsItem;

  getAdMark(): string;
  setAdMark(value: string): GoodsItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoodsItem.AsObject;
  static toObject(includeInstance: boolean, msg: GoodsItem): GoodsItem.AsObject;
  static serializeBinaryToWriter(message: GoodsItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoodsItem;
  static deserializeBinaryFromReader(message: GoodsItem, reader: jspb.BinaryReader): GoodsItem;
}

export namespace GoodsItem {
  export type AsObject = {
    cover: string,
    schemaPackageName: string,
    sourceType: number,
    jumpUrl: string,
    jumpDesc: string,
    title: string,
    brief: string,
    price: string,
    itemId: number,
    schemaUrl: string,
    openWhiteListList: Array<string>,
    userWebV2: boolean,
    adMark: string,
  }
}

export class GuideBarInfo extends jspb.Message {
  getShow(): number;
  setShow(value: number): GuideBarInfo;

  getPage(): number;
  setPage(value: number): GuideBarInfo;

  getPosition(): number;
  setPosition(value: number): GuideBarInfo;

  getDesc(): string;
  setDesc(value: string): GuideBarInfo;

  getJumpPage(): number;
  setJumpPage(value: number): GuideBarInfo;

  getJumpPosition(): number;
  setJumpPosition(value: number): GuideBarInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuideBarInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GuideBarInfo): GuideBarInfo.AsObject;
  static serializeBinaryToWriter(message: GuideBarInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuideBarInfo;
  static deserializeBinaryFromReader(message: GuideBarInfo, reader: jspb.BinaryReader): GuideBarInfo;
}

export namespace GuideBarInfo {
  export type AsObject = {
    show: number,
    page: number,
    position: number,
    desc: string,
    jumpPage: number,
    jumpPosition: number,
  }
}

export class HighlightText extends jspb.Message {
  getText(): string;
  setText(value: string): HighlightText;

  getTextStyle(): HighlightTextStyle;
  setTextStyle(value: HighlightTextStyle): HighlightText;

  getJumpUrl(): string;
  setJumpUrl(value: string): HighlightText;

  getIcon(): string;
  setIcon(value: string): HighlightText;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HighlightText.AsObject;
  static toObject(includeInstance: boolean, msg: HighlightText): HighlightText.AsObject;
  static serializeBinaryToWriter(message: HighlightText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HighlightText;
  static deserializeBinaryFromReader(message: HighlightText, reader: jspb.BinaryReader): HighlightText;
}

export namespace HighlightText {
  export type AsObject = {
    text: string,
    textStyle: HighlightTextStyle,
    jumpUrl: string,
    icon: string,
  }
}

export class IconBadge extends jspb.Message {
  getIconBgUrl(): string;
  setIconBgUrl(value: string): IconBadge;

  getText(): string;
  setText(value: string): IconBadge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IconBadge.AsObject;
  static toObject(includeInstance: boolean, msg: IconBadge): IconBadge.AsObject;
  static serializeBinaryToWriter(message: IconBadge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IconBadge;
  static deserializeBinaryFromReader(message: IconBadge, reader: jspb.BinaryReader): IconBadge;
}

export namespace IconBadge {
  export type AsObject = {
    iconBgUrl: string,
    text: string,
  }
}

export class IconButton extends jspb.Message {
  getText(): string;
  setText(value: string): IconButton;

  getIconHead(): string;
  setIconHead(value: string): IconButton;

  getIconTail(): string;
  setIconTail(value: string): IconButton;

  getJumpUri(): string;
  setJumpUri(value: string): IconButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IconButton.AsObject;
  static toObject(includeInstance: boolean, msg: IconButton): IconButton.AsObject;
  static serializeBinaryToWriter(message: IconButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IconButton;
  static deserializeBinaryFromReader(message: IconButton, reader: jspb.BinaryReader): IconButton;
}

export namespace IconButton {
  export type AsObject = {
    text: string,
    iconHead: string,
    iconTail: string,
    jumpUri: string,
  }
}

export class InfoOGV extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): InfoOGV;

  getUri(): string;
  setUri(value: string): InfoOGV;

  getIcon(): string;
  setIcon(value: string): InfoOGV;

  getSubModule(): string;
  setSubModule(value: string): InfoOGV;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoOGV.AsObject;
  static toObject(includeInstance: boolean, msg: InfoOGV): InfoOGV.AsObject;
  static serializeBinaryToWriter(message: InfoOGV, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoOGV;
  static deserializeBinaryFromReader(message: InfoOGV, reader: jspb.BinaryReader): InfoOGV;
}

export namespace InfoOGV {
  export type AsObject = {
    title: string,
    uri: string,
    icon: string,
    subModule: string,
  }
}

export class InteractionFace extends jspb.Message {
  getMid(): number;
  setMid(value: number): InteractionFace;

  getFace(): string;
  setFace(value: string): InteractionFace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionFace.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionFace): InteractionFace.AsObject;
  static serializeBinaryToWriter(message: InteractionFace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionFace;
  static deserializeBinaryFromReader(message: InteractionFace, reader: jspb.BinaryReader): InteractionFace;
}

export namespace InteractionFace {
  export type AsObject = {
    mid: number,
    face: string,
  }
}

export class InteractionItem extends jspb.Message {
  getIconType(): LocalIconType;
  setIconType(value: LocalIconType): InteractionItem;

  getDescList(): Array<Description>;
  setDescList(value: Array<Description>): InteractionItem;
  clearDescList(): InteractionItem;
  addDesc(value?: Description, index?: number): Description;

  getUri(): string;
  setUri(value: string): InteractionItem;

  getDynamicId(): string;
  setDynamicId(value: string): InteractionItem;

  getCommentMid(): number;
  setCommentMid(value: number): InteractionItem;

  getFacesList(): Array<InteractionFace>;
  setFacesList(value: Array<InteractionFace>): InteractionItem;
  clearFacesList(): InteractionItem;
  addFaces(value?: InteractionFace, index?: number): InteractionFace;

  getStat(): InteractionStat | undefined;
  setStat(value?: InteractionStat): InteractionItem;
  hasStat(): boolean;
  clearStat(): InteractionItem;

  getIcon(): string;
  setIcon(value: string): InteractionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionItem.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionItem): InteractionItem.AsObject;
  static serializeBinaryToWriter(message: InteractionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionItem;
  static deserializeBinaryFromReader(message: InteractionItem, reader: jspb.BinaryReader): InteractionItem;
}

export namespace InteractionItem {
  export type AsObject = {
    iconType: LocalIconType,
    descList: Array<Description.AsObject>,
    uri: string,
    dynamicId: string,
    commentMid: number,
    facesList: Array<InteractionFace.AsObject>,
    stat?: InteractionStat.AsObject,
    icon: string,
  }
}

export class InteractionStat extends jspb.Message {
  getLike(): number;
  setLike(value: number): InteractionStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionStat.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionStat): InteractionStat.AsObject;
  static serializeBinaryToWriter(message: InteractionStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionStat;
  static deserializeBinaryFromReader(message: InteractionStat, reader: jspb.BinaryReader): InteractionStat;
}

export namespace InteractionStat {
  export type AsObject = {
    like: number,
  }
}

export class LikeAnimation extends jspb.Message {
  getBegin(): string;
  setBegin(value: string): LikeAnimation;

  getProc(): string;
  setProc(value: string): LikeAnimation;

  getEnd(): string;
  setEnd(value: string): LikeAnimation;

  getLikeIconId(): number;
  setLikeIconId(value: number): LikeAnimation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeAnimation.AsObject;
  static toObject(includeInstance: boolean, msg: LikeAnimation): LikeAnimation.AsObject;
  static serializeBinaryToWriter(message: LikeAnimation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeAnimation;
  static deserializeBinaryFromReader(message: LikeAnimation, reader: jspb.BinaryReader): LikeAnimation;
}

export namespace LikeAnimation {
  export type AsObject = {
    begin: string,
    proc: string,
    end: string,
    likeIconId: number,
  }
}

export class LikeInfo extends jspb.Message {
  getAnimation(): LikeAnimation | undefined;
  setAnimation(value?: LikeAnimation): LikeInfo;
  hasAnimation(): boolean;
  clearAnimation(): LikeInfo;

  getIsLike(): boolean;
  setIsLike(value: boolean): LikeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LikeInfo): LikeInfo.AsObject;
  static serializeBinaryToWriter(message: LikeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeInfo;
  static deserializeBinaryFromReader(message: LikeInfo, reader: jspb.BinaryReader): LikeInfo;
}

export namespace LikeInfo {
  export type AsObject = {
    animation?: LikeAnimation.AsObject,
    isLike: boolean,
  }
}

export class LikeListReply extends jspb.Message {
  getListList(): Array<ModuleAuthor>;
  setListList(value: Array<ModuleAuthor>): LikeListReply;
  clearListList(): LikeListReply;
  addList(value?: ModuleAuthor, index?: number): ModuleAuthor;

  getHasMore(): boolean;
  setHasMore(value: boolean): LikeListReply;

  getTotalCount(): number;
  setTotalCount(value: number): LikeListReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeListReply.AsObject;
  static toObject(includeInstance: boolean, msg: LikeListReply): LikeListReply.AsObject;
  static serializeBinaryToWriter(message: LikeListReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeListReply;
  static deserializeBinaryFromReader(message: LikeListReply, reader: jspb.BinaryReader): LikeListReply;
}

export namespace LikeListReply {
  export type AsObject = {
    listList: Array<ModuleAuthor.AsObject>,
    hasMore: boolean,
    totalCount: number,
  }
}

export class LikeListReq extends jspb.Message {
  getDynamicId(): string;
  setDynamicId(value: string): LikeListReq;

  getDynType(): number;
  setDynType(value: number): LikeListReq;

  getRid(): number;
  setRid(value: number): LikeListReq;

  getUidOffset(): number;
  setUidOffset(value: number): LikeListReq;

  getPage(): number;
  setPage(value: number): LikeListReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeListReq.AsObject;
  static toObject(includeInstance: boolean, msg: LikeListReq): LikeListReq.AsObject;
  static serializeBinaryToWriter(message: LikeListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeListReq;
  static deserializeBinaryFromReader(message: LikeListReq, reader: jspb.BinaryReader): LikeListReq;
}

export namespace LikeListReq {
  export type AsObject = {
    dynamicId: string,
    dynType: number,
    rid: number,
    uidOffset: number,
    page: number,
  }
}

export class LikeUser extends jspb.Message {
  getUid(): number;
  setUid(value: number): LikeUser;

  getUname(): string;
  setUname(value: string): LikeUser;

  getUri(): string;
  setUri(value: string): LikeUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikeUser.AsObject;
  static toObject(includeInstance: boolean, msg: LikeUser): LikeUser.AsObject;
  static serializeBinaryToWriter(message: LikeUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikeUser;
  static deserializeBinaryFromReader(message: LikeUser, reader: jspb.BinaryReader): LikeUser;
}

export namespace LikeUser {
  export type AsObject = {
    uid: number,
    uname: string,
    uri: string,
  }
}

export class LiveInfo extends jspb.Message {
  getIsLiving(): number;
  setIsLiving(value: number): LiveInfo;

  getUri(): string;
  setUri(value: string): LiveInfo;

  getLiveState(): LiveState;
  setLiveState(value: LiveState): LiveInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiveInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LiveInfo): LiveInfo.AsObject;
  static serializeBinaryToWriter(message: LiveInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiveInfo;
  static deserializeBinaryFromReader(message: LiveInfo, reader: jspb.BinaryReader): LiveInfo;
}

export namespace LiveInfo {
  export type AsObject = {
    isLiving: number,
    uri: string,
    liveState: LiveState,
  }
}

export class LivePendant extends jspb.Message {
  getText(): string;
  setText(value: string): LivePendant;

  getIcon(): string;
  setIcon(value: string): LivePendant;

  getPendantId(): number;
  setPendantId(value: number): LivePendant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LivePendant.AsObject;
  static toObject(includeInstance: boolean, msg: LivePendant): LivePendant.AsObject;
  static serializeBinaryToWriter(message: LivePendant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LivePendant;
  static deserializeBinaryFromReader(message: LivePendant, reader: jspb.BinaryReader): LivePendant;
}

export namespace LivePendant {
  export type AsObject = {
    text: string,
    icon: string,
    pendantId: number,
  }
}

export class MatchTeam extends jspb.Message {
  getId(): number;
  setId(value: number): MatchTeam;

  getName(): string;
  setName(value: string): MatchTeam;

  getCover(): string;
  setCover(value: string): MatchTeam;

  getColor(): string;
  setColor(value: string): MatchTeam;

  getNightColor(): string;
  setNightColor(value: string): MatchTeam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchTeam.AsObject;
  static toObject(includeInstance: boolean, msg: MatchTeam): MatchTeam.AsObject;
  static serializeBinaryToWriter(message: MatchTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchTeam;
  static deserializeBinaryFromReader(message: MatchTeam, reader: jspb.BinaryReader): MatchTeam;
}

export namespace MatchTeam {
  export type AsObject = {
    id: number,
    name: string,
    cover: string,
    color: string,
    nightColor: string,
  }
}

export class MdlDynApplet extends jspb.Message {
  getId(): number;
  setId(value: number): MdlDynApplet;

  getUri(): string;
  setUri(value: string): MdlDynApplet;

  getTitle(): string;
  setTitle(value: string): MdlDynApplet;

  getSubTitle(): string;
  setSubTitle(value: string): MdlDynApplet;

  getCover(): string;
  setCover(value: string): MdlDynApplet;

  getIcon(): string;
  setIcon(value: string): MdlDynApplet;

  getLabel(): string;
  setLabel(value: string): MdlDynApplet;

  getButtonTitle(): string;
  setButtonTitle(value: string): MdlDynApplet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynApplet.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynApplet): MdlDynApplet.AsObject;
  static serializeBinaryToWriter(message: MdlDynApplet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynApplet;
  static deserializeBinaryFromReader(message: MdlDynApplet, reader: jspb.BinaryReader): MdlDynApplet;
}

export namespace MdlDynApplet {
  export type AsObject = {
    id: number,
    uri: string,
    title: string,
    subTitle: string,
    cover: string,
    icon: string,
    label: string,
    buttonTitle: string,
  }
}

export class MdlDynArchive extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): MdlDynArchive;

  getCover(): string;
  setCover(value: string): MdlDynArchive;

  getUri(): string;
  setUri(value: string): MdlDynArchive;

  getCoverLeftText1(): string;
  setCoverLeftText1(value: string): MdlDynArchive;

  getCoverLeftText2(): string;
  setCoverLeftText2(value: string): MdlDynArchive;

  getCoverLeftText3(): string;
  setCoverLeftText3(value: string): MdlDynArchive;

  getAvid(): number;
  setAvid(value: number): MdlDynArchive;

  getCid(): number;
  setCid(value: number): MdlDynArchive;

  getMediaType(): MediaType;
  setMediaType(value: MediaType): MdlDynArchive;

  getDimension(): Dimension | undefined;
  setDimension(value?: Dimension): MdlDynArchive;
  hasDimension(): boolean;
  clearDimension(): MdlDynArchive;

  getBadgeList(): Array<VideoBadge>;
  setBadgeList(value: Array<VideoBadge>): MdlDynArchive;
  clearBadgeList(): MdlDynArchive;
  addBadge(value?: VideoBadge, index?: number): VideoBadge;

  getCanPlay(): boolean;
  setCanPlay(value: boolean): MdlDynArchive;

  getStype(): VideoType;
  setStype(value: VideoType): MdlDynArchive;

  getIspgc(): boolean;
  setIspgc(value: boolean): MdlDynArchive;

  getInlineurl(): string;
  setInlineurl(value: string): MdlDynArchive;

  getEpisodeid(): number;
  setEpisodeid(value: number): MdlDynArchive;

  getSubtype(): number;
  setSubtype(value: number): MdlDynArchive;

  getPgcseasonid(): number;
  setPgcseasonid(value: number): MdlDynArchive;

  getPlayIcon(): string;
  setPlayIcon(value: string): MdlDynArchive;

  getDuration(): number;
  setDuration(value: number): MdlDynArchive;

  getJumpUrl(): string;
  setJumpUrl(value: string): MdlDynArchive;

  getIsPreview(): boolean;
  setIsPreview(value: boolean): MdlDynArchive;

  getBadgeCategoryList(): Array<VideoBadge>;
  setBadgeCategoryList(value: Array<VideoBadge>): MdlDynArchive;
  clearBadgeCategoryList(): MdlDynArchive;
  addBadgeCategory(value?: VideoBadge, index?: number): VideoBadge;

  getIsFeature(): boolean;
  setIsFeature(value: boolean): MdlDynArchive;

  getReserveType(): ReserveType;
  setReserveType(value: ReserveType): MdlDynArchive;

  getBvid(): string;
  setBvid(value: string): MdlDynArchive;

  getView(): number;
  setView(value: number): MdlDynArchive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynArchive.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynArchive): MdlDynArchive.AsObject;
  static serializeBinaryToWriter(message: MdlDynArchive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynArchive;
  static deserializeBinaryFromReader(message: MdlDynArchive, reader: jspb.BinaryReader): MdlDynArchive;
}

export namespace MdlDynArchive {
  export type AsObject = {
    title: string,
    cover: string,
    uri: string,
    coverLeftText1: string,
    coverLeftText2: string,
    coverLeftText3: string,
    avid: number,
    cid: number,
    mediaType: MediaType,
    dimension?: Dimension.AsObject,
    badgeList: Array<VideoBadge.AsObject>,
    canPlay: boolean,
    stype: VideoType,
    ispgc: boolean,
    inlineurl: string,
    episodeid: number,
    subtype: number,
    pgcseasonid: number,
    playIcon: string,
    duration: number,
    jumpUrl: string,
    isPreview: boolean,
    badgeCategoryList: Array<VideoBadge.AsObject>,
    isFeature: boolean,
    reserveType: ReserveType,
    bvid: string,
    view: number,
  }
}

export class MdlDynArticle extends jspb.Message {
  getId(): number;
  setId(value: number): MdlDynArticle;

  getUri(): string;
  setUri(value: string): MdlDynArticle;

  getTitle(): string;
  setTitle(value: string): MdlDynArticle;

  getDesc(): string;
  setDesc(value: string): MdlDynArticle;

  getCoversList(): Array<string>;
  setCoversList(value: Array<string>): MdlDynArticle;
  clearCoversList(): MdlDynArticle;
  addCovers(value: string, index?: number): MdlDynArticle;

  getLabel(): string;
  setLabel(value: string): MdlDynArticle;

  getTemplateid(): number;
  setTemplateid(value: number): MdlDynArticle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynArticle.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynArticle): MdlDynArticle.AsObject;
  static serializeBinaryToWriter(message: MdlDynArticle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynArticle;
  static deserializeBinaryFromReader(message: MdlDynArticle, reader: jspb.BinaryReader): MdlDynArticle;
}

export namespace MdlDynArticle {
  export type AsObject = {
    id: number,
    uri: string,
    title: string,
    desc: string,
    coversList: Array<string>,
    label: string,
    templateid: number,
  }
}

export class MdlDynCommon extends jspb.Message {
  getOid(): number;
  setOid(value: number): MdlDynCommon;

  getUri(): string;
  setUri(value: string): MdlDynCommon;

  getTitle(): string;
  setTitle(value: string): MdlDynCommon;

  getDesc(): string;
  setDesc(value: string): MdlDynCommon;

  getCover(): string;
  setCover(value: string): MdlDynCommon;

  getLabel(): string;
  setLabel(value: string): MdlDynCommon;

  getBiztype(): number;
  setBiztype(value: number): MdlDynCommon;

  getSketchid(): number;
  setSketchid(value: number): MdlDynCommon;

  getStyle(): MdlDynCommonType;
  setStyle(value: MdlDynCommonType): MdlDynCommon;

  getBadgeList(): Array<VideoBadge>;
  setBadgeList(value: Array<VideoBadge>): MdlDynCommon;
  clearBadgeList(): MdlDynCommon;
  addBadge(value?: VideoBadge, index?: number): VideoBadge;

  getButton(): AdditionalButton | undefined;
  setButton(value?: AdditionalButton): MdlDynCommon;
  hasButton(): boolean;
  clearButton(): MdlDynCommon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynCommon.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynCommon): MdlDynCommon.AsObject;
  static serializeBinaryToWriter(message: MdlDynCommon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynCommon;
  static deserializeBinaryFromReader(message: MdlDynCommon, reader: jspb.BinaryReader): MdlDynCommon;
}

export namespace MdlDynCommon {
  export type AsObject = {
    oid: number,
    uri: string,
    title: string,
    desc: string,
    cover: string,
    label: string,
    biztype: number,
    sketchid: number,
    style: MdlDynCommonType,
    badgeList: Array<VideoBadge.AsObject>,
    button?: AdditionalButton.AsObject,
  }
}

export class MdlDynCourBatch extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): MdlDynCourBatch;

  getCover(): string;
  setCover(value: string): MdlDynCourBatch;

  getUri(): string;
  setUri(value: string): MdlDynCourBatch;

  getText1(): string;
  setText1(value: string): MdlDynCourBatch;

  getText2(): string;
  setText2(value: string): MdlDynCourBatch;

  getBadge(): VideoBadge | undefined;
  setBadge(value?: VideoBadge): MdlDynCourBatch;
  hasBadge(): boolean;
  clearBadge(): MdlDynCourBatch;

  getPlayIcon(): string;
  setPlayIcon(value: string): MdlDynCourBatch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynCourBatch.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynCourBatch): MdlDynCourBatch.AsObject;
  static serializeBinaryToWriter(message: MdlDynCourBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynCourBatch;
  static deserializeBinaryFromReader(message: MdlDynCourBatch, reader: jspb.BinaryReader): MdlDynCourBatch;
}

export namespace MdlDynCourBatch {
  export type AsObject = {
    title: string,
    cover: string,
    uri: string,
    text1: string,
    text2: string,
    badge?: VideoBadge.AsObject,
    playIcon: string,
  }
}

export class MdlDynCourSeason extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): MdlDynCourSeason;

  getCover(): string;
  setCover(value: string): MdlDynCourSeason;

  getUri(): string;
  setUri(value: string): MdlDynCourSeason;

  getText1(): string;
  setText1(value: string): MdlDynCourSeason;

  getDesc(): string;
  setDesc(value: string): MdlDynCourSeason;

  getBadge(): VideoBadge | undefined;
  setBadge(value?: VideoBadge): MdlDynCourSeason;
  hasBadge(): boolean;
  clearBadge(): MdlDynCourSeason;

  getPlayIcon(): string;
  setPlayIcon(value: string): MdlDynCourSeason;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynCourSeason.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynCourSeason): MdlDynCourSeason.AsObject;
  static serializeBinaryToWriter(message: MdlDynCourSeason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynCourSeason;
  static deserializeBinaryFromReader(message: MdlDynCourSeason, reader: jspb.BinaryReader): MdlDynCourSeason;
}

export namespace MdlDynCourSeason {
  export type AsObject = {
    title: string,
    cover: string,
    uri: string,
    text1: string,
    desc: string,
    badge?: VideoBadge.AsObject,
    playIcon: string,
  }
}

export class MdlDynDraw extends jspb.Message {
  getItemsList(): Array<MdlDynDrawItem>;
  setItemsList(value: Array<MdlDynDrawItem>): MdlDynDraw;
  clearItemsList(): MdlDynDraw;
  addItems(value?: MdlDynDrawItem, index?: number): MdlDynDrawItem;

  getUri(): string;
  setUri(value: string): MdlDynDraw;

  getId(): number;
  setId(value: number): MdlDynDraw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynDraw.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynDraw): MdlDynDraw.AsObject;
  static serializeBinaryToWriter(message: MdlDynDraw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynDraw;
  static deserializeBinaryFromReader(message: MdlDynDraw, reader: jspb.BinaryReader): MdlDynDraw;
}

export namespace MdlDynDraw {
  export type AsObject = {
    itemsList: Array<MdlDynDrawItem.AsObject>,
    uri: string,
    id: number,
  }
}

export class MdlDynDrawItem extends jspb.Message {
  getSrc(): string;
  setSrc(value: string): MdlDynDrawItem;

  getWidth(): number;
  setWidth(value: number): MdlDynDrawItem;

  getHeight(): number;
  setHeight(value: number): MdlDynDrawItem;

  getSize(): number;
  setSize(value: number): MdlDynDrawItem;

  getTagsList(): Array<MdlDynDrawTag>;
  setTagsList(value: Array<MdlDynDrawTag>): MdlDynDrawItem;
  clearTagsList(): MdlDynDrawItem;
  addTags(value?: MdlDynDrawTag, index?: number): MdlDynDrawTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynDrawItem.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynDrawItem): MdlDynDrawItem.AsObject;
  static serializeBinaryToWriter(message: MdlDynDrawItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynDrawItem;
  static deserializeBinaryFromReader(message: MdlDynDrawItem, reader: jspb.BinaryReader): MdlDynDrawItem;
}

export namespace MdlDynDrawItem {
  export type AsObject = {
    src: string,
    width: number,
    height: number,
    size: number,
    tagsList: Array<MdlDynDrawTag.AsObject>,
  }
}

export class MdlDynDrawTag extends jspb.Message {
  getType(): MdlDynDrawTagType;
  setType(value: MdlDynDrawTagType): MdlDynDrawTag;

  getItem(): MdlDynDrawTagItem | undefined;
  setItem(value?: MdlDynDrawTagItem): MdlDynDrawTag;
  hasItem(): boolean;
  clearItem(): MdlDynDrawTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynDrawTag.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynDrawTag): MdlDynDrawTag.AsObject;
  static serializeBinaryToWriter(message: MdlDynDrawTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynDrawTag;
  static deserializeBinaryFromReader(message: MdlDynDrawTag, reader: jspb.BinaryReader): MdlDynDrawTag;
}

export namespace MdlDynDrawTag {
  export type AsObject = {
    type: MdlDynDrawTagType,
    item?: MdlDynDrawTagItem.AsObject,
  }
}

export class MdlDynDrawTagItem extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): MdlDynDrawTagItem;

  getText(): string;
  setText(value: string): MdlDynDrawTagItem;

  getX(): number;
  setX(value: number): MdlDynDrawTagItem;

  getY(): number;
  setY(value: number): MdlDynDrawTagItem;

  getOrientation(): number;
  setOrientation(value: number): MdlDynDrawTagItem;

  getSource(): number;
  setSource(value: number): MdlDynDrawTagItem;

  getItemId(): number;
  setItemId(value: number): MdlDynDrawTagItem;

  getMid(): number;
  setMid(value: number): MdlDynDrawTagItem;

  getTid(): number;
  setTid(value: number): MdlDynDrawTagItem;

  getPoi(): string;
  setPoi(value: string): MdlDynDrawTagItem;

  getSchemaUrl(): string;
  setSchemaUrl(value: string): MdlDynDrawTagItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynDrawTagItem.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynDrawTagItem): MdlDynDrawTagItem.AsObject;
  static serializeBinaryToWriter(message: MdlDynDrawTagItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynDrawTagItem;
  static deserializeBinaryFromReader(message: MdlDynDrawTagItem, reader: jspb.BinaryReader): MdlDynDrawTagItem;
}

export namespace MdlDynDrawTagItem {
  export type AsObject = {
    url: string,
    text: string,
    x: number,
    y: number,
    orientation: number,
    source: number,
    itemId: number,
    mid: number,
    tid: number,
    poi: string,
    schemaUrl: string,
  }
}

export class MdlDynForward extends jspb.Message {
  getItem(): DynamicItem | undefined;
  setItem(value?: DynamicItem): MdlDynForward;
  hasItem(): boolean;
  clearItem(): MdlDynForward;

  getRtype(): number;
  setRtype(value: number): MdlDynForward;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynForward.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynForward): MdlDynForward.AsObject;
  static serializeBinaryToWriter(message: MdlDynForward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynForward;
  static deserializeBinaryFromReader(message: MdlDynForward, reader: jspb.BinaryReader): MdlDynForward;
}

export namespace MdlDynForward {
  export type AsObject = {
    item?: DynamicItem.AsObject,
    rtype: number,
  }
}

export class MdlDynLive extends jspb.Message {
  getId(): number;
  setId(value: number): MdlDynLive;

  getUri(): string;
  setUri(value: string): MdlDynLive;

  getTitle(): string;
  setTitle(value: string): MdlDynLive;

  getCover(): string;
  setCover(value: string): MdlDynLive;

  getCoverLabel(): string;
  setCoverLabel(value: string): MdlDynLive;

  getCoverLabel2(): string;
  setCoverLabel2(value: string): MdlDynLive;

  getLiveState(): LiveState;
  setLiveState(value: LiveState): MdlDynLive;

  getBadge(): VideoBadge | undefined;
  setBadge(value?: VideoBadge): MdlDynLive;
  hasBadge(): boolean;
  clearBadge(): MdlDynLive;

  getReserveType(): ReserveType;
  setReserveType(value: ReserveType): MdlDynLive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynLive.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynLive): MdlDynLive.AsObject;
  static serializeBinaryToWriter(message: MdlDynLive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynLive;
  static deserializeBinaryFromReader(message: MdlDynLive, reader: jspb.BinaryReader): MdlDynLive;
}

export namespace MdlDynLive {
  export type AsObject = {
    id: number,
    uri: string,
    title: string,
    cover: string,
    coverLabel: string,
    coverLabel2: string,
    liveState: LiveState,
    badge?: VideoBadge.AsObject,
    reserveType: ReserveType,
  }
}

export class MdlDynLiveRcmd extends jspb.Message {
  getContent(): string;
  setContent(value: string): MdlDynLiveRcmd;

  getReserveType(): ReserveType;
  setReserveType(value: ReserveType): MdlDynLiveRcmd;

  getPendant(): LivePendant | undefined;
  setPendant(value?: LivePendant): MdlDynLiveRcmd;
  hasPendant(): boolean;
  clearPendant(): MdlDynLiveRcmd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynLiveRcmd.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynLiveRcmd): MdlDynLiveRcmd.AsObject;
  static serializeBinaryToWriter(message: MdlDynLiveRcmd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynLiveRcmd;
  static deserializeBinaryFromReader(message: MdlDynLiveRcmd, reader: jspb.BinaryReader): MdlDynLiveRcmd;
}

export namespace MdlDynLiveRcmd {
  export type AsObject = {
    content: string,
    reserveType: ReserveType,
    pendant?: LivePendant.AsObject,
  }
}

export class MdlDynMedialist extends jspb.Message {
  getId(): number;
  setId(value: number): MdlDynMedialist;

  getUri(): string;
  setUri(value: string): MdlDynMedialist;

  getTitle(): string;
  setTitle(value: string): MdlDynMedialist;

  getSubTitle(): string;
  setSubTitle(value: string): MdlDynMedialist;

  getCover(): string;
  setCover(value: string): MdlDynMedialist;

  getCoverType(): number;
  setCoverType(value: number): MdlDynMedialist;

  getBadge(): VideoBadge | undefined;
  setBadge(value?: VideoBadge): MdlDynMedialist;
  hasBadge(): boolean;
  clearBadge(): MdlDynMedialist;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynMedialist.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynMedialist): MdlDynMedialist.AsObject;
  static serializeBinaryToWriter(message: MdlDynMedialist, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynMedialist;
  static deserializeBinaryFromReader(message: MdlDynMedialist, reader: jspb.BinaryReader): MdlDynMedialist;
}

export namespace MdlDynMedialist {
  export type AsObject = {
    id: number,
    uri: string,
    title: string,
    subTitle: string,
    cover: string,
    coverType: number,
    badge?: VideoBadge.AsObject,
  }
}

export class MdlDynMusic extends jspb.Message {
  getId(): number;
  setId(value: number): MdlDynMusic;

  getUri(): string;
  setUri(value: string): MdlDynMusic;

  getUpId(): number;
  setUpId(value: number): MdlDynMusic;

  getTitle(): string;
  setTitle(value: string): MdlDynMusic;

  getCover(): string;
  setCover(value: string): MdlDynMusic;

  getLabel1(): string;
  setLabel1(value: string): MdlDynMusic;

  getUpper(): string;
  setUpper(value: string): MdlDynMusic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynMusic.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynMusic): MdlDynMusic.AsObject;
  static serializeBinaryToWriter(message: MdlDynMusic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynMusic;
  static deserializeBinaryFromReader(message: MdlDynMusic, reader: jspb.BinaryReader): MdlDynMusic;
}

export namespace MdlDynMusic {
  export type AsObject = {
    id: number,
    uri: string,
    upId: number,
    title: string,
    cover: string,
    label1: string,
    upper: string,
  }
}

export class MdlDynPGC extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): MdlDynPGC;

  getCover(): string;
  setCover(value: string): MdlDynPGC;

  getUri(): string;
  setUri(value: string): MdlDynPGC;

  getCoverLeftText1(): string;
  setCoverLeftText1(value: string): MdlDynPGC;

  getCoverLeftText2(): string;
  setCoverLeftText2(value: string): MdlDynPGC;

  getCoverLeftText3(): string;
  setCoverLeftText3(value: string): MdlDynPGC;

  getCid(): number;
  setCid(value: number): MdlDynPGC;

  getSeasonId(): number;
  setSeasonId(value: number): MdlDynPGC;

  getEpid(): number;
  setEpid(value: number): MdlDynPGC;

  getAid(): number;
  setAid(value: number): MdlDynPGC;

  getMediaType(): MediaType;
  setMediaType(value: MediaType): MdlDynPGC;

  getSubType(): VideoSubType;
  setSubType(value: VideoSubType): MdlDynPGC;

  getIsPreview(): boolean;
  setIsPreview(value: boolean): MdlDynPGC;

  getDimension(): Dimension | undefined;
  setDimension(value?: Dimension): MdlDynPGC;
  hasDimension(): boolean;
  clearDimension(): MdlDynPGC;

  getBadgeList(): Array<VideoBadge>;
  setBadgeList(value: Array<VideoBadge>): MdlDynPGC;
  clearBadgeList(): MdlDynPGC;
  addBadge(value?: VideoBadge, index?: number): VideoBadge;

  getCanPlay(): boolean;
  setCanPlay(value: boolean): MdlDynPGC;

  getSeason(): PGCSeason | undefined;
  setSeason(value?: PGCSeason): MdlDynPGC;
  hasSeason(): boolean;
  clearSeason(): MdlDynPGC;

  getPlayIcon(): string;
  setPlayIcon(value: string): MdlDynPGC;

  getDuration(): number;
  setDuration(value: number): MdlDynPGC;

  getJumpUrl(): string;
  setJumpUrl(value: string): MdlDynPGC;

  getBadgeCategoryList(): Array<VideoBadge>;
  setBadgeCategoryList(value: Array<VideoBadge>): MdlDynPGC;
  clearBadgeCategoryList(): MdlDynPGC;
  addBadgeCategory(value?: VideoBadge, index?: number): VideoBadge;

  getIsFeature(): boolean;
  setIsFeature(value: boolean): MdlDynPGC;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynPGC.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynPGC): MdlDynPGC.AsObject;
  static serializeBinaryToWriter(message: MdlDynPGC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynPGC;
  static deserializeBinaryFromReader(message: MdlDynPGC, reader: jspb.BinaryReader): MdlDynPGC;
}

export namespace MdlDynPGC {
  export type AsObject = {
    title: string,
    cover: string,
    uri: string,
    coverLeftText1: string,
    coverLeftText2: string,
    coverLeftText3: string,
    cid: number,
    seasonId: number,
    epid: number,
    aid: number,
    mediaType: MediaType,
    subType: VideoSubType,
    isPreview: boolean,
    dimension?: Dimension.AsObject,
    badgeList: Array<VideoBadge.AsObject>,
    canPlay: boolean,
    season?: PGCSeason.AsObject,
    playIcon: string,
    duration: number,
    jumpUrl: string,
    badgeCategoryList: Array<VideoBadge.AsObject>,
    isFeature: boolean,
  }
}

export class MdlDynSubscription extends jspb.Message {
  getId(): number;
  setId(value: number): MdlDynSubscription;

  getAdId(): number;
  setAdId(value: number): MdlDynSubscription;

  getUri(): string;
  setUri(value: string): MdlDynSubscription;

  getTitle(): string;
  setTitle(value: string): MdlDynSubscription;

  getCover(): string;
  setCover(value: string): MdlDynSubscription;

  getAdTitle(): string;
  setAdTitle(value: string): MdlDynSubscription;

  getBadge(): VideoBadge | undefined;
  setBadge(value?: VideoBadge): MdlDynSubscription;
  hasBadge(): boolean;
  clearBadge(): MdlDynSubscription;

  getTips(): string;
  setTips(value: string): MdlDynSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynSubscription): MdlDynSubscription.AsObject;
  static serializeBinaryToWriter(message: MdlDynSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynSubscription;
  static deserializeBinaryFromReader(message: MdlDynSubscription, reader: jspb.BinaryReader): MdlDynSubscription;
}

export namespace MdlDynSubscription {
  export type AsObject = {
    id: number,
    adId: number,
    uri: string,
    title: string,
    cover: string,
    adTitle: string,
    badge?: VideoBadge.AsObject,
    tips: string,
  }
}

export class MdlDynSubscriptionNew extends jspb.Message {
  getStyle(): MdlDynSubscriptionNewStyle;
  setStyle(value: MdlDynSubscriptionNewStyle): MdlDynSubscriptionNew;

  getDynSubscription(): MdlDynSubscription | undefined;
  setDynSubscription(value?: MdlDynSubscription): MdlDynSubscriptionNew;
  hasDynSubscription(): boolean;
  clearDynSubscription(): MdlDynSubscriptionNew;

  getDynLiveRcmd(): MdlDynLiveRcmd | undefined;
  setDynLiveRcmd(value?: MdlDynLiveRcmd): MdlDynSubscriptionNew;
  hasDynLiveRcmd(): boolean;
  clearDynLiveRcmd(): MdlDynSubscriptionNew;

  getItemCase(): MdlDynSubscriptionNew.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynSubscriptionNew.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynSubscriptionNew): MdlDynSubscriptionNew.AsObject;
  static serializeBinaryToWriter(message: MdlDynSubscriptionNew, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynSubscriptionNew;
  static deserializeBinaryFromReader(message: MdlDynSubscriptionNew, reader: jspb.BinaryReader): MdlDynSubscriptionNew;
}

export namespace MdlDynSubscriptionNew {
  export type AsObject = {
    style: MdlDynSubscriptionNewStyle,
    dynSubscription?: MdlDynSubscription.AsObject,
    dynLiveRcmd?: MdlDynLiveRcmd.AsObject,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    DYN_SUBSCRIPTION = 2,
    DYN_LIVE_RCMD = 3,
  }
}

export class MdlDynUGCSeason extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): MdlDynUGCSeason;

  getCover(): string;
  setCover(value: string): MdlDynUGCSeason;

  getUri(): string;
  setUri(value: string): MdlDynUGCSeason;

  getCoverLeftText1(): string;
  setCoverLeftText1(value: string): MdlDynUGCSeason;

  getCoverLeftText2(): string;
  setCoverLeftText2(value: string): MdlDynUGCSeason;

  getCoverLeftText3(): string;
  setCoverLeftText3(value: string): MdlDynUGCSeason;

  getId(): number;
  setId(value: number): MdlDynUGCSeason;

  getInlineurl(): string;
  setInlineurl(value: string): MdlDynUGCSeason;

  getCanPlay(): boolean;
  setCanPlay(value: boolean): MdlDynUGCSeason;

  getPlayIcon(): string;
  setPlayIcon(value: string): MdlDynUGCSeason;

  getAvid(): number;
  setAvid(value: number): MdlDynUGCSeason;

  getCid(): number;
  setCid(value: number): MdlDynUGCSeason;

  getDimension(): Dimension | undefined;
  setDimension(value?: Dimension): MdlDynUGCSeason;
  hasDimension(): boolean;
  clearDimension(): MdlDynUGCSeason;

  getDuration(): number;
  setDuration(value: number): MdlDynUGCSeason;

  getJumpUrl(): string;
  setJumpUrl(value: string): MdlDynUGCSeason;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MdlDynUGCSeason.AsObject;
  static toObject(includeInstance: boolean, msg: MdlDynUGCSeason): MdlDynUGCSeason.AsObject;
  static serializeBinaryToWriter(message: MdlDynUGCSeason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MdlDynUGCSeason;
  static deserializeBinaryFromReader(message: MdlDynUGCSeason, reader: jspb.BinaryReader): MdlDynUGCSeason;
}

export namespace MdlDynUGCSeason {
  export type AsObject = {
    title: string,
    cover: string,
    uri: string,
    coverLeftText1: string,
    coverLeftText2: string,
    coverLeftText3: string,
    id: number,
    inlineurl: string,
    canPlay: boolean,
    playIcon: string,
    avid: number,
    cid: number,
    dimension?: Dimension.AsObject,
    duration: number,
    jumpUrl: string,
  }
}

export class MixUpListItem extends jspb.Message {
  getUid(): number;
  setUid(value: number): MixUpListItem;

  getSpecialAttention(): number;
  setSpecialAttention(value: number): MixUpListItem;

  getReddotState(): number;
  setReddotState(value: number): MixUpListItem;

  getLiveInfo(): MixUpListLiveItem | undefined;
  setLiveInfo(value?: MixUpListLiveItem): MixUpListItem;
  hasLiveInfo(): boolean;
  clearLiveInfo(): MixUpListItem;

  getName(): string;
  setName(value: string): MixUpListItem;

  getFace(): string;
  setFace(value: string): MixUpListItem;

  getOfficial(): OfficialVerify | undefined;
  setOfficial(value?: OfficialVerify): MixUpListItem;
  hasOfficial(): boolean;
  clearOfficial(): MixUpListItem;

  getVip(): VipInfo | undefined;
  setVip(value?: VipInfo): MixUpListItem;
  hasVip(): boolean;
  clearVip(): MixUpListItem;

  getRelation(): Relation | undefined;
  setRelation(value?: Relation): MixUpListItem;
  hasRelation(): boolean;
  clearRelation(): MixUpListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MixUpListItem.AsObject;
  static toObject(includeInstance: boolean, msg: MixUpListItem): MixUpListItem.AsObject;
  static serializeBinaryToWriter(message: MixUpListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MixUpListItem;
  static deserializeBinaryFromReader(message: MixUpListItem, reader: jspb.BinaryReader): MixUpListItem;
}

export namespace MixUpListItem {
  export type AsObject = {
    uid: number,
    specialAttention: number,
    reddotState: number,
    liveInfo?: MixUpListLiveItem.AsObject,
    name: string,
    face: string,
    official?: OfficialVerify.AsObject,
    vip?: VipInfo.AsObject,
    relation?: Relation.AsObject,
  }
}

export class MixUpListLiveItem extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): MixUpListLiveItem;

  getRoomId(): number;
  setRoomId(value: number): MixUpListLiveItem;

  getUri(): string;
  setUri(value: string): MixUpListLiveItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MixUpListLiveItem.AsObject;
  static toObject(includeInstance: boolean, msg: MixUpListLiveItem): MixUpListLiveItem.AsObject;
  static serializeBinaryToWriter(message: MixUpListLiveItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MixUpListLiveItem;
  static deserializeBinaryFromReader(message: MixUpListLiveItem, reader: jspb.BinaryReader): MixUpListLiveItem;
}

export namespace MixUpListLiveItem {
  export type AsObject = {
    status: boolean,
    roomId: number,
    uri: string,
  }
}

export class Module extends jspb.Message {
  getModuleType(): DynModuleType;
  setModuleType(value: DynModuleType): Module;

  getModuleAuthor(): ModuleAuthor | undefined;
  setModuleAuthor(value?: ModuleAuthor): Module;
  hasModuleAuthor(): boolean;
  clearModuleAuthor(): Module;

  getModuleDispute(): ModuleDispute | undefined;
  setModuleDispute(value?: ModuleDispute): Module;
  hasModuleDispute(): boolean;
  clearModuleDispute(): Module;

  getModuleDesc(): ModuleDesc | undefined;
  setModuleDesc(value?: ModuleDesc): Module;
  hasModuleDesc(): boolean;
  clearModuleDesc(): Module;

  getModuleDynamic(): ModuleDynamic | undefined;
  setModuleDynamic(value?: ModuleDynamic): Module;
  hasModuleDynamic(): boolean;
  clearModuleDynamic(): Module;

  getModuleLikeuser(): ModuleLikeUser | undefined;
  setModuleLikeuser(value?: ModuleLikeUser): Module;
  hasModuleLikeuser(): boolean;
  clearModuleLikeuser(): Module;

  getModuleExtend(): ModuleExtend | undefined;
  setModuleExtend(value?: ModuleExtend): Module;
  hasModuleExtend(): boolean;
  clearModuleExtend(): Module;

  getModuleAdditional(): ModuleAdditional | undefined;
  setModuleAdditional(value?: ModuleAdditional): Module;
  hasModuleAdditional(): boolean;
  clearModuleAdditional(): Module;

  getModuleStat(): ModuleStat | undefined;
  setModuleStat(value?: ModuleStat): Module;
  hasModuleStat(): boolean;
  clearModuleStat(): Module;

  getModuleFold(): ModuleFold | undefined;
  setModuleFold(value?: ModuleFold): Module;
  hasModuleFold(): boolean;
  clearModuleFold(): Module;

  getModuleComment(): ModuleComment | undefined;
  setModuleComment(value?: ModuleComment): Module;
  hasModuleComment(): boolean;
  clearModuleComment(): Module;

  getModuleInteraction(): ModuleInteraction | undefined;
  setModuleInteraction(value?: ModuleInteraction): Module;
  hasModuleInteraction(): boolean;
  clearModuleInteraction(): Module;

  getModuleAuthorForward(): ModuleAuthorForward | undefined;
  setModuleAuthorForward(value?: ModuleAuthorForward): Module;
  hasModuleAuthorForward(): boolean;
  clearModuleAuthorForward(): Module;

  getModuleAd(): ModuleAd | undefined;
  setModuleAd(value?: ModuleAd): Module;
  hasModuleAd(): boolean;
  clearModuleAd(): Module;

  getModuleBanner(): ModuleBanner | undefined;
  setModuleBanner(value?: ModuleBanner): Module;
  hasModuleBanner(): boolean;
  clearModuleBanner(): Module;

  getModuleItemNull(): ModuleItemNull | undefined;
  setModuleItemNull(value?: ModuleItemNull): Module;
  hasModuleItemNull(): boolean;
  clearModuleItemNull(): Module;

  getModuleShareInfo(): ModuleShareInfo | undefined;
  setModuleShareInfo(value?: ModuleShareInfo): Module;
  hasModuleShareInfo(): boolean;
  clearModuleShareInfo(): Module;

  getModuleRecommend(): ModuleRecommend | undefined;
  setModuleRecommend(value?: ModuleRecommend): Module;
  hasModuleRecommend(): boolean;
  clearModuleRecommend(): Module;

  getModuleTop(): ModuleTop | undefined;
  setModuleTop(value?: ModuleTop): Module;
  hasModuleTop(): boolean;
  clearModuleTop(): Module;

  getModuleButtom(): ModuleButtom | undefined;
  setModuleButtom(value?: ModuleButtom): Module;
  hasModuleButtom(): boolean;
  clearModuleButtom(): Module;

  getModuleStatForward(): ModuleStat | undefined;
  setModuleStatForward(value?: ModuleStat): Module;
  hasModuleStatForward(): boolean;
  clearModuleStatForward(): Module;

  getModuleStory(): ModuleStory | undefined;
  setModuleStory(value?: ModuleStory): Module;
  hasModuleStory(): boolean;
  clearModuleStory(): Module;

  getModuleTopic(): ModuleTopic | undefined;
  setModuleTopic(value?: ModuleTopic): Module;
  hasModuleTopic(): boolean;
  clearModuleTopic(): Module;

  getModuleTopicDetailsExt(): ModuleTopicDetailsExt | undefined;
  setModuleTopicDetailsExt(value?: ModuleTopicDetailsExt): Module;
  hasModuleTopicDetailsExt(): boolean;
  clearModuleTopicDetailsExt(): Module;

  getModuleTopTag(): ModuleTopTag | undefined;
  setModuleTopTag(value?: ModuleTopTag): Module;
  hasModuleTopTag(): boolean;
  clearModuleTopTag(): Module;

  getModuleTopicBrief(): ModuleTopicBrief | undefined;
  setModuleTopicBrief(value?: ModuleTopicBrief): Module;
  hasModuleTopicBrief(): boolean;
  clearModuleTopicBrief(): Module;

  getModuleTitle(): ModuleTitle | undefined;
  setModuleTitle(value?: ModuleTitle): Module;
  hasModuleTitle(): boolean;
  clearModuleTitle(): Module;

  getModuleItemCase(): Module.ModuleItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    moduleType: DynModuleType,
    moduleAuthor?: ModuleAuthor.AsObject,
    moduleDispute?: ModuleDispute.AsObject,
    moduleDesc?: ModuleDesc.AsObject,
    moduleDynamic?: ModuleDynamic.AsObject,
    moduleLikeuser?: ModuleLikeUser.AsObject,
    moduleExtend?: ModuleExtend.AsObject,
    moduleAdditional?: ModuleAdditional.AsObject,
    moduleStat?: ModuleStat.AsObject,
    moduleFold?: ModuleFold.AsObject,
    moduleComment?: ModuleComment.AsObject,
    moduleInteraction?: ModuleInteraction.AsObject,
    moduleAuthorForward?: ModuleAuthorForward.AsObject,
    moduleAd?: ModuleAd.AsObject,
    moduleBanner?: ModuleBanner.AsObject,
    moduleItemNull?: ModuleItemNull.AsObject,
    moduleShareInfo?: ModuleShareInfo.AsObject,
    moduleRecommend?: ModuleRecommend.AsObject,
    moduleTop?: ModuleTop.AsObject,
    moduleButtom?: ModuleButtom.AsObject,
    moduleStatForward?: ModuleStat.AsObject,
    moduleStory?: ModuleStory.AsObject,
    moduleTopic?: ModuleTopic.AsObject,
    moduleTopicDetailsExt?: ModuleTopicDetailsExt.AsObject,
    moduleTopTag?: ModuleTopTag.AsObject,
    moduleTopicBrief?: ModuleTopicBrief.AsObject,
    moduleTitle?: ModuleTitle.AsObject,
  }

  export enum ModuleItemCase { 
    MODULE_ITEM_NOT_SET = 0,
    MODULE_AUTHOR = 2,
    MODULE_DISPUTE = 3,
    MODULE_DESC = 4,
    MODULE_DYNAMIC = 5,
    MODULE_LIKEUSER = 6,
    MODULE_EXTEND = 7,
    MODULE_ADDITIONAL = 8,
    MODULE_STAT = 9,
    MODULE_FOLD = 10,
    MODULE_COMMENT = 11,
    MODULE_INTERACTION = 12,
    MODULE_AUTHOR_FORWARD = 13,
    MODULE_AD = 14,
    MODULE_BANNER = 15,
    MODULE_ITEM_NULL = 16,
    MODULE_SHARE_INFO = 17,
    MODULE_RECOMMEND = 18,
    MODULE_TOP = 19,
    MODULE_BUTTOM = 20,
    MODULE_STAT_FORWARD = 21,
    MODULE_STORY = 22,
    MODULE_TOPIC = 23,
    MODULE_TOPIC_DETAILS_EXT = 24,
    MODULE_TOP_TAG = 25,
    MODULE_TOPIC_BRIEF = 26,
    MODULE_TITLE = 27,
  }
}

export class ModuleAd extends jspb.Message {
  getSourceContent(): google_protobuf_any_pb.Any | undefined;
  setSourceContent(value?: google_protobuf_any_pb.Any): ModuleAd;
  hasSourceContent(): boolean;
  clearSourceContent(): ModuleAd;

  getModuleAuthor(): ModuleAuthor | undefined;
  setModuleAuthor(value?: ModuleAuthor): ModuleAd;
  hasModuleAuthor(): boolean;
  clearModuleAuthor(): ModuleAd;

  getAdContentType(): number;
  setAdContentType(value: number): ModuleAd;

  getCoverLeftText1(): string;
  setCoverLeftText1(value: string): ModuleAd;

  getCoverLeftText2(): string;
  setCoverLeftText2(value: string): ModuleAd;

  getCoverLeftText3(): string;
  setCoverLeftText3(value: string): ModuleAd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleAd.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleAd): ModuleAd.AsObject;
  static serializeBinaryToWriter(message: ModuleAd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleAd;
  static deserializeBinaryFromReader(message: ModuleAd, reader: jspb.BinaryReader): ModuleAd;
}

export namespace ModuleAd {
  export type AsObject = {
    sourceContent?: google_protobuf_any_pb.Any.AsObject,
    moduleAuthor?: ModuleAuthor.AsObject,
    adContentType: number,
    coverLeftText1: string,
    coverLeftText2: string,
    coverLeftText3: string,
  }
}

export class ModuleAdditional extends jspb.Message {
  getType(): AdditionalType;
  setType(value: AdditionalType): ModuleAdditional;

  getPgc(): AdditionalPGC | undefined;
  setPgc(value?: AdditionalPGC): ModuleAdditional;
  hasPgc(): boolean;
  clearPgc(): ModuleAdditional;

  getGoods(): AdditionGoods | undefined;
  setGoods(value?: AdditionGoods): ModuleAdditional;
  hasGoods(): boolean;
  clearGoods(): ModuleAdditional;

  getVote(): AdditionVote | undefined;
  setVote(value?: AdditionVote): ModuleAdditional;
  hasVote(): boolean;
  clearVote(): ModuleAdditional;

  getCommon(): AdditionCommon | undefined;
  setCommon(value?: AdditionCommon): ModuleAdditional;
  hasCommon(): boolean;
  clearCommon(): ModuleAdditional;

  getEsport(): AdditionEsport | undefined;
  setEsport(value?: AdditionEsport): ModuleAdditional;
  hasEsport(): boolean;
  clearEsport(): ModuleAdditional;

  getVote2(): AdditionVote2 | undefined;
  setVote2(value?: AdditionVote2): ModuleAdditional;
  hasVote2(): boolean;
  clearVote2(): ModuleAdditional;

  getUgc(): AdditionUgc | undefined;
  setUgc(value?: AdditionUgc): ModuleAdditional;
  hasUgc(): boolean;
  clearUgc(): ModuleAdditional;

  getUp(): AdditionUP | undefined;
  setUp(value?: AdditionUP): ModuleAdditional;
  hasUp(): boolean;
  clearUp(): ModuleAdditional;

  getRid(): number;
  setRid(value: number): ModuleAdditional;

  getNeedWriteCalender(): boolean;
  setNeedWriteCalender(value: boolean): ModuleAdditional;

  getItemCase(): ModuleAdditional.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleAdditional.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleAdditional): ModuleAdditional.AsObject;
  static serializeBinaryToWriter(message: ModuleAdditional, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleAdditional;
  static deserializeBinaryFromReader(message: ModuleAdditional, reader: jspb.BinaryReader): ModuleAdditional;
}

export namespace ModuleAdditional {
  export type AsObject = {
    type: AdditionalType,
    pgc?: AdditionalPGC.AsObject,
    goods?: AdditionGoods.AsObject,
    vote?: AdditionVote.AsObject,
    common?: AdditionCommon.AsObject,
    esport?: AdditionEsport.AsObject,
    vote2?: AdditionVote2.AsObject,
    ugc?: AdditionUgc.AsObject,
    up?: AdditionUP.AsObject,
    rid: number,
    needWriteCalender: boolean,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    PGC = 2,
    GOODS = 3,
    VOTE = 4,
    COMMON = 5,
    ESPORT = 6,
    VOTE2 = 8,
    UGC = 9,
    UP = 10,
  }
}

export class ModuleAuthor extends jspb.Message {
  getMid(): number;
  setMid(value: number): ModuleAuthor;

  getPtimeLabelText(): string;
  setPtimeLabelText(value: string): ModuleAuthor;

  getAuthor(): UserInfo | undefined;
  setAuthor(value?: UserInfo): ModuleAuthor;
  hasAuthor(): boolean;
  clearAuthor(): ModuleAuthor;

  getDecorateCard(): DecorateCard | undefined;
  setDecorateCard(value?: DecorateCard): ModuleAuthor;
  hasDecorateCard(): boolean;
  clearDecorateCard(): ModuleAuthor;

  getUri(): string;
  setUri(value: string): ModuleAuthor;

  getTpListList(): Array<ThreePointItem>;
  setTpListList(value: Array<ThreePointItem>): ModuleAuthor;
  clearTpListList(): ModuleAuthor;
  addTpList(value?: ThreePointItem, index?: number): ThreePointItem;

  getBadgeType(): ModuleAuthorBadgeType;
  setBadgeType(value: ModuleAuthorBadgeType): ModuleAuthor;

  getBadgeButton(): ModuleAuthorBadgeButton | undefined;
  setBadgeButton(value?: ModuleAuthorBadgeButton): ModuleAuthor;
  hasBadgeButton(): boolean;
  clearBadgeButton(): ModuleAuthor;

  getAttend(): number;
  setAttend(value: number): ModuleAuthor;

  getRelation(): Relation | undefined;
  setRelation(value?: Relation): ModuleAuthor;
  hasRelation(): boolean;
  clearRelation(): ModuleAuthor;

  getWeight(): Weight | undefined;
  setWeight(value?: Weight): ModuleAuthor;
  hasWeight(): boolean;
  clearWeight(): ModuleAuthor;

  getShowFollow(): boolean;
  setShowFollow(value: boolean): ModuleAuthor;

  getIsTop(): boolean;
  setIsTop(value: boolean): ModuleAuthor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleAuthor): ModuleAuthor.AsObject;
  static serializeBinaryToWriter(message: ModuleAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleAuthor;
  static deserializeBinaryFromReader(message: ModuleAuthor, reader: jspb.BinaryReader): ModuleAuthor;
}

export namespace ModuleAuthor {
  export type AsObject = {
    mid: number,
    ptimeLabelText: string,
    author?: UserInfo.AsObject,
    decorateCard?: DecorateCard.AsObject,
    uri: string,
    tpListList: Array<ThreePointItem.AsObject>,
    badgeType: ModuleAuthorBadgeType,
    badgeButton?: ModuleAuthorBadgeButton.AsObject,
    attend: number,
    relation?: Relation.AsObject,
    weight?: Weight.AsObject,
    showFollow: boolean,
    isTop: boolean,
  }
}

export class ModuleAuthorBadgeButton extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ModuleAuthorBadgeButton;

  getTitle(): string;
  setTitle(value: string): ModuleAuthorBadgeButton;

  getState(): number;
  setState(value: number): ModuleAuthorBadgeButton;

  getId(): number;
  setId(value: number): ModuleAuthorBadgeButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleAuthorBadgeButton.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleAuthorBadgeButton): ModuleAuthorBadgeButton.AsObject;
  static serializeBinaryToWriter(message: ModuleAuthorBadgeButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleAuthorBadgeButton;
  static deserializeBinaryFromReader(message: ModuleAuthorBadgeButton, reader: jspb.BinaryReader): ModuleAuthorBadgeButton;
}

export namespace ModuleAuthorBadgeButton {
  export type AsObject = {
    icon: string,
    title: string,
    state: number,
    id: number,
  }
}

export class ModuleAuthorForward extends jspb.Message {
  getTitleList(): Array<ModuleAuthorForwardTitle>;
  setTitleList(value: Array<ModuleAuthorForwardTitle>): ModuleAuthorForward;
  clearTitleList(): ModuleAuthorForward;
  addTitle(value?: ModuleAuthorForwardTitle, index?: number): ModuleAuthorForwardTitle;

  getUrl(): string;
  setUrl(value: string): ModuleAuthorForward;

  getUid(): number;
  setUid(value: number): ModuleAuthorForward;

  getPtimeLabelText(): string;
  setPtimeLabelText(value: string): ModuleAuthorForward;

  getShowFollow(): boolean;
  setShowFollow(value: boolean): ModuleAuthorForward;

  getFaceUrl(): string;
  setFaceUrl(value: string): ModuleAuthorForward;

  getRelation(): Relation | undefined;
  setRelation(value?: Relation): ModuleAuthorForward;
  hasRelation(): boolean;
  clearRelation(): ModuleAuthorForward;

  getTpListList(): Array<ThreePointItem>;
  setTpListList(value: Array<ThreePointItem>): ModuleAuthorForward;
  clearTpListList(): ModuleAuthorForward;
  addTpList(value?: ThreePointItem, index?: number): ThreePointItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleAuthorForward.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleAuthorForward): ModuleAuthorForward.AsObject;
  static serializeBinaryToWriter(message: ModuleAuthorForward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleAuthorForward;
  static deserializeBinaryFromReader(message: ModuleAuthorForward, reader: jspb.BinaryReader): ModuleAuthorForward;
}

export namespace ModuleAuthorForward {
  export type AsObject = {
    titleList: Array<ModuleAuthorForwardTitle.AsObject>,
    url: string,
    uid: number,
    ptimeLabelText: string,
    showFollow: boolean,
    faceUrl: string,
    relation?: Relation.AsObject,
    tpListList: Array<ThreePointItem.AsObject>,
  }
}

export class ModuleAuthorForwardTitle extends jspb.Message {
  getText(): string;
  setText(value: string): ModuleAuthorForwardTitle;

  getUrl(): string;
  setUrl(value: string): ModuleAuthorForwardTitle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleAuthorForwardTitle.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleAuthorForwardTitle): ModuleAuthorForwardTitle.AsObject;
  static serializeBinaryToWriter(message: ModuleAuthorForwardTitle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleAuthorForwardTitle;
  static deserializeBinaryFromReader(message: ModuleAuthorForwardTitle, reader: jspb.BinaryReader): ModuleAuthorForwardTitle;
}

export namespace ModuleAuthorForwardTitle {
  export type AsObject = {
    text: string,
    url: string,
  }
}

export class ModuleBanner extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ModuleBanner;

  getType(): ModuleBannerType;
  setType(value: ModuleBannerType): ModuleBanner;

  getUser(): ModuleBannerUser | undefined;
  setUser(value?: ModuleBannerUser): ModuleBanner;
  hasUser(): boolean;
  clearUser(): ModuleBanner;

  getDislikeText(): string;
  setDislikeText(value: string): ModuleBanner;

  getDislikeIcon(): string;
  setDislikeIcon(value: string): ModuleBanner;

  getItemCase(): ModuleBanner.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleBanner.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleBanner): ModuleBanner.AsObject;
  static serializeBinaryToWriter(message: ModuleBanner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleBanner;
  static deserializeBinaryFromReader(message: ModuleBanner, reader: jspb.BinaryReader): ModuleBanner;
}

export namespace ModuleBanner {
  export type AsObject = {
    title: string,
    type: ModuleBannerType,
    user?: ModuleBannerUser.AsObject,
    dislikeText: string,
    dislikeIcon: string,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    USER = 3,
  }
}

export class ModuleBannerUser extends jspb.Message {
  getListList(): Array<ModuleBannerUserItem>;
  setListList(value: Array<ModuleBannerUserItem>): ModuleBannerUser;
  clearListList(): ModuleBannerUser;
  addList(value?: ModuleBannerUserItem, index?: number): ModuleBannerUserItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleBannerUser.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleBannerUser): ModuleBannerUser.AsObject;
  static serializeBinaryToWriter(message: ModuleBannerUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleBannerUser;
  static deserializeBinaryFromReader(message: ModuleBannerUser, reader: jspb.BinaryReader): ModuleBannerUser;
}

export namespace ModuleBannerUser {
  export type AsObject = {
    listList: Array<ModuleBannerUserItem.AsObject>,
  }
}

export class ModuleBannerUserItem extends jspb.Message {
  getFace(): string;
  setFace(value: string): ModuleBannerUserItem;

  getName(): string;
  setName(value: string): ModuleBannerUserItem;

  getUid(): number;
  setUid(value: number): ModuleBannerUserItem;

  getLiveState(): LiveState;
  setLiveState(value: LiveState): ModuleBannerUserItem;

  getOfficial(): OfficialVerify | undefined;
  setOfficial(value?: OfficialVerify): ModuleBannerUserItem;
  hasOfficial(): boolean;
  clearOfficial(): ModuleBannerUserItem;

  getVip(): VipInfo | undefined;
  setVip(value?: VipInfo): ModuleBannerUserItem;
  hasVip(): boolean;
  clearVip(): ModuleBannerUserItem;

  getLabel(): string;
  setLabel(value: string): ModuleBannerUserItem;

  getButton(): AdditionalButton | undefined;
  setButton(value?: AdditionalButton): ModuleBannerUserItem;
  hasButton(): boolean;
  clearButton(): ModuleBannerUserItem;

  getUri(): string;
  setUri(value: string): ModuleBannerUserItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleBannerUserItem.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleBannerUserItem): ModuleBannerUserItem.AsObject;
  static serializeBinaryToWriter(message: ModuleBannerUserItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleBannerUserItem;
  static deserializeBinaryFromReader(message: ModuleBannerUserItem, reader: jspb.BinaryReader): ModuleBannerUserItem;
}

export namespace ModuleBannerUserItem {
  export type AsObject = {
    face: string,
    name: string,
    uid: number,
    liveState: LiveState,
    official?: OfficialVerify.AsObject,
    vip?: VipInfo.AsObject,
    label: string,
    button?: AdditionalButton.AsObject,
    uri: string,
  }
}

export class ModuleButtom extends jspb.Message {
  getModuleStat(): ModuleStat | undefined;
  setModuleStat(value?: ModuleStat): ModuleButtom;
  hasModuleStat(): boolean;
  clearModuleStat(): ModuleButtom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleButtom.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleButtom): ModuleButtom.AsObject;
  static serializeBinaryToWriter(message: ModuleButtom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleButtom;
  static deserializeBinaryFromReader(message: ModuleButtom, reader: jspb.BinaryReader): ModuleButtom;
}

export namespace ModuleButtom {
  export type AsObject = {
    moduleStat?: ModuleStat.AsObject,
  }
}

export class ModuleComment extends jspb.Message {
  getCmtshowitemList(): Array<CmtShowItem>;
  setCmtshowitemList(value: Array<CmtShowItem>): ModuleComment;
  clearCmtshowitemList(): ModuleComment;
  addCmtshowitem(value?: CmtShowItem, index?: number): CmtShowItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleComment.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleComment): ModuleComment.AsObject;
  static serializeBinaryToWriter(message: ModuleComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleComment;
  static deserializeBinaryFromReader(message: ModuleComment, reader: jspb.BinaryReader): ModuleComment;
}

export namespace ModuleComment {
  export type AsObject = {
    cmtshowitemList: Array<CmtShowItem.AsObject>,
  }
}

export class ModuleDesc extends jspb.Message {
  getDescList(): Array<Description>;
  setDescList(value: Array<Description>): ModuleDesc;
  clearDescList(): ModuleDesc;
  addDesc(value?: Description, index?: number): Description;

  getJumpUri(): string;
  setJumpUri(value: string): ModuleDesc;

  getText(): string;
  setText(value: string): ModuleDesc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleDesc.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleDesc): ModuleDesc.AsObject;
  static serializeBinaryToWriter(message: ModuleDesc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleDesc;
  static deserializeBinaryFromReader(message: ModuleDesc, reader: jspb.BinaryReader): ModuleDesc;
}

export namespace ModuleDesc {
  export type AsObject = {
    descList: Array<Description.AsObject>,
    jumpUri: string,
    text: string,
  }
}

export class ModuleDescGoods extends jspb.Message {
  getSourceType(): number;
  setSourceType(value: number): ModuleDescGoods;

  getJumpUrl(): string;
  setJumpUrl(value: string): ModuleDescGoods;

  getSchemaUrl(): string;
  setSchemaUrl(value: string): ModuleDescGoods;

  getItemId(): number;
  setItemId(value: number): ModuleDescGoods;

  getOpenWhiteListList(): Array<string>;
  setOpenWhiteListList(value: Array<string>): ModuleDescGoods;
  clearOpenWhiteListList(): ModuleDescGoods;
  addOpenWhiteList(value: string, index?: number): ModuleDescGoods;

  getUserWebV2(): boolean;
  setUserWebV2(value: boolean): ModuleDescGoods;

  getAdMark(): string;
  setAdMark(value: string): ModuleDescGoods;

  getSchemaPackageName(): string;
  setSchemaPackageName(value: string): ModuleDescGoods;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleDescGoods.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleDescGoods): ModuleDescGoods.AsObject;
  static serializeBinaryToWriter(message: ModuleDescGoods, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleDescGoods;
  static deserializeBinaryFromReader(message: ModuleDescGoods, reader: jspb.BinaryReader): ModuleDescGoods;
}

export namespace ModuleDescGoods {
  export type AsObject = {
    sourceType: number,
    jumpUrl: string,
    schemaUrl: string,
    itemId: number,
    openWhiteListList: Array<string>,
    userWebV2: boolean,
    adMark: string,
    schemaPackageName: string,
  }
}

export class ModuleDispute extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ModuleDispute;

  getDesc(): string;
  setDesc(value: string): ModuleDispute;

  getUri(): string;
  setUri(value: string): ModuleDispute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleDispute.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleDispute): ModuleDispute.AsObject;
  static serializeBinaryToWriter(message: ModuleDispute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleDispute;
  static deserializeBinaryFromReader(message: ModuleDispute, reader: jspb.BinaryReader): ModuleDispute;
}

export namespace ModuleDispute {
  export type AsObject = {
    title: string,
    desc: string,
    uri: string,
  }
}

export class ModuleDynamic extends jspb.Message {
  getType(): ModuleDynamicType;
  setType(value: ModuleDynamicType): ModuleDynamic;

  getDynArchive(): MdlDynArchive | undefined;
  setDynArchive(value?: MdlDynArchive): ModuleDynamic;
  hasDynArchive(): boolean;
  clearDynArchive(): ModuleDynamic;

  getDynPgc(): MdlDynPGC | undefined;
  setDynPgc(value?: MdlDynPGC): ModuleDynamic;
  hasDynPgc(): boolean;
  clearDynPgc(): ModuleDynamic;

  getDynCourSeason(): MdlDynCourSeason | undefined;
  setDynCourSeason(value?: MdlDynCourSeason): ModuleDynamic;
  hasDynCourSeason(): boolean;
  clearDynCourSeason(): ModuleDynamic;

  getDynCourBatch(): MdlDynCourBatch | undefined;
  setDynCourBatch(value?: MdlDynCourBatch): ModuleDynamic;
  hasDynCourBatch(): boolean;
  clearDynCourBatch(): ModuleDynamic;

  getDynForward(): MdlDynForward | undefined;
  setDynForward(value?: MdlDynForward): ModuleDynamic;
  hasDynForward(): boolean;
  clearDynForward(): ModuleDynamic;

  getDynDraw(): MdlDynDraw | undefined;
  setDynDraw(value?: MdlDynDraw): ModuleDynamic;
  hasDynDraw(): boolean;
  clearDynDraw(): ModuleDynamic;

  getDynArticle(): MdlDynArticle | undefined;
  setDynArticle(value?: MdlDynArticle): ModuleDynamic;
  hasDynArticle(): boolean;
  clearDynArticle(): ModuleDynamic;

  getDynMusic(): MdlDynMusic | undefined;
  setDynMusic(value?: MdlDynMusic): ModuleDynamic;
  hasDynMusic(): boolean;
  clearDynMusic(): ModuleDynamic;

  getDynCommon(): MdlDynCommon | undefined;
  setDynCommon(value?: MdlDynCommon): ModuleDynamic;
  hasDynCommon(): boolean;
  clearDynCommon(): ModuleDynamic;

  getDynCommonLive(): MdlDynLive | undefined;
  setDynCommonLive(value?: MdlDynLive): ModuleDynamic;
  hasDynCommonLive(): boolean;
  clearDynCommonLive(): ModuleDynamic;

  getDynMedialist(): MdlDynMedialist | undefined;
  setDynMedialist(value?: MdlDynMedialist): ModuleDynamic;
  hasDynMedialist(): boolean;
  clearDynMedialist(): ModuleDynamic;

  getDynApplet(): MdlDynApplet | undefined;
  setDynApplet(value?: MdlDynApplet): ModuleDynamic;
  hasDynApplet(): boolean;
  clearDynApplet(): ModuleDynamic;

  getDynSubscription(): MdlDynSubscription | undefined;
  setDynSubscription(value?: MdlDynSubscription): ModuleDynamic;
  hasDynSubscription(): boolean;
  clearDynSubscription(): ModuleDynamic;

  getDynLiveRcmd(): MdlDynLiveRcmd | undefined;
  setDynLiveRcmd(value?: MdlDynLiveRcmd): ModuleDynamic;
  hasDynLiveRcmd(): boolean;
  clearDynLiveRcmd(): ModuleDynamic;

  getDynUgcSeason(): MdlDynUGCSeason | undefined;
  setDynUgcSeason(value?: MdlDynUGCSeason): ModuleDynamic;
  hasDynUgcSeason(): boolean;
  clearDynUgcSeason(): ModuleDynamic;

  getDynSubscriptionNew(): MdlDynSubscriptionNew | undefined;
  setDynSubscriptionNew(value?: MdlDynSubscriptionNew): ModuleDynamic;
  hasDynSubscriptionNew(): boolean;
  clearDynSubscriptionNew(): ModuleDynamic;

  getModuleItemCase(): ModuleDynamic.ModuleItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleDynamic.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleDynamic): ModuleDynamic.AsObject;
  static serializeBinaryToWriter(message: ModuleDynamic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleDynamic;
  static deserializeBinaryFromReader(message: ModuleDynamic, reader: jspb.BinaryReader): ModuleDynamic;
}

export namespace ModuleDynamic {
  export type AsObject = {
    type: ModuleDynamicType,
    dynArchive?: MdlDynArchive.AsObject,
    dynPgc?: MdlDynPGC.AsObject,
    dynCourSeason?: MdlDynCourSeason.AsObject,
    dynCourBatch?: MdlDynCourBatch.AsObject,
    dynForward?: MdlDynForward.AsObject,
    dynDraw?: MdlDynDraw.AsObject,
    dynArticle?: MdlDynArticle.AsObject,
    dynMusic?: MdlDynMusic.AsObject,
    dynCommon?: MdlDynCommon.AsObject,
    dynCommonLive?: MdlDynLive.AsObject,
    dynMedialist?: MdlDynMedialist.AsObject,
    dynApplet?: MdlDynApplet.AsObject,
    dynSubscription?: MdlDynSubscription.AsObject,
    dynLiveRcmd?: MdlDynLiveRcmd.AsObject,
    dynUgcSeason?: MdlDynUGCSeason.AsObject,
    dynSubscriptionNew?: MdlDynSubscriptionNew.AsObject,
  }

  export enum ModuleItemCase { 
    MODULE_ITEM_NOT_SET = 0,
    DYN_ARCHIVE = 2,
    DYN_PGC = 3,
    DYN_COUR_SEASON = 4,
    DYN_COUR_BATCH = 5,
    DYN_FORWARD = 6,
    DYN_DRAW = 7,
    DYN_ARTICLE = 8,
    DYN_MUSIC = 9,
    DYN_COMMON = 10,
    DYN_COMMON_LIVE = 11,
    DYN_MEDIALIST = 12,
    DYN_APPLET = 13,
    DYN_SUBSCRIPTION = 14,
    DYN_LIVE_RCMD = 15,
    DYN_UGC_SEASON = 16,
    DYN_SUBSCRIPTION_NEW = 17,
  }
}

export class ModuleExtend extends jspb.Message {
  getExtendList(): Array<ModuleExtendItem>;
  setExtendList(value: Array<ModuleExtendItem>): ModuleExtend;
  clearExtendList(): ModuleExtend;
  addExtend(value?: ModuleExtendItem, index?: number): ModuleExtendItem;

  getUri(): string;
  setUri(value: string): ModuleExtend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleExtend.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleExtend): ModuleExtend.AsObject;
  static serializeBinaryToWriter(message: ModuleExtend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleExtend;
  static deserializeBinaryFromReader(message: ModuleExtend, reader: jspb.BinaryReader): ModuleExtend;
}

export namespace ModuleExtend {
  export type AsObject = {
    extendList: Array<ModuleExtendItem.AsObject>,
    uri: string,
  }
}

export class ModuleExtendItem extends jspb.Message {
  getType(): DynExtendType;
  setType(value: DynExtendType): ModuleExtendItem;

  getExtInfoTopic(): ExtInfoTopic | undefined;
  setExtInfoTopic(value?: ExtInfoTopic): ModuleExtendItem;
  hasExtInfoTopic(): boolean;
  clearExtInfoTopic(): ModuleExtendItem;

  getExtInfoLbs(): ExtInfoLBS | undefined;
  setExtInfoLbs(value?: ExtInfoLBS): ModuleExtendItem;
  hasExtInfoLbs(): boolean;
  clearExtInfoLbs(): ModuleExtendItem;

  getExtInfoHot(): ExtInfoHot | undefined;
  setExtInfoHot(value?: ExtInfoHot): ModuleExtendItem;
  hasExtInfoHot(): boolean;
  clearExtInfoHot(): ModuleExtendItem;

  getExtInfoGame(): ExtInfoGame | undefined;
  setExtInfoGame(value?: ExtInfoGame): ModuleExtendItem;
  hasExtInfoGame(): boolean;
  clearExtInfoGame(): ModuleExtendItem;

  getExtInfoCommon(): ExtInfoCommon | undefined;
  setExtInfoCommon(value?: ExtInfoCommon): ModuleExtendItem;
  hasExtInfoCommon(): boolean;
  clearExtInfoCommon(): ModuleExtendItem;

  getExtInfoOgv(): ExtInfoOGV | undefined;
  setExtInfoOgv(value?: ExtInfoOGV): ModuleExtendItem;
  hasExtInfoOgv(): boolean;
  clearExtInfoOgv(): ModuleExtendItem;

  getExtendCase(): ModuleExtendItem.ExtendCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleExtendItem.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleExtendItem): ModuleExtendItem.AsObject;
  static serializeBinaryToWriter(message: ModuleExtendItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleExtendItem;
  static deserializeBinaryFromReader(message: ModuleExtendItem, reader: jspb.BinaryReader): ModuleExtendItem;
}

export namespace ModuleExtendItem {
  export type AsObject = {
    type: DynExtendType,
    extInfoTopic?: ExtInfoTopic.AsObject,
    extInfoLbs?: ExtInfoLBS.AsObject,
    extInfoHot?: ExtInfoHot.AsObject,
    extInfoGame?: ExtInfoGame.AsObject,
    extInfoCommon?: ExtInfoCommon.AsObject,
    extInfoOgv?: ExtInfoOGV.AsObject,
  }

  export enum ExtendCase { 
    EXTEND_NOT_SET = 0,
    EXT_INFO_TOPIC = 2,
    EXT_INFO_LBS = 3,
    EXT_INFO_HOT = 4,
    EXT_INFO_GAME = 5,
    EXT_INFO_COMMON = 6,
    EXT_INFO_OGV = 7,
  }
}

export class ModuleFold extends jspb.Message {
  getFoldType(): FoldType;
  setFoldType(value: FoldType): ModuleFold;

  getText(): string;
  setText(value: string): ModuleFold;

  getFoldIds(): string;
  setFoldIds(value: string): ModuleFold;

  getFoldUsersList(): Array<UserInfo>;
  setFoldUsersList(value: Array<UserInfo>): ModuleFold;
  clearFoldUsersList(): ModuleFold;
  addFoldUsers(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleFold.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleFold): ModuleFold.AsObject;
  static serializeBinaryToWriter(message: ModuleFold, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleFold;
  static deserializeBinaryFromReader(message: ModuleFold, reader: jspb.BinaryReader): ModuleFold;
}

export namespace ModuleFold {
  export type AsObject = {
    foldType: FoldType,
    text: string,
    foldIds: string,
    foldUsersList: Array<UserInfo.AsObject>,
  }
}

export class ModuleInteraction extends jspb.Message {
  getInteractionItemList(): Array<InteractionItem>;
  setInteractionItemList(value: Array<InteractionItem>): ModuleInteraction;
  clearInteractionItemList(): ModuleInteraction;
  addInteractionItem(value?: InteractionItem, index?: number): InteractionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleInteraction.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleInteraction): ModuleInteraction.AsObject;
  static serializeBinaryToWriter(message: ModuleInteraction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleInteraction;
  static deserializeBinaryFromReader(message: ModuleInteraction, reader: jspb.BinaryReader): ModuleInteraction;
}

export namespace ModuleInteraction {
  export type AsObject = {
    interactionItemList: Array<InteractionItem.AsObject>,
  }
}

export class ModuleItemNull extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ModuleItemNull;

  getText(): string;
  setText(value: string): ModuleItemNull;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleItemNull.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleItemNull): ModuleItemNull.AsObject;
  static serializeBinaryToWriter(message: ModuleItemNull, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleItemNull;
  static deserializeBinaryFromReader(message: ModuleItemNull, reader: jspb.BinaryReader): ModuleItemNull;
}

export namespace ModuleItemNull {
  export type AsObject = {
    icon: string,
    text: string,
  }
}

export class ModuleLikeUser extends jspb.Message {
  getLikeUsersList(): Array<LikeUser>;
  setLikeUsersList(value: Array<LikeUser>): ModuleLikeUser;
  clearLikeUsersList(): ModuleLikeUser;
  addLikeUsers(value?: LikeUser, index?: number): LikeUser;

  getDisplayText(): string;
  setDisplayText(value: string): ModuleLikeUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleLikeUser.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleLikeUser): ModuleLikeUser.AsObject;
  static serializeBinaryToWriter(message: ModuleLikeUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleLikeUser;
  static deserializeBinaryFromReader(message: ModuleLikeUser, reader: jspb.BinaryReader): ModuleLikeUser;
}

export namespace ModuleLikeUser {
  export type AsObject = {
    likeUsersList: Array<LikeUser.AsObject>,
    displayText: string,
  }
}

export class ModuleRcmd extends jspb.Message {
  getAuthor(): RcmdAuthor | undefined;
  setAuthor(value?: RcmdAuthor): ModuleRcmd;
  hasAuthor(): boolean;
  clearAuthor(): ModuleRcmd;

  getItemsList(): Array<RcmdItem>;
  setItemsList(value: Array<RcmdItem>): ModuleRcmd;
  clearItemsList(): ModuleRcmd;
  addItems(value?: RcmdItem, index?: number): RcmdItem;

  getServerInfo(): string;
  setServerInfo(value: string): ModuleRcmd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleRcmd.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleRcmd): ModuleRcmd.AsObject;
  static serializeBinaryToWriter(message: ModuleRcmd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleRcmd;
  static deserializeBinaryFromReader(message: ModuleRcmd, reader: jspb.BinaryReader): ModuleRcmd;
}

export namespace ModuleRcmd {
  export type AsObject = {
    author?: RcmdAuthor.AsObject,
    itemsList: Array<RcmdItem.AsObject>,
    serverInfo: string,
  }
}

export class ModuleRecommend extends jspb.Message {
  getModuleTitle(): string;
  setModuleTitle(value: string): ModuleRecommend;

  getImage(): string;
  setImage(value: string): ModuleRecommend;

  getTag(): string;
  setTag(value: string): ModuleRecommend;

  getTitle(): string;
  setTitle(value: string): ModuleRecommend;

  getJumpUrl(): string;
  setJumpUrl(value: string): ModuleRecommend;

  getAdList(): Array<google_protobuf_any_pb.Any>;
  setAdList(value: Array<google_protobuf_any_pb.Any>): ModuleRecommend;
  clearAdList(): ModuleRecommend;
  addAd(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleRecommend.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleRecommend): ModuleRecommend.AsObject;
  static serializeBinaryToWriter(message: ModuleRecommend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleRecommend;
  static deserializeBinaryFromReader(message: ModuleRecommend, reader: jspb.BinaryReader): ModuleRecommend;
}

export namespace ModuleRecommend {
  export type AsObject = {
    moduleTitle: string,
    image: string,
    tag: string,
    title: string,
    jumpUrl: string,
    adList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class ModuleShareInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ModuleShareInfo;

  getShareChannelsList(): Array<ShareChannel>;
  setShareChannelsList(value: Array<ShareChannel>): ModuleShareInfo;
  clearShareChannelsList(): ModuleShareInfo;
  addShareChannels(value?: ShareChannel, index?: number): ShareChannel;

  getShareOrigin(): string;
  setShareOrigin(value: string): ModuleShareInfo;

  getOid(): string;
  setOid(value: string): ModuleShareInfo;

  getSid(): string;
  setSid(value: string): ModuleShareInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleShareInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleShareInfo): ModuleShareInfo.AsObject;
  static serializeBinaryToWriter(message: ModuleShareInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleShareInfo;
  static deserializeBinaryFromReader(message: ModuleShareInfo, reader: jspb.BinaryReader): ModuleShareInfo;
}

export namespace ModuleShareInfo {
  export type AsObject = {
    title: string,
    shareChannelsList: Array<ShareChannel.AsObject>,
    shareOrigin: string,
    oid: string,
    sid: string,
  }
}

export class ModuleStat extends jspb.Message {
  getRepost(): number;
  setRepost(value: number): ModuleStat;

  getLike(): number;
  setLike(value: number): ModuleStat;

  getReply(): number;
  setReply(value: number): ModuleStat;

  getLikeInfo(): LikeInfo | undefined;
  setLikeInfo(value?: LikeInfo): ModuleStat;
  hasLikeInfo(): boolean;
  clearLikeInfo(): ModuleStat;

  getNoComment(): boolean;
  setNoComment(value: boolean): ModuleStat;

  getNoForward(): boolean;
  setNoForward(value: boolean): ModuleStat;

  getReplyUrl(): string;
  setReplyUrl(value: string): ModuleStat;

  getNoCommentText(): string;
  setNoCommentText(value: string): ModuleStat;

  getNoForwardText(): string;
  setNoForwardText(value: string): ModuleStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleStat.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleStat): ModuleStat.AsObject;
  static serializeBinaryToWriter(message: ModuleStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleStat;
  static deserializeBinaryFromReader(message: ModuleStat, reader: jspb.BinaryReader): ModuleStat;
}

export namespace ModuleStat {
  export type AsObject = {
    repost: number,
    like: number,
    reply: number,
    likeInfo?: LikeInfo.AsObject,
    noComment: boolean,
    noForward: boolean,
    replyUrl: string,
    noCommentText: string,
    noForwardText: string,
  }
}

export class ModuleStory extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ModuleStory;

  getItemsList(): Array<StoryItem>;
  setItemsList(value: Array<StoryItem>): ModuleStory;
  clearItemsList(): ModuleStory;
  addItems(value?: StoryItem, index?: number): StoryItem;

  getShowPublishEntrance(): boolean;
  setShowPublishEntrance(value: boolean): ModuleStory;

  getFoldState(): number;
  setFoldState(value: number): ModuleStory;

  getUri(): string;
  setUri(value: string): ModuleStory;

  getCover(): string;
  setCover(value: string): ModuleStory;

  getPublishText(): string;
  setPublishText(value: string): ModuleStory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleStory.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleStory): ModuleStory.AsObject;
  static serializeBinaryToWriter(message: ModuleStory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleStory;
  static deserializeBinaryFromReader(message: ModuleStory, reader: jspb.BinaryReader): ModuleStory;
}

export namespace ModuleStory {
  export type AsObject = {
    title: string,
    itemsList: Array<StoryItem.AsObject>,
    showPublishEntrance: boolean,
    foldState: number,
    uri: string,
    cover: string,
    publishText: string,
  }
}

export class ModuleTitle extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ModuleTitle;

  getRightBtn(): IconButton | undefined;
  setRightBtn(value?: IconButton): ModuleTitle;
  hasRightBtn(): boolean;
  clearRightBtn(): ModuleTitle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleTitle.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleTitle): ModuleTitle.AsObject;
  static serializeBinaryToWriter(message: ModuleTitle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleTitle;
  static deserializeBinaryFromReader(message: ModuleTitle, reader: jspb.BinaryReader): ModuleTitle;
}

export namespace ModuleTitle {
  export type AsObject = {
    title: string,
    rightBtn?: IconButton.AsObject,
  }
}

export class ModuleTop extends jspb.Message {
  getTpListList(): Array<ThreePointItem>;
  setTpListList(value: Array<ThreePointItem>): ModuleTop;
  clearTpListList(): ModuleTop;
  addTpList(value?: ThreePointItem, index?: number): ThreePointItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleTop.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleTop): ModuleTop.AsObject;
  static serializeBinaryToWriter(message: ModuleTop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleTop;
  static deserializeBinaryFromReader(message: ModuleTop, reader: jspb.BinaryReader): ModuleTop;
}

export namespace ModuleTop {
  export type AsObject = {
    tpListList: Array<ThreePointItem.AsObject>,
  }
}

export class ModuleTopTag extends jspb.Message {
  getTagName(): string;
  setTagName(value: string): ModuleTopTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleTopTag.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleTopTag): ModuleTopTag.AsObject;
  static serializeBinaryToWriter(message: ModuleTopTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleTopTag;
  static deserializeBinaryFromReader(message: ModuleTopTag, reader: jspb.BinaryReader): ModuleTopTag;
}

export namespace ModuleTopTag {
  export type AsObject = {
    tagName: string,
  }
}

export class ModuleTopic extends jspb.Message {
  getId(): number;
  setId(value: number): ModuleTopic;

  getName(): string;
  setName(value: string): ModuleTopic;

  getUrl(): string;
  setUrl(value: string): ModuleTopic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleTopic.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleTopic): ModuleTopic.AsObject;
  static serializeBinaryToWriter(message: ModuleTopic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleTopic;
  static deserializeBinaryFromReader(message: ModuleTopic, reader: jspb.BinaryReader): ModuleTopic;
}

export namespace ModuleTopic {
  export type AsObject = {
    id: number,
    name: string,
    url: string,
  }
}

export class ModuleTopicBrief extends jspb.Message {
  getTopic(): TopicItem | undefined;
  setTopic(value?: TopicItem): ModuleTopicBrief;
  hasTopic(): boolean;
  clearTopic(): ModuleTopicBrief;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleTopicBrief.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleTopicBrief): ModuleTopicBrief.AsObject;
  static serializeBinaryToWriter(message: ModuleTopicBrief, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleTopicBrief;
  static deserializeBinaryFromReader(message: ModuleTopicBrief, reader: jspb.BinaryReader): ModuleTopicBrief;
}

export namespace ModuleTopicBrief {
  export type AsObject = {
    topic?: TopicItem.AsObject,
  }
}

export class ModuleTopicDetailsExt extends jspb.Message {
  getCommentGuide(): string;
  setCommentGuide(value: string): ModuleTopicDetailsExt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleTopicDetailsExt.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleTopicDetailsExt): ModuleTopicDetailsExt.AsObject;
  static serializeBinaryToWriter(message: ModuleTopicDetailsExt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleTopicDetailsExt;
  static deserializeBinaryFromReader(message: ModuleTopicDetailsExt, reader: jspb.BinaryReader): ModuleTopicDetailsExt;
}

export namespace ModuleTopicDetailsExt {
  export type AsObject = {
    commentGuide: string,
  }
}

export class Nameplate extends jspb.Message {
  getNid(): number;
  setNid(value: number): Nameplate;

  getName(): string;
  setName(value: string): Nameplate;

  getImage(): string;
  setImage(value: string): Nameplate;

  getImageSmall(): string;
  setImageSmall(value: string): Nameplate;

  getLevel(): string;
  setLevel(value: string): Nameplate;

  getCondition(): string;
  setCondition(value: string): Nameplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nameplate.AsObject;
  static toObject(includeInstance: boolean, msg: Nameplate): Nameplate.AsObject;
  static serializeBinaryToWriter(message: Nameplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nameplate;
  static deserializeBinaryFromReader(message: Nameplate, reader: jspb.BinaryReader): Nameplate;
}

export namespace Nameplate {
  export type AsObject = {
    nid: number,
    name: string,
    image: string,
    imageSmall: string,
    level: string,
    condition: string,
  }
}

export class NewEP extends jspb.Message {
  getId(): number;
  setId(value: number): NewEP;

  getIndexShow(): string;
  setIndexShow(value: string): NewEP;

  getCover(): string;
  setCover(value: string): NewEP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewEP.AsObject;
  static toObject(includeInstance: boolean, msg: NewEP): NewEP.AsObject;
  static serializeBinaryToWriter(message: NewEP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewEP;
  static deserializeBinaryFromReader(message: NewEP, reader: jspb.BinaryReader): NewEP;
}

export namespace NewEP {
  export type AsObject = {
    id: number,
    indexShow: string,
    cover: string,
  }
}

export class NoReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoReply.AsObject;
  static toObject(includeInstance: boolean, msg: NoReply): NoReply.AsObject;
  static serializeBinaryToWriter(message: NoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoReply;
  static deserializeBinaryFromReader(message: NoReply, reader: jspb.BinaryReader): NoReply;
}

export namespace NoReply {
  export type AsObject = {
  }
}

export class NoReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoReq.AsObject;
  static toObject(includeInstance: boolean, msg: NoReq): NoReq.AsObject;
  static serializeBinaryToWriter(message: NoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoReq;
  static deserializeBinaryFromReader(message: NoReq, reader: jspb.BinaryReader): NoReq;
}

export namespace NoReq {
  export type AsObject = {
  }
}

export class OfficialAccountInfo extends jspb.Message {
  getAuthor(): UserInfo | undefined;
  setAuthor(value?: UserInfo): OfficialAccountInfo;
  hasAuthor(): boolean;
  clearAuthor(): OfficialAccountInfo;

  getMid(): number;
  setMid(value: number): OfficialAccountInfo;

  getUri(): string;
  setUri(value: string): OfficialAccountInfo;

  getRelation(): Relation | undefined;
  setRelation(value?: Relation): OfficialAccountInfo;
  hasRelation(): boolean;
  clearRelation(): OfficialAccountInfo;

  getDescText1(): string;
  setDescText1(value: string): OfficialAccountInfo;

  getDescText2(): string;
  setDescText2(value: string): OfficialAccountInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialAccountInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialAccountInfo): OfficialAccountInfo.AsObject;
  static serializeBinaryToWriter(message: OfficialAccountInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialAccountInfo;
  static deserializeBinaryFromReader(message: OfficialAccountInfo, reader: jspb.BinaryReader): OfficialAccountInfo;
}

export namespace OfficialAccountInfo {
  export type AsObject = {
    author?: UserInfo.AsObject,
    mid: number,
    uri: string,
    relation?: Relation.AsObject,
    descText1: string,
    descText2: string,
  }
}

export class OfficialAccountsReply extends jspb.Message {
  getItemsList(): Array<OfficialAccountInfo>;
  setItemsList(value: Array<OfficialAccountInfo>): OfficialAccountsReply;
  clearItemsList(): OfficialAccountsReply;
  addItems(value?: OfficialAccountInfo, index?: number): OfficialAccountInfo;

  getHasMore(): boolean;
  setHasMore(value: boolean): OfficialAccountsReply;

  getOffset(): number;
  setOffset(value: number): OfficialAccountsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialAccountsReply.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialAccountsReply): OfficialAccountsReply.AsObject;
  static serializeBinaryToWriter(message: OfficialAccountsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialAccountsReply;
  static deserializeBinaryFromReader(message: OfficialAccountsReply, reader: jspb.BinaryReader): OfficialAccountsReply;
}

export namespace OfficialAccountsReply {
  export type AsObject = {
    itemsList: Array<OfficialAccountInfo.AsObject>,
    hasMore: boolean,
    offset: number,
  }
}

export class OfficialAccountsReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): OfficialAccountsReq;

  getCampusName(): string;
  setCampusName(value: string): OfficialAccountsReq;

  getOffset(): number;
  setOffset(value: number): OfficialAccountsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialAccountsReq.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialAccountsReq): OfficialAccountsReq.AsObject;
  static serializeBinaryToWriter(message: OfficialAccountsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialAccountsReq;
  static deserializeBinaryFromReader(message: OfficialAccountsReq, reader: jspb.BinaryReader): OfficialAccountsReq;
}

export namespace OfficialAccountsReq {
  export type AsObject = {
    campusId: number,
    campusName: string,
    offset: number,
  }
}

export class OfficialDynamicsReply extends jspb.Message {
  getItemsList(): Array<OfficialItem>;
  setItemsList(value: Array<OfficialItem>): OfficialDynamicsReply;
  clearItemsList(): OfficialDynamicsReply;
  addItems(value?: OfficialItem, index?: number): OfficialItem;

  getOffset(): number;
  setOffset(value: number): OfficialDynamicsReply;

  getHasMore(): boolean;
  setHasMore(value: boolean): OfficialDynamicsReply;

  getPlayerArgs(): bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs | undefined;
  setPlayerArgs(value?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs): OfficialDynamicsReply;
  hasPlayerArgs(): boolean;
  clearPlayerArgs(): OfficialDynamicsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialDynamicsReply.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialDynamicsReply): OfficialDynamicsReply.AsObject;
  static serializeBinaryToWriter(message: OfficialDynamicsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialDynamicsReply;
  static deserializeBinaryFromReader(message: OfficialDynamicsReply, reader: jspb.BinaryReader): OfficialDynamicsReply;
}

export namespace OfficialDynamicsReply {
  export type AsObject = {
    itemsList: Array<OfficialItem.AsObject>,
    offset: number,
    hasMore: boolean,
    playerArgs?: bilibili_app_archive_middleware_v1_preload_pb.PlayerArgs.AsObject,
  }
}

export class OfficialDynamicsReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): OfficialDynamicsReq;

  getCampusName(): string;
  setCampusName(value: string): OfficialDynamicsReq;

  getOffset(): number;
  setOffset(value: number): OfficialDynamicsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialDynamicsReq.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialDynamicsReq): OfficialDynamicsReq.AsObject;
  static serializeBinaryToWriter(message: OfficialDynamicsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialDynamicsReq;
  static deserializeBinaryFromReader(message: OfficialDynamicsReq, reader: jspb.BinaryReader): OfficialDynamicsReq;
}

export namespace OfficialDynamicsReq {
  export type AsObject = {
    campusId: number,
    campusName: string,
    offset: number,
  }
}

export class OfficialItem extends jspb.Message {
  getType(): number;
  setType(value: number): OfficialItem;

  getRcmdArchive(): OfficialRcmdArchive | undefined;
  setRcmdArchive(value?: OfficialRcmdArchive): OfficialItem;
  hasRcmdArchive(): boolean;
  clearRcmdArchive(): OfficialItem;

  getRcmdDynamic(): OfficialRcmdDynamic | undefined;
  setRcmdDynamic(value?: OfficialRcmdDynamic): OfficialItem;
  hasRcmdDynamic(): boolean;
  clearRcmdDynamic(): OfficialItem;

  getRcmdItemCase(): OfficialItem.RcmdItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialItem.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialItem): OfficialItem.AsObject;
  static serializeBinaryToWriter(message: OfficialItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialItem;
  static deserializeBinaryFromReader(message: OfficialItem, reader: jspb.BinaryReader): OfficialItem;
}

export namespace OfficialItem {
  export type AsObject = {
    type: number,
    rcmdArchive?: OfficialRcmdArchive.AsObject,
    rcmdDynamic?: OfficialRcmdDynamic.AsObject,
  }

  export enum RcmdItemCase { 
    RCMD_ITEM_NOT_SET = 0,
    RCMD_ARCHIVE = 2,
    RCMD_DYNAMIC = 3,
  }
}

export class OfficialRcmdArchive extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): OfficialRcmdArchive;

  getCover(): string;
  setCover(value: string): OfficialRcmdArchive;

  getCoverRightText(): string;
  setCoverRightText(value: string): OfficialRcmdArchive;

  getDescIcon1(): number;
  setDescIcon1(value: number): OfficialRcmdArchive;

  getDescText1(): string;
  setDescText1(value: string): OfficialRcmdArchive;

  getDescIcon2(): number;
  setDescIcon2(value: number): OfficialRcmdArchive;

  getDescText2(): string;
  setDescText2(value: string): OfficialRcmdArchive;

  getReason(): string;
  setReason(value: string): OfficialRcmdArchive;

  getShowThreePoint(): boolean;
  setShowThreePoint(value: boolean): OfficialRcmdArchive;

  getUri(): string;
  setUri(value: string): OfficialRcmdArchive;

  getAid(): number;
  setAid(value: number): OfficialRcmdArchive;

  getMid(): number;
  setMid(value: number): OfficialRcmdArchive;

  getName(): string;
  setName(value: string): OfficialRcmdArchive;

  getDynamicId(): number;
  setDynamicId(value: number): OfficialRcmdArchive;

  getCid(): number;
  setCid(value: number): OfficialRcmdArchive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialRcmdArchive.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialRcmdArchive): OfficialRcmdArchive.AsObject;
  static serializeBinaryToWriter(message: OfficialRcmdArchive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialRcmdArchive;
  static deserializeBinaryFromReader(message: OfficialRcmdArchive, reader: jspb.BinaryReader): OfficialRcmdArchive;
}

export namespace OfficialRcmdArchive {
  export type AsObject = {
    title: string,
    cover: string,
    coverRightText: string,
    descIcon1: number,
    descText1: string,
    descIcon2: number,
    descText2: string,
    reason: string,
    showThreePoint: boolean,
    uri: string,
    aid: number,
    mid: number,
    name: string,
    dynamicId: number,
    cid: number,
  }
}

export class OfficialRcmdDynamic extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): OfficialRcmdDynamic;

  getCover(): string;
  setCover(value: string): OfficialRcmdDynamic;

  getCoverRightTopText(): string;
  setCoverRightTopText(value: string): OfficialRcmdDynamic;

  getDescIcon1(): number;
  setDescIcon1(value: number): OfficialRcmdDynamic;

  getDescText1(): string;
  setDescText1(value: string): OfficialRcmdDynamic;

  getDescIcon2(): number;
  setDescIcon2(value: number): OfficialRcmdDynamic;

  getDescText2(): string;
  setDescText2(value: string): OfficialRcmdDynamic;

  getReason(): string;
  setReason(value: string): OfficialRcmdDynamic;

  getUri(): string;
  setUri(value: string): OfficialRcmdDynamic;

  getDynamicId(): number;
  setDynamicId(value: number): OfficialRcmdDynamic;

  getMid(): number;
  setMid(value: number): OfficialRcmdDynamic;

  getUserName(): string;
  setUserName(value: string): OfficialRcmdDynamic;

  getRid(): number;
  setRid(value: number): OfficialRcmdDynamic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfficialRcmdDynamic.AsObject;
  static toObject(includeInstance: boolean, msg: OfficialRcmdDynamic): OfficialRcmdDynamic.AsObject;
  static serializeBinaryToWriter(message: OfficialRcmdDynamic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfficialRcmdDynamic;
  static deserializeBinaryFromReader(message: OfficialRcmdDynamic, reader: jspb.BinaryReader): OfficialRcmdDynamic;
}

export namespace OfficialRcmdDynamic {
  export type AsObject = {
    title: string,
    cover: string,
    coverRightTopText: string,
    descIcon1: number,
    descText1: string,
    descIcon2: number,
    descText2: string,
    reason: string,
    uri: string,
    dynamicId: number,
    mid: number,
    userName: string,
    rid: number,
  }
}

export class OfficialVerify extends jspb.Message {
  getType(): number;
  setType(value: number): OfficialVerify;

  getDesc(): string;
  setDesc(value: string): OfficialVerify;

  getIsAtten(): number;
  setIsAtten(value: number): OfficialVerify;

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
    isAtten: number,
  }
}

export class PGCSeason extends jspb.Message {
  getIsFinish(): number;
  setIsFinish(value: number): PGCSeason;

  getTitle(): string;
  setTitle(value: string): PGCSeason;

  getType(): number;
  setType(value: number): PGCSeason;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PGCSeason.AsObject;
  static toObject(includeInstance: boolean, msg: PGCSeason): PGCSeason.AsObject;
  static serializeBinaryToWriter(message: PGCSeason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PGCSeason;
  static deserializeBinaryFromReader(message: PGCSeason, reader: jspb.BinaryReader): PGCSeason;
}

export namespace PGCSeason {
  export type AsObject = {
    isFinish: number,
    title: string,
    type: number,
  }
}

export class PlayurlParam extends jspb.Message {
  getQn(): number;
  setQn(value: number): PlayurlParam;

  getFnver(): number;
  setFnver(value: number): PlayurlParam;

  getFnval(): number;
  setFnval(value: number): PlayurlParam;

  getForceHost(): number;
  setForceHost(value: number): PlayurlParam;

  getFourk(): number;
  setFourk(value: number): PlayurlParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayurlParam.AsObject;
  static toObject(includeInstance: boolean, msg: PlayurlParam): PlayurlParam.AsObject;
  static serializeBinaryToWriter(message: PlayurlParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayurlParam;
  static deserializeBinaryFromReader(message: PlayurlParam, reader: jspb.BinaryReader): PlayurlParam;
}

export namespace PlayurlParam {
  export type AsObject = {
    qn: number,
    fnver: number,
    fnval: number,
    forceHost: number,
    fourk: number,
  }
}

export class Popup extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Popup;

  getDesc(): string;
  setDesc(value: string): Popup;

  getUri(): string;
  setUri(value: string): Popup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Popup.AsObject;
  static toObject(includeInstance: boolean, msg: Popup): Popup.AsObject;
  static serializeBinaryToWriter(message: Popup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Popup;
  static deserializeBinaryFromReader(message: Popup, reader: jspb.BinaryReader): Popup;
}

export namespace Popup {
  export type AsObject = {
    title: string,
    desc: string,
    uri: string,
  }
}

export class RcmdArchive extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): RcmdArchive;

  getCover(): string;
  setCover(value: string): RcmdArchive;

  getCoverLeftIcon1(): CoverIcon;
  setCoverLeftIcon1(value: CoverIcon): RcmdArchive;

  getCoverLeftText1(): string;
  setCoverLeftText1(value: string): RcmdArchive;

  getUri(): string;
  setUri(value: string): RcmdArchive;

  getIsPgc(): boolean;
  setIsPgc(value: boolean): RcmdArchive;

  getAid(): number;
  setAid(value: number): RcmdArchive;

  getBadge(): IconBadge | undefined;
  setBadge(value?: IconBadge): RcmdArchive;
  hasBadge(): boolean;
  clearBadge(): RcmdArchive;

  getCoverLeftIcon2(): number;
  setCoverLeftIcon2(value: number): RcmdArchive;

  getCoverLeftText2(): string;
  setCoverLeftText2(value: string): RcmdArchive;

  getCoverLeftIcon3(): number;
  setCoverLeftIcon3(value: number): RcmdArchive;

  getCoverLeftText3(): string;
  setCoverLeftText3(value: string): RcmdArchive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RcmdArchive.AsObject;
  static toObject(includeInstance: boolean, msg: RcmdArchive): RcmdArchive.AsObject;
  static serializeBinaryToWriter(message: RcmdArchive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RcmdArchive;
  static deserializeBinaryFromReader(message: RcmdArchive, reader: jspb.BinaryReader): RcmdArchive;
}

export namespace RcmdArchive {
  export type AsObject = {
    title: string,
    cover: string,
    coverLeftIcon1: CoverIcon,
    coverLeftText1: string,
    uri: string,
    isPgc: boolean,
    aid: number,
    badge?: IconBadge.AsObject,
    coverLeftIcon2: number,
    coverLeftText2: string,
    coverLeftIcon3: number,
    coverLeftText3: string,
  }
}

export class RcmdAuthor extends jspb.Message {
  getAuthor(): UserInfo | undefined;
  setAuthor(value?: UserInfo): RcmdAuthor;
  hasAuthor(): boolean;
  clearAuthor(): RcmdAuthor;

  getDesc(): string;
  setDesc(value: string): RcmdAuthor;

  getRelation(): Relation | undefined;
  setRelation(value?: Relation): RcmdAuthor;
  hasRelation(): boolean;
  clearRelation(): RcmdAuthor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RcmdAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: RcmdAuthor): RcmdAuthor.AsObject;
  static serializeBinaryToWriter(message: RcmdAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RcmdAuthor;
  static deserializeBinaryFromReader(message: RcmdAuthor, reader: jspb.BinaryReader): RcmdAuthor;
}

export namespace RcmdAuthor {
  export type AsObject = {
    author?: UserInfo.AsObject,
    desc: string,
    relation?: Relation.AsObject,
  }
}

export class RcmdItem extends jspb.Message {
  getType(): RcmdType;
  setType(value: RcmdType): RcmdItem;

  getRcmdArchive(): RcmdArchive | undefined;
  setRcmdArchive(value?: RcmdArchive): RcmdItem;
  hasRcmdArchive(): boolean;
  clearRcmdArchive(): RcmdItem;

  getRcmdItemCase(): RcmdItem.RcmdItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RcmdItem.AsObject;
  static toObject(includeInstance: boolean, msg: RcmdItem): RcmdItem.AsObject;
  static serializeBinaryToWriter(message: RcmdItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RcmdItem;
  static deserializeBinaryFromReader(message: RcmdItem, reader: jspb.BinaryReader): RcmdItem;
}

export namespace RcmdItem {
  export type AsObject = {
    type: RcmdType,
    rcmdArchive?: RcmdArchive.AsObject,
  }

  export enum RcmdItemCase { 
    RCMD_ITEM_NOT_SET = 0,
    RCMD_ARCHIVE = 2,
  }
}

export class RcmdOption extends jspb.Message {
  getShowTitle(): boolean;
  setShowTitle(value: boolean): RcmdOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RcmdOption.AsObject;
  static toObject(includeInstance: boolean, msg: RcmdOption): RcmdOption.AsObject;
  static serializeBinaryToWriter(message: RcmdOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RcmdOption;
  static deserializeBinaryFromReader(message: RcmdOption, reader: jspb.BinaryReader): RcmdOption;
}

export namespace RcmdOption {
  export type AsObject = {
    showTitle: boolean,
  }
}

export class RcmdTopButton extends jspb.Message {
  getText(): string;
  setText(value: string): RcmdTopButton;

  getUrl(): string;
  setUrl(value: string): RcmdTopButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RcmdTopButton.AsObject;
  static toObject(includeInstance: boolean, msg: RcmdTopButton): RcmdTopButton.AsObject;
  static serializeBinaryToWriter(message: RcmdTopButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RcmdTopButton;
  static deserializeBinaryFromReader(message: RcmdTopButton, reader: jspb.BinaryReader): RcmdTopButton;
}

export namespace RcmdTopButton {
  export type AsObject = {
    text: string,
    url: string,
  }
}

export class RcmdUPsParam extends jspb.Message {
  getDislikeTs(): number;
  setDislikeTs(value: number): RcmdUPsParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RcmdUPsParam.AsObject;
  static toObject(includeInstance: boolean, msg: RcmdUPsParam): RcmdUPsParam.AsObject;
  static serializeBinaryToWriter(message: RcmdUPsParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RcmdUPsParam;
  static deserializeBinaryFromReader(message: RcmdUPsParam, reader: jspb.BinaryReader): RcmdUPsParam;
}

export namespace RcmdUPsParam {
  export type AsObject = {
    dislikeTs: number,
  }
}

export class Relation extends jspb.Message {
  getStatus(): RelationStatus;
  setStatus(value: RelationStatus): Relation;

  getIsFollow(): number;
  setIsFollow(value: number): Relation;

  getIsFollowed(): number;
  setIsFollowed(value: number): Relation;

  getTitle(): string;
  setTitle(value: string): Relation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relation.AsObject;
  static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
  static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relation;
  static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
}

export namespace Relation {
  export type AsObject = {
    status: RelationStatus,
    isFollow: number,
    isFollowed: number,
    title: string,
  }
}

export class RepostListReq extends jspb.Message {
  getDynamicId(): string;
  setDynamicId(value: string): RepostListReq;

  getDynType(): number;
  setDynType(value: number): RepostListReq;

  getRid(): number;
  setRid(value: number): RepostListReq;

  getOffset(): string;
  setOffset(value: string): RepostListReq;

  getFrom(): string;
  setFrom(value: string): RepostListReq;

  getRepostType(): RepostType;
  setRepostType(value: RepostType): RepostListReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepostListReq.AsObject;
  static toObject(includeInstance: boolean, msg: RepostListReq): RepostListReq.AsObject;
  static serializeBinaryToWriter(message: RepostListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepostListReq;
  static deserializeBinaryFromReader(message: RepostListReq, reader: jspb.BinaryReader): RepostListReq;
}

export namespace RepostListReq {
  export type AsObject = {
    dynamicId: string,
    dynType: number,
    rid: number,
    offset: string,
    from: string,
    repostType: RepostType,
  }
}

export class RepostListRsp extends jspb.Message {
  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): RepostListRsp;
  clearListList(): RepostListRsp;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getOffset(): string;
  setOffset(value: string): RepostListRsp;

  getHasMore(): boolean;
  setHasMore(value: boolean): RepostListRsp;

  getTotalCount(): number;
  setTotalCount(value: number): RepostListRsp;

  getRepostType(): RepostType;
  setRepostType(value: RepostType): RepostListRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepostListRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RepostListRsp): RepostListRsp.AsObject;
  static serializeBinaryToWriter(message: RepostListRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepostListRsp;
  static deserializeBinaryFromReader(message: RepostListRsp, reader: jspb.BinaryReader): RepostListRsp;
}

export namespace RepostListRsp {
  export type AsObject = {
    listList: Array<DynamicItem.AsObject>,
    offset: string,
    hasMore: boolean,
    totalCount: number,
    repostType: RepostType,
  }
}

export class SchoolRecommendReply extends jspb.Message {
  getItemsList(): Array<CampusInfo>;
  setItemsList(value: Array<CampusInfo>): SchoolRecommendReply;
  clearItemsList(): SchoolRecommendReply;
  addItems(value?: CampusInfo, index?: number): CampusInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolRecommendReply.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolRecommendReply): SchoolRecommendReply.AsObject;
  static serializeBinaryToWriter(message: SchoolRecommendReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolRecommendReply;
  static deserializeBinaryFromReader(message: SchoolRecommendReply, reader: jspb.BinaryReader): SchoolRecommendReply;
}

export namespace SchoolRecommendReply {
  export type AsObject = {
    itemsList: Array<CampusInfo.AsObject>,
  }
}

export class SchoolRecommendReq extends jspb.Message {
  getLat(): number;
  setLat(value: number): SchoolRecommendReq;

  getLng(): number;
  setLng(value: number): SchoolRecommendReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolRecommendReq.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolRecommendReq): SchoolRecommendReq.AsObject;
  static serializeBinaryToWriter(message: SchoolRecommendReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolRecommendReq;
  static deserializeBinaryFromReader(message: SchoolRecommendReq, reader: jspb.BinaryReader): SchoolRecommendReq;
}

export namespace SchoolRecommendReq {
  export type AsObject = {
    lat: number,
    lng: number,
  }
}

export class SchoolSearchReply extends jspb.Message {
  getItemsList(): Array<CampusInfo>;
  setItemsList(value: Array<CampusInfo>): SchoolSearchReply;
  clearItemsList(): SchoolSearchReply;
  addItems(value?: CampusInfo, index?: number): CampusInfo;

  getToast(): SearchToast | undefined;
  setToast(value?: SearchToast): SchoolSearchReply;
  hasToast(): boolean;
  clearToast(): SchoolSearchReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolSearchReply.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolSearchReply): SchoolSearchReply.AsObject;
  static serializeBinaryToWriter(message: SchoolSearchReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolSearchReply;
  static deserializeBinaryFromReader(message: SchoolSearchReply, reader: jspb.BinaryReader): SchoolSearchReply;
}

export namespace SchoolSearchReply {
  export type AsObject = {
    itemsList: Array<CampusInfo.AsObject>,
    toast?: SearchToast.AsObject,
  }
}

export class SchoolSearchReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): SchoolSearchReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchoolSearchReq.AsObject;
  static toObject(includeInstance: boolean, msg: SchoolSearchReq): SchoolSearchReq.AsObject;
  static serializeBinaryToWriter(message: SchoolSearchReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchoolSearchReq;
  static deserializeBinaryFromReader(message: SchoolSearchReq, reader: jspb.BinaryReader): SchoolSearchReq;
}

export namespace SchoolSearchReq {
  export type AsObject = {
    keyword: string,
  }
}

export class SearchChannel extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SearchChannel;

  getMoreButton(): SearchTopicButton | undefined;
  setMoreButton(value?: SearchTopicButton): SearchChannel;
  hasMoreButton(): boolean;
  clearMoreButton(): SearchChannel;

  getChannelsList(): Array<ChannelInfo>;
  setChannelsList(value: Array<ChannelInfo>): SearchChannel;
  clearChannelsList(): SearchChannel;
  addChannels(value?: ChannelInfo, index?: number): ChannelInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchChannel.AsObject;
  static toObject(includeInstance: boolean, msg: SearchChannel): SearchChannel.AsObject;
  static serializeBinaryToWriter(message: SearchChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchChannel;
  static deserializeBinaryFromReader(message: SearchChannel, reader: jspb.BinaryReader): SearchChannel;
}

export namespace SearchChannel {
  export type AsObject = {
    title: string,
    moreButton?: SearchTopicButton.AsObject,
    channelsList: Array<ChannelInfo.AsObject>,
  }
}

export class SearchInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SearchInfo;

  getListList(): Array<DynamicItem>;
  setListList(value: Array<DynamicItem>): SearchInfo;
  clearListList(): SearchInfo;
  addList(value?: DynamicItem, index?: number): DynamicItem;

  getTrackId(): string;
  setTrackId(value: string): SearchInfo;

  getTotal(): number;
  setTotal(value: number): SearchInfo;

  getHasMore(): boolean;
  setHasMore(value: boolean): SearchInfo;

  getVersion(): string;
  setVersion(value: string): SearchInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SearchInfo): SearchInfo.AsObject;
  static serializeBinaryToWriter(message: SearchInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchInfo;
  static deserializeBinaryFromReader(message: SearchInfo, reader: jspb.BinaryReader): SearchInfo;
}

export namespace SearchInfo {
  export type AsObject = {
    title: string,
    listList: Array<DynamicItem.AsObject>,
    trackId: string,
    total: number,
    hasMore: boolean,
    version: string,
  }
}

export class SearchToast extends jspb.Message {
  getDescText1(): string;
  setDescText1(value: string): SearchToast;

  getDescText2(): string;
  setDescText2(value: string): SearchToast;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchToast.AsObject;
  static toObject(includeInstance: boolean, msg: SearchToast): SearchToast.AsObject;
  static serializeBinaryToWriter(message: SearchToast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchToast;
  static deserializeBinaryFromReader(message: SearchToast, reader: jspb.BinaryReader): SearchToast;
}

export namespace SearchToast {
  export type AsObject = {
    descText1: string,
    descText2: string,
  }
}

export class SearchTopic extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SearchTopic;

  getMoreButton(): SearchTopicButton | undefined;
  setMoreButton(value?: SearchTopicButton): SearchTopic;
  hasMoreButton(): boolean;
  clearMoreButton(): SearchTopic;

  getItemsList(): Array<SearchTopicItem>;
  setItemsList(value: Array<SearchTopicItem>): SearchTopic;
  clearItemsList(): SearchTopic;
  addItems(value?: SearchTopicItem, index?: number): SearchTopicItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTopic.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTopic): SearchTopic.AsObject;
  static serializeBinaryToWriter(message: SearchTopic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTopic;
  static deserializeBinaryFromReader(message: SearchTopic, reader: jspb.BinaryReader): SearchTopic;
}

export namespace SearchTopic {
  export type AsObject = {
    title: string,
    moreButton?: SearchTopicButton.AsObject,
    itemsList: Array<SearchTopicItem.AsObject>,
  }
}

export class SearchTopicButton extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SearchTopicButton;

  getJumpUri(): string;
  setJumpUri(value: string): SearchTopicButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTopicButton.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTopicButton): SearchTopicButton.AsObject;
  static serializeBinaryToWriter(message: SearchTopicButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTopicButton;
  static deserializeBinaryFromReader(message: SearchTopicButton, reader: jspb.BinaryReader): SearchTopicButton;
}

export namespace SearchTopicButton {
  export type AsObject = {
    title: string,
    jumpUri: string,
  }
}

export class SearchTopicItem extends jspb.Message {
  getTopicId(): number;
  setTopicId(value: number): SearchTopicItem;

  getTopicName(): string;
  setTopicName(value: string): SearchTopicItem;

  getDesc(): string;
  setDesc(value: string): SearchTopicItem;

  getUrl(): string;
  setUrl(value: string): SearchTopicItem;

  getIsActivity(): boolean;
  setIsActivity(value: boolean): SearchTopicItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTopicItem.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTopicItem): SearchTopicItem.AsObject;
  static serializeBinaryToWriter(message: SearchTopicItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTopicItem;
  static deserializeBinaryFromReader(message: SearchTopicItem, reader: jspb.BinaryReader): SearchTopicItem;
}

export namespace SearchTopicItem {
  export type AsObject = {
    topicId: number,
    topicName: string,
    desc: string,
    url: string,
    isActivity: boolean,
  }
}

export class SetDecisionReq extends jspb.Message {
  getResult(): number;
  setResult(value: number): SetDecisionReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDecisionReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetDecisionReq): SetDecisionReq.AsObject;
  static serializeBinaryToWriter(message: SetDecisionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDecisionReq;
  static deserializeBinaryFromReader(message: SetDecisionReq, reader: jspb.BinaryReader): SetDecisionReq;
}

export namespace SetDecisionReq {
  export type AsObject = {
    result: number,
  }
}

export class SetRecentCampusReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): SetRecentCampusReq;

  getCampusName(): string;
  setCampusName(value: string): SetRecentCampusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRecentCampusReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetRecentCampusReq): SetRecentCampusReq.AsObject;
  static serializeBinaryToWriter(message: SetRecentCampusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRecentCampusReq;
  static deserializeBinaryFromReader(message: SetRecentCampusReq, reader: jspb.BinaryReader): SetRecentCampusReq;
}

export namespace SetRecentCampusReq {
  export type AsObject = {
    campusId: number,
    campusName: string,
  }
}

export class ShareChannel extends jspb.Message {
  getName(): string;
  setName(value: string): ShareChannel;

  getImage(): string;
  setImage(value: string): ShareChannel;

  getChannel(): string;
  setChannel(value: string): ShareChannel;

  getReserve(): ShareReserve | undefined;
  setReserve(value?: ShareReserve): ShareChannel;
  hasReserve(): boolean;
  clearReserve(): ShareChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareChannel.AsObject;
  static toObject(includeInstance: boolean, msg: ShareChannel): ShareChannel.AsObject;
  static serializeBinaryToWriter(message: ShareChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareChannel;
  static deserializeBinaryFromReader(message: ShareChannel, reader: jspb.BinaryReader): ShareChannel;
}

export namespace ShareChannel {
  export type AsObject = {
    name: string,
    image: string,
    channel: string,
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

  getUserInfo(): AdditionUserInfo | undefined;
  setUserInfo(value?: AdditionUserInfo): ShareReserve;
  hasUserInfo(): boolean;
  clearUserInfo(): ShareReserve;

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
    userInfo?: AdditionUserInfo.AsObject,
  }
}

export class SortType extends jspb.Message {
  getSortType(): number;
  setSortType(value: number): SortType;

  getSortTypeName(): string;
  setSortTypeName(value: string): SortType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortType.AsObject;
  static toObject(includeInstance: boolean, msg: SortType): SortType.AsObject;
  static serializeBinaryToWriter(message: SortType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortType;
  static deserializeBinaryFromReader(message: SortType, reader: jspb.BinaryReader): SortType;
}

export namespace SortType {
  export type AsObject = {
    sortType: number,
    sortTypeName: string,
  }
}

export class StoryArchive extends jspb.Message {
  getCover(): string;
  setCover(value: string): StoryArchive;

  getAid(): number;
  setAid(value: number): StoryArchive;

  getUri(): string;
  setUri(value: string): StoryArchive;

  getDimension(): Dimension | undefined;
  setDimension(value?: Dimension): StoryArchive;
  hasDimension(): boolean;
  clearDimension(): StoryArchive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoryArchive.AsObject;
  static toObject(includeInstance: boolean, msg: StoryArchive): StoryArchive.AsObject;
  static serializeBinaryToWriter(message: StoryArchive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoryArchive;
  static deserializeBinaryFromReader(message: StoryArchive, reader: jspb.BinaryReader): StoryArchive;
}

export namespace StoryArchive {
  export type AsObject = {
    cover: string,
    aid: number,
    uri: string,
    dimension?: Dimension.AsObject,
  }
}

export class StoryItem extends jspb.Message {
  getAuthor(): UserInfo | undefined;
  setAuthor(value?: UserInfo): StoryItem;
  hasAuthor(): boolean;
  clearAuthor(): StoryItem;

  getDesc(): string;
  setDesc(value: string): StoryItem;

  getStatus(): number;
  setStatus(value: number): StoryItem;

  getType(): number;
  setType(value: number): StoryItem;

  getStoryArchive(): StoryArchive | undefined;
  setStoryArchive(value?: StoryArchive): StoryItem;
  hasStoryArchive(): boolean;
  clearStoryArchive(): StoryItem;

  getRcmdItemCase(): StoryItem.RcmdItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoryItem.AsObject;
  static toObject(includeInstance: boolean, msg: StoryItem): StoryItem.AsObject;
  static serializeBinaryToWriter(message: StoryItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoryItem;
  static deserializeBinaryFromReader(message: StoryItem, reader: jspb.BinaryReader): StoryItem;
}

export namespace StoryItem {
  export type AsObject = {
    author?: UserInfo.AsObject,
    desc: string,
    status: number,
    type: number,
    storyArchive?: StoryArchive.AsObject,
  }

  export enum RcmdItemCase { 
    RCMD_ITEM_NOT_SET = 0,
    STORY_ARCHIVE = 5,
  }
}

export class SubscribeCampusReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): SubscribeCampusReq;

  getCampusName(): string;
  setCampusName(value: string): SubscribeCampusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeCampusReq.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeCampusReq): SubscribeCampusReq.AsObject;
  static serializeBinaryToWriter(message: SubscribeCampusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeCampusReq;
  static deserializeBinaryFromReader(message: SubscribeCampusReq, reader: jspb.BinaryReader): SubscribeCampusReq;
}

export namespace SubscribeCampusReq {
  export type AsObject = {
    campusId: number,
    campusName: string,
  }
}

export class ThreePointAttention extends jspb.Message {
  getAttentionIcon(): string;
  setAttentionIcon(value: string): ThreePointAttention;

  getAttentionText(): string;
  setAttentionText(value: string): ThreePointAttention;

  getNotAttentionIcon(): string;
  setNotAttentionIcon(value: string): ThreePointAttention;

  getNotAttentionText(): string;
  setNotAttentionText(value: string): ThreePointAttention;

  getStatus(): ThreePointAttentionStatus;
  setStatus(value: ThreePointAttentionStatus): ThreePointAttention;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointAttention.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointAttention): ThreePointAttention.AsObject;
  static serializeBinaryToWriter(message: ThreePointAttention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointAttention;
  static deserializeBinaryFromReader(message: ThreePointAttention, reader: jspb.BinaryReader): ThreePointAttention;
}

export namespace ThreePointAttention {
  export type AsObject = {
    attentionIcon: string,
    attentionText: string,
    notAttentionIcon: string,
    notAttentionText: string,
    status: ThreePointAttentionStatus,
  }
}

export class ThreePointAutoPlay extends jspb.Message {
  getOpenIcon(): string;
  setOpenIcon(value: string): ThreePointAutoPlay;

  getOpenText(): string;
  setOpenText(value: string): ThreePointAutoPlay;

  getCloseIcon(): string;
  setCloseIcon(value: string): ThreePointAutoPlay;

  getCloseText(): string;
  setCloseText(value: string): ThreePointAutoPlay;

  getOpenTextV2(): string;
  setOpenTextV2(value: string): ThreePointAutoPlay;

  getCloseTextV2(): string;
  setCloseTextV2(value: string): ThreePointAutoPlay;

  getOnlyIcon(): string;
  setOnlyIcon(value: string): ThreePointAutoPlay;

  getOnlyText(): string;
  setOnlyText(value: string): ThreePointAutoPlay;

  getOpenIconV2(): string;
  setOpenIconV2(value: string): ThreePointAutoPlay;

  getCloseIconV2(): string;
  setCloseIconV2(value: string): ThreePointAutoPlay;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointAutoPlay.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointAutoPlay): ThreePointAutoPlay.AsObject;
  static serializeBinaryToWriter(message: ThreePointAutoPlay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointAutoPlay;
  static deserializeBinaryFromReader(message: ThreePointAutoPlay, reader: jspb.BinaryReader): ThreePointAutoPlay;
}

export namespace ThreePointAutoPlay {
  export type AsObject = {
    openIcon: string,
    openText: string,
    closeIcon: string,
    closeText: string,
    openTextV2: string,
    closeTextV2: string,
    onlyIcon: string,
    onlyText: string,
    openIconV2: string,
    closeIconV2: string,
  }
}

export class ThreePointComment extends jspb.Message {
  getUpSelection(): CommentDetail | undefined;
  setUpSelection(value?: CommentDetail): ThreePointComment;
  hasUpSelection(): boolean;
  clearUpSelection(): ThreePointComment;

  getUpClose(): CommentDetail | undefined;
  setUpClose(value?: CommentDetail): ThreePointComment;
  hasUpClose(): boolean;
  clearUpClose(): ThreePointComment;

  getIcon(): string;
  setIcon(value: string): ThreePointComment;

  getTitle(): string;
  setTitle(value: string): ThreePointComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointComment.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointComment): ThreePointComment.AsObject;
  static serializeBinaryToWriter(message: ThreePointComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointComment;
  static deserializeBinaryFromReader(message: ThreePointComment, reader: jspb.BinaryReader): ThreePointComment;
}

export namespace ThreePointComment {
  export type AsObject = {
    upSelection?: CommentDetail.AsObject,
    upClose?: CommentDetail.AsObject,
    icon: string,
    title: string,
  }
}

export class ThreePointDefault extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ThreePointDefault;

  getTitle(): string;
  setTitle(value: string): ThreePointDefault;

  getUri(): string;
  setUri(value: string): ThreePointDefault;

  getId(): string;
  setId(value: string): ThreePointDefault;

  getToast(): ThreePointDefaultToast | undefined;
  setToast(value?: ThreePointDefaultToast): ThreePointDefault;
  hasToast(): boolean;
  clearToast(): ThreePointDefault;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointDefault.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointDefault): ThreePointDefault.AsObject;
  static serializeBinaryToWriter(message: ThreePointDefault, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointDefault;
  static deserializeBinaryFromReader(message: ThreePointDefault, reader: jspb.BinaryReader): ThreePointDefault;
}

export namespace ThreePointDefault {
  export type AsObject = {
    icon: string,
    title: string,
    uri: string,
    id: string,
    toast?: ThreePointDefaultToast.AsObject,
  }
}

export class ThreePointDefaultToast extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ThreePointDefaultToast;

  getDesc(): string;
  setDesc(value: string): ThreePointDefaultToast;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointDefaultToast.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointDefaultToast): ThreePointDefaultToast.AsObject;
  static serializeBinaryToWriter(message: ThreePointDefaultToast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointDefaultToast;
  static deserializeBinaryFromReader(message: ThreePointDefaultToast, reader: jspb.BinaryReader): ThreePointDefaultToast;
}

export namespace ThreePointDefaultToast {
  export type AsObject = {
    title: string,
    desc: string,
  }
}

export class ThreePointDislike extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ThreePointDislike;

  getTitle(): string;
  setTitle(value: string): ThreePointDislike;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointDislike.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointDislike): ThreePointDislike.AsObject;
  static serializeBinaryToWriter(message: ThreePointDislike, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointDislike;
  static deserializeBinaryFromReader(message: ThreePointDislike, reader: jspb.BinaryReader): ThreePointDislike;
}

export namespace ThreePointDislike {
  export type AsObject = {
    icon: string,
    title: string,
  }
}

export class ThreePointFavorite extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ThreePointFavorite;

  getTitle(): string;
  setTitle(value: string): ThreePointFavorite;

  getId(): number;
  setId(value: number): ThreePointFavorite;

  getIsFavourite(): boolean;
  setIsFavourite(value: boolean): ThreePointFavorite;

  getCancelIcon(): string;
  setCancelIcon(value: string): ThreePointFavorite;

  getCancelTitle(): string;
  setCancelTitle(value: string): ThreePointFavorite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointFavorite.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointFavorite): ThreePointFavorite.AsObject;
  static serializeBinaryToWriter(message: ThreePointFavorite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointFavorite;
  static deserializeBinaryFromReader(message: ThreePointFavorite, reader: jspb.BinaryReader): ThreePointFavorite;
}

export namespace ThreePointFavorite {
  export type AsObject = {
    icon: string,
    title: string,
    id: number,
    isFavourite: boolean,
    cancelIcon: string,
    cancelTitle: string,
  }
}

export class ThreePointHide extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ThreePointHide;

  getTitle(): string;
  setTitle(value: string): ThreePointHide;

  getInteractive(): ThreePointHideInteractive | undefined;
  setInteractive(value?: ThreePointHideInteractive): ThreePointHide;
  hasInteractive(): boolean;
  clearInteractive(): ThreePointHide;

  getBlookFid(): number;
  setBlookFid(value: number): ThreePointHide;

  getBlookType(): string;
  setBlookType(value: string): ThreePointHide;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointHide.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointHide): ThreePointHide.AsObject;
  static serializeBinaryToWriter(message: ThreePointHide, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointHide;
  static deserializeBinaryFromReader(message: ThreePointHide, reader: jspb.BinaryReader): ThreePointHide;
}

export namespace ThreePointHide {
  export type AsObject = {
    icon: string,
    title: string,
    interactive?: ThreePointHideInteractive.AsObject,
    blookFid: number,
    blookType: string,
  }
}

export class ThreePointHideInteractive extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ThreePointHideInteractive;

  getConfirm(): string;
  setConfirm(value: string): ThreePointHideInteractive;

  getCancel(): string;
  setCancel(value: string): ThreePointHideInteractive;

  getToast(): string;
  setToast(value: string): ThreePointHideInteractive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointHideInteractive.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointHideInteractive): ThreePointHideInteractive.AsObject;
  static serializeBinaryToWriter(message: ThreePointHideInteractive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointHideInteractive;
  static deserializeBinaryFromReader(message: ThreePointHideInteractive, reader: jspb.BinaryReader): ThreePointHideInteractive;
}

export namespace ThreePointHideInteractive {
  export type AsObject = {
    title: string,
    confirm: string,
    cancel: string,
    toast: string,
  }
}

export class ThreePointItem extends jspb.Message {
  getType(): ThreePointType;
  setType(value: ThreePointType): ThreePointItem;

  getDefault(): ThreePointDefault | undefined;
  setDefault(value?: ThreePointDefault): ThreePointItem;
  hasDefault(): boolean;
  clearDefault(): ThreePointItem;

  getAutoPlayer(): ThreePointAutoPlay | undefined;
  setAutoPlayer(value?: ThreePointAutoPlay): ThreePointItem;
  hasAutoPlayer(): boolean;
  clearAutoPlayer(): ThreePointItem;

  getShare(): ThreePointShare | undefined;
  setShare(value?: ThreePointShare): ThreePointItem;
  hasShare(): boolean;
  clearShare(): ThreePointItem;

  getAttention(): ThreePointAttention | undefined;
  setAttention(value?: ThreePointAttention): ThreePointItem;
  hasAttention(): boolean;
  clearAttention(): ThreePointItem;

  getWait(): ThreePointWait | undefined;
  setWait(value?: ThreePointWait): ThreePointItem;
  hasWait(): boolean;
  clearWait(): ThreePointItem;

  getDislike(): ThreePointDislike | undefined;
  setDislike(value?: ThreePointDislike): ThreePointItem;
  hasDislike(): boolean;
  clearDislike(): ThreePointItem;

  getFavorite(): ThreePointFavorite | undefined;
  setFavorite(value?: ThreePointFavorite): ThreePointItem;
  hasFavorite(): boolean;
  clearFavorite(): ThreePointItem;

  getTop(): ThreePointTop | undefined;
  setTop(value?: ThreePointTop): ThreePointItem;
  hasTop(): boolean;
  clearTop(): ThreePointItem;

  getComment(): ThreePointComment | undefined;
  setComment(value?: ThreePointComment): ThreePointItem;
  hasComment(): boolean;
  clearComment(): ThreePointItem;

  getHide(): ThreePointHide | undefined;
  setHide(value?: ThreePointHide): ThreePointItem;
  hasHide(): boolean;
  clearHide(): ThreePointItem;

  getTopicIrrelevant(): ThreePointTopicIrrelevant | undefined;
  setTopicIrrelevant(value?: ThreePointTopicIrrelevant): ThreePointItem;
  hasTopicIrrelevant(): boolean;
  clearTopicIrrelevant(): ThreePointItem;

  getItemCase(): ThreePointItem.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointItem.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointItem): ThreePointItem.AsObject;
  static serializeBinaryToWriter(message: ThreePointItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointItem;
  static deserializeBinaryFromReader(message: ThreePointItem, reader: jspb.BinaryReader): ThreePointItem;
}

export namespace ThreePointItem {
  export type AsObject = {
    type: ThreePointType,
    pb_default?: ThreePointDefault.AsObject,
    autoPlayer?: ThreePointAutoPlay.AsObject,
    share?: ThreePointShare.AsObject,
    attention?: ThreePointAttention.AsObject,
    wait?: ThreePointWait.AsObject,
    dislike?: ThreePointDislike.AsObject,
    favorite?: ThreePointFavorite.AsObject,
    top?: ThreePointTop.AsObject,
    comment?: ThreePointComment.AsObject,
    hide?: ThreePointHide.AsObject,
    topicIrrelevant?: ThreePointTopicIrrelevant.AsObject,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    DEFAULT = 2,
    AUTO_PLAYER = 3,
    SHARE = 4,
    ATTENTION = 5,
    WAIT = 6,
    DISLIKE = 7,
    FAVORITE = 8,
    TOP = 9,
    COMMENT = 10,
    HIDE = 11,
    TOPIC_IRRELEVANT = 12,
  }
}

export class ThreePointShare extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ThreePointShare;

  getTitle(): string;
  setTitle(value: string): ThreePointShare;

  getChannelList(): Array<ThreePointShareChannel>;
  setChannelList(value: Array<ThreePointShareChannel>): ThreePointShare;
  clearChannelList(): ThreePointShare;
  addChannel(value?: ThreePointShareChannel, index?: number): ThreePointShareChannel;

  getChannelName(): string;
  setChannelName(value: string): ThreePointShare;

  getReserve(): ShareReserve | undefined;
  setReserve(value?: ShareReserve): ThreePointShare;
  hasReserve(): boolean;
  clearReserve(): ThreePointShare;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointShare.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointShare): ThreePointShare.AsObject;
  static serializeBinaryToWriter(message: ThreePointShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointShare;
  static deserializeBinaryFromReader(message: ThreePointShare, reader: jspb.BinaryReader): ThreePointShare;
}

export namespace ThreePointShare {
  export type AsObject = {
    icon: string,
    title: string,
    channelList: Array<ThreePointShareChannel.AsObject>,
    channelName: string,
    reserve?: ShareReserve.AsObject,
  }
}

export class ThreePointShareChannel extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ThreePointShareChannel;

  getTitle(): string;
  setTitle(value: string): ThreePointShareChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointShareChannel.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointShareChannel): ThreePointShareChannel.AsObject;
  static serializeBinaryToWriter(message: ThreePointShareChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointShareChannel;
  static deserializeBinaryFromReader(message: ThreePointShareChannel, reader: jspb.BinaryReader): ThreePointShareChannel;
}

export namespace ThreePointShareChannel {
  export type AsObject = {
    icon: string,
    title: string,
  }
}

export class ThreePointTop extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ThreePointTop;

  getTitle(): string;
  setTitle(value: string): ThreePointTop;

  getType(): TopType;
  setType(value: TopType): ThreePointTop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointTop.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointTop): ThreePointTop.AsObject;
  static serializeBinaryToWriter(message: ThreePointTop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointTop;
  static deserializeBinaryFromReader(message: ThreePointTop, reader: jspb.BinaryReader): ThreePointTop;
}

export namespace ThreePointTop {
  export type AsObject = {
    icon: string,
    title: string,
    type: TopType,
  }
}

export class ThreePointTopicIrrelevant extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): ThreePointTopicIrrelevant;

  getTitle(): string;
  setTitle(value: string): ThreePointTopicIrrelevant;

  getToast(): string;
  setToast(value: string): ThreePointTopicIrrelevant;

  getTopicId(): number;
  setTopicId(value: number): ThreePointTopicIrrelevant;

  getResId(): number;
  setResId(value: number): ThreePointTopicIrrelevant;

  getResType(): number;
  setResType(value: number): ThreePointTopicIrrelevant;

  getReason(): string;
  setReason(value: string): ThreePointTopicIrrelevant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointTopicIrrelevant.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointTopicIrrelevant): ThreePointTopicIrrelevant.AsObject;
  static serializeBinaryToWriter(message: ThreePointTopicIrrelevant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointTopicIrrelevant;
  static deserializeBinaryFromReader(message: ThreePointTopicIrrelevant, reader: jspb.BinaryReader): ThreePointTopicIrrelevant;
}

export namespace ThreePointTopicIrrelevant {
  export type AsObject = {
    icon: string,
    title: string,
    toast: string,
    topicId: number,
    resId: number,
    resType: number,
    reason: string,
  }
}

export class ThreePointWait extends jspb.Message {
  getAdditionIcon(): string;
  setAdditionIcon(value: string): ThreePointWait;

  getAdditionText(): string;
  setAdditionText(value: string): ThreePointWait;

  getNoAdditionIcon(): string;
  setNoAdditionIcon(value: string): ThreePointWait;

  getNoAdditionText(): string;
  setNoAdditionText(value: string): ThreePointWait;

  getId(): number;
  setId(value: number): ThreePointWait;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreePointWait.AsObject;
  static toObject(includeInstance: boolean, msg: ThreePointWait): ThreePointWait.AsObject;
  static serializeBinaryToWriter(message: ThreePointWait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreePointWait;
  static deserializeBinaryFromReader(message: ThreePointWait, reader: jspb.BinaryReader): ThreePointWait;
}

export namespace ThreePointWait {
  export type AsObject = {
    additionIcon: string,
    additionText: string,
    noAdditionIcon: string,
    noAdditionText: string,
    id: number,
  }
}

export class TopAdditionUP extends jspb.Message {
  getUpList(): Array<AdditionUP>;
  setUpList(value: Array<AdditionUP>): TopAdditionUP;
  clearUpList(): TopAdditionUP;
  addUp(value?: AdditionUP, index?: number): AdditionUP;

  getHasFold(): number;
  setHasFold(value: number): TopAdditionUP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopAdditionUP.AsObject;
  static toObject(includeInstance: boolean, msg: TopAdditionUP): TopAdditionUP.AsObject;
  static serializeBinaryToWriter(message: TopAdditionUP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopAdditionUP;
  static deserializeBinaryFromReader(message: TopAdditionUP, reader: jspb.BinaryReader): TopAdditionUP;
}

export namespace TopAdditionUP {
  export type AsObject = {
    upList: Array<AdditionUP.AsObject>,
    hasFold: number,
  }
}

export class TopicButton extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): TopicButton;

  getTitle(): string;
  setTitle(value: string): TopicButton;

  getJumpUri(): string;
  setJumpUri(value: string): TopicButton;

  getRedDot(): boolean;
  setRedDot(value: boolean): TopicButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicButton.AsObject;
  static toObject(includeInstance: boolean, msg: TopicButton): TopicButton.AsObject;
  static serializeBinaryToWriter(message: TopicButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicButton;
  static deserializeBinaryFromReader(message: TopicButton, reader: jspb.BinaryReader): TopicButton;
}

export namespace TopicButton {
  export type AsObject = {
    icon: string,
    title: string,
    jumpUri: string,
    redDot: boolean,
  }
}

export class TopicItem extends jspb.Message {
  getTopicId(): number;
  setTopicId(value: number): TopicItem;

  getTopicName(): string;
  setTopicName(value: string): TopicItem;

  getUrl(): string;
  setUrl(value: string): TopicItem;

  getDesc(): string;
  setDesc(value: string): TopicItem;

  getDesc2(): string;
  setDesc2(value: string): TopicItem;

  getRcmdDesc(): string;
  setRcmdDesc(value: string): TopicItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicItem.AsObject;
  static toObject(includeInstance: boolean, msg: TopicItem): TopicItem.AsObject;
  static serializeBinaryToWriter(message: TopicItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicItem;
  static deserializeBinaryFromReader(message: TopicItem, reader: jspb.BinaryReader): TopicItem;
}

export namespace TopicItem {
  export type AsObject = {
    topicId: number,
    topicName: string,
    url: string,
    desc: string,
    desc2: string,
    rcmdDesc: string,
  }
}

export class TopicList extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): TopicList;

  getTopicListItemList(): Array<TopicListItem>;
  setTopicListItemList(value: Array<TopicListItem>): TopicList;
  clearTopicListItemList(): TopicList;
  addTopicListItem(value?: TopicListItem, index?: number): TopicListItem;

  getActButton(): TopicButton | undefined;
  setActButton(value?: TopicButton): TopicList;
  hasActButton(): boolean;
  clearActButton(): TopicList;

  getMoreButton(): TopicButton | undefined;
  setMoreButton(value?: TopicButton): TopicList;
  hasMoreButton(): boolean;
  clearMoreButton(): TopicList;

  getServerInfo(): string;
  setServerInfo(value: string): TopicList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicList.AsObject;
  static toObject(includeInstance: boolean, msg: TopicList): TopicList.AsObject;
  static serializeBinaryToWriter(message: TopicList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicList;
  static deserializeBinaryFromReader(message: TopicList, reader: jspb.BinaryReader): TopicList;
}

export namespace TopicList {
  export type AsObject = {
    title: string,
    topicListItemList: Array<TopicListItem.AsObject>,
    actButton?: TopicButton.AsObject,
    moreButton?: TopicButton.AsObject,
    serverInfo: string,
  }
}

export class TopicListItem extends jspb.Message {
  getIcon(): string;
  setIcon(value: string): TopicListItem;

  getIconTitle(): string;
  setIconTitle(value: string): TopicListItem;

  getTopicId(): number;
  setTopicId(value: number): TopicListItem;

  getTopicName(): string;
  setTopicName(value: string): TopicListItem;

  getUrl(): string;
  setUrl(value: string): TopicListItem;

  getPos(): number;
  setPos(value: number): TopicListItem;

  getServerInfo(): string;
  setServerInfo(value: string): TopicListItem;

  getHeadIconUrl(): string;
  setHeadIconUrl(value: string): TopicListItem;

  getUpMid(): number;
  setUpMid(value: number): TopicListItem;

  getTailIconUrl(): string;
  setTailIconUrl(value: string): TopicListItem;

  getExtension(): string;
  setExtension(value: string): TopicListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicListItem.AsObject;
  static toObject(includeInstance: boolean, msg: TopicListItem): TopicListItem.AsObject;
  static serializeBinaryToWriter(message: TopicListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicListItem;
  static deserializeBinaryFromReader(message: TopicListItem, reader: jspb.BinaryReader): TopicListItem;
}

export namespace TopicListItem {
  export type AsObject = {
    icon: string,
    iconTitle: string,
    topicId: number,
    topicName: string,
    url: string,
    pos: number,
    serverInfo: string,
    headIconUrl: string,
    upMid: number,
    tailIconUrl: string,
    extension: string,
  }
}

export class TopicListReply extends jspb.Message {
  getItemsList(): Array<TopicItem>;
  setItemsList(value: Array<TopicItem>): TopicListReply;
  clearItemsList(): TopicListReply;
  addItems(value?: TopicItem, index?: number): TopicItem;

  getHasMore(): boolean;
  setHasMore(value: boolean): TopicListReply;

  getOffset(): string;
  setOffset(value: string): TopicListReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicListReply.AsObject;
  static toObject(includeInstance: boolean, msg: TopicListReply): TopicListReply.AsObject;
  static serializeBinaryToWriter(message: TopicListReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicListReply;
  static deserializeBinaryFromReader(message: TopicListReply, reader: jspb.BinaryReader): TopicListReply;
}

export namespace TopicListReply {
  export type AsObject = {
    itemsList: Array<TopicItem.AsObject>,
    hasMore: boolean,
    offset: string,
  }
}

export class TopicListReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): TopicListReq;

  getOffset(): string;
  setOffset(value: string): TopicListReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicListReq.AsObject;
  static toObject(includeInstance: boolean, msg: TopicListReq): TopicListReq.AsObject;
  static serializeBinaryToWriter(message: TopicListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicListReq;
  static deserializeBinaryFromReader(message: TopicListReq, reader: jspb.BinaryReader): TopicListReq;
}

export namespace TopicListReq {
  export type AsObject = {
    campusId: number,
    offset: string,
  }
}

export class TopicRcmdCard extends jspb.Message {
  getTopicId(): number;
  setTopicId(value: number): TopicRcmdCard;

  getTopicName(): string;
  setTopicName(value: string): TopicRcmdCard;

  getUrl(): string;
  setUrl(value: string): TopicRcmdCard;

  getButton(): CampusLabel | undefined;
  setButton(value?: CampusLabel): TopicRcmdCard;
  hasButton(): boolean;
  clearButton(): TopicRcmdCard;

  getDesc1(): string;
  setDesc1(value: string): TopicRcmdCard;

  getDesc2(): string;
  setDesc2(value: string): TopicRcmdCard;

  getUpdateDesc(): string;
  setUpdateDesc(value: string): TopicRcmdCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicRcmdCard.AsObject;
  static toObject(includeInstance: boolean, msg: TopicRcmdCard): TopicRcmdCard.AsObject;
  static serializeBinaryToWriter(message: TopicRcmdCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicRcmdCard;
  static deserializeBinaryFromReader(message: TopicRcmdCard, reader: jspb.BinaryReader): TopicRcmdCard;
}

export namespace TopicRcmdCard {
  export type AsObject = {
    topicId: number,
    topicName: string,
    url: string,
    button?: CampusLabel.AsObject,
    desc1: string,
    desc2: string,
    updateDesc: string,
  }
}

export class TopicSquareInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): TopicSquareInfo;

  getButton(): CampusLabel | undefined;
  setButton(value?: CampusLabel): TopicSquareInfo;
  hasButton(): boolean;
  clearButton(): TopicSquareInfo;

  getRcmd(): TopicRcmdCard | undefined;
  setRcmd(value?: TopicRcmdCard): TopicSquareInfo;
  hasRcmd(): boolean;
  clearRcmd(): TopicSquareInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicSquareInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TopicSquareInfo): TopicSquareInfo.AsObject;
  static serializeBinaryToWriter(message: TopicSquareInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicSquareInfo;
  static deserializeBinaryFromReader(message: TopicSquareInfo, reader: jspb.BinaryReader): TopicSquareInfo;
}

export namespace TopicSquareInfo {
  export type AsObject = {
    title: string,
    button?: CampusLabel.AsObject,
    rcmd?: TopicRcmdCard.AsObject,
  }
}

export class TopicSquareReply extends jspb.Message {
  getInfo(): TopicSquareInfo | undefined;
  setInfo(value?: TopicSquareInfo): TopicSquareReply;
  hasInfo(): boolean;
  clearInfo(): TopicSquareReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicSquareReply.AsObject;
  static toObject(includeInstance: boolean, msg: TopicSquareReply): TopicSquareReply.AsObject;
  static serializeBinaryToWriter(message: TopicSquareReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicSquareReply;
  static deserializeBinaryFromReader(message: TopicSquareReply, reader: jspb.BinaryReader): TopicSquareReply;
}

export namespace TopicSquareReply {
  export type AsObject = {
    info?: TopicSquareInfo.AsObject,
  }
}

export class TopicSquareReq extends jspb.Message {
  getCampusId(): number;
  setCampusId(value: number): TopicSquareReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicSquareReq.AsObject;
  static toObject(includeInstance: boolean, msg: TopicSquareReq): TopicSquareReq.AsObject;
  static serializeBinaryToWriter(message: TopicSquareReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicSquareReq;
  static deserializeBinaryFromReader(message: TopicSquareReq, reader: jspb.BinaryReader): TopicSquareReq;
}

export namespace TopicSquareReq {
  export type AsObject = {
    campusId: number,
  }
}

export class Unfollow extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Unfollow;

  getListList(): Array<UnfollowUserItem>;
  setListList(value: Array<UnfollowUserItem>): Unfollow;
  clearListList(): Unfollow;
  addList(value?: UnfollowUserItem, index?: number): UnfollowUserItem;

  getTrackid(): string;
  setTrackid(value: string): Unfollow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Unfollow.AsObject;
  static toObject(includeInstance: boolean, msg: Unfollow): Unfollow.AsObject;
  static serializeBinaryToWriter(message: Unfollow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Unfollow;
  static deserializeBinaryFromReader(message: Unfollow, reader: jspb.BinaryReader): Unfollow;
}

export namespace Unfollow {
  export type AsObject = {
    title: string,
    listList: Array<UnfollowUserItem.AsObject>,
    trackid: string,
  }
}

export class UnfollowUserItem extends jspb.Message {
  getHasUpdate(): boolean;
  setHasUpdate(value: boolean): UnfollowUserItem;

  getFace(): string;
  setFace(value: string): UnfollowUserItem;

  getName(): string;
  setName(value: string): UnfollowUserItem;

  getUid(): number;
  setUid(value: number): UnfollowUserItem;

  getPos(): number;
  setPos(value: number): UnfollowUserItem;

  getLiveState(): LiveState;
  setLiveState(value: LiveState): UnfollowUserItem;

  getOfficial(): OfficialVerify | undefined;
  setOfficial(value?: OfficialVerify): UnfollowUserItem;
  hasOfficial(): boolean;
  clearOfficial(): UnfollowUserItem;

  getVip(): VipInfo | undefined;
  setVip(value?: VipInfo): UnfollowUserItem;
  hasVip(): boolean;
  clearVip(): UnfollowUserItem;

  getSign(): string;
  setSign(value: string): UnfollowUserItem;

  getLabel(): string;
  setLabel(value: string): UnfollowUserItem;

  getButton(): AdditionalButton | undefined;
  setButton(value?: AdditionalButton): UnfollowUserItem;
  hasButton(): boolean;
  clearButton(): UnfollowUserItem;

  getUri(): string;
  setUri(value: string): UnfollowUserItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnfollowUserItem.AsObject;
  static toObject(includeInstance: boolean, msg: UnfollowUserItem): UnfollowUserItem.AsObject;
  static serializeBinaryToWriter(message: UnfollowUserItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnfollowUserItem;
  static deserializeBinaryFromReader(message: UnfollowUserItem, reader: jspb.BinaryReader): UnfollowUserItem;
}

export namespace UnfollowUserItem {
  export type AsObject = {
    hasUpdate: boolean,
    face: string,
    name: string,
    uid: number,
    pos: number,
    liveState: LiveState,
    official?: OfficialVerify.AsObject,
    vip?: VipInfo.AsObject,
    sign: string,
    label: string,
    button?: AdditionalButton.AsObject,
    uri: string,
  }
}

export class UpListItem extends jspb.Message {
  getHasUpdate(): boolean;
  setHasUpdate(value: boolean): UpListItem;

  getFace(): string;
  setFace(value: string): UpListItem;

  getName(): string;
  setName(value: string): UpListItem;

  getUid(): number;
  setUid(value: number): UpListItem;

  getPos(): number;
  setPos(value: number): UpListItem;

  getUserItemType(): UserItemType;
  setUserItemType(value: UserItemType): UpListItem;

  getDisplayStyleDay(): UserItemStyle | undefined;
  setDisplayStyleDay(value?: UserItemStyle): UpListItem;
  hasDisplayStyleDay(): boolean;
  clearDisplayStyleDay(): UpListItem;

  getDisplayStyleNight(): UserItemStyle | undefined;
  setDisplayStyleNight(value?: UserItemStyle): UpListItem;
  hasDisplayStyleNight(): boolean;
  clearDisplayStyleNight(): UpListItem;

  getStyleId(): number;
  setStyleId(value: number): UpListItem;

  getLiveState(): LiveState;
  setLiveState(value: LiveState): UpListItem;

  getSeparator(): boolean;
  setSeparator(value: boolean): UpListItem;

  getUri(): string;
  setUri(value: string): UpListItem;

  getIsRecall(): boolean;
  setIsRecall(value: boolean): UpListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpListItem.AsObject;
  static toObject(includeInstance: boolean, msg: UpListItem): UpListItem.AsObject;
  static serializeBinaryToWriter(message: UpListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpListItem;
  static deserializeBinaryFromReader(message: UpListItem, reader: jspb.BinaryReader): UpListItem;
}

export namespace UpListItem {
  export type AsObject = {
    hasUpdate: boolean,
    face: string,
    name: string,
    uid: number,
    pos: number,
    userItemType: UserItemType,
    displayStyleDay?: UserItemStyle.AsObject,
    displayStyleNight?: UserItemStyle.AsObject,
    styleId: number,
    liveState: LiveState,
    separator: boolean,
    uri: string,
    isRecall: boolean,
  }
}

export class UpListMoreLabel extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): UpListMoreLabel;

  getUri(): string;
  setUri(value: string): UpListMoreLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpListMoreLabel.AsObject;
  static toObject(includeInstance: boolean, msg: UpListMoreLabel): UpListMoreLabel.AsObject;
  static serializeBinaryToWriter(message: UpListMoreLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpListMoreLabel;
  static deserializeBinaryFromReader(message: UpListMoreLabel, reader: jspb.BinaryReader): UpListMoreLabel;
}

export namespace UpListMoreLabel {
  export type AsObject = {
    title: string,
    uri: string,
  }
}

export class UserInfo extends jspb.Message {
  getMid(): number;
  setMid(value: number): UserInfo;

  getName(): string;
  setName(value: string): UserInfo;

  getFace(): string;
  setFace(value: string): UserInfo;

  getOfficial(): OfficialVerify | undefined;
  setOfficial(value?: OfficialVerify): UserInfo;
  hasOfficial(): boolean;
  clearOfficial(): UserInfo;

  getVip(): VipInfo | undefined;
  setVip(value?: VipInfo): UserInfo;
  hasVip(): boolean;
  clearVip(): UserInfo;

  getLive(): LiveInfo | undefined;
  setLive(value?: LiveInfo): UserInfo;
  hasLive(): boolean;
  clearLive(): UserInfo;

  getUri(): string;
  setUri(value: string): UserInfo;

  getPendant(): UserPendant | undefined;
  setPendant(value?: UserPendant): UserInfo;
  hasPendant(): boolean;
  clearPendant(): UserInfo;

  getNameplate(): Nameplate | undefined;
  setNameplate(value?: Nameplate): UserInfo;
  hasNameplate(): boolean;
  clearNameplate(): UserInfo;

  getLevel(): number;
  setLevel(value: number): UserInfo;

  getSign(): string;
  setSign(value: string): UserInfo;

  getFaceNft(): number;
  setFaceNft(value: number): UserInfo;

  getFaceNftNew(): number;
  setFaceNftNew(value: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    mid: number,
    name: string,
    face: string,
    official?: OfficialVerify.AsObject,
    vip?: VipInfo.AsObject,
    live?: LiveInfo.AsObject,
    uri: string,
    pendant?: UserPendant.AsObject,
    nameplate?: Nameplate.AsObject,
    level: number,
    sign: string,
    faceNft: number,
    faceNftNew: number,
  }
}

export class UserItemStyle extends jspb.Message {
  getRectText(): string;
  setRectText(value: string): UserItemStyle;

  getRectTextColor(): string;
  setRectTextColor(value: string): UserItemStyle;

  getRectIcon(): string;
  setRectIcon(value: string): UserItemStyle;

  getRectBgColor(): string;
  setRectBgColor(value: string): UserItemStyle;

  getOuterAnimation(): string;
  setOuterAnimation(value: string): UserItemStyle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserItemStyle.AsObject;
  static toObject(includeInstance: boolean, msg: UserItemStyle): UserItemStyle.AsObject;
  static serializeBinaryToWriter(message: UserItemStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserItemStyle;
  static deserializeBinaryFromReader(message: UserItemStyle, reader: jspb.BinaryReader): UserItemStyle;
}

export namespace UserItemStyle {
  export type AsObject = {
    rectText: string,
    rectTextColor: string,
    rectIcon: string,
    rectBgColor: string,
    outerAnimation: string,
  }
}

export class UserPendant extends jspb.Message {
  getPid(): number;
  setPid(value: number): UserPendant;

  getName(): string;
  setName(value: string): UserPendant;

  getImage(): string;
  setImage(value: string): UserPendant;

  getExpire(): number;
  setExpire(value: number): UserPendant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPendant.AsObject;
  static toObject(includeInstance: boolean, msg: UserPendant): UserPendant.AsObject;
  static serializeBinaryToWriter(message: UserPendant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPendant;
  static deserializeBinaryFromReader(message: UserPendant, reader: jspb.BinaryReader): UserPendant;
}

export namespace UserPendant {
  export type AsObject = {
    pid: number,
    name: string,
    image: string,
    expire: number,
  }
}

export class VideoBadge extends jspb.Message {
  getText(): string;
  setText(value: string): VideoBadge;

  getTextColor(): string;
  setTextColor(value: string): VideoBadge;

  getTextColorNight(): string;
  setTextColorNight(value: string): VideoBadge;

  getBgColor(): string;
  setBgColor(value: string): VideoBadge;

  getBgColorNight(): string;
  setBgColorNight(value: string): VideoBadge;

  getBorderColor(): string;
  setBorderColor(value: string): VideoBadge;

  getBorderColorNight(): string;
  setBorderColorNight(value: string): VideoBadge;

  getBgStyle(): number;
  setBgStyle(value: number): VideoBadge;

  getBgAlpha(): number;
  setBgAlpha(value: number): VideoBadge;

  getBgAlphaNight(): number;
  setBgAlphaNight(value: number): VideoBadge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoBadge.AsObject;
  static toObject(includeInstance: boolean, msg: VideoBadge): VideoBadge.AsObject;
  static serializeBinaryToWriter(message: VideoBadge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoBadge;
  static deserializeBinaryFromReader(message: VideoBadge, reader: jspb.BinaryReader): VideoBadge;
}

export namespace VideoBadge {
  export type AsObject = {
    text: string,
    textColor: string,
    textColorNight: string,
    bgColor: string,
    bgColorNight: string,
    borderColor: string,
    borderColorNight: string,
    bgStyle: number,
    bgAlpha: number,
    bgAlphaNight: number,
  }
}

export class VipInfo extends jspb.Message {
  getType(): number;
  setType(value: number): VipInfo;

  getStatus(): number;
  setStatus(value: number): VipInfo;

  getDueDate(): number;
  setDueDate(value: number): VipInfo;

  getLabel(): VipLabel | undefined;
  setLabel(value?: VipLabel): VipInfo;
  hasLabel(): boolean;
  clearLabel(): VipInfo;

  getThemeType(): number;
  setThemeType(value: number): VipInfo;

  getAvatarSubscript(): number;
  setAvatarSubscript(value: number): VipInfo;

  getNicknameColor(): string;
  setNicknameColor(value: string): VipInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VipInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VipInfo): VipInfo.AsObject;
  static serializeBinaryToWriter(message: VipInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VipInfo;
  static deserializeBinaryFromReader(message: VipInfo, reader: jspb.BinaryReader): VipInfo;
}

export namespace VipInfo {
  export type AsObject = {
    type: number,
    status: number,
    dueDate: number,
    label?: VipLabel.AsObject,
    themeType: number,
    avatarSubscript: number,
    nicknameColor: string,
  }
}

export class VipLabel extends jspb.Message {
  getPath(): string;
  setPath(value: string): VipLabel;

  getText(): string;
  setText(value: string): VipLabel;

  getLabelTheme(): string;
  setLabelTheme(value: string): VipLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VipLabel.AsObject;
  static toObject(includeInstance: boolean, msg: VipLabel): VipLabel.AsObject;
  static serializeBinaryToWriter(message: VipLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VipLabel;
  static deserializeBinaryFromReader(message: VipLabel, reader: jspb.BinaryReader): VipLabel;
}

export namespace VipLabel {
  export type AsObject = {
    path: string,
    text: string,
    labelTheme: string,
  }
}

export class Weight extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Weight;

  getItemsList(): Array<WeightItem>;
  setItemsList(value: Array<WeightItem>): Weight;
  clearItemsList(): Weight;
  addItems(value?: WeightItem, index?: number): WeightItem;

  getIcon(): string;
  setIcon(value: string): Weight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Weight.AsObject;
  static toObject(includeInstance: boolean, msg: Weight): Weight.AsObject;
  static serializeBinaryToWriter(message: Weight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Weight;
  static deserializeBinaryFromReader(message: Weight, reader: jspb.BinaryReader): Weight;
}

export namespace Weight {
  export type AsObject = {
    title: string,
    itemsList: Array<WeightItem.AsObject>,
    icon: string,
  }
}

export class WeightButton extends jspb.Message {
  getJumpUrl(): string;
  setJumpUrl(value: string): WeightButton;

  getTitle(): string;
  setTitle(value: string): WeightButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightButton.AsObject;
  static toObject(includeInstance: boolean, msg: WeightButton): WeightButton.AsObject;
  static serializeBinaryToWriter(message: WeightButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightButton;
  static deserializeBinaryFromReader(message: WeightButton, reader: jspb.BinaryReader): WeightButton;
}

export namespace WeightButton {
  export type AsObject = {
    jumpUrl: string,
    title: string,
  }
}

export class WeightDislike extends jspb.Message {
  getFeedBackType(): string;
  setFeedBackType(value: string): WeightDislike;

  getTitle(): string;
  setTitle(value: string): WeightDislike;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightDislike.AsObject;
  static toObject(includeInstance: boolean, msg: WeightDislike): WeightDislike.AsObject;
  static serializeBinaryToWriter(message: WeightDislike, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightDislike;
  static deserializeBinaryFromReader(message: WeightDislike, reader: jspb.BinaryReader): WeightDislike;
}

export namespace WeightDislike {
  export type AsObject = {
    feedBackType: string,
    title: string,
  }
}

export class WeightItem extends jspb.Message {
  getType(): WeightType;
  setType(value: WeightType): WeightItem;

  getButton(): WeightButton | undefined;
  setButton(value?: WeightButton): WeightItem;
  hasButton(): boolean;
  clearButton(): WeightItem;

  getDislike(): WeightDislike | undefined;
  setDislike(value?: WeightDislike): WeightItem;
  hasDislike(): boolean;
  clearDislike(): WeightItem;

  getItemCase(): WeightItem.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightItem.AsObject;
  static toObject(includeInstance: boolean, msg: WeightItem): WeightItem.AsObject;
  static serializeBinaryToWriter(message: WeightItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightItem;
  static deserializeBinaryFromReader(message: WeightItem, reader: jspb.BinaryReader): WeightItem;
}

export namespace WeightItem {
  export type AsObject = {
    type: WeightType,
    button?: WeightButton.AsObject,
    dislike?: WeightDislike.AsObject,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    BUTTON = 2,
    DISLIKE = 3,
  }
}

export enum AddButtonBgStyle { 
  FILL = 0,
  STROKE = 1,
  GRAY = 2,
}
export enum AddButtonType { 
  BT_NONE = 0,
  BT_JUMP = 1,
  BT_BUTTON = 2,
}
export enum AdditionVoteState { 
  ADDITION_VOTE_STATE_NONE = 0,
  ADDITION_VOTE_STATE_OPEN = 1,
  ADDITION_VOTE_STATE_CLOSE = 2,
}
export enum AdditionVoteType { 
  ADDITION_VOTE_TYPE_NONE = 0,
  ADDITION_VOTE_TYPE_WORD = 1,
  ADDITION_VOTE_TYPE_PIC = 2,
  ADDITION_VOTE_TYPE_DEFAULT = 3,
}
export enum AdditionalButtonClickType { 
  CLICK_NONE = 0,
  CLICK_UP = 1,
}
export enum AdditionalButtonStatus { 
  NONE = 0,
  UNCHECK = 1,
  CHECK = 2,
}
export enum AdditionalShareShowType { 
  ST_NONE = 0,
  ST_SHOW = 1,
}
export enum AdditionalType { 
  ADDITIONAL_NONE = 0,
  ADDITIONAL_TYPE_PGC = 1,
  ADDITIONAL_TYPE_GOODS = 2,
  ADDITIONAL_TYPE_VOTE = 3,
  ADDITIONAL_TYPE_COMMON = 4,
  ADDITIONAL_TYPE_ESPORT = 5,
  ADDITIONAL_TYPE_UP_RCMD = 6,
  ADDITIONAL_TYPE_UGC = 7,
  ADDITIONAL_TYPE_UP_RESERVATION = 8,
}
export enum CampusTabType { 
  CAMPUS_NONE = 0,
  CAMPUS_SCHOOL = 1,
  CAMPUS_DYNAMIC = 2,
  CAMPUS_ACCOUNT = 3,
  CAMPUS_BILLBOARD = 4,
  CAMPUS_TOPIC = 5,
}
export enum CoverIcon { 
  COVER_ICON_NONE = 0,
  COVER_ICON_PLAY = 1,
}
export enum DescType { 
  DESC_TYPE_NONE = 0,
  DESC_TYPE_TEXT = 1,
  DESC_TYPE_AITE = 2,
  DESC_TYPE_LOTTERY = 3,
  DESC_TYPE_VOTE = 4,
  DESC_TYPE_TOPIC = 5,
  DESC_TYPE_GOODS = 6,
  DESC_TYPE_BV = 7,
  DESC_TYPE_AV = 8,
  DESC_TYPE_EMOJI = 9,
  DESC_TYPE_USER = 10,
  DESC_TYPE_CV = 11,
  DESC_TYPE_VC = 12,
  DESC_TYPE_WEB = 13,
  DESC_TYPE_TAOBAO = 14,
  DESC_TYPE_MAIL = 15,
  DESC_TYPE_OGV_SEASON = 16,
  DESC_TYPE_OGV_EP = 17,
  DESC_TYPE_SEARCH_WORD = 18,
}
export enum DisableState { 
  HIGHLIGHT = 0,
  GARY = 1,
}
export enum DynExtendType { 
  DYN_EXT_TYPE_NONE = 0,
  DYN_EXT_TYPE_TOPIC = 1,
  DYN_EXT_TYPE_LBS = 2,
  DYN_EXT_TYPE_HOT = 3,
  DYN_EXT_TYPE_GAME = 4,
  DYN_EXT_TYPE_COMMON = 5,
  DYN_EXT_TYPE_BILICUT = 6,
  DYN_EXT_TYPE_OGV = 7,
  DYN_EXT_TYPE_AUTO_OGV = 8,
}
export enum DynModuleType { 
  MODULE_NONE = 0,
  MODULE_AUTHOR = 1,
  MODULE_DISPUTE = 2,
  MODULE_DESC = 3,
  MODULE_DYNAMIC = 4,
  MODULE_FORWARD = 5,
  MODULE_LIKEUSER = 6,
  MODULE_EXTEND = 7,
  MODULE_ADDITIONAL = 8,
  MODULE_STAT = 9,
  MODULE_FOLD = 10,
  MODULE_COMMENT = 11,
  MODULE_INTERACTION = 12,
  MODULE_AUTHOR_FORWARD = 13,
  MODULE_AD = 14,
  MODULE_BANNER = 15,
  MODULE_ITEM_NULL = 16,
  MODULE_SHARE_INFO = 17,
  MODULE_RECOMMEND = 18,
  MODULE_STAT_FORWARD = 19,
  MODULE_TOP = 20,
  MODULE_BOTTOM = 21,
  MODULE_STORY = 22,
  MODULE_TOPIC = 23,
  MODULE_TOPIC_DETAILS_EXT = 24,
  MODULE_TOP_TAG = 25,
  MODULE_TOPIC_BRIEF = 26,
  MODULE_TITLE = 27,
}
export enum DynUriType { 
  DYN_URI_TYPE_NONE = 0,
  DYN_URI_TYPE_DIRECT = 1,
  DYN_URI_TYPE_SUFFIX = 2,
}
export enum DynamicType { 
  DYN_NONE = 0,
  FORWARD = 1,
  AV = 2,
  PGC = 3,
  COURSES = 4,
  FOLD = 5,
  WORD = 6,
  DRAW = 7,
  ARTICLE = 8,
  MUSIC = 9,
  COMMON_SQUARE = 10,
  COMMON_VERTICAL = 11,
  LIVE = 12,
  MEDIALIST = 13,
  COURSES_SEASON = 14,
  AD = 15,
  APPLET = 16,
  SUBSCRIPTION = 17,
  LIVE_RCMD = 18,
  BANNER = 19,
  UGC_SEASON = 20,
  SUBSCRIPTION_NEW = 21,
  STORY = 22,
  TOPIC_RCMD = 23,
}
export enum EmojiType { 
  EMOJI_NONE = 0,
  EMOJI_OLD = 1,
  EMOJI_NEW = 2,
  VIP = 3,
}
export enum EspaceStyle { 
  MOBA = 0,
}
export enum FoldType { 
  FOLDTYPEZORE = 0,
  FOLDTYPEPUBLISH = 1,
  FOLDTYPEFREQUENT = 2,
  FOLDTYPEUNITE = 3,
  FOLDTYPELIMIT = 4,
}
export enum FollowType { 
  FT_NOT_FOLLOW = 0,
  FT_FOLLOW = 1,
}
export enum HighlightTextStyle { 
  STYLE_NONE = 0,
  STYLE_HIGHLIGHT = 1,
}
export enum ImageStyle { 
  ADD_STYLE_VERTICAL = 0,
  ADD_STYLE_SQUARE = 1,
}
export enum LightFromType { 
  FROM_LOGIN = 0,
  FROM_UNLOGIN = 1,
}
export enum LiveState { 
  LIVE_NONE = 0,
  LIVE_LIVE = 1,
  LIVE_ROTATION = 2,
}
export enum LocalIconType { 
  LOCAL_ICON_COMMENT = 0,
  LOCAL_ICON_LIKE = 1,
}
export enum MdlDynCommonType { 
  MDL_DYN_COMMON_NONE = 0,
  MDL_DYN_COMMON_SQUARE = 1,
  MDL_DYN_COMMON_VERTICA = 2,
}
export enum MdlDynDrawTagType { 
  MDL_DRAW_TAG_NONE = 0,
  MDL_DRAW_TAG_COMMON = 1,
  MDL_DRAW_TAG_GOODS = 2,
  MDL_DRAW_TAG_USER = 3,
  MDL_DRAW_TAG_TOPIC = 4,
  MDL_DRAW_TAG_LBS = 5,
}
export enum MdlDynSubscriptionNewStyle { 
  MDL_DYN_SUBSCRIPTION_NEW_STYLE_NONT = 0,
  MDL_DYN_SUBSCRIPTION_NEW_STYLE_LIVE = 1,
  MDL_DYN_SUBSCRIPTION_NEW_STYLE_DRAW = 2,
}
export enum MediaType { 
  MEDIATYPENONE = 0,
  MEDIATYPEUGC = 1,
  MEDIATYPEPGC = 2,
  MEDIATYPELIVE = 3,
  MEDIATYPEVCS = 4,
}
export enum ModuleAuthorBadgeType { 
  MODULE_AUTHOR_BADGE_TYPE_NONE = 0,
  MODULE_AUTHOR_BADGE_TYPE_THREEPOINT = 1,
  MODULE_AUTHOR_BADGE_TYPE_BUTTON = 2,
  MODULE_AUTHOR_BADGE_TYPE_WEIGHT = 3,
}
export enum ModuleBannerType { 
  MODULE_BANNER_TYPE_NONE = 0,
  MODULE_BANNER_TYPE_USER = 1,
}
export enum ModuleDynamicType { 
  MDL_DYN_ARCHIVE = 0,
  MDL_DYN_PGC = 1,
  MDL_DYN_COUR_SEASON = 2,
  MDL_DYN_COUR_BATCH = 3,
  MDL_DYN_FORWARD = 4,
  MDL_DYN_DRAW = 5,
  MDL_DYN_ARTICLE = 6,
  MDL_DYN_MUSIC = 7,
  MDL_DYN_COMMON = 8,
  MDL_DYN_LIVE = 9,
  MDL_DYN_MEDIALIST = 10,
  MDL_DYN_APPLET = 11,
  MDL_DYN_SUBSCRIPTION = 12,
  MDL_DYN_LIVE_RCMD = 13,
  MDL_DYN_UGC_SEASON = 14,
  MDL_DYN_SUBSCRIPTION_NEW = 15,
}
export enum NetworkType { 
  NT_UNKNOWN = 0,
  WIFI = 1,
  CELLULAR = 2,
  OFFLINE = 3,
  OTHERNET = 4,
  ETHERNET = 5,
}
export enum RcmdType { 
  RCMD_ARCHIVE = 0,
  RCMD_DYNAMIC = 1,
}
export enum Refresh { 
  REFRESH_NEW = 0,
  REFRESH_HISTORY = 1,
}
export enum RelationStatus { 
  RELATION_STATUS_NONE = 0,
  RELATION_STATUS_NOFOLLOW = 1,
  RELATION_STATUS_FOLLOW = 2,
  RELATION_STATUS_FOLLOWED = 3,
  RELATION_STATUS_MUTUAL_CONCERN = 4,
  RELATION_STATUS_SPECIAL = 5,
}
export enum RepostType { 
  REPOST_HOT = 0,
  REPOST_GENERAL = 1,
}
export enum ReserveRelationLotteryType { 
  RESERVE_RELATION_LOTTERY_TYPE_DEFAULT = 0,
  RESERVE_RELATION_LOTTERY_TYPE_CRON = 1,
}
export enum ReserveType { 
  RESERVE_NONE = 0,
  RESERVE_RECALL = 1,
}
export enum ShowType { 
  SHOW_TYPE_NONE = 0,
  SHOW_TYPE_BACKUP = 1,
}
export enum StyleType { 
  STYLE_TYPE_NONE = 0,
  STYLE_TYPE_LIVE = 1,
  STYLE_TYPE_DYN_UP = 2,
}
export enum TFType { 
  U_CARD = 0,
  U_PKG = 1,
  C_CARD = 2,
  C_PKG = 3,
  T_CARD = 4,
  T_PKG = 5,
}
export enum ThreePointAttentionStatus { 
  TP_NOT_ATTENTION = 0,
  TP_ATTENTION = 1,
}
export enum ThreePointType { 
  TP_NONE = 0,
  BACKGROUND = 1,
  AUTO_PLAY = 2,
  SHARE = 3,
  WAIT = 4,
  ATTENTION = 5,
  REPORT = 6,
  DELETE = 7,
  DISLIKE = 8,
  FAVORITE = 9,
  TOP = 10,
  COMMENT = 11,
  HIDE = 12,
  CAMPUS_DELETE = 13,
  TOPIC_IRRELEVANT = 14,
}
export enum ThumbType { 
  CANCEL = 0,
  THUMB = 1,
}
export enum TopType { 
  TOP_NONE = 0,
  TOP_CANCEL = 1,
}
export enum UserItemType { 
  USER_ITEM_TYPE_NONE = 0,
  USER_ITEM_TYPE_LIVE = 1,
  USER_ITEM_TYPE_LIVE_CUSTOM = 2,
  USER_ITEM_TYPE_NORMAL = 3,
  USER_ITEM_TYPE_EXTEND = 4,
}
export enum VideoSubType { 
  VIDEOSUBTYPENONE = 0,
  VIDEOSUBTYPEBANGUMI = 1,
  VIDEOSUBTYPEMOVIE = 2,
  VIDEOSUBTYPEDOCUMENTARY = 3,
  VIDEOSUBTYPEDOMESTIC = 4,
  VIDEOSUBTYPETELEPLAY = 5,
}
export enum VideoType { 
  VIDEO_TYPE_GENERAL = 0,
  VIDEO_TYPE_DYNAMIC = 1,
  VIDEO_TYPE_PLAYBACK = 2,
  VIDEO_TYPE_STORY = 3,
}
export enum VoteStatus { 
  NORMAL = 0,
  ANONYMOUS = 1,
}
export enum WeightType { 
  WEIGHT_NONE = 0,
  WEIGHT_DISLIKE = 1,
  WEIGHT_JUMP = 2,
}
