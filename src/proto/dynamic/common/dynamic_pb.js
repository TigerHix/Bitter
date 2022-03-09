// source: bilibili/dynamic/common/dynamic.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = self;

var bilibili_app_dynamic_v2_dynamic_pb = require('../../../proto/app/dynamic/v2/dynamic_pb.js');
goog.object.extend(proto, bilibili_app_dynamic_v2_dynamic_pb);
goog.exportSymbol('proto.bilibili.dynamic.AtGroup', null, global);
goog.exportSymbol('proto.bilibili.dynamic.AtGroupType', null, global);
goog.exportSymbol('proto.bilibili.dynamic.AtItem', null, global);
goog.exportSymbol('proto.bilibili.dynamic.AtListReq', null, global);
goog.exportSymbol('proto.bilibili.dynamic.AtListRsp', null, global);
goog.exportSymbol('proto.bilibili.dynamic.AtSearchReq', null, global);
goog.exportSymbol('proto.bilibili.dynamic.AttachCardType', null, global);
goog.exportSymbol('proto.bilibili.dynamic.BottomBusiness', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ContentType', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateActivity', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateAttachCard', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateCheckResp', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateCommonAttachCard', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateContent', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateContentItem', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateDynVideo', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateDynVideoResult', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateGoodsCard', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateInitCheckScene', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateOption', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreatePic', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreatePicTag', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateResp', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateScene', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateTag', null, global);
goog.exportSymbol('proto.bilibili.dynamic.CreateTopic', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynIdentity', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynRevsId', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynVideoEditor', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynVideoHotAct', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynVideoMultiP', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynVideoPushIntro', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynVideoSubmitActBanner', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynVideoVote', null, global);
goog.exportSymbol('proto.bilibili.dynamic.DynVideoWatermark', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ExtLbs', null, global);
goog.exportSymbol('proto.bilibili.dynamic.GetUidByNameReq', null, global);
goog.exportSymbol('proto.bilibili.dynamic.GetUidByNameRsp', null, global);
goog.exportSymbol('proto.bilibili.dynamic.GoodsContent', null, global);
goog.exportSymbol('proto.bilibili.dynamic.LaunchedActivity', null, global);
goog.exportSymbol('proto.bilibili.dynamic.LaunchedActivityItem', null, global);
goog.exportSymbol('proto.bilibili.dynamic.LbsLoc', null, global);
goog.exportSymbol('proto.bilibili.dynamic.MetaDataCtrl', null, global);
goog.exportSymbol('proto.bilibili.dynamic.PlusRedDot', null, global);
goog.exportSymbol('proto.bilibili.dynamic.Program', null, global);
goog.exportSymbol('proto.bilibili.dynamic.PublishSetting', null, global);
goog.exportSymbol('proto.bilibili.dynamic.PublishYellowBar', null, global);
goog.exportSymbol('proto.bilibili.dynamic.RepostInitCheck', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ReserveSource', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ShareChannel', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ShareChannelItem', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ShareReserve', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ShareReserveLottery', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ShareReservePoster', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ShareResult', null, global);
goog.exportSymbol('proto.bilibili.dynamic.ShowMoreLaunchedActivity', null, global);
goog.exportSymbol('proto.bilibili.dynamic.Sketch', null, global);
goog.exportSymbol('proto.bilibili.dynamic.UpPermission', null, global);
goog.exportSymbol('proto.bilibili.dynamic.UpPermissionItem', null, global);
goog.exportSymbol('proto.bilibili.dynamic.UpPermissionType', null, global);
goog.exportSymbol('proto.bilibili.dynamic.UserCreateMeta', null, global);
goog.exportSymbol('proto.bilibili.dynamic.VideoShareInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.AtGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.AtGroup.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.AtGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.AtGroup.displayName = 'proto.bilibili.dynamic.AtGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.AtItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.AtItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.AtItem.displayName = 'proto.bilibili.dynamic.AtItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.AtListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.AtListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.AtListReq.displayName = 'proto.bilibili.dynamic.AtListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.AtListRsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.AtListRsp.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.AtListRsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.AtListRsp.displayName = 'proto.bilibili.dynamic.AtListRsp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.AtSearchReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.AtSearchReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.AtSearchReq.displayName = 'proto.bilibili.dynamic.AtSearchReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.BottomBusiness = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.BottomBusiness, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.BottomBusiness.displayName = 'proto.bilibili.dynamic.BottomBusiness';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateActivity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateActivity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateActivity.displayName = 'proto.bilibili.dynamic.CreateActivity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateAttachCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateAttachCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateAttachCard.displayName = 'proto.bilibili.dynamic.CreateAttachCard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateCheckResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateCheckResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateCheckResp.displayName = 'proto.bilibili.dynamic.CreateCheckResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateCommonAttachCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateCommonAttachCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateCommonAttachCard.displayName = 'proto.bilibili.dynamic.CreateCommonAttachCard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.CreateContent.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.CreateContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateContent.displayName = 'proto.bilibili.dynamic.CreateContent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateContentItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateContentItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateContentItem.displayName = 'proto.bilibili.dynamic.CreateContentItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateDynVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.CreateDynVideo.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.CreateDynVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateDynVideo.displayName = 'proto.bilibili.dynamic.CreateDynVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateDynVideoResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateDynVideoResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateDynVideoResult.displayName = 'proto.bilibili.dynamic.CreateDynVideoResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateGoodsCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.CreateGoodsCard.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.CreateGoodsCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateGoodsCard.displayName = 'proto.bilibili.dynamic.CreateGoodsCard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateOption.displayName = 'proto.bilibili.dynamic.CreateOption';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreatePic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.CreatePic.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.CreatePic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreatePic.displayName = 'proto.bilibili.dynamic.CreatePic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreatePicTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreatePicTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreatePicTag.displayName = 'proto.bilibili.dynamic.CreatePicTag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateResp.displayName = 'proto.bilibili.dynamic.CreateResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateTag.displayName = 'proto.bilibili.dynamic.CreateTag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.CreateTopic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.CreateTopic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.CreateTopic.displayName = 'proto.bilibili.dynamic.CreateTopic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynIdentity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.DynIdentity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynIdentity.displayName = 'proto.bilibili.dynamic.DynIdentity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynRevsId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.DynRevsId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynRevsId.displayName = 'proto.bilibili.dynamic.DynRevsId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynVideoEditor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.DynVideoEditor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynVideoEditor.displayName = 'proto.bilibili.dynamic.DynVideoEditor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynVideoHotAct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.DynVideoHotAct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynVideoHotAct.displayName = 'proto.bilibili.dynamic.DynVideoHotAct';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynVideoMultiP = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.DynVideoMultiP, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynVideoMultiP.displayName = 'proto.bilibili.dynamic.DynVideoMultiP';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynVideoPushIntro = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.DynVideoPushIntro, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynVideoPushIntro.displayName = 'proto.bilibili.dynamic.DynVideoPushIntro';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.DynVideoSubmitActBanner.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.DynVideoSubmitActBanner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynVideoSubmitActBanner.displayName = 'proto.bilibili.dynamic.DynVideoSubmitActBanner';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynVideoVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.DynVideoVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynVideoVote.displayName = 'proto.bilibili.dynamic.DynVideoVote';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.DynVideoWatermark = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.DynVideoWatermark, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.DynVideoWatermark.displayName = 'proto.bilibili.dynamic.DynVideoWatermark';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.ExtLbs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.ExtLbs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.ExtLbs.displayName = 'proto.bilibili.dynamic.ExtLbs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.GetUidByNameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.GetUidByNameReq.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.GetUidByNameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.GetUidByNameReq.displayName = 'proto.bilibili.dynamic.GetUidByNameReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.GetUidByNameRsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.GetUidByNameRsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.GetUidByNameRsp.displayName = 'proto.bilibili.dynamic.GetUidByNameRsp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.GoodsContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.GoodsContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.GoodsContent.displayName = 'proto.bilibili.dynamic.GoodsContent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.LaunchedActivity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.LaunchedActivity.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.LaunchedActivity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.LaunchedActivity.displayName = 'proto.bilibili.dynamic.LaunchedActivity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.LaunchedActivityItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.LaunchedActivityItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.LaunchedActivityItem.displayName = 'proto.bilibili.dynamic.LaunchedActivityItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.LbsLoc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.LbsLoc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.LbsLoc.displayName = 'proto.bilibili.dynamic.LbsLoc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.MetaDataCtrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.MetaDataCtrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.MetaDataCtrl.displayName = 'proto.bilibili.dynamic.MetaDataCtrl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.PlusRedDot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.PlusRedDot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.PlusRedDot.displayName = 'proto.bilibili.dynamic.PlusRedDot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.Program = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.Program, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.Program.displayName = 'proto.bilibili.dynamic.Program';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.PublishSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.PublishSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.PublishSetting.displayName = 'proto.bilibili.dynamic.PublishSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.PublishYellowBar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.PublishYellowBar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.PublishYellowBar.displayName = 'proto.bilibili.dynamic.PublishYellowBar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.RepostInitCheck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.RepostInitCheck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.RepostInitCheck.displayName = 'proto.bilibili.dynamic.RepostInitCheck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.ShareChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.ShareChannel.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.ShareChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.ShareChannel.displayName = 'proto.bilibili.dynamic.ShareChannel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.ShareChannelItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.ShareChannelItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.ShareChannelItem.displayName = 'proto.bilibili.dynamic.ShareChannelItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.ShareReserve = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.ShareReserve, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.ShareReserve.displayName = 'proto.bilibili.dynamic.ShareReserve';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.ShareReserveLottery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.ShareReserveLottery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.ShareReserveLottery.displayName = 'proto.bilibili.dynamic.ShareReserveLottery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.ShareReservePoster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.ShareReservePoster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.ShareReservePoster.displayName = 'proto.bilibili.dynamic.ShareReservePoster';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.ShareResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.ShareResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.ShareResult.displayName = 'proto.bilibili.dynamic.ShareResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.ShowMoreLaunchedActivity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.ShowMoreLaunchedActivity.displayName = 'proto.bilibili.dynamic.ShowMoreLaunchedActivity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.Sketch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.Sketch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.Sketch.displayName = 'proto.bilibili.dynamic.Sketch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.UpPermission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bilibili.dynamic.UpPermission.repeatedFields_, null);
};
goog.inherits(proto.bilibili.dynamic.UpPermission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.UpPermission.displayName = 'proto.bilibili.dynamic.UpPermission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.UpPermissionItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.UpPermissionItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.UpPermissionItem.displayName = 'proto.bilibili.dynamic.UpPermissionItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.UserCreateMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.UserCreateMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.UserCreateMeta.displayName = 'proto.bilibili.dynamic.UserCreateMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bilibili.dynamic.VideoShareInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.dynamic.VideoShareInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.dynamic.VideoShareInfo.displayName = 'proto.bilibili.dynamic.VideoShareInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.AtGroup.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.AtGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.AtGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.AtGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.bilibili.dynamic.AtItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.AtGroup}
 */
proto.bilibili.dynamic.AtGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.AtGroup;
  return proto.bilibili.dynamic.AtGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.AtGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.AtGroup}
 */
proto.bilibili.dynamic.AtGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bilibili.dynamic.AtGroupType} */ (reader.readEnum());
      msg.setGroupType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    case 3:
      var value = new proto.bilibili.dynamic.AtItem;
      reader.readMessage(value,proto.bilibili.dynamic.AtItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.AtGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.AtGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.AtGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bilibili.dynamic.AtItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional AtGroupType group_type = 1;
 * @return {!proto.bilibili.dynamic.AtGroupType}
 */
proto.bilibili.dynamic.AtGroup.prototype.getGroupType = function() {
  return /** @type {!proto.bilibili.dynamic.AtGroupType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bilibili.dynamic.AtGroupType} value
 * @return {!proto.bilibili.dynamic.AtGroup} returns this
 */
proto.bilibili.dynamic.AtGroup.prototype.setGroupType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string group_name = 2;
 * @return {string}
 */
proto.bilibili.dynamic.AtGroup.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.AtGroup} returns this
 */
proto.bilibili.dynamic.AtGroup.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated AtItem items = 3;
 * @return {!Array<!proto.bilibili.dynamic.AtItem>}
 */
proto.bilibili.dynamic.AtGroup.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.AtItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.AtItem, 3));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.AtItem>} value
 * @return {!proto.bilibili.dynamic.AtGroup} returns this
*/
proto.bilibili.dynamic.AtGroup.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bilibili.dynamic.AtItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.AtItem}
 */
proto.bilibili.dynamic.AtGroup.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bilibili.dynamic.AtItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.AtGroup} returns this
 */
proto.bilibili.dynamic.AtGroup.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.AtItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.AtItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.AtItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    face: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fans: jspb.Message.getFieldWithDefault(msg, 4, 0),
    officialVerifyType: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.AtItem}
 */
proto.bilibili.dynamic.AtItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.AtItem;
  return proto.bilibili.dynamic.AtItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.AtItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.AtItem}
 */
proto.bilibili.dynamic.AtItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFace(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFans(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOfficialVerifyType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.AtItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.AtItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.AtItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFans();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getOfficialVerifyType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int64 uid = 1;
 * @return {number}
 */
proto.bilibili.dynamic.AtItem.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.AtItem} returns this
 */
proto.bilibili.dynamic.AtItem.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bilibili.dynamic.AtItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.AtItem} returns this
 */
proto.bilibili.dynamic.AtItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string face = 3;
 * @return {string}
 */
proto.bilibili.dynamic.AtItem.prototype.getFace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.AtItem} returns this
 */
proto.bilibili.dynamic.AtItem.prototype.setFace = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 fans = 4;
 * @return {number}
 */
proto.bilibili.dynamic.AtItem.prototype.getFans = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.AtItem} returns this
 */
proto.bilibili.dynamic.AtItem.prototype.setFans = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 official_verify_type = 5;
 * @return {number}
 */
proto.bilibili.dynamic.AtItem.prototype.getOfficialVerifyType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.AtItem} returns this
 */
proto.bilibili.dynamic.AtItem.prototype.setOfficialVerifyType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.AtListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.AtListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.AtListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.AtListReq}
 */
proto.bilibili.dynamic.AtListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.AtListReq;
  return proto.bilibili.dynamic.AtListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.AtListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.AtListReq}
 */
proto.bilibili.dynamic.AtListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.AtListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.AtListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.AtListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 uid = 1;
 * @return {number}
 */
proto.bilibili.dynamic.AtListReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.AtListReq} returns this
 */
proto.bilibili.dynamic.AtListReq.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.AtListRsp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.AtListRsp.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.AtListRsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.AtListRsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtListRsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    proto.bilibili.dynamic.AtGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.AtListRsp}
 */
proto.bilibili.dynamic.AtListRsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.AtListRsp;
  return proto.bilibili.dynamic.AtListRsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.AtListRsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.AtListRsp}
 */
proto.bilibili.dynamic.AtListRsp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.dynamic.AtGroup;
      reader.readMessage(value,proto.bilibili.dynamic.AtGroup.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.AtListRsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.AtListRsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.AtListRsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtListRsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bilibili.dynamic.AtGroup.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AtGroup groups = 1;
 * @return {!Array<!proto.bilibili.dynamic.AtGroup>}
 */
proto.bilibili.dynamic.AtListRsp.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.AtGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.AtGroup, 1));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.AtGroup>} value
 * @return {!proto.bilibili.dynamic.AtListRsp} returns this
*/
proto.bilibili.dynamic.AtListRsp.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bilibili.dynamic.AtGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.AtGroup}
 */
proto.bilibili.dynamic.AtListRsp.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bilibili.dynamic.AtGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.AtListRsp} returns this
 */
