const assert = require('assert');
const {parseUAStr} = require('../lib')

const cases = [
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36',
    parsed: {
      Mozilla:
      { name: 'Mozilla',
        detail: 'Macintosh; Intel Mac OS X 10_11_6',
        unit: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6)',
        version: '5.0' },
      AppleWebKit:
      { name: 'AppleWebKit',
        detail: 'KHTML, like Gecko',
        unit: 'AppleWebKit/537.36 (KHTML, like Gecko)',
        version: '537.36' },
      Chrome:
      { name: 'Chrome',
        detail: '',
        unit: 'Chrome/62.0.3202.89',
        version: '62.0.3202.89' },
      Safari:
      { name: 'Safari',
        detail: '',
        unit: 'Safari/537.36',
        version: '537.36' } }
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Mobile/15A432 MicroMessenger/6.5.18 NetType/WIFI Language/zh_CN',
    parsed: {
      Mozilla: { name: 'Mozilla',
        detail: 'iPhone; CPU iPhone OS 11_0_3 like Mac OS X',
        unit: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X)',
        version: '5.0'
      },
      AppleWebKit: {
        name: 'AppleWebKit',
        detail: 'KHTML, like Gecko',
        unit: 'AppleWebKit/604.1.38 (KHTML, like Gecko)',
        version: '604.1.38'
      },
      Mobile: {
        name: 'Mobile',
        detail: '',
        unit: 'Mobile/15A432',
        version: '15A432'
      },
      MicroMessenger: {
        name: 'MicroMessenger',
        detail: '',
        unit: 'MicroMessenger/6.5.18',
        version: '6.5.18'
      },
      NetType: {
        name: 'NetType',
        detail: '',
        unit: 'NetType/WIFI',
        version: 'WIFI'
      },
      Language: {
        name: 'Language',
        detail: '',
        unit: 'Language/zh_CN',
        version: 'zh.CN'
      }
    }
  },
  {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Mobile/15A432 TitansNoX/11.0.12 KNB/1.2.0 iOS/11.0.3 dp/com.dianping.dpscope/9.6.0 dp/9.6.0',
    parsed: {
      Mozilla: { name: 'Mozilla',
        detail: 'iPhone; CPU iPhone OS 11_0_3 like Mac OS X',
        unit: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X)',
        version: '5.0'
      },
      AppleWebKit: {
        name: 'AppleWebKit',
        detail: 'KHTML, like Gecko',
        unit: 'AppleWebKit/604.1.38 (KHTML, like Gecko)',
        version: '604.1.38'
      },
      Mobile: {
        name: 'Mobile',
        detail: '',
        unit: 'Mobile/15A432',
        version: '15A432'
      },
      "KNB": {
        "detail": "",
        "name": "KNB",
        "unit": "KNB/1.2.0",
        "version": "1.2.0"
      },
      "TitansNoX": {
        "detail": "",
        "name": "TitansNoX",
        "unit": "TitansNoX/11.0.12",
        "version": "11.0.12"
      },
      "dp": {
        "detail": "",
        "name": "dp",
        "unit": "dp/9.6.0",
        "version": "9.6.0"
      },
      "dp/com.dianping.dpscope": {
        "detail": "",
        "name": "dp/com.dianping.dpscope",
        "unit": "dp/com.dianping.dpscope/9.6.0",
        "version": "9.6.0"
      },
      "iOS": {
        "detail": "",
        "name": "iOS",
        "unit": "iOS/11.0.3",
        "version": "11.0.3"
      }
    }
  }, {
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Mobile/15A432 Nebula PSDType(1) AlipayDefined(nt:WIFI,ws:320|504|2.0) AliApp(AP/10.1.5.102407) AlipayClient/10.1.5.102407 Alipay Language/en',
    parsed: {
      "Mozilla": {
        "name": "Mozilla",
        "detail": "iPhone; CPU iPhone OS 11_0_3 like Mac OS X",
        "unit": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0_3 like Mac OS X)",
        "version": "5.0"
      },
      "AppleWebKit": {
        "name": "AppleWebKit",
        "detail": "KHTML, like Gecko",
        "unit": "AppleWebKit/604.1.38 (KHTML, like Gecko)",
        "version": "604.1.38"
      },
      "Mobile": {
        "name": "Mobile",
        "detail": "",
        "unit": "Mobile/15A432",
        "version": "15A432"
      },
      "Nebula": {
        "name": "Nebula",
        "detail": "",
        "unit": "Nebula",
        "version": ""
      },
      "PSDType": {
        "name": "PSDType",
        "detail": "1",
        "unit": "PSDType(1)",
        "version": ""
      },
      "AlipayDefined": {
        "name": "AlipayDefined",
        "detail": "nt:WIFI,ws:320|504|2.0",
        "unit": "AlipayDefined(nt:WIFI,ws:320|504|2.0)",
        "version": ""
      },
      "AliApp": {
        "name": "AliApp",
        "detail": "AP/10.1.5.102407",
        "unit": "AliApp(AP/10.1.5.102407)",
        "version": ""
      },
      "AlipayClient": {
        "name": "AlipayClient",
        "detail": "",
        "unit": "AlipayClient/10.1.5.102407",
        "version": "10.1.5.102407"
      },
      "Alipay": {
        "name": "Alipay",
        "detail": "",
        "unit": "Alipay",
        "version": ""
      },
      "Language": {
        "name": "Language",
        "detail": "",
        "unit": "Language/en",
        "version": "en"
      }
    }
  }
];

describe('parseUAStr', () => {
  it('All Cases', () => {
    for (const c of cases) {
      assert.deepEqual(parseUAStr(c.ua), c.parsed, c.ua);
    }
  });
});
