'use strict';
var Promise = require('es6-promise').Promise;

module.exports = function () {
  var args = Array.prototype.slice.call(arguments);
  return args;
};

exports.localStorage = function () {
  return Promise.resolve(localStorage.clear());
};
