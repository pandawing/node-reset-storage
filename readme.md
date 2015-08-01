# reset-storage

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Reset storage. E.g. localStorage, indexedDB.

`reset-storage` based on [mizchi/items/54f4b0f30990d48a135](http://qiita.com/mizchi/items/54f4b0f30990d48a1350).


## Install

```
$ npm install --save reset-storage
```


## Usage

```js
var resetStorage = require('reset-storage');
// or
<script src="build/reset-storage.js"></script>


resetStorage('want-to-delete');
//=> Reset localStorage && Reset 'want-to-delete' indexedDB


resetStorage.localStorage();
//=> Reset localStorage

resetStorage.indexedDB('want-to-delete');
//=> Reset 'want-to-delete' indexedDB
```



## API

### resetStorage(database[, database2, ...]) -> Promise

Reset a localStorage & an indexedDB.

#### database

*Required*  
Type: `string`

Database name on indexedDB.


### resetStorage.all(database[, database2, ...]) -> Promise

Same as resetStorage()


### resetStorage.localStorage() -> Promise

Reset a localStorage.


### resetStorage.indexedDB(database[, database2, ...]) -> Promise

Reset an indexedDB.

#### database

*Required*  
Type: `string`

Database name on indexedDB.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/pandawing/node-reset-storage
[travis-image]: https://img.shields.io/travis/pandawing/node-reset-storage/master.svg?style=flat-square&label=travis
[npm-url]: https://npmjs.org/package/reset-storage
[npm-image]: https://img.shields.io/npm/v/reset-storage.svg?style=flat-square
[daviddm-url]: https://david-dm.org/pandawing/node-reset-storage
[daviddm-image]: https://img.shields.io/david/pandawing/node-reset-storage.svg?style=flat-square
