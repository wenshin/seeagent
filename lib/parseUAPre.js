const parseApp = require('./re-parsers/parseApp')
const parseOS = require('./re-parsers/parseOS')
const parseDevice = require('./re-parsers/parseDevice')

module.exports = parseUAPre;

function parseUAPre(ua) {
  if (!ua) return {};
  const parsed = {};
  parsed.os = parseOS(ua);
  parsed.app = parseApp(ua);
  parsed.device = parseDevice(ua);
  return parsed;
}
