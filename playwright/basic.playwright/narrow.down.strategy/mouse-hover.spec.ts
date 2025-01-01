import { test } from '@playwright/test';

test('Narrow down - mouse hover', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers', { waitUntil: 'networkidle' });

    const figureLcts = await page.locator('.figure').all();

    for(const figure of figureLcts) {
        const imgLct = figure.locator('img');
        await imgLct.hover();
    }
});
