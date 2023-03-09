"use strict";

var errors_ = require('nexo-npm-node-errors');
errors_.refreshTime(60000);
errors_.source(function () {
  var dict = {
    "-1": {
      code: "-1",
      description: "Internal error"
    },
    "0": {
      code: "0",
      description: "Servicio ejecutado correctamente"
    },
    "1": {
      code: "1",
      description: "No se ha especificado el parámetro '${0}'."
    },
    "2": {
      code: "2",
      description: "No se ha especificado ningún dato en el cuerpo de la petición."
    },
    "3": {
      code: "3",
      description: "No se ha especificado la cabecera '${0}'."
    },
    "4": {
      code: "4",
      description: "Se esperaba el valor '${0}' del tipo '${1}'."
    },
    "5": {
      code: "5",
      description: "No se ha encontrado ningún '${0}' con '${1}' = '${2}'."
    },
    "6": {
      code: "6",
      description: "El valor '${0}' no tiene el formato esperado."
    },
    "7": {
      code: "7",
      description: "El valor '${0}' no tiene el formato de fecha esperado (${1})."
    },
    "8": {
      code: "8",
      description: "El valor '${0}' no es un valor permitido para este parámetro."
    },
    "10": {
      code: "10",
      description: "User not found"
    },
    "200": {
      code: "200",
      description: "Un error"
    },
    "201": {
      code: "201",
      description: "Otro error"
    }
  };
  errors_.queryCode("1");
  errors_.bodyCode("2");
  errors_.headerCode("3");
  errors_.typeCode("4");
  errors_.nullCode("5");
  errors_.regexCode("6");
  errors_.dateCode("7");
  errors_.fallback(dict["-1"]);
  return dict;
});
errors_.fallback({
  code: -9,
  description: "Fallback error not found"
});
errors_.initialize();
module.exports = errors_;