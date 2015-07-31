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
function removeIndexedDB () {
  var args = Array.prototype.slice.call(arguments);
  return new Promise(function (resolve, reject) {
    if (!indexedDB) {
      reject(new Error('Your browser doesn\'t support a stable version of IndexedDB.'));
      return;
    }
    if (args.length === 0) {
      reject(new Error('#removeIndexedDB requires the target database name.'));
      return;
    }
    return Promise.all(args.map(function (dbName) {
      return Promise(function (resolve, reject) {
        var req = indexedDB.deleteDatabase(dbName);
        req.onsuccess = function () {
          resolve();
          return;
        };
        req.onerror = function (event) {
          reject(event);
          return;
        };
      });
    }));
  });
}

module.exports = all;
module.exports.all = all;
module.exports.localStorage = removeLocalStorage;
module.exports.indexedDB = removeIndexedDB;
