'use strict';
var assert = require('power-assert');
var resetStorage = require('./');

var dbName = 'test-item';

describe('#localStorage', function () {
  beforeEach(function (done) {
    localStorage.clear();
    done();
  });
  it('should save value', function () {
    var expected = { foo: 'bar', goo: 'nuu' };
    localStorage.setItem('item', JSON.stringify(expected));
    assert.deepEqual(expected, JSON.parse(localStorage.getItem('item')));
  });
  it('should clear value', function (done) {
    var input = { foo: 'bar', goo: 'nuu' };
    localStorage.setItem('item', JSON.stringify(input));
    resetStorage
      .localStorage()
      .then(function () {
      assert.equal(null, localStorage.getItem('item'));
      done();
    });
  });
});

describe('#indexedDB', function () {
  beforeEach(function (done) {
    var req = indexedDB.deleteDatabase('test-item');
    req.onsuccess = function() {
      done();
    };
  });

  // http://dev.classmethod.jp/ria/html5/html5-indexed-database-api/
  it('should save value', function (done) {
    var db;
    if (!indexedDB) {
      throw new Error('Your browser doesn\'t support a stable version of IndexedDB.');
    }
    var openRequest = indexedDB.open(dbName, 2);
    var key = 'foo';
    var value = 'bar';
    var expected = {};
    expected[key] = value;

    openRequest.onupgradeneeded = function(event) {
      db = event.target.result;
      var store = db.createObjectStore('mystore', { keyPath: 'mykey'});
      store.createIndex('myvalueIndex', 'myvalue');
    };

    openRequest.onsuccess = function(event) {
      db = event.target.result;
      var transaction = db.transaction(['mystore'], 'readwrite');
      var store = transaction.objectStore('mystore');

      var request = store.put({ mykey: key, myvalue: value });
      request.onsuccess = function () {
        var transaction = db.transaction(['mystore'], 'readwrite');
        var store = transaction.objectStore('mystore');

        var request = store.get(key);
        request.onsuccess = function (event) {
          assert.equal(value, event.target.result.myvalue);
          done();
        };
      };
    };
  });
});
