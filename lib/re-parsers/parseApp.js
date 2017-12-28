const APP_RULES = require('./rules/app');
const BROWSER_RULES = require('./rules/browser');
const parseByRegExpRules = require('./parseByRegExpRules');

module.exports = parseApp;

function parseApp(ua, rule) {
  const customAppRules = (rule && rule.app) || [];
  const app = parseByRegExpRules(ua, customAppRules.concat(APP_RULES));
  if (app) {
    return app;
  }

  const customBrowserRules = (rule && rule.browser) || [];
  const browser = parseByRegExpRules(ua, customBrowserRules.concat(BROWSER_RULES));
  if (browser) {
    browser.isBrowser = true;
    return browser;
  }
  return null;
}
