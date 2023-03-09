const _sqlite =  require('nexo-npm-node-sqlite')
const logs_ =  require('nexo-npm-node-logger')

_sqlite.url("./db.sqlite3")
_sqlite.onConnected(() => logs_.i("Connected to the database"))
_sqlite.onFailure(err => logs_.e("Unable to connect to the database", err))
_sqlite.initialize()

module.exports = _sqlite
