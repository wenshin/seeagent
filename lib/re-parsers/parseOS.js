const assert = require('assert');
const parseByRegExpRules = require('./parseByRegExpRules');

module.exports = parseOS;

function parseOS(ua, rules) {
  assert.ok(rules instanceof Array, 'rules must be a array');
  return parseByRegExpRules(ua, rules);
}
