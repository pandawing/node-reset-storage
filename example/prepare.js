// localStorage
var expected = { foo: 'bar', goo: 'nuu' };
localStorage.setItem('item', JSON.stringify(expected));

// indexedDB
var db;
if (!indexedDB) {
  throw new Error('Your browser doesn\'t support a stable version of IndexedDB.');
}
var dbName = 'test-item';
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
};
