// source: bilibili/metadata/locale/locale.proto
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

goog.exportSymbol('proto.bilibili.metadata.locale.Locale', null, global);
goog.exportSymbol('proto.bilibili.metadata.locale.LocaleIds', null, global);
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
proto.bilibili.metadata.locale.Locale = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.metadata.locale.Locale, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.metadata.locale.Locale.displayName = 'proto.bilibili.metadata.locale.Locale';
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
proto.bilibili.metadata.locale.LocaleIds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bilibili.metadata.locale.LocaleIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bilibili.metadata.locale.LocaleIds.displayName = 'proto.bilibili.metadata.locale.LocaleIds';
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
proto.bilibili.metadata.locale.Locale.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.metadata.locale.Locale.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.metadata.locale.Locale} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.metadata.locale.Locale.toObject = function(includeInstance, msg) {
  var f, obj = {
    cLocale: (f = msg.getCLocale()) && proto.bilibili.metadata.locale.LocaleIds.toObject(includeInstance, f),
    sLocale: (f = msg.getSLocale()) && proto.bilibili.metadata.locale.LocaleIds.toObject(includeInstance, f),
    simCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.bilibili.metadata.locale.Locale}
 */
proto.bilibili.metadata.locale.Locale.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.metadata.locale.Locale;
  return proto.bilibili.metadata.locale.Locale.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.metadata.locale.Locale} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.metadata.locale.Locale}
 */
proto.bilibili.metadata.locale.Locale.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bilibili.metadata.locale.LocaleIds;
      reader.readMessage(value,proto.bilibili.metadata.locale.LocaleIds.deserializeBinaryFromReader);
      msg.setCLocale(value);
      break;
    case 2:
      var value = new proto.bilibili.metadata.locale.LocaleIds;
      reader.readMessage(value,proto.bilibili.metadata.locale.LocaleIds.deserializeBinaryFromReader);
      msg.setSLocale(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSimCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
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
proto.bilibili.metadata.locale.Locale.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.metadata.locale.Locale.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.metadata.locale.Locale} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.metadata.locale.Locale.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCLocale();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bilibili.metadata.locale.LocaleIds.serializeBinaryToWriter
    );
  }
  f = message.getSLocale();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bilibili.metadata.locale.LocaleIds.serializeBinaryToWriter
    );
  }
  f = message.getSimCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional LocaleIds c_locale = 1;
 * @return {?proto.bilibili.metadata.locale.LocaleIds}
 */
proto.bilibili.metadata.locale.Locale.prototype.getCLocale = function() {
  return /** @type{?proto.bilibili.metadata.locale.LocaleIds} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.metadata.locale.LocaleIds, 1));
};


/**
 * @param {?proto.bilibili.metadata.locale.LocaleIds|undefined} value
 * @return {!proto.bilibili.metadata.locale.Locale} returns this
*/
proto.bilibili.metadata.locale.Locale.prototype.setCLocale = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.metadata.locale.Locale} returns this
 */
proto.bilibili.metadata.locale.Locale.prototype.clearCLocale = function() {
  return this.setCLocale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.metadata.locale.Locale.prototype.hasCLocale = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LocaleIds s_locale = 2;
 * @return {?proto.bilibili.metadata.locale.LocaleIds}
 */
proto.bilibili.metadata.locale.Locale.prototype.getSLocale = function() {
  return /** @type{?proto.bilibili.metadata.locale.LocaleIds} */ (
    jspb.Message.getWrapperField(this, proto.bilibili.metadata.locale.LocaleIds, 2));
};


/**
 * @param {?proto.bilibili.metadata.locale.LocaleIds|undefined} value
 * @return {!proto.bilibili.metadata.locale.Locale} returns this
*/
proto.bilibili.metadata.locale.Locale.prototype.setSLocale = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bilibili.metadata.locale.Locale} returns this
 */
proto.bilibili.metadata.locale.Locale.prototype.clearSLocale = function() {
  return this.setSLocale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bilibili.metadata.locale.Locale.prototype.hasSLocale = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string sim_code = 3;
 * @return {string}
 */
proto.bilibili.metadata.locale.Locale.prototype.getSimCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.locale.Locale} returns this
 */
proto.bilibili.metadata.locale.Locale.prototype.setSimCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string timezone = 4;
 * @return {string}
 */
proto.bilibili.metadata.locale.Locale.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.locale.Locale} returns this
 */
proto.bilibili.metadata.locale.Locale.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.bilibili.metadata.locale.LocaleIds.prototype.toObject = function(opt_includeInstance) {
  return proto.bilibili.metadata.locale.LocaleIds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bilibili.metadata.locale.LocaleIds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.metadata.locale.LocaleIds.toObject = function(includeInstance, msg) {
  var f, obj = {
    language: jspb.Message.getFieldWithDefault(msg, 1, ""),
    script: jspb.Message.getFieldWithDefault(msg, 2, ""),
    region: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.bilibili.metadata.locale.LocaleIds}
 */
proto.bilibili.metadata.locale.LocaleIds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bilibili.metadata.locale.LocaleIds;
  return proto.bilibili.metadata.locale.LocaleIds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bilibili.metadata.locale.LocaleIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bilibili.metadata.locale.LocaleIds}
 */
proto.bilibili.metadata.locale.LocaleIds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScript(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
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
proto.bilibili.metadata.locale.LocaleIds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bilibili.metadata.locale.LocaleIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bilibili.metadata.locale.LocaleIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bilibili.metadata.locale.LocaleIds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScript();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string language = 1;
 * @return {string}
 */
proto.bilibili.metadata.locale.LocaleIds.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.locale.LocaleIds} returns this
 */
proto.bilibili.metadata.locale.LocaleIds.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string script = 2;
 * @return {string}
 */
proto.bilibili.metadata.locale.LocaleIds.prototype.getScript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.locale.LocaleIds} returns this
 */
proto.bilibili.metadata.locale.LocaleIds.prototype.setScript = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string region = 3;
 * @return {string}
 */
proto.bilibili.metadata.locale.LocaleIds.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bilibili.metadata.locale.LocaleIds} returns this
 */
proto.bilibili.metadata.locale.LocaleIds.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.bilibili.metadata.locale);
