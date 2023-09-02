'use strict';

const eslintSecurity = require('..');
const assert = require('assert').strict;

assert.strictEqual(eslintSecurity(), 'Hello from eslintSecurity');
console.info('eslintSecurity tests passed');
