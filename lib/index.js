'use strict';

let useragent = require('useragent');
let uaDeviceType = require('ua-device-type');
let appRuleConfigs = require('./rules/app');
let deviceRuleConfigs = require('./rules/device');
let parseCustomized = require('./parse-customized');

function pickAgentInfo(info) {
  let _info = info || {};
  return {
    family: _info.family || 'Other',
    major: _info.major || '0',
    minor: _info.minor || '0',
    patch: _info.patch || '0'
  };
}

function parseAppOfQuery(query, appElement) {
  for (const config of appRuleConfigs.query) {
    let info = parseCustomized(query, config);
    if (info) return Object.assign({}, appElement, info);
  }
  return appElement;
}

function parseAppOfUserAgent(httpUserAgent, appElement) {
  let configs = appRuleConfigs.useragent;
  for (const config of configs) {
    let info = parseCustomized(httpUserAgent, config);
    if (info) {
      return Object.assign({}, appElement, info);
    }
  }
  return appElement;
}

/**
 * 从 UserAgent 解析设备类型
 * 包括："tv", "tablet", "phone", "desktop", "bot"
 * @param  {String} httpUserAgent  UserAgent 字符串
 * @param  {Object} deviceElement  useragent 库解析的设备信息
 * @return {String}                设备类型
 */
function parseDeviceOfUserAgent(httpUserAgent, deviceElement) {
  let newDevice = deviceElement;

  for (const config of deviceRuleConfigs) {
    let info = parseCustomized(httpUserAgent, config);
    if (info) newDevice = Object.assign({}, deviceElement, info);
  }

  if (!newDevice.type) newDevice.type = uaDeviceType(httpUserAgent);

  return newDevice;
}

function parseUserAgent(httpUserAgent, jsUserAgent) {
  let agent = useragent.lookup(httpUserAgent, jsUserAgent);
  let seeAgent = {
    os: pickAgentInfo(agent.os),
    device: pickAgentInfo(agent.device),
    app: pickAgentInfo(agent)
  };

  seeAgent.device = parseDeviceOfUserAgent(httpUserAgent, seeAgent.device);

  let app = parseAppOfUserAgent(httpUserAgent, seeAgent.app);
  if (app) seeAgent.app = app;

  return seeAgent;
}

// TODO: 网络类型识别
// function parseNetOfUserAgent(httpUserAgent) {
// }

let SeeAgent = {};

/**
 * seeagent 函数
 * @param  {String} options.query         Url 的 query 参数，作为部分 App 的补充判断条件
 * @param  {String} options.httpUserAgent HTTP User Agent 字符串
 * @param  {String} options.jsUserAgent   useragent 包提供的额外判断信息的参数，详细见[useragent](https://github.com/3rd-Eden/useragent#useragentparseuseragent-string-js-useragent)
 * @return {SeeAgent}
 *   SeeAgent 的实例是一个对象包含 {os, app, device} 三个属性。
 *   os, app, device 均是如下的对象
 *   ```
 *   {
 *     family: '系列名称, Chrome WebView 等' || 'Other',
 *     major: '主要版本' || '0',
 *     minor: '中间版本' || '0',
 *     patch: '补丁版本' || '0'
 *     type: '设备类型' || undefined // app 独有
 *     vendor: '嵌入 Webview 的应用名' || undefined // app 独有
 *   }
 *   ```
 */
SeeAgent.seeagent = function seeagent(options) {
  let query = options.query;
  let jsUserAgent = options.jsUserAgent;
  let httpUserAgent = options.httpUserAgent;
  let seeAgent = parseUserAgent(httpUserAgent, jsUserAgent);
  seeAgent.app = parseAppOfQuery(query, seeAgent.app);
  return seeAgent;
};

/**
 * 扩展自定义 useragent 指纹识别规则
 * @param  {Object} ruleConfigs 指纹定义数组
 *     eg.
 *     ```
 *       [
 *         {info: {vendor: 'App1'}, rules: [/App123/i, /App234/i]},
 *       ]
 *     ```
 * @return {undefined}
 */
SeeAgent.extendFingerprints = function extendFingerprints(ruleConfigs) {
  Object.assign(appRuleConfigs.useragent, ruleConfigs);
};

/**
 * 扩展自定义的 HTTP 请求 query    参数识别规则
 * @param  {Object} ruleConfigs query 识别规则数组
 *     eg.
 *     ```
 *       {
 *         {info: {vendor: 'App1'}, rules: [/App123/i, /App234/i]},
 *       }
 *     ```
 * @return {undefined}
 */
SeeAgent.extendQueryRules = function extendQueryRules(ruleConfigs) {
  Object.assign(appRuleConfigs.query, ruleConfigs);
};

module.exports = SeeAgent;
