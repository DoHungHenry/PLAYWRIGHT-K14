import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // Look for tests in the "tests" directory
    testDir: 'tests',
    // Look for tests with the ".spec.ts" file extension
    testMatch: '**/*.spec.ts',
    // Set the timeout for each test to 30 seconds
    timeout: 60000,
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
};