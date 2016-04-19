module.exports = {
  Wechat: [/MicroMessenger\/(\d+(\.\d+)+)/i],
  Maoyan: [/(?:movie|Maoyan\/Android)\/(\d+(\.\d+)+)/i], // movie/5.9.0/190 or Maoyan/Android/6.6.0
  Daxiang: [/XM\/(\d+(\.\d+)+)/i, /daxiang-app\/(\d+(\.\d+)+)/i],
  QQ: [/QQ\/(\d+(\.\d+)+)/i], // QQ/6.2
  Weibo: [/weibo__(\d+(\.\d+)+)/i], // Weibo (iPhone7,2__weibo__5.4.0__iphone__os8.3)
  Taobao: [/TB\/(\d+(\.\d+)+)/],
  QQBrowser: [/QQBrowser\/(\d+(\.\d+)+)/i]
};
