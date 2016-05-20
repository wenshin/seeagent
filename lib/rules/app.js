module.exports = {
  query: [
    {info: {vendor: 'Meituan'}, rules: [/AgroupB/]},
    {info: {vendor: 'Maoyan'}, rules: [/AmovieB|ios/]}, // maoyan client define f=`ios`
    {info: {vendor: 'Samsung'}, rules: [/samsung/]},
    {info: {vendor: 'PPTV'}, rules: [/f=mypptv/]},
    {info: {vendor: 'Toutiao'}, rules: [/toutiao/]},
    {info: {vendor: 'Piaofang'}, rules: [/_f_=pf/]},
    {info: {vendor: 'iMeituan'}, rules: [/f=imt/]}
  ],

  useragent: [
    {info: {vendor: 'Wechat'}, rules: [/MicroMessenger\/(\d+(\.\d+)+)/i]},
    // movie/5.9.0/190 or Maoyan/Android/6.6.0
    {info: {vendor: 'Maoyan'}, rules: [/(?:movie|Maoyan\/Android)\/(\d+(\.\d+)+)/i]},
    {info: {vendor: 'Daxiang'}, rules: [/XM\/(\d+(\.\d+)+)/i, /daxiang-app\/(\d+(\.\d+)+)/i]},
    // QQ/6.2
    {info: {vendor: 'QQ'}, rules: [/QQ\/(\d+(\.\d+)+)/i]},
    {info: {vendor: 'QQMusic'}, rules: [/QQMusic\/(\d+(\.\d+)+)/i]},
    // Weibo (iPhone7,2__weibo__5.4.0__iphone__os8.3)
    {info: {vendor: 'Weibo'}, rules: [/weibo__(\d+(\.\d+)+)/i]},
    {info: {vendor: 'Taobao'}, rules: [/TB\/(\d+(\.\d+)+)/]},
    {info: {vendor: 'QQBrowser'}, rules: [/QQBrowser\/(\d+(\.\d+)+)/i]},
    {info: {vendor: 'Mogujie'}, rules: [/Mogujie(\d+)/i]}
  ]
};
