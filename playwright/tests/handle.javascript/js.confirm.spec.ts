import { test } from '@playwright/test';

const url = 'https://the-internet.herokuapp.com/javascript_alerts';

test('Handle JS Confirm: dismiss', async ({ page }) => {
    await page.goto(url);
    const jsConfirmLct =  page.locator('button[onclick="jsConfirm()"]');

    // MUST define the event first
    page.on('dialog', async dialog => {

        await dialog.dismiss();
    });

    // Trigger the js alert
    await jsConfirmLct.click();
    
    // wait
    await page.waitForTimeout(3000);
});

test('Handle JS Confirm: confirm', async ({ page }) => {
    await page.goto(url);
    const jsConfirmLct =  page.locator('button[onclick="jsConfirm()"]');

    // MUST define the event first
    page.on('dialog', async dialog => {

        await dialog.accept();
    });

    // Trigger the js alert
    await jsConfirmLct.click();
    
    // wait
    await page.waitForTimeout(3000);
});