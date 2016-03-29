import useragent from 'useragent';

const appUserAgentRuleMap = {
  Wechat: [/MicroMessenger\/(\d+(\.\d+)+)/i],
  Maoyan: [/(?:movie|Maoyan\/Android)\/(\d+(\.\d+)+)/i], // movie/5.9.0/190 or Maoyan/Android/6.6.0
  Daxiang: [/XM\/(\d+(\.\d+)+)/i, /daxiang-app\/(\d+(\.\d+)+)/i],
  QQ: [/QQ\/(\d+(\.\d+)+)/i], // QQ/6.2
  Weibo: [/weibo__(\d+(\.\d+)+)/i], // Weibo (iPhone7,2__weibo__5.4.0__iphone__os8.3)
  Taobao: [/TB\/(\d+(\.\d+)+)/],
  QQBrowser: [/QQBrowser\/(\d+(\.\d+)+)/i]
};

const appQueryRuleMap = {
  Meituan: [/AgroupB/],
  Maoyan: [/AmovieB|ios/], // maoyan client define f=`ios`
  Samsung: [/samsung/],
  PPTV: [/f=mypptv/],
  Toutiao: [/toutiao/],
  Piaofang: [/_f_=pf/],
  iMeituan: [/f=imt/]
};

function pickAgentInfo(info = {}) {
  return {
    family: info.family || 'Other',
    major: info.major || '0',
    minor: info.minor || '0',
    patch: info.patch || '0'
  };
}

function toAgent(family, versions) {
  if (!versions || versions.length < 3) return pickAgentInfo();
  let [major, minor, patch] = versions;
  return {family, major, minor, patch};
}

function parseVersions(version) {
  let [major = '0', minor = '0', patch = '0'] = version.split('.');
  return [major, minor, patch];
}

function parseRules(source, rules) {
  for (const rule of rules) {
    let matched = source.match(rule);
    if (matched && matched.length >= 2) return parseVersions(matched[1]);
  }
}

function parseAppOfUserAgent(httpUserAgent, rulesObj) {
  for (const key of Object.keys(rulesObj)) {
    let versions = parseRules(httpUserAgent, rulesObj[key]);
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

export default function seeagent({query, httpUserAgent, jsUserAgent}) {
  let seeAgent = parseUserAgent(httpUserAgent, jsUserAgent);
  let app = parseAppOfQuery(query);
  if (app) seeAgent.app = app;
  return seeAgent;
}

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
export function extendFingerprints(fingerprintsObj) {
  Object.assign(appUserAgentRuleMap, fingerprintsObj);
}

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
export function extendQueryRules(rulesObj) {
  Object.assign(appQueryRuleMap, rulesObj);
}
