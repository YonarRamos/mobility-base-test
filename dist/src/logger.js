"use strict";

var logger_ = require('nexo-npm-node-logger');
logger_.onError(function (error, _ref) {
  var filename = _ref.filename,
    line = _ref.line,
    column = _ref.column,
    timestamp = _ref.timestamp;
});
logger_.onLogged(function (type, msg, context) {});
logger_.withFormat(function (type, msg, context) {
  return msg;
});
module.exports = logger_;