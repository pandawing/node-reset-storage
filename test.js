'use strict';
var assert = require('power-assert');
var removeStorages = require('./');

it('should one argument', function () {
  assert.deepEqual(removeStorages('unicorns'), ['unicorns']);
});
it('should three arguments', function () {
  assert.deepEqual(removeStorages('unicorns', 'flower'), ['unicorns', 'flower']);
});
