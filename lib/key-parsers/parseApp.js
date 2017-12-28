const APP_RULES = require('./rules/app');
const BROWSER_RULES = require('./rules/browser');
const parseByKeyRules = require('./parseByKeyRules');

module.exports = parseApp;

function parseApp(uaParsed, rule) {
  const customAppRules = (rule && rule.app) || [];
  const app = parseByKeyRules(uaParsed, customAppRules.concat(APP_RULES));
  if (app) {
    return app;
  }

  const customBrowserRules = (rule && rule.browser) || [];
  const browser = parseByKeyRules(uaParsed, customBrowserRules.concat(BROWSER_RULES));
  if (browser) {
    browser.isBrowser = true;
    return browser;
  }
  return null;
}
