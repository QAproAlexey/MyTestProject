const { devices } = require('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
    testDir: './tests',
    retries: 0,
    expect: {
    timeout: 10000
    },
    use: {
    browserName: 'chromium',
    baseURL: 'https://www.asos.com/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};
module.exports = config;