const expose = require('nexo-npm-api');
const logger = require('nexo-npm-logger');
const errors = require('nexo-npm-errors');

expose.port(9000);

expose.onInitialize((port) => {
    logger.i(`-- SERVER RUNNING ON PORT ${port} --`);
});

expose.onRequest((request) => {
    logger.i(`- INIT - (${request.id}) ${request.method} ${request.endpoint}`);
});

expose.onResponse(( request, data ) => {
    return ({ ...errors.get("0"), data: transformId(data) });
});

expose.onError(( request, error ) => {
    if (error.code && error.description) {
        logger.i(`- THROW - (${request.id}) ${request.method} ${request.endpoint} -- ${error.description}`);
        return ({ code: error.code, description: error.description });
    } else {
        logger.i(`- THROW - (${request.id}) ${request.method} ${request.endpoint} -- ${error}`);
        return ({ ...errors.get("-1") });
    }
});

expose.onFallback((request) => {
    return ({ code: -1, description: "Method not found" })
})

expose.onEnd((request, response) => {
    logger.i(`- END - (${request.id}) ${request.method} ${request.endpoint} with code ${response.code} in ${new Date() - request.timestamp}ms`);
});

// Función que transforma el identificador de mongo en un identificador genérico
// con tal de ocultar en el servicio el uso la base de datos de mongo.
function transformId(entity) {
    if (!entity) return null;
    entity.id = entity._id;
    entity._id = undefined;
    return entity;
}

module.exports = expose;
