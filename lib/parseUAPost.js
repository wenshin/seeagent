const parseUAStr = require('./parseUAStr');
const parseApp = require('./key-parsers/parseApp');
const parseDevice = require('./re-parsers/parseDevice');
const parseWindowsBrowser = require('./re-parsers/parseWindowsBrowser');
const parseByRegExpRules = require('./re-parsers/parseByRegExpRules');


module.exports = parseUAPost;

/**
 * @param {string} ua     user agent string
 * @param {Object} rule
 *
 *     {
 *        app: [[name, rules]], // key parser rules, see lib/key-parsers/rules for detail
 *        browser: [[name, rules]], // same to app property
 *        os: [[name, rules, meta]],
 *        device: [[name, rules, meta]]
 *     }
 */
function parseUAPost(ua, rule = {}) {
  if (typeof ua !== 'string') {
    throw new TypeError('useragent must be a string');
  }
  if (!ua) return {};

  let systemInfo = ua;
  const parsed = parseUAStr(ua);

  parsed.app = parseApp(parsed, rule);

  if (parsed.Mozilla) {
    systemInfo = parsed.Mozilla.detail;
  }

  if (systemInfo.indexOf('Windows') > -1 && !parsed.Edge) {
    parsed.app = parseWindowsBrowser(systemInfo, rule.windowsBrowser);
  }

  parsed.os = parseByRegExpRules(systemInfo, rule.os);
  parsed.device = parseDevice(systemInfo, rule.device);

  return parsed;
}
