'use strict';

let useragent = require('useragent');
let uaParser = require('ua-parser-js');
let SeeAgent = require('../lib');
let ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36';

let timesOptions = [10, 100, 10000, 100000];

for (let times of timesOptions) {
  let counter = times;
  let start = Date.now();
  while (counter--) {
    // useragent 做了缓存，TODO 研究一下
    useragent.lookup(ua);
  }
  let end = Date.now();
  console.log(`[${times}]useragent consume: ${end - start}ms`);

  counter = times;
  start = Date.now();
  while (counter--) {
    // useragent 做了缓存，TODO 研究一下
    SeeAgent.seeagent({httpUserAgent: ua});
  }
  end = Date.now();
  console.log(`[${times}]SeeAgent consume: ${end - start}ms`);

  counter = times;
  start = Date.now();
  while (counter--) {
    uaParser(ua);
  }
  end = Date.now();
  console.log(`[${times}]uaParser consume: ${end - start}ms`);
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
