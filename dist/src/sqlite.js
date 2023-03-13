"use strict";

var _sqlite = require('nexo-npm-node-sqlite');
var logs_ = require('nexo-npm-node-logger');
_sqlite.setConnection({
  filename: "/src/services/db/db.sqlite3"
});
_sqlite.setMigrationsUrl("./src/services/db/migrations");
_sqlite.setSeedsUrl("./src/services/db/seeds");
_sqlite.onConnected(function () {
  return logs_.i("Connected to the database");
});
_sqlite.onFailure(function (err) {
  return logs_.e("Unable to connect to the database", err);
});
_sqlite.initialize();
module.exports = _sqlite;