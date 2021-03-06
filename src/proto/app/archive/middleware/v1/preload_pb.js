// source: bilibili/app/archive/middleware/v1/preload.proto
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

goog.exportSymbol('proto.bilibili.app.archive.middleware.v1.PlayerArgs', null, global);
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
proto.bilibili.app.archive.middleware.v1.PlayerArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.app.archive.middleware.v1.PlayerArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.app.archive.middleware.v1.PlayerArgs.displayName = 'proto.bilibili.app.archive.middleware.v1.PlayerArgs';
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
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.app.archive.middleware.v1.PlayerArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.app.archive.middleware.v1.PlayerArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    qn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fnver: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fnval: jspb.Message.getFieldWithDefault(msg, 3, 0),
    forceHost: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bilibili.app.archive.middleware.v1.PlayerArgs}
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.app.archive.middleware.v1.PlayerArgs;
  return proto.bilibili.app.archive.middleware.v1.PlayerArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.app.archive.middleware.v1.PlayerArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.app.archive.middleware.v1.PlayerArgs}
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFnver(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFnval(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setForceHost(value);
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
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.app.archive.middleware.v1.PlayerArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.app.archive.middleware.v1.PlayerArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFnver();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFnval();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getForceHost();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 qn = 1;
 * @return {number}
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.getQn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.app.archive.middleware.v1.PlayerArgs} returns this
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.setQn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 fnver = 2;
 * @return {number}
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.getFnver = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.app.archive.middleware.v1.PlayerArgs} returns this
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.setFnver = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 fnval = 3;
 * @return {number}
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.getFnval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.app.archive.middleware.v1.PlayerArgs} returns this
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.setFnval = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 force_host = 4;
 * @return {number}
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.getForceHost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bilibili.app.archive.middleware.v1.PlayerArgs} returns this
 */
proto.bilibili.app.archive.middleware.v1.PlayerArgs.prototype.setForceHost = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.bilibili.app.archive.middleware.v1);
