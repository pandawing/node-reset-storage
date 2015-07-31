#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var removeStorages = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ remove-storages [input]',
    '',
    'Examples',
    '  $ remove-storages',
    '  unicorns & rainbows',
    '',
    '  $ remove-storages ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(removeStorages(cli.input[0] || 'unicorns'));
