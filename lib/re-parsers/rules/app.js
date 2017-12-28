module.exports = [
  ['Wechat', /MicroMessenger\/((\d+\.)*\d+)/i, /Wechat\/((\d+\.)*\d+)/i],
  ['Dianping', /dp\/com\.dianping[^/]*\/((\d+\.)*\d+)/i, /dp\/((\d+\.)*\d+)/i],
  ['Meituan', /meituangroup\/((\d+\.)*\d+)/i, /com\.meituan\.imeituan\/((\d+\.)*\d+)/i],
  ['Alipay', /AlipayClient\/((\d+\.)*\d+)/i, /alipay/i],
  ['Daxiang', /XM\/((\d+\.)*\d+)/i],
  ['Maoyan', /(?:movie|Maoyan(?:\/Android)?)\/((\d+\.)*\d+)/i],
  ['MaoyanPro', /moviepro[^\d]*((\d+\.)*\d+)/i],
];
