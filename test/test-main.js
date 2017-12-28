'use strict';

let assert = require('assert');
let useragents = require('./useragents');

let seeagent;

if (process.env.NODE_ENV === 'production') {
  console.log('testing dist/')
  seeagent = require('../dist');
} else {
  console.log('testing lib/')
  seeagent = require('../lib');
}

describe('seeagent', () => {
  it('should parsed all useragents right', () => {
    let parsed;
    for (const item of useragents) {
      parsed = seeagent(item.userAgent);
      assert.deepEqual(parsed, item.parsed, `[${useragents.indexOf(item)}], ${item.userAgent}`);
    }
  });
});
