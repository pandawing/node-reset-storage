# remove-storages

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Remove storages. E.g. localStorage, indexedDB.

`remove-storages` based on [mizchi/items/54f4b0f30990d48a135](http://qiita.com/mizchi/items/54f4b0f30990d48a1350).


## Install

```
$ npm install --save remove-storages
```


## Usage

```js
var removeStorages = require('remove-storages');

removeStorages('want-to-delete');
//=> Remove localStorage && Remove 'want-to-delete' indexedDB


removeStorages.localStorage();
//=> Remove localStorage

removeStorages.indexedDB('want-to-delete');
//=> Remove 'want-to-delete' indexedDB
```



## API

### removeStorages(database[, database2, ...])

Remove a localStorage & an indexedDB.

#### database

*Required*  
Type: `string`

Database name on indexedDB.


### removeStorages.all(database[, database2, ...])

Same as removeStorages()


### removeStorages.localStorage()

Remove a localStorage.


### removeStorages.indexedDB(database[, database2, ...])

Remove an indexedDB.

#### database

*Required*  
Type: `string`

Database name on indexedDB.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/pandawing/node-remove-storages
[travis-image]: https://img.shields.io/travis/pandawing/node-remove-storages/master.svg?style=flat-square&label=travis
[npm-url]: https://npmjs.org/package/remove-storages
[npm-image]: https://img.shields.io/npm/v/remove-storages.svg?style=flat-square
[daviddm-url]: https://david-dm.org/pandawing/node-remove-storages
[daviddm-image]: https://img.shields.io/david/pandawing/node-remove-storages.svg?style=flat-square
