module.exports = {
  query: [
    {rules: [/AgroupB/], info: {vendor: 'Meituan'}},
    {rules: [/AmovieB|ios/], info: {vendor: 'Maoyan'}}, // maoyan client define f=`ios`
    {rules: [/samsung/], info: {vendor: 'Samsung'}},
    {rules: [/f=mypptv/], info: {vendor: 'PPTV'}},
    {rules: [/toutiao/], info: {vendor: 'Toutiao'}},
    {rules: [/_f_=pf/], info: {vendor: 'Piaofang'}},
    {rules: [/f=imt/], info: {vendor: 'iMeituan'}}
  ],

  useragent: [
    {rules: [/MicroMessenger\/(\d+(\.\d+)+)/i], info: {vendor: 'Wechat'}},
    // movie/5.9.0/190 or Maoyan/Android/6.6.0
    {rules: [/(?:movie|Maoyan\/Android)\/(\d+(\.\d+)+)/i], info: {vendor: 'Maoyan'}},
    {rules: [/XM\/(\d+(\.\d+)+)/i, /daxiang-app\/(\d+(\.\d+)+)/i], info: {vendor: 'Daxiang'}},
    // QQ/6.2
    {rules: [/QQ\/(\d+(\.\d+)+)/i], info: {vendor: 'QQ'}},
    // Weibo (iPhone7,2__weibo__5.4.0__iphone__os8.3)
    {rules: [/weibo__(\d+(\.\d+)+)/i], info: {vendor: 'Weibo'}},
    {rules: [/TB\/(\d+(\.\d+)+)/], info: {vendor: 'Taobao'}},
    {rules: [/QQBrowser\/(\d+(\.\d+)+)/i], info: {vendor: 'QQBrowser'}}
  ]
};
