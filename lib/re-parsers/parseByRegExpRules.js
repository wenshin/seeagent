const formatVersion = require('../formatVersion');

module.exports = parseByRegExpRules;

function parseByRegExpRules(ua, rules) {
  for (const ruleArr of rules) {
    const name = ruleArr[0];
    let meta = ruleArr[ruleArr.length - 1];
    if (meta instanceof RegExp) {
      meta = null;
    }
    for (let i = 1; i < ruleArr.length; i++) {
      const rule = ruleArr[i];
      if (rule instanceof RegExp) {
        const matched = ua.match(rule);
        if (matched) {
          return Object.assign({
            name,
            version: formatVersion(matched[1])
          }, meta);
        }
      }
    }
  }
  return null;
}
