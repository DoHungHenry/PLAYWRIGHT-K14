// use for verifying footer component on more than one page and avoid code duplication

import { Page, test } from '@playwright/test';
import { FooterFlows } from 'test.flows/global/footer.flows';
import inputData from './footer.data.driven.input.json';

let page: Page;
let footerFlows: FooterFlows;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    footerFlows = new FooterFlows(page);
});

inputData.forEach(inputPage => {
    const {pageName, slug} = inputPage;
    test(`Verify footer on ${pageName}`, async () => {
        await page.goto(process.env.BASE_URL + slug);
        await footerFlows.verifyFooterComp();
        await page.waitForTimeout(2000);
    });
});