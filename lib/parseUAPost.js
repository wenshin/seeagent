const parseUAStr = require('./parseUAStr')
const parseApp = require('./key-parsers/parseApp')
const parseOS = require('./re-parsers/parseOS')
const parseDevice = require('./re-parsers/parseDevice')

module.exports = parseUAPost;

/**
 * @param {string} ua     user agent string
 * @param {Object} rule
 *
 *     {
 *        app: [], // key parser rules, see lib/key-parsers/rules for detail
 *        browser: [], // same to app property
 *        os: [],
 *        device: []
 *     }
 */
function parseUAPost(ua, rule = {}) {
  if (typeof ua !== 'string') {
    throw new TypeError('useragent must be a string');
  }
  if (!ua) return {};
  const parsed = parseUAStr(ua);
  parsed.app = parseApp(parsed, rule);
  parsed.os = parseOS(ua, rule.os);
  parsed.device = parseDevice(ua, rule.device);
  return parsed;
}
