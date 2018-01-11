const assert = require('assert');
const {LRUMap} = require('lru_map');
const parseUAPost = require('./parseUAPost');
const parseUAStr = require('./parseUAStr');
const APP_RULES = require('./key-parsers/rules/app');
const BROWSER_RULES = require('./key-parsers/rules/browser');
const DEVICE_RULES = require('./re-parsers/rules/device');
const OS_RULES = require('./re-parsers/rules/os');
const WINDOWS_BROWSER_RULES = require('./re-parsers/rules/windows-browser');

const DEFAULT_SIZE = 1000;

module.exports = parseUA;

function parseUA(ua) {
  let uaObj = parseUA.lruMap.get(ua);
  if (!uaObj) {
    uaObj = parseUAPost(ua, parseUA._options.rule);
    parseUA.lruMap.set(ua, uaObj);
  }
  return uaObj;
}

parseUA.setDefaultOptions = function setDefaultOptions() {
  this._options = {
    size: DEFAULT_SIZE,
    rule: {
      browser: BROWSER_RULES,
      app: APP_RULES,
      device: DEVICE_RULES,
      os: OS_RULES,
      windowsBrowser: WINDOWS_BROWSER_RULES,
    }
  };
  return this;
}
parseUA.setDefaultOptions();
parseUA.config = function config(options) {
  if (!options) return this;
  this._options.size = options.size || this._options.size;
  this.extends(options.rule);
  return this;
}

Object.defineProperty(parseUA, 'lruMap', {
  get() {
    if (!this._lruMap) {
      this._lruMap = new LRUMap(this._options.size);
    }
    return this._lruMap;
  }
});

parseUA.extends = extendsRule;
function extendsRule(rule) {
  assert.ok(
    rule === null
      || rule === undefined
      || Object.getPrototypeOf(rule) === Object.prototype,
    'rule msut be a plain object or null or undefined'
  );

  const ruleOption = this._options.rule;
  if (rule) {
    for (const key of Object.keys(rule)) {
      const rules = rule[key];
      if (rules instanceof Array && rules[0] instanceof Array) {
        ruleOption[key] = rules.concat(ruleOption[key]);
      } else {
        throw new TypeError('rules must be two dimensional array');
      }
    }
  }
}

parseUA.parseUAPost = parseUAPost;
parseUA.parseUAStr = parseUAStr;
