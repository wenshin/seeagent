const parseUAPost = require('./parseUAPost');
const parseUAStr = require('./parseUAStr');
const APP_RULES = require('./key-parsers/rules/app');
const BROWSER_RULES = require('./key-parsers/rules/browser');
const DEVICE_RULES = require('./re-parsers/rules/device');
const OS_RULES = require('./re-parsers/rules/os');


module.exports = parseUA;

function parseUA(ua) {
  return parseUAPost(ua, parseUA.rule);
}

parseUA.parseUAStr = parseUAStr;

parseUA.rule = {
  browser: BROWSER_RULES,
  app: APP_RULES,
  device: DEVICE_RULES,
  os: OS_RULES
};

parseUA.extends = extendsRule;
function extendsRule(rule) {
  if (rule) {
    for (const key of Object.keys(rule)) {
      const rules = rule[key];
      if (rules instanceof Array) {
        parseUA.rule[key] = rules.concat(parseUA.rule[key] || []);
      } else {
        throw new TypeError('rules must be array');
      }
    }
  }
}
