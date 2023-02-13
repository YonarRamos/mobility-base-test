const mongo =  require('nexo-npm-mongo');
const logger =  require('nexo-npm-logger');

mongo.url("0.0.0.0:27017");
mongo.credentials("admin", "admin");
mongo.schema("public");

mongo.onConnected(async () => {
    logger.i("Connected to the database");
});

mongo.onFailure((err) => {
    logger.e("Unable to connect to the database", err)
});

mongo.initialize();

module.exports = mongo;
