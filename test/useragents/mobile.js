module.exports = [{
  // 猫眼专业版 APP 内的 webview
  userAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Mi-4c Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/50.0.2661.86 Mobile Safari/537.36 moviepro/1.5.0/1500',
  parsed: {
    os: { family: 'Android', major: '5', minor: '1', patch: '1' },
    device: { family: 'Mi-4c', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Chrome Mobile', vendor: 'MaoyanPro', major: '1', minor: '5', patch: '0', isWebView: true }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '2', patch: '1' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    browser: { family: 'Mobile Safari', major: '9', minor: '0', patch: '0', isWebView: false },
    app: { family: 'Chrome' }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13D15 MicroMessenger/6.3.9 NetType/WIFI Language/zh_CN',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '2', patch: '1' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'Wechat', major: '6', minor: '3', patch: '9', isWebView: true }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/48.0.2564.104 Mobile/13D15 Safari/601.1.46',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '2', patch: '1' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Chrome Mobile iOS', major: '48', minor: '0', patch: '2564', isWebView: false }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13D15',
  query: 'AgroupB',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '2', patch: '1' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'Meituan', major: '0', minor: '0', patch: '0', isWebView: true }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13D15 movie/6.5/509 MTNB/1.0.0 (iOS; Maoyan 509)',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '2', patch: '1' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'Maoyan', major: '6', minor: '5', patch: '0', isWebView: true }
  }
}, {
  userAgent: 'Mozilla/5.0 (Linux; Android 4.4.2; HUAWEI P7-L09 Build/HuaweiP7-L09) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 movie/5.9.1/192',
  parsed: {
    os: { family: 'Android', major: '4', minor: '4', patch: '2' },
    device: { family: 'HUAWEI P7-L09', major: 'P7-L09', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Chrome Mobile', vendor: 'Maoyan', major: '5', minor: '9', patch: '1', isWebView: false }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H321 XM/3.1.1.116',
  parsed: {
    os: { family: 'iOS', major: '8', minor: '4', patch: '1' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'Daxiang', major: '3', minor: '1', patch: '1', isWebView: true }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13A344 AliApp(TB/5.3.3)  WindVane/6.4.0 640x1136',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '0', patch: '0' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'Taobao', major: '5', minor: '3', patch: '3', isWebView: true }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13B143 Weibo (iPhone6,2__weibo__5.5.0__iphone__os9.1)',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '1', patch: '0' },
    device: { family: 'iPhone', major: '6,2', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'Weibo', major: '5', minor: '5', patch: '0', isWebView: true }
  }
}, {
  userAgent: 'Mozilla/5.0 (Linux; Android 4.4.4; M351 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 Weibo (Meizu-M351__weibo__5.4.0__android__android4.4.4)',
  parsed: {
    os: { family: 'Android', major: '4', minor: '4', patch: '4' },
    device: { family: 'Meizu', major: 'M351', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Chrome Mobile', vendor: 'Weibo', major: '5', minor: '4', patch: '0', isWebView: false }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 QQMusic/6.0.2 Mskin/white Mcolor/31c27cff skinid[0] NetType/WIFI',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '3', patch: '2' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'QQMusic', major: '6', minor: '0', patch: '2', isWebView: true }
  }
}, {
  userAgent: 'Mozilla/5.0 (Linux; Android 4.4.4; en-us; Nexus 5 Build/JOP40D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2307.2 Mobile Safari/537.36',
  parsed: {
    os: { family: 'Android', major: '4', minor: '4', patch: '4' },
    device: { family: 'Nexus 5', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Chrome Mobile', major: '42', minor: '0', patch: '2307', isWebView: false }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143 MicroMessenger/6.2.4 NetType/WIFI Language/en',
  parsed: {
    os: { family: 'iOS', major: '8', minor: '4', patch: '0' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'Wechat', major: '6', minor: '2', patch: '4', isWebView: true }
  }
}, {
  userAgent: 'Mogujie4iPhone/8.0.2 (iPhone; iOS 9.3.2; Scale/2.00)',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '3', patch: '2' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    app: { family: 'Mobile Safari UIWebView', vendor: 'Mogujie', major: '4', minor: '0', patch: '0', isWebView: true }
  }
}, {
// 支付宝 IOS
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Mobile/15A432 Nebula PSDType(1) AlipayDefined(nt:WIFI,ws:320|504|2.0) AliApp(AP/10.1.5.102407) AlipayClient/10.1.5.102407 Alipay Language/en',
  parsed: {
    os: { family: 'iOS', major: '11', minor: '0', patch: '3' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0', type: 'phone' },
    browser: { family: 'Mobile Safari UIWebView', major: '604', minor: '1', patch: '38', isWebView: true },
    app: { family: 'Alipay', major: '10', minor: '1', patch: '5.102407'},
    lang: 'en',
    net: 'WIFI'
  }
}];
