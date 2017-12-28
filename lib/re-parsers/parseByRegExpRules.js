const formatVersion = require('../formatVersion');

module.exports = parseByRegExpRules;

function parseByRegExpRules(ua, rules) {
  for (const ruleArr of rules) {
    const name = ruleArr[0];
    for (let i = 1; i < ruleArr.length; i++) {
      const rule = ruleArr[i];
      const matched = ua.match(rule);
      if (matched) {
        return {
          name,
          version: formatVersion(matched[1])
        };
      }
    }
  }
  return null;
}
