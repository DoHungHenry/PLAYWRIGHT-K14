import { FooterFlows } from 'models/demowebshop.tricentis';
import { Page, test } from '@playwright/test';

let page: Page;
let footerFlows: FooterFlows;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    footerFlows = new FooterFlows(page);
});

test('Verify footer', async () => {
    await page.goto('https://demowebshop.tricentis.com/');
    await footerFlows.verifyFooterComponent();
    await page.waitForTimeout(2000);
});