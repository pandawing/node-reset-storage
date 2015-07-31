'use strict';
var assert = require('power-assert');
var removeStorages = require('./');

it('should ', function () {
  assert.strictEqual(removeStorages('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(removeStorages('unicorns'), 'unicorns & wrong');
});
