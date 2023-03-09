"use strict";

var _sqlite = require('nexo-npm-node-sqlite');
var logs_ = require('nexo-npm-node-logger');
_sqlite.url("./db.sqlite3");
_sqlite.onConnected(function () {
  return logs_.i("Connected to the database");
});
_sqlite.onFailure(function (err) {
  return logs_.e("Unable to connect to the database", err);
});
_sqlite.initialize();
module.exports = _sqlite;