proto.bilibili.dynamic.AtListRsp.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.AtSearchReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.AtSearchReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.AtSearchReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtSearchReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    keyword: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.AtSearchReq}
 */
proto.bilibili.dynamic.AtSearchReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.AtSearchReq;
  return proto.bilibili.dynamic.AtSearchReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.AtSearchReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.AtSearchReq}
 */
proto.bilibili.dynamic.AtSearchReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.AtSearchReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.AtSearchReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.AtSearchReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.AtSearchReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 uid = 1;
 * @return {number}
 */
proto.bilibili.dynamic.AtSearchReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.AtSearchReq} returns this
 */
proto.bilibili.dynamic.AtSearchReq.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string keyword = 2;
 * @return {string}
 */
proto.bilibili.dynamic.AtSearchReq.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.AtSearchReq} returns this
 */
proto.bilibili.dynamic.AtSearchReq.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.BottomBusiness.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.BottomBusiness.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.BottomBusiness} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.BottomBusiness.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.BottomBusiness}
 */
proto.bilibili.dynamic.BottomBusiness.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.BottomBusiness;
  return proto.bilibili.dynamic.BottomBusiness.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.BottomBusiness} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.BottomBusiness}
 */
proto.bilibili.dynamic.BottomBusiness.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.BottomBusiness.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.BottomBusiness.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.BottomBusiness} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.BottomBusiness.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 rid = 1;
 * @return {number}
 */
proto.bilibili.dynamic.BottomBusiness.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.BottomBusiness} returns this
 */
proto.bilibili.dynamic.BottomBusiness.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 type = 2;
 * @return {number}
 */
proto.bilibili.dynamic.BottomBusiness.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.BottomBusiness} returns this
 */
proto.bilibili.dynamic.BottomBusiness.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateActivity.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateActivity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateActivity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateActivity.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    activityState: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isNewActivity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateActivity}
 */
proto.bilibili.dynamic.CreateActivity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateActivity;
  return proto.bilibili.dynamic.CreateActivity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateActivity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateActivity}
 */
proto.bilibili.dynamic.CreateActivity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActivityId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActivityState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsNewActivity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateActivity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateActivity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateActivity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateActivity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getActivityState();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsNewActivity();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAction();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int64 activity_id = 1;
 * @return {number}
 */
proto.bilibili.dynamic.CreateActivity.prototype.getActivityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateActivity} returns this
 */
proto.bilibili.dynamic.CreateActivity.prototype.setActivityId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 activity_state = 2;
 * @return {number}
 */
proto.bilibili.dynamic.CreateActivity.prototype.getActivityState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateActivity} returns this
 */
proto.bilibili.dynamic.CreateActivity.prototype.setActivityState = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 is_new_activity = 3;
 * @return {number}
 */
proto.bilibili.dynamic.CreateActivity.prototype.getIsNewActivity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateActivity} returns this
 */
proto.bilibili.dynamic.CreateActivity.prototype.setIsNewActivity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 action = 4;
 * @return {number}
 */
proto.bilibili.dynamic.CreateActivity.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateActivity} returns this
 */
proto.bilibili.dynamic.CreateActivity.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateAttachCard.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateAttachCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateAttachCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateAttachCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    goods: (f = msg.getGoods()) && proto.bilibili.dynamic.CreateGoodsCard.toObject(includeInstance, f),
    commonCard: (f = msg.getCommonCard()) && proto.bilibili.dynamic.CreateCommonAttachCard.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateAttachCard}
 */
proto.bilibili.dynamic.CreateAttachCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateAttachCard;
  return proto.bilibili.dynamic.CreateAttachCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateAttachCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateAttachCard}
 */
proto.bilibili.dynamic.CreateAttachCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.dynamic.CreateGoodsCard;
      reader.readMessage(value,proto.bilibili.dynamic.CreateGoodsCard.deserializeBinaryFromReader);
      msg.setGoods(value);
      break;
    case 2:
      var value = new proto.bilibili.dynamic.CreateCommonAttachCard;
      reader.readMessage(value,proto.bilibili.dynamic.CreateCommonAttachCard.deserializeBinaryFromReader);
      msg.setCommonCard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateAttachCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateAttachCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateAttachCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateAttachCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoods();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.dynamic.CreateGoodsCard.serializeBinaryToWriter
    );
  }
  f = message.getCommonCard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.dynamic.CreateCommonAttachCard.serializeBinaryToWriter
    );
  }
};


/**
 * optional CreateGoodsCard goods = 1;
 * @return {?proto.bilibili.dynamic.CreateGoodsCard}
 */
proto.bilibili.dynamic.CreateAttachCard.prototype.getGoods = function() {
  return /** @type{?proto.bilibili.dynamic.CreateGoodsCard} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.CreateGoodsCard, 1));
};


/**
 * @param {?proto.bilibili.dynamic.CreateGoodsCard|undefined} value
 * @return {!proto.bilibili.dynamic.CreateAttachCard} returns this
*/
proto.bilibili.dynamic.CreateAttachCard.prototype.setGoods = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateAttachCard} returns this
 */
proto.bilibili.dynamic.CreateAttachCard.prototype.clearGoods = function() {
  return this.setGoods(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateAttachCard.prototype.hasGoods = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CreateCommonAttachCard common_card = 2;
 * @return {?proto.bilibili.dynamic.CreateCommonAttachCard}
 */
proto.bilibili.dynamic.CreateAttachCard.prototype.getCommonCard = function() {
  return /** @type{?proto.bilibili.dynamic.CreateCommonAttachCard} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.CreateCommonAttachCard, 2));
};


/**
 * @param {?proto.bilibili.dynamic.CreateCommonAttachCard|undefined} value
 * @return {!proto.bilibili.dynamic.CreateAttachCard} returns this
*/
proto.bilibili.dynamic.CreateAttachCard.prototype.setCommonCard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateAttachCard} returns this
 */
proto.bilibili.dynamic.CreateAttachCard.prototype.clearCommonCard = function() {
  return this.setCommonCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateAttachCard.prototype.hasCommonCard = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateCheckResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateCheckResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateCheckResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    setting: (f = msg.getSetting()) && proto.bilibili.dynamic.PublishSetting.toObject(includeInstance, f),
    permission: (f = msg.getPermission()) && proto.bilibili.dynamic.UpPermission.toObject(includeInstance, f),
    shareInfo: (f = msg.getShareInfo()) && proto.bilibili.dynamic.ShareChannel.toObject(includeInstance, f),
    yellowBar: (f = msg.getYellowBar()) && proto.bilibili.dynamic.PublishYellowBar.toObject(includeInstance, f),
    plusRedDot: (f = msg.getPlusRedDot()) && proto.bilibili.dynamic.PlusRedDot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateCheckResp}
 */
proto.bilibili.dynamic.CreateCheckResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateCheckResp;
  return proto.bilibili.dynamic.CreateCheckResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateCheckResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateCheckResp}
 */
proto.bilibili.dynamic.CreateCheckResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.dynamic.PublishSetting;
      reader.readMessage(value,proto.bilibili.dynamic.PublishSetting.deserializeBinaryFromReader);
      msg.setSetting(value);
      break;
    case 2:
      var value = new proto.bilibili.dynamic.UpPermission;
      reader.readMessage(value,proto.bilibili.dynamic.UpPermission.deserializeBinaryFromReader);
      msg.setPermission(value);
      break;
    case 3:
      var value = new proto.bilibili.dynamic.ShareChannel;
      reader.readMessage(value,proto.bilibili.dynamic.ShareChannel.deserializeBinaryFromReader);
      msg.setShareInfo(value);
      break;
    case 4:
      var value = new proto.bilibili.dynamic.PublishYellowBar;
      reader.readMessage(value,proto.bilibili.dynamic.PublishYellowBar.deserializeBinaryFromReader);
      msg.setYellowBar(value);
      break;
    case 5:
      var value = new proto.bilibili.dynamic.PlusRedDot;
      reader.readMessage(value,proto.bilibili.dynamic.PlusRedDot.deserializeBinaryFromReader);
      msg.setPlusRedDot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateCheckResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateCheckResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateCheckResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetting();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.dynamic.PublishSetting.serializeBinaryToWriter
    );
  }
  f = message.getPermission();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.dynamic.UpPermission.serializeBinaryToWriter
    );
  }
  f = message.getShareInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.dynamic.ShareChannel.serializeBinaryToWriter
    );
  }
  f = message.getYellowBar();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.dynamic.PublishYellowBar.serializeBinaryToWriter
    );
  }
  f = message.getPlusRedDot();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.dynamic.PlusRedDot.serializeBinaryToWriter
    );
  }
};


/**
 * optional PublishSetting setting = 1;
 * @return {?proto.bilibili.dynamic.PublishSetting}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.getSetting = function() {
  return /** @type{?proto.bilibili.dynamic.PublishSetting} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.PublishSetting, 1));
};


/**
 * @param {?proto.bilibili.dynamic.PublishSetting|undefined} value
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
*/
proto.bilibili.dynamic.CreateCheckResp.prototype.setSetting = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.clearSetting = function() {
  return this.setSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.hasSetting = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UpPermission permission = 2;
 * @return {?proto.bilibili.dynamic.UpPermission}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.getPermission = function() {
  return /** @type{?proto.bilibili.dynamic.UpPermission} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.UpPermission, 2));
};


/**
 * @param {?proto.bilibili.dynamic.UpPermission|undefined} value
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
*/
proto.bilibili.dynamic.CreateCheckResp.prototype.setPermission = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.clearPermission = function() {
  return this.setPermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ShareChannel share_info = 3;
 * @return {?proto.bilibili.dynamic.ShareChannel}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.getShareInfo = function() {
  return /** @type{?proto.bilibili.dynamic.ShareChannel} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.ShareChannel, 3));
};


/**
 * @param {?proto.bilibili.dynamic.ShareChannel|undefined} value
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
*/
proto.bilibili.dynamic.CreateCheckResp.prototype.setShareInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.clearShareInfo = function() {
  return this.setShareInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.hasShareInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PublishYellowBar yellow_bar = 4;
 * @return {?proto.bilibili.dynamic.PublishYellowBar}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.getYellowBar = function() {
  return /** @type{?proto.bilibili.dynamic.PublishYellowBar} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.PublishYellowBar, 4));
};


/**
 * @param {?proto.bilibili.dynamic.PublishYellowBar|undefined} value
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
*/
proto.bilibili.dynamic.CreateCheckResp.prototype.setYellowBar = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.clearYellowBar = function() {
  return this.setYellowBar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.hasYellowBar = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PlusRedDot plus_red_dot = 5;
 * @return {?proto.bilibili.dynamic.PlusRedDot}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.getPlusRedDot = function() {
  return /** @type{?proto.bilibili.dynamic.PlusRedDot} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.PlusRedDot, 5));
};


/**
 * @param {?proto.bilibili.dynamic.PlusRedDot|undefined} value
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
*/
proto.bilibili.dynamic.CreateCheckResp.prototype.setPlusRedDot = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateCheckResp} returns this
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.clearPlusRedDot = function() {
  return this.setPlusRedDot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateCheckResp.prototype.hasPlusRedDot = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateCommonAttachCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateCommonAttachCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateCommonAttachCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bizId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reserveSource: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reserveLottery: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateCommonAttachCard}
 */
proto.bilibili.dynamic.CreateCommonAttachCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateCommonAttachCard;
  return proto.bilibili.dynamic.CreateCommonAttachCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateCommonAttachCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateCommonAttachCard}
 */
proto.bilibili.dynamic.CreateCommonAttachCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bilibili.dynamic.AttachCardType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBizId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReserveSource(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReserveLottery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateCommonAttachCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateCommonAttachCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateCommonAttachCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBizId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getReserveSource();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getReserveLottery();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional AttachCardType type = 1;
 * @return {!proto.bilibili.dynamic.AttachCardType}
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.getType = function() {
  return /** @type {!proto.bilibili.dynamic.AttachCardType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bilibili.dynamic.AttachCardType} value
 * @return {!proto.bilibili.dynamic.CreateCommonAttachCard} returns this
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 biz_id = 2;
 * @return {number}
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.getBizId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateCommonAttachCard} returns this
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.setBizId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 reserve_source = 3;
 * @return {number}
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.getReserveSource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateCommonAttachCard} returns this
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.setReserveSource = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 reserve_lottery = 4;
 * @return {number}
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.getReserveLottery = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateCommonAttachCard} returns this
 */
proto.bilibili.dynamic.CreateCommonAttachCard.prototype.setReserveLottery = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.CreateContent.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateContent.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentsList: jspb.Message.toObjectList(msg.getContentsList(),
    proto.bilibili.dynamic.CreateContentItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateContent}
 */
proto.bilibili.dynamic.CreateContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateContent;
  return proto.bilibili.dynamic.CreateContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateContent}
 */
proto.bilibili.dynamic.CreateContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.dynamic.CreateContentItem;
      reader.readMessage(value,proto.bilibili.dynamic.CreateContentItem.deserializeBinaryFromReader);
      msg.addContents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bilibili.dynamic.CreateContentItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CreateContentItem contents = 1;
 * @return {!Array<!proto.bilibili.dynamic.CreateContentItem>}
 */
proto.bilibili.dynamic.CreateContent.prototype.getContentsList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.CreateContentItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.CreateContentItem, 1));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.CreateContentItem>} value
 * @return {!proto.bilibili.dynamic.CreateContent} returns this
*/
proto.bilibili.dynamic.CreateContent.prototype.setContentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bilibili.dynamic.CreateContentItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.CreateContentItem}
 */
proto.bilibili.dynamic.CreateContent.prototype.addContents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bilibili.dynamic.CreateContentItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.CreateContent} returns this
 */
proto.bilibili.dynamic.CreateContent.prototype.clearContentsList = function() {
  return this.setContentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateContentItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateContentItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateContentItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateContentItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bizId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    goods: (f = msg.getGoods()) && proto.bilibili.dynamic.GoodsContent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateContentItem}
 */
proto.bilibili.dynamic.CreateContentItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateContentItem;
  return proto.bilibili.dynamic.CreateContentItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateContentItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateContentItem}
 */
proto.bilibili.dynamic.CreateContentItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRawText(value);
      break;
    case 2:
      var value = /** @type {!proto.bilibili.dynamic.ContentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBizId(value);
      break;
    case 4:
      var value = new proto.bilibili.dynamic.GoodsContent;
      reader.readMessage(value,proto.bilibili.dynamic.GoodsContent.deserializeBinaryFromReader);
      msg.setGoods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateContentItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateContentItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateContentItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateContentItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getBizId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGoods();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.dynamic.GoodsContent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string raw_text = 1;
 * @return {string}
 */
proto.bilibili.dynamic.CreateContentItem.prototype.getRawText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateContentItem} returns this
 */
proto.bilibili.dynamic.CreateContentItem.prototype.setRawText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContentType type = 2;
 * @return {!proto.bilibili.dynamic.ContentType}
 */
proto.bilibili.dynamic.CreateContentItem.prototype.getType = function() {
  return /** @type {!proto.bilibili.dynamic.ContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bilibili.dynamic.ContentType} value
 * @return {!proto.bilibili.dynamic.CreateContentItem} returns this
 */
proto.bilibili.dynamic.CreateContentItem.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string biz_id = 3;
 * @return {string}
 */
proto.bilibili.dynamic.CreateContentItem.prototype.getBizId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateContentItem} returns this
 */
proto.bilibili.dynamic.CreateContentItem.prototype.setBizId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional GoodsContent goods = 4;
 * @return {?proto.bilibili.dynamic.GoodsContent}
 */
