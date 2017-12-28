const OS_RULES = require('./rules/os');
const parseByRegExpRules = require('./parseByRegExpRules');

module.exports = parseOS;

function parseOS(ua, rules) {
  const customRules = rules || [];
  return parseByRegExpRules(ua, customRules.concat(OS_RULES));
}
