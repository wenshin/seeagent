# seeagent [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> useragent,mobile,browser


## Install

```sh
$ mnpm install --save @myfe/seeagent
```


## Usage
目前支持，美团、猫眼、大象、三星、PPTV、头条、票房等 APP 判断

```js
var SeeAgent = require('seeagent');

var agentInfo = SeeAgent.seeagent({
    httpUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'
});

console.log(agentInfo);
// {
//   os: { family: 'Mac OS X', major: '10', minor: '11', patch: '3' },
//   device: { family: 'Other', major: '0', minor: '0', patch: '0' },
//   app: { family: 'Chrome', major: '49', minor: '0', patch: '2623' }
// }
```

## API
`SeeAgent.seeagent({query, httpUserAgent, jsUserAgent})`
获取操作系统、设备、和 App 信息

**query**: URL query 参数字符串，用来辅助判断 App。
**httpUserAgent**: HTTP UserAgent 字符串。
**jsUserAgent**: useragent 包提供的额外的辅助判断字符串，详见 [useragent](https://github.com/3rd-Eden/useragent#useragentparseuseragent-string-js-useragent)。

`SeeAgent.extendQueryRules({[appName]: [/regexp rule1/, /regexp rule2/]})`
扩展通过 URL query 参数判断 APP 的规则

`SeeAgent.extendFingerprints({[appName]: [/regexp rule1/, /regexp rule2/]})`
扩展通过通过 UserAgent 参数判断 APP 的规则


## Development

```
$ git clone ssh://git@git.sankuai.com/myfe/seeagent.git
$ npm install .
$ npm run test
```

### 添加规则
规则分为 UserAgent 规则和 Query 参数规则。存放在在 lib/rules 下

## TODO

1. 更多的测试用例
2. 判断浏览器内核和版本
3. 判断网络状态（微信 UA 中有）

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
