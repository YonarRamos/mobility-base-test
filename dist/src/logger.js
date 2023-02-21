"use strict";

var myLogger = require('nexo-npm-node-logger');
myLogger.onError(function (error, _ref) {
  var filename = _ref.filename,
    line = _ref.line,
    column = _ref.column,
    timestamp = _ref.timestamp;
});
myLogger.onLogged(function (type, msg, context) {});
myLogger.withFormat(function (type, msg, context) {
  return msg;
});
module.exports = myLogger;