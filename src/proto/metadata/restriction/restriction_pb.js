// source: bilibili/metadata/restriction/restriction.proto
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

goog.exportSymbol('proto.bilibili.metadata.restriction.ModeType', null, global);
goog.exportSymbol('proto.bilibili.metadata.restriction.Restriction', null, global);
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
proto.bilibili.metadata.restriction.Restriction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.metadata.restriction.Restriction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.metadata.restriction.Restriction.displayName = 'proto.bilibili.metadata.restriction.Restriction';
}



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
proto.bilibili.metadata.restriction.Restriction.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.metadata.restriction.Restriction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.metadata.restriction.Restriction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.metadata.restriction.Restriction.toObject = function(includeInstance, msg) {
  var f, obj = {
    teenagersMode: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    lessonsMode: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    mode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    review: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    disableRcmd: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.bilibili.metadata.restriction.Restriction}
 */
proto.bilibili.metadata.restriction.Restriction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.metadata.restriction.Restriction;
  return proto.bilibili.metadata.restriction.Restriction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.metadata.restriction.Restriction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.metadata.restriction.Restriction}
 */
proto.bilibili.metadata.restriction.Restriction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTeenagersMode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLessonsMode(value);
      break;
    case 3:
      var value = /** @type {!proto.bilibili.metadata.restriction.ModeType} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReview(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableRcmd(value);
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
proto.bilibili.metadata.restriction.Restriction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.metadata.restriction.Restriction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.metadata.restriction.Restriction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.metadata.restriction.Restriction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeenagersMode();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getLessonsMode();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getReview();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDisableRcmd();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool teenagers_mode = 1;
 * @return {boolean}
 */
proto.bilibili.metadata.restriction.Restriction.prototype.getTeenagersMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.metadata.restriction.Restriction} returns this
 */
proto.bilibili.metadata.restriction.Restriction.prototype.setTeenagersMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool lessons_mode = 2;
 * @return {boolean}
 */
proto.bilibili.metadata.restriction.Restriction.prototype.getLessonsMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.metadata.restriction.Restriction} returns this
 */
proto.bilibili.metadata.restriction.Restriction.prototype.setLessonsMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional ModeType mode = 3;
 * @return {!proto.bilibili.metadata.restriction.ModeType}
 */
proto.bilibili.metadata.restriction.Restriction.prototype.getMode = function() {
  return /** @type {!proto.bilibili.metadata.restriction.ModeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bilibili.metadata.restriction.ModeType} value
 * @return {!proto.bilibili.metadata.restriction.Restriction} returns this
 */
proto.bilibili.metadata.restriction.Restriction.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool review = 4;
 * @return {boolean}
 */
proto.bilibili.metadata.restriction.Restriction.prototype.getReview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.metadata.restriction.Restriction} returns this
 */
proto.bilibili.metadata.restriction.Restriction.prototype.setReview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool disable_rcmd = 5;
 * @return {boolean}
 */
proto.bilibili.metadata.restriction.Restriction.prototype.getDisableRcmd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bilibili.metadata.restriction.Restriction} returns this
 */
proto.bilibili.metadata.restriction.Restriction.prototype.setDisableRcmd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.bilibili.metadata.restriction.ModeType = {
  NORMAL: 0,
  TEENAGERS: 1,
  LESSONS: 2
};

goog.object.extend(exports, proto.bilibili.metadata.restriction);