proto.bilibili.dynamic.CreateContentItem.prototype.getGoods = function() {
  return /** @type{?proto.bilibili.dynamic.GoodsContent} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.GoodsContent, 4));
};


/**
 * @param {?proto.bilibili.dynamic.GoodsContent|undefined} value
 * @return {!proto.bilibili.dynamic.CreateContentItem} returns this
*/
proto.bilibili.dynamic.CreateContentItem.prototype.setGoods = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateContentItem} returns this
 */
proto.bilibili.dynamic.CreateContentItem.prototype.clearGoods = function() {
  return this.setGoods(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateContentItem.prototype.hasGoods = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.CreateDynVideo.repeatedFields_ = [16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateDynVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateDynVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateDynVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
    relationFrom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bizFrom: jspb.Message.getFieldWithDefault(msg, 3, 0),
    copyright: jspb.Message.getFieldWithDefault(msg, 4, 0),
    noPublic: jspb.Message.getFieldWithDefault(msg, 5, 0),
    noReprint: jspb.Message.getFieldWithDefault(msg, 6, 0),
    source: jspb.Message.getFieldWithDefault(msg, 7, ""),
    cover: jspb.Message.getFieldWithDefault(msg, 8, ""),
    title: jspb.Message.getFieldWithDefault(msg, 9, ""),
    tid: jspb.Message.getFieldWithDefault(msg, 10, 0),
    tag: jspb.Message.getFieldWithDefault(msg, 11, ""),
    desc: jspb.Message.getFieldWithDefault(msg, 12, ""),
    descFormatId: jspb.Message.getFieldWithDefault(msg, 13, 0),
    openElec: jspb.Message.getFieldWithDefault(msg, 14, 0),
    dtime: jspb.Message.getFieldWithDefault(msg, 15, 0),
    videosList: jspb.Message.toObjectList(msg.getVideosList(),
    proto.bilibili.dynamic.DynVideoMultiP.toObject, includeInstance),
    watermark: (f = msg.getWatermark()) && proto.bilibili.dynamic.DynVideoWatermark.toObject(includeInstance, f),
    missionId: jspb.Message.getFieldWithDefault(msg, 18, 0),
    dynamic: jspb.Message.getFieldWithDefault(msg, 19, ""),
    dynamicExtension: jspb.Message.getFieldWithDefault(msg, 20, ""),
    dynamicCtrl: jspb.Message.getFieldWithDefault(msg, 21, ""),
    dynamicFrom: jspb.Message.getFieldWithDefault(msg, 22, ""),
    lotteryId: jspb.Message.getFieldWithDefault(msg, 23, 0),
    vote: (f = msg.getVote()) && proto.bilibili.dynamic.DynVideoVote.toObject(includeInstance, f),
    upSelectionReply: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    upCloseReply: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    upCloseDanmu: jspb.Message.getBooleanFieldWithDefault(msg, 27, false),
    upFrom: jspb.Message.getFieldWithDefault(msg, 28, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 29, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateDynVideo}
 */
proto.bilibili.dynamic.CreateDynVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateDynVideo;
  return proto.bilibili.dynamic.CreateDynVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateDynVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateDynVideo}
 */
proto.bilibili.dynamic.CreateDynVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelationFrom(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBizFrom(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCopyright(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNoPublic(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNoReprint(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDescFormatId(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpenElec(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDtime(value);
      break;
    case 16:
      var value = new proto.bilibili.dynamic.DynVideoMultiP;
      reader.readMessage(value,proto.bilibili.dynamic.DynVideoMultiP.deserializeBinaryFromReader);
      msg.addVideos(value);
      break;
    case 17:
      var value = new proto.bilibili.dynamic.DynVideoWatermark;
      reader.readMessage(value,proto.bilibili.dynamic.DynVideoWatermark.deserializeBinaryFromReader);
      msg.setWatermark(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMissionId(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setDynamic(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setDynamicExtension(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setDynamicCtrl(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setDynamicFrom(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLotteryId(value);
      break;
    case 24:
      var value = new proto.bilibili.dynamic.DynVideoVote;
      reader.readMessage(value,proto.bilibili.dynamic.DynVideoVote.deserializeBinaryFromReader);
      msg.setVote(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpSelectionReply(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpCloseReply(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpCloseDanmu(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpFrom(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateDynVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateDynVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateDynVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelationFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBizFrom();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCopyright();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getNoPublic();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getNoReprint();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTid();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDescFormatId();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getOpenElec();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getDtime();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getVideosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.bilibili.dynamic.DynVideoMultiP.serializeBinaryToWriter
    );
  }
  f = message.getWatermark();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bilibili.dynamic.DynVideoWatermark.serializeBinaryToWriter
    );
  }
  f = message.getMissionId();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getDynamic();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getDynamicExtension();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getDynamicCtrl();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getDynamicFrom();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getLotteryId();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.bilibili.dynamic.DynVideoVote.serializeBinaryToWriter
    );
  }
  f = message.getUpSelectionReply();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getUpCloseReply();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getUpCloseDanmu();
  if (f) {
    writer.writeBool(
      27,
      f
    );
  }
  f = message.getUpFrom();
  if (f !== 0) {
    writer.writeInt64(
      28,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      29,
      f
    );
  }
};


/**
 * optional string relation_from = 1;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getRelationFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setRelationFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 biz_from = 3;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getBizFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setBizFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 copyright = 4;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getCopyright = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setCopyright = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 no_public = 5;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getNoPublic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setNoPublic = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 no_reprint = 6;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getNoReprint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setNoReprint = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string source = 7;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string cover = 8;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string title = 9;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 tid = 10;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getTid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setTid = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string tag = 11;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string desc = 12;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 desc_format_id = 13;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getDescFormatId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setDescFormatId = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 open_elec = 14;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getOpenElec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setOpenElec = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 dtime = 15;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getDtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setDtime = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * repeated DynVideoMultiP videos = 16;
 * @return {!Array<!proto.bilibili.dynamic.DynVideoMultiP>}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getVideosList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.DynVideoMultiP>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.DynVideoMultiP, 16));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.DynVideoMultiP>} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
*/
proto.bilibili.dynamic.CreateDynVideo.prototype.setVideosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.bilibili.dynamic.DynVideoMultiP=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.DynVideoMultiP}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.addVideos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.bilibili.dynamic.DynVideoMultiP, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.clearVideosList = function() {
  return this.setVideosList([]);
};


/**
 * optional DynVideoWatermark watermark = 17;
 * @return {?proto.bilibili.dynamic.DynVideoWatermark}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getWatermark = function() {
  return /** @type{?proto.bilibili.dynamic.DynVideoWatermark} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.DynVideoWatermark, 17));
};


/**
 * @param {?proto.bilibili.dynamic.DynVideoWatermark|undefined} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
*/
proto.bilibili.dynamic.CreateDynVideo.prototype.setWatermark = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.clearWatermark = function() {
  return this.setWatermark(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.hasWatermark = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int64 mission_id = 18;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getMissionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setMissionId = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional string dynamic = 19;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getDynamic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setDynamic = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string dynamic_extension = 20;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getDynamicExtension = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setDynamicExtension = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string dynamic_ctrl = 21;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getDynamicCtrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setDynamicCtrl = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string dynamic_from = 22;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getDynamicFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setDynamicFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional int64 lottery_id = 23;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getLotteryId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setLotteryId = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional DynVideoVote vote = 24;
 * @return {?proto.bilibili.dynamic.DynVideoVote}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getVote = function() {
  return /** @type{?proto.bilibili.dynamic.DynVideoVote} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.DynVideoVote, 24));
};


/**
 * @param {?proto.bilibili.dynamic.DynVideoVote|undefined} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
*/
proto.bilibili.dynamic.CreateDynVideo.prototype.setVote = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.clearVote = function() {
  return this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.hasVote = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional bool up_selection_reply = 25;
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getUpSelectionReply = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setUpSelectionReply = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional bool up_close_reply = 26;
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getUpCloseReply = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setUpCloseReply = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional bool up_close_danmu = 27;
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getUpCloseDanmu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 27, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setUpCloseDanmu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 27, value);
};


/**
 * optional int64 up_from = 28;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getUpFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setUpFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional int64 duration = 29;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideo} returns this
 */
proto.bilibili.dynamic.CreateDynVideo.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateDynVideoResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateDynVideoResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateDynVideoResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    aid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    submitactBanner: (f = msg.getSubmitactBanner()) && proto.bilibili.dynamic.DynVideoSubmitActBanner.toObject(includeInstance, f),
    pushIntro: (f = msg.getPushIntro()) && proto.bilibili.dynamic.DynVideoPushIntro.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateDynVideoResult}
 */
proto.bilibili.dynamic.CreateDynVideoResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateDynVideoResult;
  return proto.bilibili.dynamic.CreateDynVideoResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateDynVideoResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateDynVideoResult}
 */
proto.bilibili.dynamic.CreateDynVideoResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.bilibili.dynamic.DynVideoSubmitActBanner;
      reader.readMessage(value,proto.bilibili.dynamic.DynVideoSubmitActBanner.deserializeBinaryFromReader);
      msg.setSubmitactBanner(value);
      break;
    case 4:
      var value = new proto.bilibili.dynamic.DynVideoPushIntro;
      reader.readMessage(value,proto.bilibili.dynamic.DynVideoPushIntro.deserializeBinaryFromReader);
      msg.setPushIntro(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateDynVideoResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateDynVideoResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateDynVideoResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubmitactBanner();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.dynamic.DynVideoSubmitActBanner.serializeBinaryToWriter
    );
  }
  f = message.getPushIntro();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.dynamic.DynVideoPushIntro.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 aid = 1;
 * @return {number}
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.getAid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateDynVideoResult} returns this
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.setAid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateDynVideoResult} returns this
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DynVideoSubmitActBanner submitact_banner = 3;
 * @return {?proto.bilibili.dynamic.DynVideoSubmitActBanner}
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.getSubmitactBanner = function() {
  return /** @type{?proto.bilibili.dynamic.DynVideoSubmitActBanner} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.DynVideoSubmitActBanner, 3));
};


/**
 * @param {?proto.bilibili.dynamic.DynVideoSubmitActBanner|undefined} value
 * @return {!proto.bilibili.dynamic.CreateDynVideoResult} returns this
*/
proto.bilibili.dynamic.CreateDynVideoResult.prototype.setSubmitactBanner = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateDynVideoResult} returns this
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.clearSubmitactBanner = function() {
  return this.setSubmitactBanner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.hasSubmitactBanner = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DynVideoPushIntro push_intro = 4;
 * @return {?proto.bilibili.dynamic.DynVideoPushIntro}
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.getPushIntro = function() {
  return /** @type{?proto.bilibili.dynamic.DynVideoPushIntro} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.DynVideoPushIntro, 4));
};


/**
 * @param {?proto.bilibili.dynamic.DynVideoPushIntro|undefined} value
 * @return {!proto.bilibili.dynamic.CreateDynVideoResult} returns this
*/
proto.bilibili.dynamic.CreateDynVideoResult.prototype.setPushIntro = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateDynVideoResult} returns this
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.clearPushIntro = function() {
  return this.setPushIntro(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateDynVideoResult.prototype.hasPushIntro = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.CreateGoodsCard.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateGoodsCard.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateGoodsCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateGoodsCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateGoodsCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateGoodsCard}
 */
proto.bilibili.dynamic.CreateGoodsCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateGoodsCard;
  return proto.bilibili.dynamic.CreateGoodsCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateGoodsCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateGoodsCard}
 */
proto.bilibili.dynamic.CreateGoodsCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addItemId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateGoodsCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateGoodsCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateGoodsCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateGoodsCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string item_id = 1;
 * @return {!Array<string>}
 */
proto.bilibili.dynamic.CreateGoodsCard.prototype.getItemIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.dynamic.CreateGoodsCard} returns this
 */
proto.bilibili.dynamic.CreateGoodsCard.prototype.setItemIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.CreateGoodsCard} returns this
 */
proto.bilibili.dynamic.CreateGoodsCard.prototype.addItemId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.CreateGoodsCard} returns this
 */
proto.bilibili.dynamic.CreateGoodsCard.prototype.clearItemIdList = function() {
  return this.setItemIdList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateOption.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    upChooseComment: jspb.Message.getFieldWithDefault(msg, 1, 0),
    closeComment: jspb.Message.getFieldWithDefault(msg, 2, 0),
    foldExclude: jspb.Message.getFieldWithDefault(msg, 3, 0),
    auditLevel: jspb.Message.getFieldWithDefault(msg, 4, 0),
    syncToComment: jspb.Message.getFieldWithDefault(msg, 5, 0),
    videoShareInfo: (f = msg.getVideoShareInfo()) && proto.bilibili.dynamic.VideoShareInfo.toObject(includeInstance, f),
    activity: (f = msg.getActivity()) && proto.bilibili.dynamic.CreateActivity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateOption}
 */
proto.bilibili.dynamic.CreateOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateOption;
  return proto.bilibili.dynamic.CreateOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateOption}
 */
proto.bilibili.dynamic.CreateOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpChooseComment(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCloseComment(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFoldExclude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAuditLevel(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSyncToComment(value);
      break;
    case 6:
      var value = new proto.bilibili.dynamic.VideoShareInfo;
      reader.readMessage(value,proto.bilibili.dynamic.VideoShareInfo.deserializeBinaryFromReader);
      msg.setVideoShareInfo(value);
      break;
    case 7:
      var value = new proto.bilibili.dynamic.CreateActivity;
      reader.readMessage(value,proto.bilibili.dynamic.CreateActivity.deserializeBinaryFromReader);
      msg.setActivity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpChooseComment();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCloseComment();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFoldExclude();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAuditLevel();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSyncToComment();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getVideoShareInfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.dynamic.VideoShareInfo.serializeBinaryToWriter
    );
  }
  f = message.getActivity();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bilibili.dynamic.CreateActivity.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 up_choose_comment = 1;
 * @return {number}
 */
proto.bilibili.dynamic.CreateOption.prototype.getUpChooseComment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
 */
proto.bilibili.dynamic.CreateOption.prototype.setUpChooseComment = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 close_comment = 2;
 * @return {number}
 */
proto.bilibili.dynamic.CreateOption.prototype.getCloseComment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
 */
proto.bilibili.dynamic.CreateOption.prototype.setCloseComment = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 fold_exclude = 3;
 * @return {number}
 */
proto.bilibili.dynamic.CreateOption.prototype.getFoldExclude = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
 */
proto.bilibili.dynamic.CreateOption.prototype.setFoldExclude = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 audit_level = 4;
 * @return {number}
 */
proto.bilibili.dynamic.CreateOption.prototype.getAuditLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
 */
proto.bilibili.dynamic.CreateOption.prototype.setAuditLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 sync_to_comment = 5;
 * @return {number}
 */
proto.bilibili.dynamic.CreateOption.prototype.getSyncToComment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
 */
proto.bilibili.dynamic.CreateOption.prototype.setSyncToComment = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional VideoShareInfo video_share_info = 6;
 * @return {?proto.bilibili.dynamic.VideoShareInfo}
 */
proto.bilibili.dynamic.CreateOption.prototype.getVideoShareInfo = function() {
  return /** @type{?proto.bilibili.dynamic.VideoShareInfo} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.VideoShareInfo, 6));
};


/**
 * @param {?proto.bilibili.dynamic.VideoShareInfo|undefined} value
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
*/
proto.bilibili.dynamic.CreateOption.prototype.setVideoShareInfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
 */
proto.bilibili.dynamic.CreateOption.prototype.clearVideoShareInfo = function() {
  return this.setVideoShareInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateOption.prototype.hasVideoShareInfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CreateActivity activity = 7;
 * @return {?proto.bilibili.dynamic.CreateActivity}
 */
proto.bilibili.dynamic.CreateOption.prototype.getActivity = function() {
  return /** @type{?proto.bilibili.dynamic.CreateActivity} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.CreateActivity, 7));
};


/**
 * @param {?proto.bilibili.dynamic.CreateActivity|undefined} value
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
*/
proto.bilibili.dynamic.CreateOption.prototype.setActivity = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateOption} returns this
 */
proto.bilibili.dynamic.CreateOption.prototype.clearActivity = function() {
  return this.setActivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateOption.prototype.hasActivity = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.CreatePic.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreatePic.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreatePic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreatePic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreatePic.toObject = function(includeInstance, msg) {
  var f, obj = {
    imgSrc: jspb.Message.getFieldWithDefault(msg, 1, ""),
    imgWidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    imgHeight: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    imgSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    imgTagsList: jspb.Message.toObjectList(msg.getImgTagsList(),
    proto.bilibili.dynamic.CreatePicTag.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreatePic}
 */
proto.bilibili.dynamic.CreatePic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreatePic;
  return proto.bilibili.dynamic.CreatePic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreatePic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreatePic}
 */
proto.bilibili.dynamic.CreatePic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgSrc(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setImgWidth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setImgHeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setImgSize(value);
      break;
    case 5:
      var value = new proto.bilibili.dynamic.CreatePicTag;
      reader.readMessage(value,proto.bilibili.dynamic.CreatePicTag.deserializeBinaryFromReader);
      msg.addImgTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreatePic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreatePic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreatePic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreatePic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImgSrc();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImgWidth();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getImgHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getImgSize();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getImgTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bilibili.dynamic.CreatePicTag.serializeBinaryToWriter
    );
  }
};


/**
 * optional string img_src = 1;
 * @return {string}
 */
proto.bilibili.dynamic.CreatePic.prototype.getImgSrc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreatePic} returns this
 */
proto.bilibili.dynamic.CreatePic.prototype.setImgSrc = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double img_width = 2;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePic.prototype.getImgWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePic} returns this
 */
proto.bilibili.dynamic.CreatePic.prototype.setImgWidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double img_height = 3;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePic.prototype.getImgHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePic} returns this
 */
proto.bilibili.dynamic.CreatePic.prototype.setImgHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double img_size = 4;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePic.prototype.getImgSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePic} returns this
 */
proto.bilibili.dynamic.CreatePic.prototype.setImgSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated CreatePicTag img_tags = 5;
 * @return {!Array<!proto.bilibili.dynamic.CreatePicTag>}
 */
proto.bilibili.dynamic.CreatePic.prototype.getImgTagsList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.CreatePicTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.CreatePicTag, 5));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.CreatePicTag>} value
 * @return {!proto.bilibili.dynamic.CreatePic} returns this
*/
proto.bilibili.dynamic.CreatePic.prototype.setImgTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bilibili.dynamic.CreatePicTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.CreatePicTag}
 */
proto.bilibili.dynamic.CreatePic.prototype.addImgTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bilibili.dynamic.CreatePicTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.CreatePic} returns this
 */
