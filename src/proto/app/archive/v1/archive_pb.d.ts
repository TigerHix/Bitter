import * as jspb from 'google-protobuf'



export class Arc extends jspb.Message {
  getAid(): number;
  setAid(value: number): Arc;

  getVideos(): number;
  setVideos(value: number): Arc;

  getTypeId(): number;
  setTypeId(value: number): Arc;

  getTypeName(): string;
  setTypeName(value: string): Arc;

  getCopyright(): number;
  setCopyright(value: number): Arc;

  getPic(): string;
  setPic(value: string): Arc;

  getTitle(): string;
  setTitle(value: string): Arc;

  getPubdate(): number;
  setPubdate(value: number): Arc;

  getCtime(): number;
  setCtime(value: number): Arc;

  getDesc(): string;
  setDesc(value: string): Arc;

  getState(): number;
  setState(value: number): Arc;

  getAccess(): number;
  setAccess(value: number): Arc;

  getAttribute(): number;
  setAttribute(value: number): Arc;

  getTag(): string;
  setTag(value: string): Arc;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Arc;
  clearTagsList(): Arc;
  addTags(value: string, index?: number): Arc;

  getDuration(): number;
  setDuration(value: number): Arc;

  getMissionId(): number;
  setMissionId(value: number): Arc;

  getOrderId(): number;
  setOrderId(value: number): Arc;

  getRedirectUrl(): string;
  setRedirectUrl(value: string): Arc;

  getForward(): number;
  setForward(value: number): Arc;

  getRights(): Rights | undefined;
  setRights(value?: Rights): Arc;
  hasRights(): boolean;
  clearRights(): Arc;

  getAuthor(): Author | undefined;
  setAuthor(value?: Author): Arc;
  hasAuthor(): boolean;
  clearAuthor(): Arc;

  getStat(): Stat | undefined;
  setStat(value?: Stat): Arc;
  hasStat(): boolean;
  clearStat(): Arc;

  getReportResult(): string;
  setReportResult(value: string): Arc;

  getDynamic(): string;
  setDynamic(value: string): Arc;

  getFirstCid(): number;
  setFirstCid(value: number): Arc;

  getDimension(): Dimension | undefined;
  setDimension(value?: Dimension): Arc;
  hasDimension(): boolean;
  clearDimension(): Arc;

  getStaffInfoList(): Array<StaffInfo>;
  setStaffInfoList(value: Array<StaffInfo>): Arc;
  clearStaffInfoList(): Arc;
  addStaffInfo(value?: StaffInfo, index?: number): StaffInfo;

  getSeasonId(): number;
  setSeasonId(value: number): Arc;

  getAttributeV2(): number;
  setAttributeV2(value: number): Arc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Arc.AsObject;
  static toObject(includeInstance: boolean, msg: Arc): Arc.AsObject;
  static serializeBinaryToWriter(message: Arc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Arc;
  static deserializeBinaryFromReader(message: Arc, reader: jspb.BinaryReader): Arc;
}

export namespace Arc {
  export type AsObject = {
    aid: number,
    videos: number,
    typeId: number,
    typeName: string,
    copyright: number,
    pic: string,
    title: string,
    pubdate: number,
    ctime: number,
    desc: string,
    state: number,
    access: number,
    attribute: number,
    tag: string,
    tagsList: Array<string>,
    duration: number,
    missionId: number,
    orderId: number,
    redirectUrl: string,
    forward: number,
    rights?: Rights.AsObject,
    author?: Author.AsObject,
    stat?: Stat.AsObject,
    reportResult: string,
    dynamic: string,
    firstCid: number,
    dimension?: Dimension.AsObject,
    staffInfoList: Array<StaffInfo.AsObject>,
    seasonId: number,
    attributeV2: number,
  }
}

export class Author extends jspb.Message {
  getMid(): number;
  setMid(value: number): Author;

  getName(): string;
  setName(value: string): Author;

  getFace(): string;
  setFace(value: string): Author;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Author.AsObject;
  static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
  static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Author;
  static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
}

export namespace Author {
  export type AsObject = {
    mid: number,
    name: string,
    face: string,
  }
}

export class Dimension extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): Dimension;

  getHeight(): number;
  setHeight(value: number): Dimension;

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
    width: number,
    height: number,
    rotate: number,
  }
}

