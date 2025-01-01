import { Page, test } from '@playwright/test';

const url = 'https://the-internet.herokuapp.com/floating_menu';

test('Handle JS', async ({ page }) => {
    await page.goto(url);

    await page.locator('h3').highlight();

    // Scroll to the bottom of the page
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(3000);

    // Scroll to the top of the page
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });
    
    // wait
    await page.waitForTimeout(3000);
});

test('Scrolling with params', async ({ page }) => {
    await page.goto(url);

    await page.locator('h3').highlight();

    // Scroll to the bottom of the page
    await scrollTo(page, 0.8);

    await page.waitForTimeout(3000);

    // Scroll to the top of the page
    await scrollTo(page, 0.2);
    
    // wait
    await page.waitForTimeout(3000);
});

async function scrollTo(page: Page, percentage: number) {
    await page.evaluate(() => {
        window.scrollTo(0, percentage*document.body.scrollHeight);
    });
}   