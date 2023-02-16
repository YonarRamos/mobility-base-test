const sqlite =  require('nexo-npm-node-sqlite');
const logger =  require('nexo-npm-node-logger');

sqlite.url("./db.sqlite3");
sqlite.onConnected(async () => {
    logger.i("Connected to the database");
});
sqlite.onFailure((err) => {
    logger.e("Unable to connect to the database", err)
});
sqlite.initialize()

module.exports = sqlite
