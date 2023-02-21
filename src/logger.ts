const myLogger =  require('nexo-npm-node-logger');

myLogger.onError((error, { filename, line, column, timestamp }) => {

});

myLogger.onLogged((type, msg, context) => {

});

myLogger.withFormat((type, msg, context) => msg)

module.exports = myLogger;