proto.bilibili.dynamic.CreatePic.prototype.clearImgTagsList = function() {
  return this.setImgTagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreatePicTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreatePicTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreatePicTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    text: jspb.Message.getFieldWithDefault(msg, 4, ""),
    textString: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sourceType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    url: jspb.Message.getFieldWithDefault(msg, 8, ""),
    schemaUrl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    jumpUrl: jspb.Message.getFieldWithDefault(msg, 10, ""),
    orientation: jspb.Message.getFieldWithDefault(msg, 11, 0),
    x: jspb.Message.getFieldWithDefault(msg, 12, 0),
    y: jspb.Message.getFieldWithDefault(msg, 13, 0),
    poi: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreatePicTag}
 */
proto.bilibili.dynamic.CreatePicTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreatePicTag;
  return proto.bilibili.dynamic.CreatePicTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreatePicTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreatePicTag}
 */
proto.bilibili.dynamic.CreatePicTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setItemId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextString(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSourceType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaUrl(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setJumpUrl(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrientation(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setX(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setY(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPoi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreatePicTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreatePicTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreatePicTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTextString();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSourceType();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSchemaUrl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getJumpUrl();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOrientation();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getX();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getPoi();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional int64 item_id = 1;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getItemId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setItemId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 tid = 2;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getTid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setTid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 mid = 3;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getMid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setMid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string text_string = 5;
 * @return {string}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getTextString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setTextString = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 type = 6;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 source_type = 7;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getSourceType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string url = 8;
 * @return {string}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string schema_url = 9;
 * @return {string}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getSchemaUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setSchemaUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string jump_url = 10;
 * @return {string}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getJumpUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setJumpUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 orientation = 11;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getOrientation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setOrientation = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 x = 12;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 y = 13;
 * @return {number}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string poi = 14;
 * @return {string}
 */
proto.bilibili.dynamic.CreatePicTag.prototype.getPoi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreatePicTag} returns this
 */
proto.bilibili.dynamic.CreatePicTag.prototype.setPoi = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    dynId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dynIdStr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dynType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dynRid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fakeCard: (f = msg.getFakeCard()) && bilibili_app_dynamic_v2_dynamic_pb.DynamicItem.toObject(includeInstance, f),
    videoResult: (f = msg.getVideoResult()) && proto.bilibili.dynamic.CreateDynVideoResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateResp}
 */
proto.bilibili.dynamic.CreateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateResp;
  return proto.bilibili.dynamic.CreateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateResp}
 */
proto.bilibili.dynamic.CreateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDynId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDynIdStr(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDynType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDynRid(value);
      break;
    case 5:
      var value = new bilibili_app_dynamic_v2_dynamic_pb.DynamicItem;
      reader.readMessage(value,bilibili_app_dynamic_v2_dynamic_pb.DynamicItem.deserializeBinaryFromReader);
      msg.setFakeCard(value);
      break;
    case 6:
      var value = new proto.bilibili.dynamic.CreateDynVideoResult;
      reader.readMessage(value,proto.bilibili.dynamic.CreateDynVideoResult.deserializeBinaryFromReader);
      msg.setVideoResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDynId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDynIdStr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDynType();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDynRid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFakeCard();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bilibili_app_dynamic_v2_dynamic_pb.DynamicItem.serializeBinaryToWriter
    );
  }
  f = message.getVideoResult();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bilibili.dynamic.CreateDynVideoResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 dyn_id = 1;
 * @return {number}
 */
proto.bilibili.dynamic.CreateResp.prototype.getDynId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateResp} returns this
 */
proto.bilibili.dynamic.CreateResp.prototype.setDynId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string dyn_id_str = 2;
 * @return {string}
 */
proto.bilibili.dynamic.CreateResp.prototype.getDynIdStr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateResp} returns this
 */
proto.bilibili.dynamic.CreateResp.prototype.setDynIdStr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 dyn_type = 3;
 * @return {number}
 */
proto.bilibili.dynamic.CreateResp.prototype.getDynType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateResp} returns this
 */
proto.bilibili.dynamic.CreateResp.prototype.setDynType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 dyn_rid = 4;
 * @return {number}
 */
proto.bilibili.dynamic.CreateResp.prototype.getDynRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateResp} returns this
 */
proto.bilibili.dynamic.CreateResp.prototype.setDynRid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bilibili.app.dynamic.v2.DynamicItem fake_card = 5;
 * @return {?proto.bilibili.app.dynamic.v2.DynamicItem}
 */
proto.bilibili.dynamic.CreateResp.prototype.getFakeCard = function() {
  return /** @type{?proto.bilibili.app.dynamic.v2.DynamicItem} */ (
    jspb.Message.getWrapperField(this, bilibili_app_dynamic_v2_dynamic_pb.DynamicItem, 5));
};


/**
 * @param {?proto.bilibili.app.dynamic.v2.DynamicItem|undefined} value
 * @return {!proto.bilibili.dynamic.CreateResp} returns this
*/
proto.bilibili.dynamic.CreateResp.prototype.setFakeCard = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateResp} returns this
 */
proto.bilibili.dynamic.CreateResp.prototype.clearFakeCard = function() {
  return this.setFakeCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateResp.prototype.hasFakeCard = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CreateDynVideoResult video_result = 6;
 * @return {?proto.bilibili.dynamic.CreateDynVideoResult}
 */
proto.bilibili.dynamic.CreateResp.prototype.getVideoResult = function() {
  return /** @type{?proto.bilibili.dynamic.CreateDynVideoResult} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.CreateDynVideoResult, 6));
};


/**
 * @param {?proto.bilibili.dynamic.CreateDynVideoResult|undefined} value
 * @return {!proto.bilibili.dynamic.CreateResp} returns this
*/
proto.bilibili.dynamic.CreateResp.prototype.setVideoResult = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateResp} returns this
 */
proto.bilibili.dynamic.CreateResp.prototype.clearVideoResult = function() {
  return this.setVideoResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateResp.prototype.hasVideoResult = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateTag.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    lbs: (f = msg.getLbs()) && proto.bilibili.dynamic.ExtLbs.toObject(includeInstance, f),
    sdkGame: (f = msg.getSdkGame()) && proto.bilibili.dynamic.BottomBusiness.toObject(includeInstance, f),
    diversion: (f = msg.getDiversion()) && proto.bilibili.dynamic.BottomBusiness.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateTag}
 */
proto.bilibili.dynamic.CreateTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateTag;
  return proto.bilibili.dynamic.CreateTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateTag}
 */
proto.bilibili.dynamic.CreateTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.dynamic.ExtLbs;
      reader.readMessage(value,proto.bilibili.dynamic.ExtLbs.deserializeBinaryFromReader);
      msg.setLbs(value);
      break;
    case 2:
      var value = new proto.bilibili.dynamic.BottomBusiness;
      reader.readMessage(value,proto.bilibili.dynamic.BottomBusiness.deserializeBinaryFromReader);
      msg.setSdkGame(value);
      break;
    case 3:
      var value = new proto.bilibili.dynamic.BottomBusiness;
      reader.readMessage(value,proto.bilibili.dynamic.BottomBusiness.deserializeBinaryFromReader);
      msg.setDiversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLbs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.dynamic.ExtLbs.serializeBinaryToWriter
    );
  }
  f = message.getSdkGame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.dynamic.BottomBusiness.serializeBinaryToWriter
    );
  }
  f = message.getDiversion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.dynamic.BottomBusiness.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExtLbs lbs = 1;
 * @return {?proto.bilibili.dynamic.ExtLbs}
 */
proto.bilibili.dynamic.CreateTag.prototype.getLbs = function() {
  return /** @type{?proto.bilibili.dynamic.ExtLbs} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.ExtLbs, 1));
};


/**
 * @param {?proto.bilibili.dynamic.ExtLbs|undefined} value
 * @return {!proto.bilibili.dynamic.CreateTag} returns this
*/
proto.bilibili.dynamic.CreateTag.prototype.setLbs = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateTag} returns this
 */
proto.bilibili.dynamic.CreateTag.prototype.clearLbs = function() {
  return this.setLbs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateTag.prototype.hasLbs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BottomBusiness sdk_game = 2;
 * @return {?proto.bilibili.dynamic.BottomBusiness}
 */
proto.bilibili.dynamic.CreateTag.prototype.getSdkGame = function() {
  return /** @type{?proto.bilibili.dynamic.BottomBusiness} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.BottomBusiness, 2));
};


/**
 * @param {?proto.bilibili.dynamic.BottomBusiness|undefined} value
 * @return {!proto.bilibili.dynamic.CreateTag} returns this
*/
proto.bilibili.dynamic.CreateTag.prototype.setSdkGame = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateTag} returns this
 */
proto.bilibili.dynamic.CreateTag.prototype.clearSdkGame = function() {
  return this.setSdkGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateTag.prototype.hasSdkGame = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BottomBusiness diversion = 3;
 * @return {?proto.bilibili.dynamic.BottomBusiness}
 */
proto.bilibili.dynamic.CreateTag.prototype.getDiversion = function() {
  return /** @type{?proto.bilibili.dynamic.BottomBusiness} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.BottomBusiness, 3));
};


/**
 * @param {?proto.bilibili.dynamic.BottomBusiness|undefined} value
 * @return {!proto.bilibili.dynamic.CreateTag} returns this
*/
proto.bilibili.dynamic.CreateTag.prototype.setDiversion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.CreateTag} returns this
 */
proto.bilibili.dynamic.CreateTag.prototype.clearDiversion = function() {
  return this.setDiversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.CreateTag.prototype.hasDiversion = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.CreateTopic.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.CreateTopic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.CreateTopic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateTopic.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.CreateTopic}
 */
proto.bilibili.dynamic.CreateTopic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.CreateTopic;
  return proto.bilibili.dynamic.CreateTopic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.CreateTopic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.CreateTopic}
 */
proto.bilibili.dynamic.CreateTopic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.CreateTopic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.CreateTopic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.CreateTopic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.CreateTopic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.bilibili.dynamic.CreateTopic.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.CreateTopic} returns this
 */
proto.bilibili.dynamic.CreateTopic.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bilibili.dynamic.CreateTopic.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.CreateTopic} returns this
 */
proto.bilibili.dynamic.CreateTopic.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynIdentity.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynIdentity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynIdentity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynIdentity.toObject = function(includeInstance, msg) {
  var f, obj = {
    dynId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    revsId: (f = msg.getRevsId()) && proto.bilibili.dynamic.DynRevsId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynIdentity}
 */
proto.bilibili.dynamic.DynIdentity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynIdentity;
  return proto.bilibili.dynamic.DynIdentity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynIdentity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynIdentity}
 */
proto.bilibili.dynamic.DynIdentity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDynId(value);
      break;
    case 2:
      var value = new proto.bilibili.dynamic.DynRevsId;
      reader.readMessage(value,proto.bilibili.dynamic.DynRevsId.deserializeBinaryFromReader);
      msg.setRevsId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynIdentity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynIdentity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynIdentity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynIdentity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDynId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRevsId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.dynamic.DynRevsId.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 dyn_id = 1;
 * @return {number}
 */
proto.bilibili.dynamic.DynIdentity.prototype.getDynId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynIdentity} returns this
 */
proto.bilibili.dynamic.DynIdentity.prototype.setDynId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DynRevsId revs_id = 2;
 * @return {?proto.bilibili.dynamic.DynRevsId}
 */
proto.bilibili.dynamic.DynIdentity.prototype.getRevsId = function() {
  return /** @type{?proto.bilibili.dynamic.DynRevsId} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.DynRevsId, 2));
};


/**
 * @param {?proto.bilibili.dynamic.DynRevsId|undefined} value
 * @return {!proto.bilibili.dynamic.DynIdentity} returns this
*/
proto.bilibili.dynamic.DynIdentity.prototype.setRevsId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.DynIdentity} returns this
 */
proto.bilibili.dynamic.DynIdentity.prototype.clearRevsId = function() {
  return this.setRevsId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.DynIdentity.prototype.hasRevsId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynRevsId.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynRevsId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynRevsId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynRevsId.toObject = function(includeInstance, msg) {
  var f, obj = {
    dynType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynRevsId}
 */
proto.bilibili.dynamic.DynRevsId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynRevsId;
  return proto.bilibili.dynamic.DynRevsId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynRevsId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynRevsId}
 */
proto.bilibili.dynamic.DynRevsId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDynType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynRevsId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynRevsId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynRevsId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynRevsId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDynType();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 dyn_type = 1;
 * @return {number}
 */
proto.bilibili.dynamic.DynRevsId.prototype.getDynType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynRevsId} returns this
 */
proto.bilibili.dynamic.DynRevsId.prototype.setDynType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 rid = 2;
 * @return {number}
 */
proto.bilibili.dynamic.DynRevsId.prototype.getRid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynRevsId} returns this
 */
