// use for verifying footer component on more than one page and avoid code duplication

import { Page, test } from '@playwright/test';
import inputData from './footer.data.driven.input.json';
import { FooterFlows } from '@demowebshop.tricentis/models/common.components/footer/services/footer.flows';

let page: Page;
let footerFlows: FooterFlows;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    footerFlows = new FooterFlows(page);
});

inputData.forEach(inputPage => {
    const { pageName, slug } = inputPage;
    test(`Verify footer on ${pageName}`, async () => {
        await footerFlows.gotoUrl(footerFlows.baseUrl + slug);
        await footerFlows.verifyFooterComponent();
        await page.waitForTimeout(2000);
    });
});