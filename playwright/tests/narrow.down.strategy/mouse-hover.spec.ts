import { test } from '@playwright/test';

test('Narrow down - dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers', { waitUntil: 'networkidle' });

    const linkUser1Lct = await page.locator('.figure img').all();
    const linkUser1Elem = await page.$$('.figure img');

    console.log('1');

    console.log(typeof (linkUser1Lct[0]));

    console.log('2');
    console.log(typeof (linkUser1Elem[0]));

    await linkUser1Lct[0].hover();
    await page.waitForTimeout(2000);

    await linkUser1Elem[1].hover();
    await page.waitForTimeout(2000);
});