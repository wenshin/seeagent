'use strict';

let useragent = require('useragent');
let appQueryRuleMap = require('./rules/query');
let appUserAgentRuleMap = require('./rules/agent');

function pickAgentInfo(info) {
  let _info = info || {};
  return {
    family: _info.family || 'Other',
    major: _info.major || '0',
    minor: _info.minor || '0',
    patch: _info.patch || '0'
  };
}

function toAgent(family, versions) {
  if (!versions || versions.length < 3) return pickAgentInfo();
  let major = versions[0];
  let minor = versions[1];
  let patch = versions[2];
  return {family, major, minor, patch};
}

function parseVersions(version) {
  let versions = version.split('.');
  let major = versions[0] || '0';
  let minor = versions[1] || '0';
  let patch = versions[2] || '0';
  return [major, minor, patch];
}

function parseRules(source, rules) {
  let matched;
  for (const rule of rules) {
    matched = source.match(rule);
    if (!matched) continue;
    if (matched.length >= 2) return parseVersions(matched[1]);
    if (matched.length === 1) return parseVersions('0.0.0');
  }
}

function parseAppOfUserAgent(httpUserAgent, rulesObj) {
  let versions;
  for (const key of Object.keys(rulesObj)) {
    versions = parseRules(httpUserAgent, rulesObj[key]);
    if (versions) return toAgent(key, versions);
  }
}

function parseUserAgent(httpUserAgent, jsUserAgent) {
  let agent = useragent.lookup(httpUserAgent, jsUserAgent);
  let seeAgent = {
    os: pickAgentInfo(agent.os),
    device: pickAgentInfo(agent.device),
    app: pickAgentInfo(agent)
  };

  let app = parseAppOfUserAgent(httpUserAgent, appUserAgentRuleMap);
  if (app) seeAgent.app = app;

  return seeAgent;
}

function parseAppOfQuery(query) {
  if (!query) return;
  for (const key of Object.keys(appQueryRuleMap)) {
    let rules = appQueryRuleMap[key];
    let versions = parseRules(query, rules);
    if (versions) return toAgent(key, versions);
  }
}

// TODO: 网络类型识别
// function parseNetOfUserAgent(httpUserAgent) {
// }

let SeeAgent = {};

/**
 * seeagent 函数
 * @param  {String} options.query         [description]
 * @param  {String} options.httpUserAgent [description]
 * @param  {String} options.jsUserAgent   [description]
 * @return {SeeAgent}
 *   SeeAgent 的实例是一个对象包含 {os, app, device} 三个属性。
 *   os, app, device 均是如下的对象
 *   ```
 *   {
 *     family: '系列名称' || 'Other',
 *     major: '主要版本' || '0',
 *     minor: '中间版本' || '0',
 *     patch: '补丁版本' || '0'
 *   }
 *   ```
 */
SeeAgent.seeagent = function seeagent(options) {
  let query = options.query;
  let jsUserAgent = options.jsUserAgent;
  let httpUserAgent = options.httpUserAgent;
  let seeAgent = parseUserAgent(httpUserAgent, jsUserAgent);
  let app = parseAppOfQuery(query);
  if (app) seeAgent.app = app;
  return seeAgent;
};

/**
 * 扩展自定义 useragent 指纹识别规则
 * @param  {Object} fingerprintObj 指纹定义 Map
 *     eg.
 *     ```
 *       {
 *         App1: [/App123/i, /App234/i],
 *         App2: [/App123/i, /App234/i]
 *       }
 *     ```
 * @return {undefined}
 */
SeeAgent.extendFingerprints = function extendFingerprints(fingerprintsObj) {
  Object.assign(appUserAgentRuleMap, fingerprintsObj);
};

/**
 * 扩展自定义的 HTTP 请求 query 参数识别规则
 * @param  {Object} rulesObj query 识别规则 Map
 *     eg.
 *     ```
 *       {
 *         App1: [/f=1231/i, /b=123/i],
 *         App2: [/f=222/i, /b=333/i]
 *       }
 *     ```
 * @return {undefined}
 */
SeeAgent.extendQueryRules = function extendQueryRules(rulesObj) {
  Object.assign(appQueryRuleMap, rulesObj);
};

module.exports = SeeAgent;
