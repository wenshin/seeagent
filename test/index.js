'use strict';

let assert = require('assert');
let useragents = require('./useragents');
let SeeAgent = require('../lib');

describe('seeagent', () => {
  it('should parsed all useragents right', () => {
    let agent;
    for (const item of useragents) {
      agent = SeeAgent.seeagent({query: item.query, httpUserAgent: item.userAgent});
      assert.deepEqual(agent, item.parsed, `[${useragents.indexOf(item)}], ${item.userAgent}`);
    }
  });

  // it('can extend fingerprints', () => {
  // });

  // it('can extend query rules', () => {
  // });
});
