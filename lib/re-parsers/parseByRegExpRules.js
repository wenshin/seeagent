const formatVersion = require('../formatVersion');

module.exports = parseByRegExpRules;

function parseByRegExpRules(ua, rules) {
  for (const ruleArr of rules) {
    const name = ruleArr[0];
    const regExps = ruleArr[1];
    const meta = ruleArr[2];

    for (let i = 0; i < regExps.length; i++) {
      let rule = regExps[i];
      if (typeof rule === 'string') {
        rule = ua.match(new RegExp(rule, 'i'))
      } else if (!(rule instanceof RegExp)) {
        throw TypeError('os device rule must be a RegExp or string');
      }
      const matched = ua.match(rule);
      if (matched) {
        return Object.assign({
          name,
          version: formatVersion(matched[1])
        }, meta);
      }
    }
  }
  return null;
}
