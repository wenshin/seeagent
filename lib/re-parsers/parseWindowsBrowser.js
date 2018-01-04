const assert = require('assert');
const parseByRegExpRules = require('./parseByRegExpRules');

module.exports = parseWindowsBrowser;

function parseWindowsBrowser(systemInfo, rules) {
  assert.ok(rules instanceof Array, 'rules must be a array');
  const info = parseByRegExpRules(systemInfo, rules);
  if (info) {
    info.isBrowser = true;
  }
  return info;
}
