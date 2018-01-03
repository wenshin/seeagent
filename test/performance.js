'use strict';

const _ = require('lodash');
const useragent = require('useragent');
const uaParser = require('ua-parser-js');
const seeagent = require('../lib');
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36';

const uas = [];
for (let i = 0; i < 1000; i++) {
  uas.push(`${ua}.${i}`);
}

function getUA() {
  return uas[_.random(0, uas.length - 1)];
}

let timesOptions = [10, 100, 10000, 100000];

seeagent.config({
  // useragent default cache 5000 items
  size: 5000
});

console.log('1000 useragent samples, cache 5000 items\n')

for (let times of timesOptions) {
  let counter = times;
  let start = Date.now();
  while (counter--) {
    // useragent 做了缓存，TODO 研究一下
    useragent.lookup(getUA());
  }
  let end = Date.now();
  console.log(`${times} times, useragent consume: ${end - start}ms`);

  counter = times;
  start = Date.now();
  while (counter--) {
    uaParser(getUA());
  }
  end = Date.now();
  console.log(`${times} times, ua-parser-js consume: ${end - start}ms`);

  counter = times;
  start = Date.now();
  while (counter--) {
    seeagent(getUA());
  }
  end = Date.now();
  console.log(`${times} times, seeagent consume: ${end - start}ms\n`);
}

// 比较结果
// [10]useragent consume: 4ms
// [10]uaParser consume: 6ms
// [100]useragent consume: 0ms
// [100]uaParser consume: 8ms
// [10000]useragent consume: 7ms
// [10000]uaParser consume: 409ms
// [100000]useragent consume: 95ms
// [100000]uaParser consume: 4039ms