proto.bilibili.dynamic.DynRevsId.prototype.setRid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynVideoEditor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynVideoEditor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoEditor.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    upfrom: jspb.Message.getFieldWithDefault(msg, 2, 0),
    filters: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fonts: jspb.Message.getFieldWithDefault(msg, 4, ""),
    subtitles: jspb.Message.getFieldWithDefault(msg, 5, ""),
    bgms: jspb.Message.getFieldWithDefault(msg, 6, ""),
    stickers: jspb.Message.getFieldWithDefault(msg, 7, ""),
    videoupStickers: jspb.Message.getFieldWithDefault(msg, 8, ""),
    trans: jspb.Message.getFieldWithDefault(msg, 9, ""),
    makeups: jspb.Message.getFieldWithDefault(msg, 10, ""),
    surgerys: jspb.Message.getFieldWithDefault(msg, 11, ""),
    videofxs: jspb.Message.getFieldWithDefault(msg, 12, ""),
    themes: jspb.Message.getFieldWithDefault(msg, 13, ""),
    cooperates: jspb.Message.getFieldWithDefault(msg, 14, ""),
    rhythms: jspb.Message.getFieldWithDefault(msg, 15, ""),
    effects: jspb.Message.getFieldWithDefault(msg, 16, ""),
    backgrounds: jspb.Message.getFieldWithDefault(msg, 17, ""),
    videos: jspb.Message.getFieldWithDefault(msg, 18, ""),
    sounds: jspb.Message.getFieldWithDefault(msg, 19, ""),
    flowers: jspb.Message.getFieldWithDefault(msg, 20, ""),
    coverTemplates: jspb.Message.getFieldWithDefault(msg, 21, ""),
    tts: jspb.Message.getFieldWithDefault(msg, 22, ""),
    openings: jspb.Message.getFieldWithDefault(msg, 23, ""),
    recordText: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    vupers: jspb.Message.getFieldWithDefault(msg, 25, ""),
    features: jspb.Message.getFieldWithDefault(msg, 26, ""),
    bcutFeatures: jspb.Message.getFieldWithDefault(msg, 27, ""),
    audioRecord: jspb.Message.getFieldWithDefault(msg, 28, 0),
    camera: jspb.Message.getFieldWithDefault(msg, 29, 0),
    speed: jspb.Message.getFieldWithDefault(msg, 30, 0),
    cameraRotate: jspb.Message.getFieldWithDefault(msg, 31, 0),
    screenRecord: jspb.Message.getFieldWithDefault(msg, 32, 0),
    defaultEnd: jspb.Message.getFieldWithDefault(msg, 33, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 34, 0),
    picCount: jspb.Message.getFieldWithDefault(msg, 35, 0),
    videoCount: jspb.Message.getFieldWithDefault(msg, 36, 0),
    shotDuration: jspb.Message.getFieldWithDefault(msg, 37, 0),
    shotGame: jspb.Message.getFieldWithDefault(msg, 38, ""),
    highlight: jspb.Message.getBooleanFieldWithDefault(msg, 39, false),
    highlightCnt: jspb.Message.getFieldWithDefault(msg, 40, 0),
    pipCount: jspb.Message.getFieldWithDefault(msg, 41, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynVideoEditor}
 */
proto.bilibili.dynamic.DynVideoEditor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynVideoEditor;
  return proto.bilibili.dynamic.DynVideoEditor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynVideoEditor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynVideoEditor}
 */
proto.bilibili.dynamic.DynVideoEditor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpfrom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilters(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFonts(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitles(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBgms(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStickers(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideoupStickers(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrans(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakeups(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurgerys(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideofxs(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setThemes(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCooperates(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setRhythms(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setEffects(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgrounds(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideos(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setSounds(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlowers(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoverTemplates(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setTts(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenings(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecordText(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setVupers(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeatures(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcutFeatures(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAudioRecord(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCamera(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeed(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCameraRotate(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreenRecord(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultEnd(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPicCount(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVideoCount(value);
      break;
    case 37:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShotDuration(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readString());
      msg.setShotGame(value);
      break;
    case 39:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHighlight(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHighlightCnt(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPipCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynVideoEditor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynVideoEditor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoEditor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUpfrom();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFilters();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFonts();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSubtitles();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBgms();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStickers();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getVideoupStickers();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTrans();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMakeups();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSurgerys();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getVideofxs();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getThemes();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCooperates();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getRhythms();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getEffects();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getBackgrounds();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getVideos();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getSounds();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getFlowers();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getCoverTemplates();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getTts();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getOpenings();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getRecordText();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getVupers();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getFeatures();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getBcutFeatures();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getAudioRecord();
  if (f !== 0) {
    writer.writeInt32(
      28,
      f
    );
  }
  f = message.getCamera();
  if (f !== 0) {
    writer.writeInt32(
      29,
      f
    );
  }
  f = message.getSpeed();
  if (f !== 0) {
    writer.writeInt32(
      30,
      f
    );
  }
  f = message.getCameraRotate();
  if (f !== 0) {
    writer.writeInt32(
      31,
      f
    );
  }
  f = message.getScreenRecord();
  if (f !== 0) {
    writer.writeInt32(
      32,
      f
    );
  }
  f = message.getDefaultEnd();
  if (f !== 0) {
    writer.writeInt32(
      33,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      34,
      f
    );
  }
  f = message.getPicCount();
  if (f !== 0) {
    writer.writeInt32(
      35,
      f
    );
  }
  f = message.getVideoCount();
  if (f !== 0) {
    writer.writeInt32(
      36,
      f
    );
  }
  f = message.getShotDuration();
  if (f !== 0) {
    writer.writeInt32(
      37,
      f
    );
  }
  f = message.getShotGame();
  if (f.length > 0) {
    writer.writeString(
      38,
      f
    );
  }
  f = message.getHighlight();
  if (f) {
    writer.writeBool(
      39,
      f
    );
  }
  f = message.getHighlightCnt();
  if (f !== 0) {
    writer.writeInt32(
      40,
      f
    );
  }
  f = message.getPipCount();
  if (f !== 0) {
    writer.writeInt32(
      41,
      f
    );
  }
};


/**
 * optional int64 cid = 1;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 upfrom = 2;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getUpfrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setUpfrom = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string filters = 3;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getFilters = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setFilters = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fonts = 4;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getFonts = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setFonts = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string subtitles = 5;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getSubtitles = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setSubtitles = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string bgms = 6;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getBgms = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setBgms = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string stickers = 7;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getStickers = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setStickers = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string videoup_stickers = 8;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getVideoupStickers = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setVideoupStickers = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string trans = 9;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getTrans = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setTrans = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string makeups = 10;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getMakeups = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setMakeups = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string surgerys = 11;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getSurgerys = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setSurgerys = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string videofxs = 12;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getVideofxs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setVideofxs = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string themes = 13;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getThemes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setThemes = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string cooperates = 14;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getCooperates = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setCooperates = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string rhythms = 15;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getRhythms = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setRhythms = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string effects = 16;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getEffects = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setEffects = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string backgrounds = 17;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getBackgrounds = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setBackgrounds = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string videos = 18;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getVideos = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setVideos = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string sounds = 19;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getSounds = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setSounds = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string flowers = 20;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getFlowers = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setFlowers = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string cover_templates = 21;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getCoverTemplates = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setCoverTemplates = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string tts = 22;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getTts = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setTts = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string openings = 23;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getOpenings = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setOpenings = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional bool record_text = 24;
 * @return {boolean}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getRecordText = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setRecordText = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional string vupers = 25;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getVupers = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setVupers = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string features = 26;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getFeatures = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setFeatures = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string bcut_features = 27;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getBcutFeatures = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setBcutFeatures = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional int32 audio_record = 28;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getAudioRecord = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setAudioRecord = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional int32 camera = 29;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getCamera = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setCamera = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};


/**
 * optional int32 speed = 30;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setSpeed = function(value) {
  return jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * optional int32 camera_rotate = 31;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getCameraRotate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setCameraRotate = function(value) {
  return jspb.Message.setProto3IntField(this, 31, value);
};


/**
 * optional int32 screen_record = 32;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getScreenRecord = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setScreenRecord = function(value) {
  return jspb.Message.setProto3IntField(this, 32, value);
};


/**
 * optional int32 default_end = 33;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getDefaultEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setDefaultEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional int32 duration = 34;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 34, value);
};


/**
 * optional int32 pic_count = 35;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getPicCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setPicCount = function(value) {
  return jspb.Message.setProto3IntField(this, 35, value);
};


/**
 * optional int32 video_count = 36;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getVideoCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setVideoCount = function(value) {
  return jspb.Message.setProto3IntField(this, 36, value);
};


/**
 * optional int32 shot_duration = 37;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getShotDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 37, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setShotDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 37, value);
};


/**
 * optional string shot_game = 38;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getShotGame = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 38, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setShotGame = function(value) {
  return jspb.Message.setProto3StringField(this, 38, value);
};


/**
 * optional bool highlight = 39;
 * @return {boolean}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getHighlight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 39, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setHighlight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 39, value);
};


/**
 * optional int32 highlight_cnt = 40;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getHighlightCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 40, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setHighlightCnt = function(value) {
  return jspb.Message.setProto3IntField(this, 40, value);
};


/**
 * optional int32 pip_count = 41;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.getPipCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 41, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoEditor} returns this
 */
proto.bilibili.dynamic.DynVideoEditor.prototype.setPipCount = function(value) {
  return jspb.Message.setProto3IntField(this, 41, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynVideoHotAct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynVideoHotAct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoHotAct.toObject = function(includeInstance, msg) {
  var f, obj = {
    actId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    etime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pic: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    title: jspb.Message.getFieldWithDefault(msg, 6, ""),
    link: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynVideoHotAct}
 */
proto.bilibili.dynamic.DynVideoHotAct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynVideoHotAct;
  return proto.bilibili.dynamic.DynVideoHotAct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynVideoHotAct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynVideoHotAct}
 */
proto.bilibili.dynamic.DynVideoHotAct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEtime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPic(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLink(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynVideoHotAct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynVideoHotAct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoHotAct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEtime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPic();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLink();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 act_id = 1;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.getActId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoHotAct} returns this
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.setActId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 etime = 2;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.getEtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoHotAct} returns this
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.setEtime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 id = 3;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoHotAct} returns this
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string pic = 4;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.getPic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoHotAct} returns this
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.setPic = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 stime = 5;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.getStime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoHotAct} returns this
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.setStime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string title = 6;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoHotAct} returns this
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string link = 7;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.getLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoHotAct} returns this
 */
proto.bilibili.dynamic.DynVideoHotAct.prototype.setLink = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynVideoMultiP.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynVideoMultiP} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoMultiP.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    editor: (f = msg.getEditor()) && proto.bilibili.dynamic.DynVideoEditor.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynVideoMultiP}
 */
proto.bilibili.dynamic.DynVideoMultiP.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynVideoMultiP;
  return proto.bilibili.dynamic.DynVideoMultiP.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynVideoMultiP} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynVideoMultiP}
 */
proto.bilibili.dynamic.DynVideoMultiP.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    case 4:
      var value = new proto.bilibili.dynamic.DynVideoEditor;
      reader.readMessage(value,proto.bilibili.dynamic.DynVideoEditor.deserializeBinaryFromReader);
      msg.setEditor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynVideoMultiP.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynVideoMultiP} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoMultiP.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEditor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.dynamic.DynVideoEditor.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoMultiP} returns this
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filename = 2;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoMultiP} returns this
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 cid = 3;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoMultiP} returns this
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional DynVideoEditor editor = 4;
 * @return {?proto.bilibili.dynamic.DynVideoEditor}
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.getEditor = function() {
  return /** @type{?proto.bilibili.dynamic.DynVideoEditor} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.DynVideoEditor, 4));
};


/**
 * @param {?proto.bilibili.dynamic.DynVideoEditor|undefined} value
 * @return {!proto.bilibili.dynamic.DynVideoMultiP} returns this
*/
proto.bilibili.dynamic.DynVideoMultiP.prototype.setEditor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.DynVideoMultiP} returns this
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.clearEditor = function() {
  return this.setEditor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.DynVideoMultiP.prototype.hasEditor = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynVideoPushIntro.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynVideoPushIntro.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynVideoPushIntro} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoPushIntro.toObject = function(includeInstance, msg) {
  var f, obj = {
    show: jspb.Message.getFieldWithDefault(msg, 1, 0),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynVideoPushIntro}
 */
proto.bilibili.dynamic.DynVideoPushIntro.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynVideoPushIntro;
  return proto.bilibili.dynamic.DynVideoPushIntro.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynVideoPushIntro} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynVideoPushIntro}
 */
proto.bilibili.dynamic.DynVideoPushIntro.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShow(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynVideoPushIntro.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynVideoPushIntro.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynVideoPushIntro} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoPushIntro.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShow();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 show = 1;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoPushIntro.prototype.getShow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoPushIntro} returns this
 */
proto.bilibili.dynamic.DynVideoPushIntro.prototype.setShow = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoPushIntro.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoPushIntro} returns this
 */
proto.bilibili.dynamic.DynVideoPushIntro.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynVideoSubmitActBanner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynVideoSubmitActBanner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.toObject = function(includeInstance, msg) {
  var f, obj = {
    hotactText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hotactUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listList: jspb.Message.toObjectList(msg.getListList(),
    proto.bilibili.dynamic.DynVideoHotAct.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynVideoSubmitActBanner}
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynVideoSubmitActBanner;
  return proto.bilibili.dynamic.DynVideoSubmitActBanner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynVideoSubmitActBanner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynVideoSubmitActBanner}
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHotactText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHotactUrl(value);
      break;
    case 3:
      var value = new proto.bilibili.dynamic.DynVideoHotAct;
      reader.readMessage(value,proto.bilibili.dynamic.DynVideoHotAct.deserializeBinaryFromReader);
      msg.addList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynVideoSubmitActBanner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynVideoSubmitActBanner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHotactText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHotactUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bilibili.dynamic.DynVideoHotAct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hotact_text = 1;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.getHotactText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoSubmitActBanner} returns this
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.setHotactText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string hotact_url = 2;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.getHotactUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoSubmitActBanner} returns this
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.setHotactUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated DynVideoHotAct list = 3;
 * @return {!Array<!proto.bilibili.dynamic.DynVideoHotAct>}
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.getListList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.DynVideoHotAct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.DynVideoHotAct, 3));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.DynVideoHotAct>} value
 * @return {!proto.bilibili.dynamic.DynVideoSubmitActBanner} returns this
*/
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.setListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bilibili.dynamic.DynVideoHotAct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.DynVideoHotAct}
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.addList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bilibili.dynamic.DynVideoHotAct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.DynVideoSubmitActBanner} returns this
 */
proto.bilibili.dynamic.DynVideoSubmitActBanner.prototype.clearListList = function() {
  return this.setListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynVideoVote.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynVideoVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynVideoVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    voteId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    voteTitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    topForReply: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynVideoVote}
 */
proto.bilibili.dynamic.DynVideoVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynVideoVote;
  return proto.bilibili.dynamic.DynVideoVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynVideoVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynVideoVote}
 */
proto.bilibili.dynamic.DynVideoVote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoteId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoteTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTopForReply(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynVideoVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynVideoVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynVideoVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoteId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getVoteTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTopForReply();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int64 vote_id = 1;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoVote.prototype.getVoteId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoVote} returns this
 */
proto.bilibili.dynamic.DynVideoVote.prototype.setVoteId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string vote_title = 2;
 * @return {string}
 */
proto.bilibili.dynamic.DynVideoVote.prototype.getVoteTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.DynVideoVote} returns this
 */
proto.bilibili.dynamic.DynVideoVote.prototype.setVoteTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 top_for_reply = 3;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoVote.prototype.getTopForReply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoVote} returns this
 */
proto.bilibili.dynamic.DynVideoVote.prototype.setTopForReply = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.DynVideoWatermark.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.DynVideoWatermark.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.DynVideoWatermark} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoWatermark.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    position: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.DynVideoWatermark}
 */
proto.bilibili.dynamic.DynVideoWatermark.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.DynVideoWatermark;
  return proto.bilibili.dynamic.DynVideoWatermark.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.DynVideoWatermark} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.DynVideoWatermark}
 */
proto.bilibili.dynamic.DynVideoWatermark.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.DynVideoWatermark.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.DynVideoWatermark.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.DynVideoWatermark} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.DynVideoWatermark.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 state = 1;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoWatermark.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoWatermark} returns this
 */
proto.bilibili.dynamic.DynVideoWatermark.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoWatermark.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoWatermark} returns this
 */
proto.bilibili.dynamic.DynVideoWatermark.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 position = 3;
 * @return {number}
 */
proto.bilibili.dynamic.DynVideoWatermark.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.DynVideoWatermark} returns this
 */
proto.bilibili.dynamic.DynVideoWatermark.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.ExtLbs.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.ExtLbs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.ExtLbs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ExtLbs.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    distance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    poi: jspb.Message.getFieldWithDefault(msg, 4, ""),
    location: (f = msg.getLocation()) && proto.bilibili.dynamic.LbsLoc.toObject(includeInstance, f),
    showTitle: jspb.Message.getFieldWithDefault(msg, 6, ""),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    showDistance: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.ExtLbs}
 */
proto.bilibili.dynamic.ExtLbs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.ExtLbs;
  return proto.bilibili.dynamic.ExtLbs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.ExtLbs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.ExtLbs}
 */
