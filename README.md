# seeagent [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> useragent,mobile,browser


## Install

```sh
$ mnpm install --save @myfe/seeagent
```

## Features

* 支持美团、猫眼、大象、三星、PPTV、头条、票房等 APP 判断，不断更新中
* 支持设备类型判断，包括 tv，desktop，phone，tablet

## Usage

```js
var SeeAgent = require('seeagent');

var agentInfo = SeeAgent.seeagent({
    httpUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'
});

console.log(agentInfo);
// {
//   os: { family: 'Mac OS X', major: '10', minor: '11', patch: '3' },
//   device: { family: 'Other', major: '0', minor: '0', patch: '0', type: 'desktop' },
//   app: { family: 'Chrome', major: '49', minor: '0', patch: '2623'}
// }
```

### 结果解释
解析完成后会得到一个包含 os、device、app 三个属性的对象。
其中三个属性都会包含以下属性：

    {
        // Chrome、FireFox、Safari、Mobile Safari、Chrome Mobile、Mobile Safari UIWebView
        family: '系列名',
        // 版本号
        major: '9',
        minor: '9',
        patch: '9'
    }

device 属性还特有 type 属性，值为 tv，desktop（桌面），phone，tablet（平板）。
app 属性还特有 vendor 属性，该属性是为了和移动应用嵌入的 WebView 名称进行区分，一般是嵌入 WebView 的应用名或厂商名。

## API

`SeeAgent.seeagent({query, httpUserAgent, jsUserAgent})`
获取操作系统、设备、和 App 信息

**query**: URL query 参数字符串，用来辅助判断 App。
**httpUserAgent**: HTTP UserAgent 字符串。
**jsUserAgent**: useragent 包提供的额外的辅助判断字符串，
详见 [useragent](https://github.com/3rd-Eden/useragent#useragentparseuseragent-string-js-useragent)。

`SeeAgent.extendQueryRules([{info: {vendor: 'App1'}, rules: [/App123/i, /App234/i]}])`
扩展通过 URL query 参数判断 APP 的规则

`SeeAgent.extendFingerprints([{info: {vendor: 'App1'}, rules: [/App123/i, /App234/i]}])`
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
2. 判断网络状态（微信 UA 中有）

## ChangeLog

### 2016-05-20 0.2.0

* 添加设备类型
* 区分移动应用和 WebView 名称
* 优化代码结构
* 添加性能测试

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
