'use strict';
var assert = require('power-assert');
var removeStorages = require('./');

it('should one argument', function () {
  assert.deepEqual(removeStorages('unicorns'), ['unicorns']);
});
it('should three arguments', function () {
  assert.deepEqual(removeStorages('unicorns', 'flower'), ['unicorns', 'flower']);
});

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
});