proto.bilibili.dynamic.ExtLbs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDistance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPoi(value);
      break;
    case 5:
      var value = new proto.bilibili.dynamic.LbsLoc;
      reader.readMessage(value,proto.bilibili.dynamic.LbsLoc.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setShowTitle(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setShowDistance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.ExtLbs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.ExtLbs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.ExtLbs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ExtLbs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDistance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPoi();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bilibili.dynamic.LbsLoc.serializeBinaryToWriter
    );
  }
  f = message.getShowTitle();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getShowDistance();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.bilibili.dynamic.ExtLbs.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
 */
proto.bilibili.dynamic.ExtLbs.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 distance = 2;
 * @return {number}
 */
proto.bilibili.dynamic.ExtLbs.prototype.getDistance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
 */
proto.bilibili.dynamic.ExtLbs.prototype.setDistance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 type = 3;
 * @return {number}
 */
proto.bilibili.dynamic.ExtLbs.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
 */
proto.bilibili.dynamic.ExtLbs.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string poi = 4;
 * @return {string}
 */
proto.bilibili.dynamic.ExtLbs.prototype.getPoi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
 */
proto.bilibili.dynamic.ExtLbs.prototype.setPoi = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional LbsLoc location = 5;
 * @return {?proto.bilibili.dynamic.LbsLoc}
 */
proto.bilibili.dynamic.ExtLbs.prototype.getLocation = function() {
  return /** @type{?proto.bilibili.dynamic.LbsLoc} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.LbsLoc, 5));
};


/**
 * @param {?proto.bilibili.dynamic.LbsLoc|undefined} value
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
*/
proto.bilibili.dynamic.ExtLbs.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
 */
proto.bilibili.dynamic.ExtLbs.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.ExtLbs.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string show_title = 6;
 * @return {string}
 */
proto.bilibili.dynamic.ExtLbs.prototype.getShowTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
 */
proto.bilibili.dynamic.ExtLbs.prototype.setShowTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.bilibili.dynamic.ExtLbs.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
 */
proto.bilibili.dynamic.ExtLbs.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string show_distance = 8;
 * @return {string}
 */
proto.bilibili.dynamic.ExtLbs.prototype.getShowDistance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ExtLbs} returns this
 */
proto.bilibili.dynamic.ExtLbs.prototype.setShowDistance = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.GetUidByNameReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.GetUidByNameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.GetUidByNameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.GetUidByNameReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.GetUidByNameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.GetUidByNameReq}
 */
proto.bilibili.dynamic.GetUidByNameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.GetUidByNameReq;
  return proto.bilibili.dynamic.GetUidByNameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.GetUidByNameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.GetUidByNameReq}
 */
proto.bilibili.dynamic.GetUidByNameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.GetUidByNameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.GetUidByNameReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.GetUidByNameReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.GetUidByNameReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.bilibili.dynamic.GetUidByNameReq.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bilibili.dynamic.GetUidByNameReq} returns this
 */
proto.bilibili.dynamic.GetUidByNameReq.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.GetUidByNameReq} returns this
 */
proto.bilibili.dynamic.GetUidByNameReq.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.GetUidByNameReq} returns this
 */
proto.bilibili.dynamic.GetUidByNameReq.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.GetUidByNameRsp.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.GetUidByNameRsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.GetUidByNameRsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.GetUidByNameRsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    uidsMap: (f = msg.getUidsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.GetUidByNameRsp}
 */
proto.bilibili.dynamic.GetUidByNameRsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.GetUidByNameRsp;
  return proto.bilibili.dynamic.GetUidByNameRsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.GetUidByNameRsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.GetUidByNameRsp}
 */
proto.bilibili.dynamic.GetUidByNameRsp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getUidsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.GetUidByNameRsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.GetUidByNameRsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.GetUidByNameRsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.GetUidByNameRsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUidsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * map<string, int64> uids = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.bilibili.dynamic.GetUidByNameRsp.prototype.getUidsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bilibili.dynamic.GetUidByNameRsp} returns this
 */
proto.bilibili.dynamic.GetUidByNameRsp.prototype.clearUidsMap = function() {
  this.getUidsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.GoodsContent.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.GoodsContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.GoodsContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.GoodsContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    itemId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    shopId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.GoodsContent}
 */
proto.bilibili.dynamic.GoodsContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.GoodsContent;
  return proto.bilibili.dynamic.GoodsContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.GoodsContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.GoodsContent}
 */
proto.bilibili.dynamic.GoodsContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourceType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setItemId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShopId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.GoodsContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.GoodsContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.GoodsContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.GoodsContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getItemId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getShopId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int32 source_type = 1;
 * @return {number}
 */
proto.bilibili.dynamic.GoodsContent.prototype.getSourceType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.GoodsContent} returns this
 */
proto.bilibili.dynamic.GoodsContent.prototype.setSourceType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 item_id = 2;
 * @return {number}
 */
proto.bilibili.dynamic.GoodsContent.prototype.getItemId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.GoodsContent} returns this
 */
proto.bilibili.dynamic.GoodsContent.prototype.setItemId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 shop_id = 3;
 * @return {number}
 */
proto.bilibili.dynamic.GoodsContent.prototype.getShopId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.GoodsContent} returns this
 */
proto.bilibili.dynamic.GoodsContent.prototype.setShopId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.LaunchedActivity.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.LaunchedActivity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.LaunchedActivity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.LaunchedActivity.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleTitle: jspb.Message.getFieldWithDefault(msg, 1, ""),
    activitiesList: jspb.Message.toObjectList(msg.getActivitiesList(),
    proto.bilibili.dynamic.LaunchedActivityItem.toObject, includeInstance),
    showMore: (f = msg.getShowMore()) && proto.bilibili.dynamic.ShowMoreLaunchedActivity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.LaunchedActivity}
 */
proto.bilibili.dynamic.LaunchedActivity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.LaunchedActivity;
  return proto.bilibili.dynamic.LaunchedActivity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.LaunchedActivity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.LaunchedActivity}
 */
proto.bilibili.dynamic.LaunchedActivity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleTitle(value);
      break;
    case 2:
      var value = new proto.bilibili.dynamic.LaunchedActivityItem;
      reader.readMessage(value,proto.bilibili.dynamic.LaunchedActivityItem.deserializeBinaryFromReader);
      msg.addActivities(value);
      break;
    case 3:
      var value = new proto.bilibili.dynamic.ShowMoreLaunchedActivity;
      reader.readMessage(value,proto.bilibili.dynamic.ShowMoreLaunchedActivity.deserializeBinaryFromReader);
      msg.setShowMore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.LaunchedActivity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.LaunchedActivity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.LaunchedActivity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActivitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bilibili.dynamic.LaunchedActivityItem.serializeBinaryToWriter
    );
  }
  f = message.getShowMore();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.dynamic.ShowMoreLaunchedActivity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string module_title = 1;
 * @return {string}
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.getModuleTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.LaunchedActivity} returns this
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.setModuleTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated LaunchedActivityItem activities = 2;
 * @return {!Array<!proto.bilibili.dynamic.LaunchedActivityItem>}
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.getActivitiesList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.LaunchedActivityItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.LaunchedActivityItem, 2));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.LaunchedActivityItem>} value
 * @return {!proto.bilibili.dynamic.LaunchedActivity} returns this
*/
proto.bilibili.dynamic.LaunchedActivity.prototype.setActivitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bilibili.dynamic.LaunchedActivityItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.LaunchedActivityItem}
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.addActivities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bilibili.dynamic.LaunchedActivityItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.LaunchedActivity} returns this
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.clearActivitiesList = function() {
  return this.setActivitiesList([]);
};


/**
 * optional ShowMoreLaunchedActivity show_more = 3;
 * @return {?proto.bilibili.dynamic.ShowMoreLaunchedActivity}
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.getShowMore = function() {
  return /** @type{?proto.bilibili.dynamic.ShowMoreLaunchedActivity} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.ShowMoreLaunchedActivity, 3));
};


/**
 * @param {?proto.bilibili.dynamic.ShowMoreLaunchedActivity|undefined} value
 * @return {!proto.bilibili.dynamic.LaunchedActivity} returns this
*/
proto.bilibili.dynamic.LaunchedActivity.prototype.setShowMore = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.LaunchedActivity} returns this
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.clearShowMore = function() {
  return this.setShowMore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.LaunchedActivity.prototype.hasShowMore = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.LaunchedActivityItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.LaunchedActivityItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.LaunchedActivityItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.LaunchedActivityItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    activityName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    activityState: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.LaunchedActivityItem}
 */
proto.bilibili.dynamic.LaunchedActivityItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.LaunchedActivityItem;
  return proto.bilibili.dynamic.LaunchedActivityItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.LaunchedActivityItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.LaunchedActivityItem}
 */
proto.bilibili.dynamic.LaunchedActivityItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActivityId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivityName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActivityState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.LaunchedActivityItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.LaunchedActivityItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.LaunchedActivityItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.LaunchedActivityItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getActivityName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActivityState();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int64 activity_id = 1;
 * @return {number}
 */
proto.bilibili.dynamic.LaunchedActivityItem.prototype.getActivityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.LaunchedActivityItem} returns this
 */
proto.bilibili.dynamic.LaunchedActivityItem.prototype.setActivityId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string activity_name = 2;
 * @return {string}
 */
proto.bilibili.dynamic.LaunchedActivityItem.prototype.getActivityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.LaunchedActivityItem} returns this
 */
proto.bilibili.dynamic.LaunchedActivityItem.prototype.setActivityName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 activity_state = 3;
 * @return {number}
 */
proto.bilibili.dynamic.LaunchedActivityItem.prototype.getActivityState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.LaunchedActivityItem} returns this
 */
proto.bilibili.dynamic.LaunchedActivityItem.prototype.setActivityState = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.LbsLoc.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.LbsLoc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.LbsLoc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.LbsLoc.toObject = function(includeInstance, msg) {
  var f, obj = {
    lat: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    lng: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.LbsLoc}
 */
proto.bilibili.dynamic.LbsLoc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.LbsLoc;
  return proto.bilibili.dynamic.LbsLoc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.LbsLoc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.LbsLoc}
 */
proto.bilibili.dynamic.LbsLoc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLat(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLng(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.LbsLoc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.LbsLoc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.LbsLoc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.LbsLoc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLng();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double lat = 1;
 * @return {number}
 */
proto.bilibili.dynamic.LbsLoc.prototype.getLat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.LbsLoc} returns this
 */
proto.bilibili.dynamic.LbsLoc.prototype.setLat = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double lng = 2;
 * @return {number}
 */
proto.bilibili.dynamic.LbsLoc.prototype.getLng = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.LbsLoc} returns this
 */
proto.bilibili.dynamic.LbsLoc.prototype.setLng = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.MetaDataCtrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.MetaDataCtrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.MetaDataCtrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getFieldWithDefault(msg, 1, ""),
    build: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mobiApp: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buvid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    device: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fromSpmid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    from: jspb.Message.getFieldWithDefault(msg, 7, ""),
    traceId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    teenagerMode: jspb.Message.getFieldWithDefault(msg, 9, 0),
    coldStart: jspb.Message.getFieldWithDefault(msg, 10, 0),
    version: jspb.Message.getFieldWithDefault(msg, 11, ""),
    network: jspb.Message.getFieldWithDefault(msg, 12, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.MetaDataCtrl}
 */
proto.bilibili.dynamic.MetaDataCtrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.MetaDataCtrl;
  return proto.bilibili.dynamic.MetaDataCtrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.MetaDataCtrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.MetaDataCtrl}
 */
proto.bilibili.dynamic.MetaDataCtrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuild(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobiApp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuvid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromSpmid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraceId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeenagerMode(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setColdStart(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNetwork(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.MetaDataCtrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.MetaDataCtrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.MetaDataCtrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuild();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMobiApp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBuvid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFromSpmid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTraceId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTeenagerMode();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getColdStart();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getNetwork();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string platform = 1;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string build = 2;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getBuild = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setBuild = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string mobi_app = 3;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getMobiApp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setMobiApp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string buvid = 4;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getBuvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setBuvid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string device = 5;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string from_spmid = 6;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getFromSpmid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setFromSpmid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string from = 7;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string trace_id = 8;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getTraceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setTraceId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 teenager_mode = 9;
 * @return {number}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getTeenagerMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setTeenagerMode = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 cold_start = 10;
 * @return {number}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getColdStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setColdStart = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string version = 11;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 network = 12;
 * @return {number}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getNetwork = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string ip = 13;
 * @return {string}
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.MetaDataCtrl} returns this
 */
proto.bilibili.dynamic.MetaDataCtrl.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.PlusRedDot.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.PlusRedDot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.PlusRedDot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.PlusRedDot.toObject = function(includeInstance, msg) {
  var f, obj = {
    plusHasRedDot: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.PlusRedDot}
 */
proto.bilibili.dynamic.PlusRedDot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.PlusRedDot;
  return proto.bilibili.dynamic.PlusRedDot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.PlusRedDot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.PlusRedDot}
 */
proto.bilibili.dynamic.PlusRedDot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlusHasRedDot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.PlusRedDot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.PlusRedDot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.PlusRedDot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.PlusRedDot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlusHasRedDot();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 plus_has_red_dot = 1;
 * @return {number}
 */
proto.bilibili.dynamic.PlusRedDot.prototype.getPlusHasRedDot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.PlusRedDot} returns this
 */
proto.bilibili.dynamic.PlusRedDot.prototype.setPlusHasRedDot = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.Program.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.Program.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.Program} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.Program.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    desc: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cover: jspb.Message.getFieldWithDefault(msg, 3, ""),
    targetUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    programText: jspb.Message.getFieldWithDefault(msg, 6, ""),
    jumpText: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.Program}
 */
proto.bilibili.dynamic.Program.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.Program;
  return proto.bilibili.dynamic.Program.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.Program} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.Program}
 */
proto.bilibili.dynamic.Program.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgramText(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setJumpText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.Program.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.Program.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.Program} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.Program.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTargetUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProgramText();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getJumpText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.dynamic.Program.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Program} returns this
 */
