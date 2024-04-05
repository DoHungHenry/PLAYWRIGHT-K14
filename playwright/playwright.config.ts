import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: 'tests',
    // Look for tests with the ".spec.ts" file extension
    testMatch: '**/*.spec.ts',
    timeout: 10000,
    retries: process.env.CI ? 2 : 1,
    reporter: 'html',
    use: {
        actionTimeout: 5 * 1000, // like implicit wait
        headless: false,
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
        testIdAttribute: 'data-teo',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
};