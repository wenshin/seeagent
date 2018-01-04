const assert = require('assert');
const parseByRegExpRules = require('./parseByRegExpRules');
const formatVersion = require('../formatVersion');

module.exports = parseDevice;

function parseDevice(ua, rules) {
  assert.ok(rules instanceof Array, 'rules must be a array');

  const device = {};
  const specialDeviceRE = /\b([^();]+)\s+Build\/([^()/;]+)/i;
  const matched = ua.match(specialDeviceRE);

  if (!matched || !matched[1]) {
    const info = parseByRegExpRules(ua, rules);
    if (!info) {
      return null;
    }
    Object.assign(device, info);
  } else {
    device.unit = matched[0];
    device.name = matched[1];
    device.version = formatVersion(matched[2]);

    // match some rules like
    // MHA-AL00 Build/HUAWEIMHA-AL00
    const info = parseByRegExpRules(device.unit, rules);
    if (info) {
      device.name = info.name;
      device.version = info.version || device.version;
    }
  }
  return device;
}
