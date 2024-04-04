import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // Look for tests in the "tests" directory
    testDir: 'tests',
    // Look for tests with the ".spec.ts" file extension
    testMatch: '**/*.spec.ts',
    // Set the timeout for each test to 30 seconds
    timeout: 60000,
    retries: process.env.CI ? 2 : 1,
    reporter: 'html',
    use: {
        headless: false,
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
};