proto.bilibili.dynamic.Program.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string desc = 2;
 * @return {string}
 */
proto.bilibili.dynamic.Program.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Program} returns this
 */
proto.bilibili.dynamic.Program.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cover = 3;
 * @return {string}
 */
proto.bilibili.dynamic.Program.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Program} returns this
 */
proto.bilibili.dynamic.Program.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string target_url = 4;
 * @return {string}
 */
proto.bilibili.dynamic.Program.prototype.getTargetUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Program} returns this
 */
proto.bilibili.dynamic.Program.prototype.setTargetUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.bilibili.dynamic.Program.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Program} returns this
 */
proto.bilibili.dynamic.Program.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string program_text = 6;
 * @return {string}
 */
proto.bilibili.dynamic.Program.prototype.getProgramText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Program} returns this
 */
proto.bilibili.dynamic.Program.prototype.setProgramText = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string jump_text = 7;
 * @return {string}
 */
proto.bilibili.dynamic.Program.prototype.getJumpText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Program} returns this
 */
proto.bilibili.dynamic.Program.prototype.setJumpText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.PublishSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.PublishSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.PublishSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.PublishSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    minWordsToArticle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxWordsToArticle: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uploadSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.PublishSetting}
 */
proto.bilibili.dynamic.PublishSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.PublishSetting;
  return proto.bilibili.dynamic.PublishSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.PublishSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.PublishSetting}
 */
proto.bilibili.dynamic.PublishSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinWordsToArticle(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxWordsToArticle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUploadSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.PublishSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.PublishSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.PublishSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.PublishSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinWordsToArticle();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaxWordsToArticle();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUploadSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 min_words_to_article = 1;
 * @return {number}
 */
proto.bilibili.dynamic.PublishSetting.prototype.getMinWordsToArticle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.PublishSetting} returns this
 */
proto.bilibili.dynamic.PublishSetting.prototype.setMinWordsToArticle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 max_words_to_article = 2;
 * @return {number}
 */
proto.bilibili.dynamic.PublishSetting.prototype.getMaxWordsToArticle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.PublishSetting} returns this
 */
proto.bilibili.dynamic.PublishSetting.prototype.setMaxWordsToArticle = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 upload_size = 3;
 * @return {number}
 */
proto.bilibili.dynamic.PublishSetting.prototype.getUploadSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.PublishSetting} returns this
 */
proto.bilibili.dynamic.PublishSetting.prototype.setUploadSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.PublishYellowBar.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.PublishYellowBar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.PublishYellowBar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.PublishYellowBar.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.PublishYellowBar}
 */
proto.bilibili.dynamic.PublishYellowBar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.PublishYellowBar;
  return proto.bilibili.dynamic.PublishYellowBar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.PublishYellowBar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.PublishYellowBar}
 */
proto.bilibili.dynamic.PublishYellowBar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.PublishYellowBar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.PublishYellowBar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.PublishYellowBar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.PublishYellowBar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bilibili.dynamic.PublishYellowBar.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.PublishYellowBar} returns this
 */
proto.bilibili.dynamic.PublishYellowBar.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.bilibili.dynamic.PublishYellowBar.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.PublishYellowBar} returns this
 */
proto.bilibili.dynamic.PublishYellowBar.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon = 3;
 * @return {string}
 */
proto.bilibili.dynamic.PublishYellowBar.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.PublishYellowBar} returns this
 */
proto.bilibili.dynamic.PublishYellowBar.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.RepostInitCheck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.RepostInitCheck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.RepostInitCheck.toObject = function(includeInstance, msg) {
  var f, obj = {
    repostSrc: (f = msg.getRepostSrc()) && proto.bilibili.dynamic.DynIdentity.toObject(includeInstance, f),
    shareId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shareMode: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.RepostInitCheck}
 */
proto.bilibili.dynamic.RepostInitCheck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.RepostInitCheck;
  return proto.bilibili.dynamic.RepostInitCheck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.RepostInitCheck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.RepostInitCheck}
 */
proto.bilibili.dynamic.RepostInitCheck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.dynamic.DynIdentity;
      reader.readMessage(value,proto.bilibili.dynamic.DynIdentity.deserializeBinaryFromReader);
      msg.setRepostSrc(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShareId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShareMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.RepostInitCheck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.RepostInitCheck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.RepostInitCheck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepostSrc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.dynamic.DynIdentity.serializeBinaryToWriter
    );
  }
  f = message.getShareId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShareMode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional DynIdentity repost_src = 1;
 * @return {?proto.bilibili.dynamic.DynIdentity}
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.getRepostSrc = function() {
  return /** @type{?proto.bilibili.dynamic.DynIdentity} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.DynIdentity, 1));
};


/**
 * @param {?proto.bilibili.dynamic.DynIdentity|undefined} value
 * @return {!proto.bilibili.dynamic.RepostInitCheck} returns this
*/
proto.bilibili.dynamic.RepostInitCheck.prototype.setRepostSrc = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.RepostInitCheck} returns this
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.clearRepostSrc = function() {
  return this.setRepostSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.hasRepostSrc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string share_id = 2;
 * @return {string}
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.getShareId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.RepostInitCheck} returns this
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.setShareId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 share_mode = 3;
 * @return {number}
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.getShareMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.RepostInitCheck} returns this
 */
proto.bilibili.dynamic.RepostInitCheck.prototype.setShareMode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.ShareChannel.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.ShareChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.ShareChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.ShareChannel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    shareOrigin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    shareChannelsList: jspb.Message.toObjectList(msg.getShareChannelsList(),
    proto.bilibili.dynamic.ShareChannelItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.ShareChannel}
 */
proto.bilibili.dynamic.ShareChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.ShareChannel;
  return proto.bilibili.dynamic.ShareChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.ShareChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.ShareChannel}
 */
proto.bilibili.dynamic.ShareChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setShareOrigin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSid(value);
      break;
    case 4:
      var value = new proto.bilibili.dynamic.ShareChannelItem;
      reader.readMessage(value,proto.bilibili.dynamic.ShareChannelItem.deserializeBinaryFromReader);
      msg.addShareChannels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.ShareChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.ShareChannel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.ShareChannel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareChannel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShareOrigin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getShareChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bilibili.dynamic.ShareChannelItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string share_origin = 1;
 * @return {string}
 */
proto.bilibili.dynamic.ShareChannel.prototype.getShareOrigin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareChannel} returns this
 */
proto.bilibili.dynamic.ShareChannel.prototype.setShareOrigin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string oid = 2;
 * @return {string}
 */
proto.bilibili.dynamic.ShareChannel.prototype.getOid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareChannel} returns this
 */
proto.bilibili.dynamic.ShareChannel.prototype.setOid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sid = 3;
 * @return {string}
 */
proto.bilibili.dynamic.ShareChannel.prototype.getSid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareChannel} returns this
 */
proto.bilibili.dynamic.ShareChannel.prototype.setSid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ShareChannelItem share_channels = 4;
 * @return {!Array<!proto.bilibili.dynamic.ShareChannelItem>}
 */
proto.bilibili.dynamic.ShareChannel.prototype.getShareChannelsList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.ShareChannelItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.ShareChannelItem, 4));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.ShareChannelItem>} value
 * @return {!proto.bilibili.dynamic.ShareChannel} returns this
*/
proto.bilibili.dynamic.ShareChannel.prototype.setShareChannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bilibili.dynamic.ShareChannelItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.ShareChannelItem}
 */
proto.bilibili.dynamic.ShareChannel.prototype.addShareChannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bilibili.dynamic.ShareChannelItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.ShareChannel} returns this
 */
proto.bilibili.dynamic.ShareChannel.prototype.clearShareChannelsList = function() {
  return this.setShareChannelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.ShareChannelItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.ShareChannelItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareChannelItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    picture: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shareChannel: jspb.Message.getFieldWithDefault(msg, 3, ""),
    reserve: (f = msg.getReserve()) && proto.bilibili.dynamic.ShareReserve.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.ShareChannelItem}
 */
proto.bilibili.dynamic.ShareChannelItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.ShareChannelItem;
  return proto.bilibili.dynamic.ShareChannelItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.ShareChannelItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.ShareChannelItem}
 */
proto.bilibili.dynamic.ShareChannelItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPicture(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShareChannel(value);
      break;
    case 4:
      var value = new proto.bilibili.dynamic.ShareReserve;
      reader.readMessage(value,proto.bilibili.dynamic.ShareReserve.deserializeBinaryFromReader);
      msg.setReserve(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.ShareChannelItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.ShareChannelItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareChannelItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPicture();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShareChannel();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReserve();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bilibili.dynamic.ShareReserve.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareChannelItem} returns this
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string picture = 2;
 * @return {string}
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.getPicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareChannelItem} returns this
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.setPicture = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string share_channel = 3;
 * @return {string}
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.getShareChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareChannelItem} returns this
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.setShareChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ShareReserve reserve = 4;
 * @return {?proto.bilibili.dynamic.ShareReserve}
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.getReserve = function() {
  return /** @type{?proto.bilibili.dynamic.ShareReserve} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.ShareReserve, 4));
};


/**
 * @param {?proto.bilibili.dynamic.ShareReserve|undefined} value
 * @return {!proto.bilibili.dynamic.ShareChannelItem} returns this
*/
proto.bilibili.dynamic.ShareChannelItem.prototype.setReserve = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.ShareChannelItem} returns this
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.clearReserve = function() {
  return this.setReserve(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.ShareChannelItem.prototype.hasReserve = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.ShareReserve.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.ShareReserve.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.ShareReserve} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareReserve.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    desc: jspb.Message.getFieldWithDefault(msg, 2, ""),
    qrCodeIcon: jspb.Message.getFieldWithDefault(msg, 3, ""),
    qrCodeText: jspb.Message.getFieldWithDefault(msg, 4, ""),
    qrCodeUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    face: jspb.Message.getFieldWithDefault(msg, 7, ""),
    poster: (f = msg.getPoster()) && proto.bilibili.dynamic.ShareReservePoster.toObject(includeInstance, f),
    reserveLottery: (f = msg.getReserveLottery()) && proto.bilibili.dynamic.ShareReserveLottery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.ShareReserve}
 */
proto.bilibili.dynamic.ShareReserve.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.ShareReserve;
  return proto.bilibili.dynamic.ShareReserve.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.ShareReserve} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.ShareReserve}
 */
proto.bilibili.dynamic.ShareReserve.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQrCodeIcon(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQrCodeText(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQrCodeUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFace(value);
      break;
    case 8:
      var value = new proto.bilibili.dynamic.ShareReservePoster;
      reader.readMessage(value,proto.bilibili.dynamic.ShareReservePoster.deserializeBinaryFromReader);
      msg.setPoster(value);
      break;
    case 9:
      var value = new proto.bilibili.dynamic.ShareReserveLottery;
      reader.readMessage(value,proto.bilibili.dynamic.ShareReserveLottery.deserializeBinaryFromReader);
      msg.setReserveLottery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.ShareReserve.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.ShareReserve.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.ShareReserve} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareReserve.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQrCodeIcon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQrCodeText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQrCodeUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFace();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPoster();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bilibili.dynamic.ShareReservePoster.serializeBinaryToWriter
    );
  }
  f = message.getReserveLottery();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bilibili.dynamic.ShareReserveLottery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string desc = 2;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string qr_code_icon = 3;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getQrCodeIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.setQrCodeIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string qr_code_text = 4;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getQrCodeText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.setQrCodeText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string qr_code_url = 5;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getQrCodeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.setQrCodeUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string face = 7;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getFace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.setFace = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional ShareReservePoster poster = 8;
 * @return {?proto.bilibili.dynamic.ShareReservePoster}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getPoster = function() {
  return /** @type{?proto.bilibili.dynamic.ShareReservePoster} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.ShareReservePoster, 8));
};


/**
 * @param {?proto.bilibili.dynamic.ShareReservePoster|undefined} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
*/
proto.bilibili.dynamic.ShareReserve.prototype.setPoster = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.clearPoster = function() {
  return this.setPoster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.ShareReserve.prototype.hasPoster = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ShareReserveLottery reserve_lottery = 9;
 * @return {?proto.bilibili.dynamic.ShareReserveLottery}
 */
proto.bilibili.dynamic.ShareReserve.prototype.getReserveLottery = function() {
  return /** @type{?proto.bilibili.dynamic.ShareReserveLottery} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.ShareReserveLottery, 9));
};


/**
 * @param {?proto.bilibili.dynamic.ShareReserveLottery|undefined} value
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
*/
proto.bilibili.dynamic.ShareReserve.prototype.setReserveLottery = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.ShareReserve} returns this
 */
proto.bilibili.dynamic.ShareReserve.prototype.clearReserveLottery = function() {
  return this.setReserveLottery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.ShareReserve.prototype.hasReserveLottery = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.ShareReserveLottery.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.ShareReserveLottery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.ShareReserveLottery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareReserveLottery.toObject = function(includeInstance, msg) {
  var f, obj = {
    icon: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.ShareReserveLottery}
 */
proto.bilibili.dynamic.ShareReserveLottery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.ShareReserveLottery;
  return proto.bilibili.dynamic.ShareReserveLottery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.ShareReserveLottery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.ShareReserveLottery}
 */
proto.bilibili.dynamic.ShareReserveLottery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.ShareReserveLottery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.ShareReserveLottery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.ShareReserveLottery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareReserveLottery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string icon = 1;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserveLottery.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserveLottery} returns this
 */
proto.bilibili.dynamic.ShareReserveLottery.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReserveLottery.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReserveLottery} returns this
 */
proto.bilibili.dynamic.ShareReserveLottery.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.ShareReservePoster.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.ShareReservePoster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.ShareReservePoster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareReservePoster.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    width: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    height: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.ShareReservePoster}
 */
proto.bilibili.dynamic.ShareReservePoster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.ShareReservePoster;
  return proto.bilibili.dynamic.ShareReservePoster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.ShareReservePoster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.ShareReservePoster}
 */
proto.bilibili.dynamic.ShareReservePoster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.ShareReservePoster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.ShareReservePoster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.ShareReservePoster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareReservePoster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.bilibili.dynamic.ShareReservePoster.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareReservePoster} returns this
 */
proto.bilibili.dynamic.ShareReservePoster.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double width = 2;
 * @return {number}
 */
proto.bilibili.dynamic.ShareReservePoster.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.ShareReservePoster} returns this
 */
proto.bilibili.dynamic.ShareReservePoster.prototype.setWidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double height = 3;
 * @return {number}
 */
proto.bilibili.dynamic.ShareReservePoster.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.ShareReservePoster} returns this
 */
proto.bilibili.dynamic.ShareReservePoster.prototype.setHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.ShareResult.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.ShareResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.ShareResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    shareEnable: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toast: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.ShareResult}
 */
proto.bilibili.dynamic.ShareResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.ShareResult;
  return proto.bilibili.dynamic.ShareResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.ShareResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.ShareResult}
 */
proto.bilibili.dynamic.ShareResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setShareEnable(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToast(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.ShareResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.ShareResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.ShareResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShareResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShareEnable();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getToast();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 share_enable = 1;
 * @return {number}
 */
proto.bilibili.dynamic.ShareResult.prototype.getShareEnable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.ShareResult} returns this
 */
proto.bilibili.dynamic.ShareResult.prototype.setShareEnable = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string toast = 2;
 * @return {string}
 */
proto.bilibili.dynamic.ShareResult.prototype.getToast = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShareResult} returns this
 */
