module.exports = parseByKeyRules;

function parseByKeyRules(uaParsed, rules) {
  for (let i = 0; i < rules.length; i++) {
    const name = rules[i][0];
    const matchNames = rules[i][1];
    for (let j = 0; j < matchNames.length; j++) {
      const matchName = matchNames[j];
      if (typeof matchName !== 'string') {
        throw new TypeError('only support string fingerprint');
      }
      if (matchName in uaParsed) {
        return Object.assign(uaParsed[matchName], {name});
      }
    }
  }
  return null;
}
