const assert = require('assert');
const parseByKeyRules = require('./parseByKeyRules');

module.exports = parseApp;

function parseApp(uaParsed, rule) {
  assert.ok(rule && (rule.browser || rule.app), 'rule {app, browser} is needed');
  if (rule.app) {
    assert.ok(rule.app instanceof Array, 'rule.app must be a array');
  }
  if (rule.browser) {
    assert.ok(rule.browser instanceof Array, 'rule.browser must be a array');
  }

  const app = parseByKeyRules(uaParsed, rule.app);
  if (app) {
    return app;
  }

  const browser = parseByKeyRules(uaParsed, rule.browser);
  if (browser) {
    browser.isBrowser = true;
    return browser;
  }
  return null;
}
