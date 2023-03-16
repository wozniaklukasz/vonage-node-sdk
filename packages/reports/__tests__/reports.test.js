'use strict';

const reports = require('..');
const assert = require('assert').strict;

assert.strictEqual(reports(), 'Hello from reports');
console.info("reports tests passed");
