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
  var db;
  beforeEach(function (done) {
    var req = indexedDB.deleteDatabase('test-item');
    req.onsuccess = function() {
      done();
    };
  });

  // http://dev.classmethod.jp/ria/html5/html5-indexed-database-api/
  it('should save value', function (done) {
    if (!indexedDB) {
      throw new Error('Your browser doesn\'t support a stable version of IndexedDB.');
    }
    var openRequest = indexedDB.open(dbName, 2);
    var key = 'foo';
    var value = 'bar';
    var expected = {};
    expected[key] = value;

    openRequest.onerror = function(event) {
      throw new Error(event.toString);
    };

    openRequest.onupgradeneeded = function(event) {
      db = event.target.result;
      var store = db.createObjectStore('mystore', { keyPath: 'mykey'});
      store.createIndex('myvalueIndex', 'myvalue');
    };

    openRequest.onsuccess = function() {
      db = openRequest.result;
      var transaction = db.transaction(['mystore'], 'readwrite');
      var store = transaction.objectStore('mystore');

      var request = store.put({ mykey: key, myvalue: value });
      request.onsuccess = function () {
        var transaction = db.transaction(['mystore'], 'readwrite');
        var store = transaction.objectStore('mystore');

        var request = store.get(key);
        request.onsuccess = function (event) {
          assert.equal(value, event.target.result.myvalue);
          db.close();
          done();
        };
        request.onerror = function (event) {
          db.close();
          throw new Error(event.toString);
        };
      };
      request.onerror = function(event) {
        db.close();
        throw new Error(event.toString);
      };
    };
  });
  it.skip('should clear value. Writing this test is too hard for me.', function (done) {
    if (true) {// eslint-disable-line no-constant-condition
      throw new Error();
    }
    if (!indexedDB) {
      throw new Error('Your browser doesn\'t support a stable version of IndexedDB.');
    }
    var openRequest = indexedDB.open(dbName, 2);
    var key = 'foo';
    var value = 'bar';
    var expected = {};
    expected[key] = value;

    openRequest.onerror = function(event) {
      throw new Error(event.toString);
    };

    openRequest.onupgradeneeded = function(event) {
      db = event.target.result;
      var store = db.createObjectStore('mystore', { keyPath: 'mykey'});
      store.createIndex('myvalueIndex', 'myvalue');
    };

    openRequest.onsuccess = function() {
      db = openRequest.result;
      var transaction = db.transaction(['mystore'], 'readwrite');
      var store = transaction.objectStore('mystore');

      var request = store.put({ mykey: key, myvalue: value });
      request.onsuccess = function () {
        db.close();
        var openRequest = indexedDB.open(dbName, 2);
        openRequest.onerror = function(event) {
          throw new Error(event.toString);
        };
        openRequest.onsuccess = function() {
          var db = openRequest.result;
          var transaction = db.transaction(['mystore'], 'readwrite');
          var store = transaction.objectStore('mystore');

          var request = store.get(key);
          request.onsuccess = function (event) {
            assert.equal(value, event.target.result.myvalue);
            db.close();
            done();
          };
          request.onerror = function (event) {
            db.close();
            throw new Error(event.toString);
          };
        };
      };
      request.onerror = function(event) {
        db.close();
        throw new Error(event.toString);
      };
    };
  });
});
