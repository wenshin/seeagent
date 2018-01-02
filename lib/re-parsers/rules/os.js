module.exports = [
  ['iOS', [/OS ((\d+_)*\d+) like Mac OS/i, /iOS ((\d+\.)*\d+)/i]],
  ['Android', [/Android ((\d+\.)*\d+)/i]],
  ['Windows', [/Windows NT ((\d+\.)*\d+)/i]],
  ['macOS', [/Intel Mac OS X ((\d+_)*\d+)/i]],
  ['Linux', [/Linux x((\d+_)*\d+)/i]],
];
