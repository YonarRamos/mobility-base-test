const _api = require('nexo-npm-node-api');
const _logger = require('nexo-npm-node-logger');
const _errors = require('nexo-npm-node-errors');

_api.port(8080);

_api.onInitialize((port:number) => {
   return _logger.i(`-- SERVER RUNNING ON PORT ${port} --`);
});

_api.onRequest((request) => {
   return _logger.i(`- INIT - (${request.id}) ${request.method} ${request.endpoint}`);
});

_api.onResponse(( request, data ) => {
    return ({ ..._errors.get("0"), data });
});

_api.onError(( request, error ) => {
    if (error.code && error.description) {
        _logger.i(`- THROW - (${request.id}) ${request.method} ${request.endpoint} -- ${error.description}`);
        return ({ code: error.code, description: error.description });
    } else {
        _logger.i(`- THROW - (${request.id}) ${request.method} ${request.endpoint} -- ${error}`);
        return ({ ..._errors.get("-1") });
    }
});

_api.onFallback((request) => {
    return ({ code: -1, description: "Method not found" })
})

_api.onEnd((request, response) => {
   return _logger.i(`- END - (${request.id}) ${request.method} ${request.endpoint} with code ${response.code} in ${Number(new Date()) - request.timestamp}ms`);
});

_api.swaggerDirectory('./src/routes/*.js');
_api.swaggerTitle('Noticias/Consultas API');
_api.enableSwagger();

module.exports = _api;
