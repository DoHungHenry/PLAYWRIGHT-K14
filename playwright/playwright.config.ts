import { PlaywrightTestConfig, devices } from '@playwright/test';

require('dotenv').config();

const config: PlaywrightTestConfig = {
    testDir: 'tests',
    // Look for tests with the ".spec.ts" file extension
    testMatch: '**/*.spec.ts',
    timeout: 180 * 1000,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 5000
    },
    retries: process.env.CI ? 2 : 1,
    workers: 5,
    reporter: 'html',
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ],
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 10000,
        headless: false,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
        defaultBrowserType: 'chromium',
        acceptDownloads: true,
        storageState: './global-auth.json',
        baseURL: process.env.WEBAPP_BASE_URL,
        testIdAttribute: 'data-teo',
    },

    // globalSetup: './global-setup.ts',
};

export default config;