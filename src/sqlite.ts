const _sqlite =  require('nexo-npm-node-sqlite')
const logs_ =  require('nexo-npm-node-logger')

_sqlite.setConnection({ filename: "/src/services/db/db.sqlite3"})
_sqlite.setMigrationsUrl("./src/services/db/migrations")
_sqlite.setSeedsUrl("./src/services/db/seeds")
_sqlite.onConnected(() => logs_.i("Connected to the database"))
_sqlite.onFailure((err:any) => logs_.e("Unable to connect to the database", err))
_sqlite.initialize()

module.exports = _sqlite
