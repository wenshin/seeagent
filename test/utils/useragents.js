export default [{
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
  parsed: {
    os: { family: 'Mac OS X', major: '10', minor: '11', patch: '3' },
    device: { family: 'Other', major: '0', minor: '0', patch: '0' },
    app: { family: 'Chrome', major: '49', minor: '0', patch: '2623' }
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13D15 Safari/601.1',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '2', patch: '1' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0'},
    app: {family: 'Mobile Safari', major: '9', minor: '0', patch: '0'},
  }
}, {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13D15 MicroMessenger/5.0.1',
  parsed: {
    os: { family: 'iOS', major: '9', minor: '2', patch: '1' },
    device: { family: 'iPhone', major: '0', minor: '0', patch: '0'},
    app: {family: 'Wechat', major: '5', minor: '0', patch: '1'}
  }
}];
