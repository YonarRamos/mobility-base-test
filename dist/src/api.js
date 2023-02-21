"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var api = require('nexo-npm-node-api');
var api_logger = require('nexo-npm-node-logger');
var api_errors = require('nexo-npm-node-errors');
api.port(9000);
api.onInitialize(function (port) {
  api_logger.i("-- SERVER RUNNING ON PORT ".concat(port, " --"));
});
api.onRequest(function (request) {
  api_logger.i("- INIT - (".concat(request.id, ") ").concat(request.method, " ").concat(request.endpoint));
});
api.onResponse(function (request, data) {
  return _objectSpread(_objectSpread({}, api_errors.get("0")), {}, {
    data: transformId(data)
  });
});
api.onError(function (request, error) {
  if (error.code && error.description) {
    api_logger.i("- THROW - (".concat(request.id, ") ").concat(request.method, " ").concat(request.endpoint, " -- ").concat(error.description));
    return {
      code: error.code,
      description: error.description
    };
  } else {
    api_logger.i("- THROW - (".concat(request.id, ") ").concat(request.method, " ").concat(request.endpoint, " -- ").concat(error));
    return _objectSpread({}, api_errors.get("-1"));
  }
});
api.onFallback(function (request) {
  return {
    code: -1,
    description: "Method not found"
  };
});
api.onEnd(function (request, response) {
  api_logger.i("- END - (".concat(request.id, ") ").concat(request.method, " ").concat(request.endpoint, " with code ").concat(response.code, " in ").concat(Number(new Date()) - request.timestamp, "ms"));
});

// Función que transforma el identificador de mongo en un identificador genérico
// con tal de ocultar en el servicio el uso la base de datos de mongo.
function transformId(entity) {
  if (!entity) return null;
  entity.id = entity._id;
  entity._id = undefined;
  return entity;
}
module.exports = api;