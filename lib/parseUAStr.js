const formatVersion = require('./formatVersion');

module.exports = parseUAStr;

// ua standard https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent
function parseUAStr(ua, parser) {
  const units = ua.match(/[^()\s]+(\s?\([^()]+\))?/g);
  const unitsByName = {};
  for (let i = 0; i < units.length; i++) {
    const unitParsed = parseUnit(units[i], parser);
    unitsByName[unitParsed.name] = unitParsed;
  }
  return unitsByName;
}

/**
 * parseUnit description
 * @param {String} unit
 * @param {Function} parser
 *    parser function description
 *    @param {Object} info
 *    @param {String} info.name
 *    @param {String} info.version
 *    @param {String} info.detail
 *    @param {String} info.unit
 *    @return {Object}   {name, version, ...otherinfo}
 */
function parseUnit(unit, parser) {
  const mainMatched = unit.match(/^([^()\s]+)(\s?\(([^()]+)\))?/);
  const [, main, , detail = ''] = mainMatched;
  const {name, version} = parseNameAndVersion(main);
  const uniVersion = formatVersion(version);
  const parsed = parser && parser({name, version: uniVersion, unit, detail});
  return Object.assign({
    name,
    detail,
    unit,
    version: uniVersion,
  }, parsed);
}

function parseNameAndVersion(str) {
  const splited = str.split('/');
  let name;
  let version = '';
  if (splited.length === 1) {
    name = splited[0];
  } else if (splited.length === 2) {
    name = splited[0];
    version = splited[1];
  } else {
    // dp/com.dianping.dpscope/9.6.0
    // Mozilla/bad/abc
    version = parseVersion(str);
    if (version) {
      name = str.replace(new RegExp(`/?${version}.*$`), '');
    } else {
      name = str;
    }
  }
  return {name, version};
}

function parseVersion(str) {
  const rules = [
    /((\d[._])+\d+)/,
    /\/(\d+)/
  ];
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const matched = str.match(rule);
    if (matched && matched[1]) {
      return matched[1];
    }
  }
}