export class Page extends jspb.Message {
  getCid(): number;
  setCid(value: number): Page;

  getPage(): number;
  setPage(value: number): Page;

  getFrom(): string;
  setFrom(value: string): Page;

  getPart(): string;
  setPart(value: string): Page;

  getDuration(): number;
  setDuration(value: number): Page;

  getVid(): string;
  setVid(value: string): Page;

  getDesc(): string;
  setDesc(value: string): Page;

  getWeblink(): string;
  setWeblink(value: string): Page;

  getDimension(): Dimension | undefined;
  setDimension(value?: Dimension): Page;
  hasDimension(): boolean;
  clearDimension(): Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    cid: number,
    page: number,
    from: string,
    part: string,
    duration: number,
    vid: string,
    desc: string,
    weblink: string,
    dimension?: Dimension.AsObject,
  }
}

export class Rights extends jspb.Message {
  getBp(): number;
  setBp(value: number): Rights;

  getElec(): number;
  setElec(value: number): Rights;

  getDownload(): number;
  setDownload(value: number): Rights;

  getMovie(): number;
  setMovie(value: number): Rights;

  getPay(): number;
  setPay(value: number): Rights;

  getHd5(): number;
  setHd5(value: number): Rights;

  getNoReprint(): number;
  setNoReprint(value: number): Rights;

  getAutoplay(): number;
  setAutoplay(value: number): Rights;

  getUgcPay(): number;
  setUgcPay(value: number): Rights;

  getIsCooperation(): number;
  setIsCooperation(value: number): Rights;

  getUgcPayPreview(): number;
  setUgcPayPreview(value: number): Rights;

  getNoBackground(): number;
  setNoBackground(value: number): Rights;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rights.AsObject;
  static toObject(includeInstance: boolean, msg: Rights): Rights.AsObject;
  static serializeBinaryToWriter(message: Rights, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rights;
  static deserializeBinaryFromReader(message: Rights, reader: jspb.BinaryReader): Rights;
}

export namespace Rights {
  export type AsObject = {
    bp: number,
    elec: number,
    download: number,
    movie: number,
    pay: number,
    hd5: number,
    noReprint: number,
    autoplay: number,
    ugcPay: number,
    isCooperation: number,
    ugcPayPreview: number,
    noBackground: number,
  }
}

export class StaffInfo extends jspb.Message {
  getMid(): number;
  setMid(value: number): StaffInfo;

  getTitle(): string;
  setTitle(value: string): StaffInfo;

  getAttribute(): number;
  setAttribute(value: number): StaffInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StaffInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StaffInfo): StaffInfo.AsObject;
  static serializeBinaryToWriter(message: StaffInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StaffInfo;
  static deserializeBinaryFromReader(message: StaffInfo, reader: jspb.BinaryReader): StaffInfo;
}

export namespace StaffInfo {
  export type AsObject = {
    mid: number,
    title: string,
    attribute: number,
  }
}

export class Stat extends jspb.Message {
  getAid(): number;
  setAid(value: number): Stat;

  getView(): number;
  setView(value: number): Stat;

  getDanmaku(): number;
  setDanmaku(value: number): Stat;

  getReply(): number;
  setReply(value: number): Stat;

  getFav(): number;
  setFav(value: number): Stat;

  getCoin(): number;
  setCoin(value: number): Stat;

  getShare(): number;
  setShare(value: number): Stat;

  getNowRank(): number;
  setNowRank(value: number): Stat;

  getHisRank(): number;
  setHisRank(value: number): Stat;

  getLike(): number;
  setLike(value: number): Stat;

  getDislike(): number;
  setDislike(value: number): Stat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stat.AsObject;
  static toObject(includeInstance: boolean, msg: Stat): Stat.AsObject;
  static serializeBinaryToWriter(message: Stat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stat;
  static deserializeBinaryFromReader(message: Stat, reader: jspb.BinaryReader): Stat;
}

export namespace Stat {
  export type AsObject = {
    aid: number,
    view: number,
    danmaku: number,
    reply: number,
    fav: number,
    coin: number,
    share: number,
    nowRank: number,
    hisRank: number,
    like: number,
    dislike: number,
  }
}