proto.bilibili.dynamic.ShareResult.prototype.setToast = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.ShowMoreLaunchedActivity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.ShowMoreLaunchedActivity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.toObject = function(includeInstance, msg) {
  var f, obj = {
    buttonText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    jumpUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.ShowMoreLaunchedActivity}
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.ShowMoreLaunchedActivity;
  return proto.bilibili.dynamic.ShowMoreLaunchedActivity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.ShowMoreLaunchedActivity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.ShowMoreLaunchedActivity}
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setButtonText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJumpUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.ShowMoreLaunchedActivity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.ShowMoreLaunchedActivity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButtonText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJumpUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string button_text = 1;
 * @return {string}
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.prototype.getButtonText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShowMoreLaunchedActivity} returns this
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.prototype.setButtonText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string jump_url = 2;
 * @return {string}
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.prototype.getJumpUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.ShowMoreLaunchedActivity} returns this
 */
proto.bilibili.dynamic.ShowMoreLaunchedActivity.prototype.setJumpUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.Sketch.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.Sketch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.Sketch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.Sketch.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    descText: jspb.Message.getFieldWithDefault(msg, 2, ""),
    text: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bizId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bizType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    coverUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    targetUrl: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.Sketch}
 */
proto.bilibili.dynamic.Sketch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.Sketch;
  return proto.bilibili.dynamic.Sketch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.Sketch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.Sketch}
 */
proto.bilibili.dynamic.Sketch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescText(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBizId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBizType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoverUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.Sketch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.Sketch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.Sketch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.Sketch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBizId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getBizType();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCoverUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTargetUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.bilibili.dynamic.Sketch.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Sketch} returns this
 */
proto.bilibili.dynamic.Sketch.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string desc_text = 2;
 * @return {string}
 */
proto.bilibili.dynamic.Sketch.prototype.getDescText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Sketch} returns this
 */
proto.bilibili.dynamic.Sketch.prototype.setDescText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.bilibili.dynamic.Sketch.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Sketch} returns this
 */
proto.bilibili.dynamic.Sketch.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 biz_id = 4;
 * @return {number}
 */
proto.bilibili.dynamic.Sketch.prototype.getBizId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.Sketch} returns this
 */
proto.bilibili.dynamic.Sketch.prototype.setBizId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 biz_type = 5;
 * @return {number}
 */
proto.bilibili.dynamic.Sketch.prototype.getBizType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.Sketch} returns this
 */
proto.bilibili.dynamic.Sketch.prototype.setBizType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string cover_url = 6;
 * @return {string}
 */
proto.bilibili.dynamic.Sketch.prototype.getCoverUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Sketch} returns this
 */
proto.bilibili.dynamic.Sketch.prototype.setCoverUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string target_url = 7;
 * @return {string}
 */
proto.bilibili.dynamic.Sketch.prototype.getTargetUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.Sketch} returns this
 */
proto.bilibili.dynamic.Sketch.prototype.setTargetUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bilibili.dynamic.UpPermission.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.UpPermission.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.UpPermission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.UpPermission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.UpPermission.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.bilibili.dynamic.UpPermissionItem.toObject, includeInstance),
    launchedActivity: (f = msg.getLaunchedActivity()) && proto.bilibili.dynamic.LaunchedActivity.toObject(includeInstance, f),
    shareResult: (f = msg.getShareResult()) && proto.bilibili.dynamic.ShareResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.UpPermission}
 */
proto.bilibili.dynamic.UpPermission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.UpPermission;
  return proto.bilibili.dynamic.UpPermission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.UpPermission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.UpPermission}
 */
proto.bilibili.dynamic.UpPermission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.dynamic.UpPermissionItem;
      reader.readMessage(value,proto.bilibili.dynamic.UpPermissionItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 2:
      var value = new proto.bilibili.dynamic.LaunchedActivity;
      reader.readMessage(value,proto.bilibili.dynamic.LaunchedActivity.deserializeBinaryFromReader);
      msg.setLaunchedActivity(value);
      break;
    case 3:
      var value = new proto.bilibili.dynamic.ShareResult;
      reader.readMessage(value,proto.bilibili.dynamic.ShareResult.deserializeBinaryFromReader);
      msg.setShareResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.UpPermission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.UpPermission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.UpPermission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.UpPermission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bilibili.dynamic.UpPermissionItem.serializeBinaryToWriter
    );
  }
  f = message.getLaunchedActivity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.dynamic.LaunchedActivity.serializeBinaryToWriter
    );
  }
  f = message.getShareResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bilibili.dynamic.ShareResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UpPermissionItem items = 1;
 * @return {!Array<!proto.bilibili.dynamic.UpPermissionItem>}
 */
proto.bilibili.dynamic.UpPermission.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.bilibili.dynamic.UpPermissionItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bilibili.dynamic.UpPermissionItem, 1));
};


/**
 * @param {!Array<!proto.bilibili.dynamic.UpPermissionItem>} value
 * @return {!proto.bilibili.dynamic.UpPermission} returns this
*/
proto.bilibili.dynamic.UpPermission.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bilibili.dynamic.UpPermissionItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bilibili.dynamic.UpPermissionItem}
 */
proto.bilibili.dynamic.UpPermission.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bilibili.dynamic.UpPermissionItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bilibili.dynamic.UpPermission} returns this
 */
proto.bilibili.dynamic.UpPermission.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional LaunchedActivity launched_activity = 2;
 * @return {?proto.bilibili.dynamic.LaunchedActivity}
 */
proto.bilibili.dynamic.UpPermission.prototype.getLaunchedActivity = function() {
  return /** @type{?proto.bilibili.dynamic.LaunchedActivity} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.LaunchedActivity, 2));
};


/**
 * @param {?proto.bilibili.dynamic.LaunchedActivity|undefined} value
 * @return {!proto.bilibili.dynamic.UpPermission} returns this
*/
proto.bilibili.dynamic.UpPermission.prototype.setLaunchedActivity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.UpPermission} returns this
 */
proto.bilibili.dynamic.UpPermission.prototype.clearLaunchedActivity = function() {
  return this.setLaunchedActivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.UpPermission.prototype.hasLaunchedActivity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ShareResult share_result = 3;
 * @return {?proto.bilibili.dynamic.ShareResult}
 */
proto.bilibili.dynamic.UpPermission.prototype.getShareResult = function() {
  return /** @type{?proto.bilibili.dynamic.ShareResult} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.ShareResult, 3));
};


/**
 * @param {?proto.bilibili.dynamic.ShareResult|undefined} value
 * @return {!proto.bilibili.dynamic.UpPermission} returns this
*/
proto.bilibili.dynamic.UpPermission.prototype.setShareResult = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.UpPermission} returns this
 */
proto.bilibili.dynamic.UpPermission.prototype.clearShareResult = function() {
  return this.setShareResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.UpPermission.prototype.hasShareResult = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.UpPermissionItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.UpPermissionItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.UpPermissionItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    permission: jspb.Message.getFieldWithDefault(msg, 2, 0),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    jumpUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    toast: jspb.Message.getFieldWithDefault(msg, 7, ""),
    hasRedDot: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.UpPermissionItem}
 */
proto.bilibili.dynamic.UpPermissionItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.UpPermissionItem;
  return proto.bilibili.dynamic.UpPermissionItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.UpPermissionItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.UpPermissionItem}
 */
proto.bilibili.dynamic.UpPermissionItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPermission(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setJumpUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setToast(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHasRedDot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.UpPermissionItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.UpPermissionItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.UpPermissionItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPermission();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getJumpUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getToast();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHasRedDot();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.UpPermissionItem} returns this
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 permission = 2;
 * @return {number}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.getPermission = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.UpPermissionItem} returns this
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.setPermission = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.UpPermissionItem} returns this
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subtitle = 4;
 * @return {string}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.UpPermissionItem} returns this
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.UpPermissionItem} returns this
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string jump_url = 6;
 * @return {string}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.getJumpUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.UpPermissionItem} returns this
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.setJumpUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string toast = 7;
 * @return {string}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.getToast = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.dynamic.UpPermissionItem} returns this
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.setToast = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 has_red_dot = 8;
 * @return {number}
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.getHasRedDot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.UpPermissionItem} returns this
 */
proto.bilibili.dynamic.UpPermissionItem.prototype.setHasRedDot = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.UserCreateMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.UserCreateMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.UserCreateMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    appMeta: (f = msg.getAppMeta()) && proto.bilibili.dynamic.MetaDataCtrl.toObject(includeInstance, f),
    loc: (f = msg.getLoc()) && proto.bilibili.dynamic.LbsLoc.toObject(includeInstance, f),
    repostMode: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.UserCreateMeta}
 */
proto.bilibili.dynamic.UserCreateMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.UserCreateMeta;
  return proto.bilibili.dynamic.UserCreateMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.UserCreateMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.UserCreateMeta}
 */
proto.bilibili.dynamic.UserCreateMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.dynamic.MetaDataCtrl;
      reader.readMessage(value,proto.bilibili.dynamic.MetaDataCtrl.deserializeBinaryFromReader);
      msg.setAppMeta(value);
      break;
    case 2:
      var value = new proto.bilibili.dynamic.LbsLoc;
      reader.readMessage(value,proto.bilibili.dynamic.LbsLoc.deserializeBinaryFromReader);
      msg.setLoc(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRepostMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.UserCreateMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.UserCreateMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.UserCreateMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.dynamic.MetaDataCtrl.serializeBinaryToWriter
    );
  }
  f = message.getLoc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.dynamic.LbsLoc.serializeBinaryToWriter
    );
  }
  f = message.getRepostMode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional MetaDataCtrl app_meta = 1;
 * @return {?proto.bilibili.dynamic.MetaDataCtrl}
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.getAppMeta = function() {
  return /** @type{?proto.bilibili.dynamic.MetaDataCtrl} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.MetaDataCtrl, 1));
};


/**
 * @param {?proto.bilibili.dynamic.MetaDataCtrl|undefined} value
 * @return {!proto.bilibili.dynamic.UserCreateMeta} returns this
*/
proto.bilibili.dynamic.UserCreateMeta.prototype.setAppMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.UserCreateMeta} returns this
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.clearAppMeta = function() {
  return this.setAppMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.hasAppMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LbsLoc loc = 2;
 * @return {?proto.bilibili.dynamic.LbsLoc}
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.getLoc = function() {
  return /** @type{?proto.bilibili.dynamic.LbsLoc} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.dynamic.LbsLoc, 2));
};


/**
 * @param {?proto.bilibili.dynamic.LbsLoc|undefined} value
 * @return {!proto.bilibili.dynamic.UserCreateMeta} returns this
*/
proto.bilibili.dynamic.UserCreateMeta.prototype.setLoc = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.dynamic.UserCreateMeta} returns this
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.clearLoc = function() {
  return this.setLoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.hasLoc = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 repost_mode = 3;
 * @return {number}
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.getRepostMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.UserCreateMeta} returns this
 */
proto.bilibili.dynamic.UserCreateMeta.prototype.setRepostMode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bilibili.dynamic.VideoShareInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.dynamic.VideoShareInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.dynamic.VideoShareInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.VideoShareInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    part: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bilibili.dynamic.VideoShareInfo}
 */
proto.bilibili.dynamic.VideoShareInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.dynamic.VideoShareInfo;
  return proto.bilibili.dynamic.VideoShareInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.dynamic.VideoShareInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.dynamic.VideoShareInfo}
 */
proto.bilibili.dynamic.VideoShareInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPart(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bilibili.dynamic.VideoShareInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.dynamic.VideoShareInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.dynamic.VideoShareInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.dynamic.VideoShareInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPart();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 cid = 1;
 * @return {number}
 */
proto.bilibili.dynamic.VideoShareInfo.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.VideoShareInfo} returns this
 */
proto.bilibili.dynamic.VideoShareInfo.prototype.setCid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 part = 2;
 * @return {number}
 */
proto.bilibili.dynamic.VideoShareInfo.prototype.getPart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.dynamic.VideoShareInfo} returns this
 */
proto.bilibili.dynamic.VideoShareInfo.prototype.setPart = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.bilibili.dynamic.AtGroupType = {
  AT_GROUP_TYPE_DEFAULT: 0,
  AT_GROUP_TYPE_RECENT: 1,
  AT_GROUP_TYPE_FOLLOW: 2,
  AT_GROUP_TYPE_FANS: 3,
  AT_GROUP_TYPE_OTHERS: 4
};

/**
 * @enum {number}
 */
proto.bilibili.dynamic.AttachCardType = {
  ATTACH_CARD_NONE: 0,
  ATTACH_CARD_GOODS: 1,
  ATTACH_CARD_VOTE: 2,
  ATTACH_CARD_UGC: 3,
  ATTACH_CARD_ACTIVITY: 4,
  ATTACH_CARD_OFFICIAL_ACTIVITY: 5,
  ATTACH_CARD_TOPIC: 6,
  ATTACH_CARD_OGV: 7,
  ATTACH_CARD_AUTO_OGV: 8,
  ATTACH_CARD_GAME: 9,
  ATTACH_CARD_MANGA: 10,
  ATTACH_CARD_DECORATION: 11,
  ATTACH_CARD_MATCH: 12,
  ATTACH_CARD_PUGV: 13,
  ATTACH_CARD_RESERVE: 14,
  ATTACH_CARD_UP_TOPIC: 15
};

/**
 * @enum {number}
 */
proto.bilibili.dynamic.ContentType = {
  CONTENT_TYPE_NONE: 0,
  TEXT: 1,
  AT: 2,
  LOTTERY: 3,
  VOTE: 4,
  TOPIC: 5,
  GOODS: 6,
  BV: 7,
  AV: 8,
  EMOJI: 9,
  USER: 10,
  CV: 11,
  VC: 12,
  WEB: 13,
  TAOBAO: 14,
  MAIL: 15,
  OGV_SEASON: 16,
  OGV_EP: 17
};

/**
 * @enum {number}
 */
proto.bilibili.dynamic.CreateInitCheckScene = {
  CREATE_INIT_CHECK_SCENE_INVALID: 0,
  CREATE_INIT_CHECK_SCENE_NORMAL: 1,
  CREATE_INIT_CHECK_SCENE_REPOST: 2,
  CREATE_INIT_CHECK_SCENE_SHARE: 3,
  CREATE_INIT_CHECK_SCENE_RESERVE_SHARE: 4
};

/**
 * @enum {number}
 */
proto.bilibili.dynamic.CreateScene = {
  CREATE_SCENE_INVALID: 0,
  CREATE_SCENE_CREATE_WORD: 1,
  CREATE_SCENE_CREATE_DRAW: 2,
  CREATE_SCENE_CREATE_DYN_VIDEO: 3,
  CREATE_SCENE_REPOST: 4,
  CREATE_SCENE_SHARE_BIZ: 5,
  CREATE_SCENE_SHARE_PAGE: 6,
  CREATE_SCENE_SHARE_PROGRAM: 7,
  CREATE_SCENE_REPLY_SYNC: 8,
  CREATE_SCENE_REPLY_CREATE_ACTIVITY: 9
};

/**
 * @enum {number}
 */
proto.bilibili.dynamic.ReserveSource = {
  RESERVE_SOURCE_NEW: 0,
  RESERVE_SOURCE_ASSOCIATED: 1
};

/**
 * @enum {number}
 */
proto.bilibili.dynamic.UpPermissionType = {
  UP_PERMISSION_TYPE_NONE: 0,
  UP_PERMISSION_TYPE_LOTTERY: 1,
  UP_PERMISSION_TYPE_CLIP_PUBLISHED: 2,
  UP_PERMISSION_TYPE_UGC_ATTACH_CARD: 3,
  UP_PERMISSION_TYPE_GOODS_ATTACH_CARD: 4,
  UP_PERMISSION_TYPE_CHOOSE_COMMENT: 5,
  UP_PERMISSION_TYPE_CONTROL_COMMENT: 6,
  UP_PERMISSION_TYPE_CONTROL_DANMU: 7,
  UP_PERMISSION_TYPE_VIDEO_RESERVE: 8,
  UP_PERMISSION_TYPE_LIVE_RESERVE: 9
};

goog.object.extend(exports, proto.bilibili.dynamic);
