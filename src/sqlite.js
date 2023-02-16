const sqlite =  require('nexo-npm-node-sqlite');
//const logger =  require('nexo-npm-logger');

sqlite.url("./db.sqlite3");
/* mongo.credentials("admin", "admin");
mongo.schema("public");

mongo.onConnected(async () => {
    logger.i("Connected to the database");
});

mongo.onFailure((err) => {
    logger.e("Unable to connect to the database", err)
});
 */

module.exports = sqlite.initialize();
