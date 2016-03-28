import useragent from 'useragent';

const fingerprints = {
  Wechat: [/MicroMessenger\/(\d+(\.\d+)+)/i],
  Maoyan: [/(?:movie|Maoyan\/Android)\/(\d+(\.\d+)+)/i], // movie/5.9.0/190 or Maoyan/Android/6.6.0
  Daxiang: [/XM\/(\d+(\.\d+)+)/i],
  Meituan: [/Mobile\/(\w+)$/],
  QQ: [/QQ\/(\d+(\.\d+)+)/i], // QQ/6.2
  Weibo: [/weibo__(\d+(\.\d+)+)/i], // Weibo (iPhone7,2__weibo__5.4.0__iphone__os8.3)
  Taobao: [/TB\/(\d+(\.\d+)+)/],
  QQBrowser: [/MQQBrowser\/(\d+(\.\d+)+)/i]
};

function pickData(info) {
  return {
    family: info.family,
    major: info.major,
    minor: info.minor,
    patch: info.patch
  };
}

function parseVersions(version) {
  return version.split('.');
}

function parseApp(httpUserAgent) {
  for (const key of Object.keys(fingerprints)) {
    let rules = fingerprints[key];
    let matched;
    for (const rule of rules) {
      matched = httpUserAgent.match(rule);
      if (matched) break;
    }
    if (matched && matched.length >= 2) {
      let [major = '0', minor = '0', patch = '0'] = parseVersions(matched[1]);
      return {family: key, major, minor, patch};
    }
  }
}

export default function seeagent(httpUserAgent, jsUserAgent) {
  let agent = useragent.lookup(httpUserAgent, jsUserAgent);
  let seeAgent = {
    os: pickData(agent.os),
    device: pickData(agent.device),
    app: pickData(agent)
  };
  let app = parseApp(httpUserAgent);
  if (app) seeAgent.app = app;
  return seeAgent;
}
