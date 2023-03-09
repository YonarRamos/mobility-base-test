const logger_ =  require('nexo-npm-node-logger');

logger_.onError((error, { filename, line, column, timestamp }) => {

});

logger_.onLogged((type, msg, context) => {

});

logger_.withFormat((type, msg, context) => msg)

module.exports = logger_;