function versionsToObject(version) {
  let versions = version.split('.');
  let major = versions[0] || '0';
  let minor = versions[1] || '0';
  let patch = versions[2] || '0';
  return {major, minor, patch};
}

function parseRules(source, rules) {
  let matched;
  for (const rule of rules) {
    matched = source.match(rule);
    if (!matched) continue;
    if (matched.length >= 2) return versionsToObject(matched[1]);
    if (matched.length === 1) return versionsToObject('0.0.0');
  }
}

module.exports = function parse(source, ruleConfig) {
  if (!source) return;

  let {rules, info = {}} = ruleConfig;
  let versionsObj = parseRules(source, rules);
  if (versionsObj) return Object.assign(versionsObj, info);
};
