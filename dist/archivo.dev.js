"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var logger = require('./logger/index');

var a = '10';
var b = 0.00005; // corrobora el tipo de dato almacenados en las variables a y b , en caso de no coincidir arroja un error

var msjError = function msjError() {
  if (_typeof(a) == _typeof(b)) {
    console.log('si es el mismo tipo');
  } else {
    throw 'Error de tipo de dato';
  }
};

try {
  msjError();
} catch (error) {
  logger.error("Error:".concat(error));
}