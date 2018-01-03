'use strict';

let assert = require('assert');
let useragents = require('./useragents');

let seeagent;

const TEST_UA = 'Mozilla/5.0 (Linux; myos 1.0; myd 1.0.0;) myb/1.1.0 App/1.0.1';
const TEST_UA_PARSED = {
  "Mozilla": {
    "name": "Mozilla",
    "detail": "Linux; myos 1.0; myd 1.0.0;",
    "unit": "Mozilla/5.0 (Linux; myos 1.0; myd 1.0.0;)",
    "version": "5.0"
  },
  "myb": {
    "name": "myb",
    "detail": "",
    "unit": "myb/1.1.0",
    "version": "1.1.0"
  },
  "App": {
    "name": "Foo",
    "detail": "",
    "unit": "App/1.0.1",
    "version": "1.0.1"
  },
  "app": {
    "name": "Foo",
    "detail": "",
    "unit": "App/1.0.1",
    "version": "1.0.1"
  },
  "os": {
    "name": "MyOS",
    "version": "1.0"
  },
  "device": {
    "name": "MyDevice",
    "version": "1.0.0",
    "type": "phone"
  }
};

if (process.env.TEST_VERSION === 'es5') {
  console.log('testing es5/')
  seeagent = require('../es5');
} else {
  console.log('testing lib/')
  seeagent = require('../lib');
}

describe('seeagent', () => {
  it ('should config limit size', () => {
    seeagent.config();
    seeagent.config({size: 2});

    seeagent(useragents[0].userAgent);
    seeagent(useragents[1].userAgent);
    seeagent(useragents[2].userAgent);
    seeagent(useragents[1].userAgent);

    assert.ok(!seeagent.lruMap.has(useragents[0].userAgent));
    assert.ok(useragents[1].userAgent);
    assert.ok(useragents[2].userAgent);
    assert.ok(seeagent.lruMap.newest.key, useragents[1].userAgent);

    seeagent.setDefaultOptions();
  });

  it ('should config rules', () => {
    for (const illegal of ['', [], () => {}, 0, 1, '1']) {
      assert.throws(() => {
        seeagent.config({rule: illegal});
      }, assert.AssertionError, `${String(illegal)}，是非法入参`);
    }

    for (const illegal of [{os: '123'}, {os: ['test', 'test']}]) {
      assert.throws(() => {
        seeagent.config({rule: illegal});
      }, TypeError, `${JSON.stringify(illegal)}，是非法rule`);
    }

    for (const legal of [null, undefined]) {
      assert.doesNotThrow(() => {
        seeagent.config({rule: legal});
      }, assert.AssertionError, `${String(legal)}是合法入参`);
    }

    for (const illegal of [
      {app: [['Test', [1]]]},
      {os: [['Test', [1]]]},
      {device: [['Test', [1]]]}
    ]) {
      assert.throws(() => {
        seeagent.setDefaultOptions();
        seeagent.config({rule: illegal});
        seeagent(TEST_UA);
      }, TypeError, `${JSON.stringify(illegal)}，是非法rule`);
    }

    seeagent.setDefaultOptions();
    seeagent.config({
      rule: {
        app: [['Foo', ['App']]],
        browser: [['MyBrowser', ['myb']]],
        os: [['MyOS', [/myos ((\d+\.)*\d+)/i]]],
        device: [['MyDevice', [/myd ((\d+\.)*\d+)/i], {type: 'phone'}]],
      }
    });
    let obj = seeagent(TEST_UA);
    assert.deepEqual(obj, TEST_UA_PARSED);
    seeagent.setDefaultOptions();

    seeagent.config({
      rule: {
        browser: [['MyBrowser', ['myb']]],
        os: [['MyOS', ['myos ((\\d+\\.)*\\d+)']]],
        device: [['MyDevice', [/myd ((\d+\.)*\d+)/i], {type: 'phone'}]],
      }
    });

    obj = seeagent(TEST_UA.replace('App/1.0.1', ''));
    assert.deepEqual(obj.app, {
      "name": "MyBrowser",
      "detail": "",
      "unit": "myb/1.1.0",
      "version": "1.1.0",
      "isBrowser": true
    });
    seeagent.setDefaultOptions();
  });

  it ('invalid useragent', () => {
    for (const invalid of [0, 1, null, undefined, {}, () => {}]) {
      assert.throws(() => seeagent(invalid), TypeError);
    }
  });

  it('should parsed all useragents right', () => {
    let parsed;
    for (const item of useragents) {
      parsed = seeagent(item.userAgent);
      assert.deepEqual(parsed, item.parsed, `[${useragents.indexOf(item)}], ${item.userAgent}`);
    }
  });
});
