const deviceType = require('ua-device-type');
const DEVICE_RULES = require('./rules/device');
const parseByRegExpRules = require('./parseByRegExpRules');
const formatVersion = require('../formatVersion');

module.exports = parseDevice;

function parseDevice(ua, rules) {
  const customRules = rules || [];
  const device = {};
  const specialDeviceRE = /\b([^();]+)\s+Build\/([^()/;]+)/i;
  const matched = ua.match(specialDeviceRE);

  if (!matched || !matched[1]) {
    const info = parseByRegExpRules(ua, customRules.concat(DEVICE_RULES));
    if (!info) {
      return null;
    }
    Object.assign(device, info);
  } else {
    device.unit = matched[0];
    device.name = matched[1];
    device.version = formatVersion(matched[2] || '');
  }
  device.type = deviceType(ua);
  return device;
}
