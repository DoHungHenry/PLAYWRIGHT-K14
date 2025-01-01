import { test } from '@playwright/test';

test('Narrow down - dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.waitForTimeout(2000);

    const ddLct = page.locator('#dropdown');
    await ddLct.click();

    // locate option by selector
    // const option1 = page.locator('option[value="1"]');
    // await option1.click();

    // await ddLct.click();
    // const option2 = page.locator('option[value="2"]');
    // await option2.click();

    // locate option by ddoption, condition: html tag: select
    await ddLct.selectOption({ index: 1 });
    await page.waitForTimeout(2000);

    await ddLct.selectOption({ value: "2" });

    await page.waitForTimeout(2000);
});