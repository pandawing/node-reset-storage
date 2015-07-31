'use strict';
var Promise = require('es6-promise').Promise;

function all () {
  var args = Array.prototype.slice.call(arguments);
  return args;
}
function removeLocalStorage () {
  return new Promise(function (resolve) {
    localStorage.clear();
    resolve();
  });
}

module.exports = all;
module.exports.all = all;
module.exports.localStorage = removeLocalStorage;
