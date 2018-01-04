# seeagent [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> useragent,mobile,browser


## Install

```sh
$ npm install --save seeagent
$ yarn add seeagent
```

## Features

* support Wechat, Meituan, Dianping, Maoyan, Alipay, Taobao, Weibo etc.
* support device type detection, includes tv, desktop, phone, tablet
* custom parser or custom rules
* LRU cache
* all info of useragent

## Usage

```js
var seeagent = require('seeagent');

// config agent
seeagent.config({
  size: 5000, // cache limit, default is 1000
  rule: {
    app: [],
    browser: [],
    os: [],
    device: []
  }
})

var info = seeagent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13D15 MicroMessenger/6.3.9 NetType/WIFI Language/zh_CN');

console.log(info);
// {
//   "Mozilla": {
//     "name": "Mozilla",
//     "detail": "iPhone; CPU iPhone OS 9_2_1 like Mac OS X",
//     "unit": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X)",
//     "version": "5.0"
//   },
//   "AppleWebKit": {
//     "name": "AppleWebKit",
//     "detail": "KHTML, like Gecko",
//     "unit": "AppleWebKit/601.1.46 (KHTML, like Gecko)",
//     "version": "601.1.46"
//   },
//   "Mobile": {
//     "name": "Mobile",
//     "detail": "",
//     "unit": "Mobile/13D15",
//     "version": "13D15"
//   },
//   "MicroMessenger": {
//     "name": "Wechat",
//     "detail": "",
//     "unit": "MicroMessenger/6.3.9",
//     "version": "6.3.9"
//   },
//   "NetType": {
//     "name": "NetType",
//     "detail": "",
//     "unit": "NetType/WIFI",
//     "version": "WIFI"
//   },
//   "Language": {
//     "name": "Language",
//     "detail": "",
//     "unit": "Language/zh_CN",
//     "version": "zh_CN"
//   },
//   "app": {
//     "name": "Wechat",
//     "detail": "",
//     "unit": "MicroMessenger/6.3.9",
//     "version": "6.3.9"
//   },
//   "os": {
//     "name": "iOS",
//     "version": "9.2.1"
//   },
//   "device": {
//     "name": "iPhone",
//     "version": "",
//     "type": "phone"
//   }
// }
```
more examples see test/useragents

### Result Explanation
First, seeagent will parse the User-Agent into object by the rule of https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent.
The property of object is the product of a User-Agent unit. After get the parsed object, seeagent use the property rules to find the app and browser info and use the regular expression find the os and device info.

### Performance

    1000 useragent samples, cache 5000 items

    10 times, useragent consume: 5ms
    10 times, ua-parser-js consume: 5ms
    10 times, seeagent consume: 3ms

    100 times, useragent consume: 11ms
    100 times, ua-parser-js consume: 6ms
    100 times, seeagent consume: 5ms

    10000 times, useragent consume: 71ms
    10000 times, ua-parser-js consume: 338ms
    10000 times, seeagent consume: 35ms

    100000 times, useragent consume: 83ms
    100000 times, ua-parser-js consume: 2983ms
    100000 times, seeagent consume: 14ms

## API

`seeagent.config(options?: Options)`
config the cache size or custom rules

    // [name, props]
    type KeyRule = [string, string[]];
    // [name, rules, meta?]
    type RegExpRule = [string, Array<string | RegExp>, Object];

    interface Options {
      size?: number, // the cache max size, default is 1000
      rule?: {app?: KeyRule[], os?: RegExpRule[], device?: RegExpRule[]}
    }

`function seeagent(ua: string): Object`

## Development

```
$ git clone git@github.com:wenshin/seeagent.git
$ yarn install
$ npm test
```

## ChangeLog

### 2017-01-02 1.0.0

## License

 © [yuanwen](https://github.com/wenshin)


[npm-image]: https://badge.fury.io/js/seeagent.svg
[npm-url]: https://npmjs.org/package/seeagent
[travis-image]: https://travis-ci.org/Meituan/seeagent.svg?branch=master
[travis-url]: https://travis-ci.org/Meituan/seeagent
[daviddm-image]: https://david-dm.org/Meituan/seeagent.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Meituan/seeagent
[coveralls-image]: https://coveralls.io/repos/Meituan/seeagent/badge.svg
[coveralls-url]: https://coveralls.io/r/Meituan/seeagent
