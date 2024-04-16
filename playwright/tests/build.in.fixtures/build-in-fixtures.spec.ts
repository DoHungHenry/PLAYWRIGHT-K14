import { test } from '@playwright/test';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

test('test build-in fixtures: Browser, BrowserContext, Page', async () => {
    const browser: Browser = await chromium.launch();
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://playwright.dev/');

    await page.waitForTimeout(2000);
    await browser.close();
});