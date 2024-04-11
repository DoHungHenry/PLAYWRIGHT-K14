import { test } from '@playwright/test';

const url = 'https://the-internet.herokuapp.com/javascript_alerts';

test('Handle JS Alert', async ({ page }) => {
    await page.goto(url);
    const jsAlertLct =  page.locator('button[onclick="jsAlert()"]');

    // MUST define the event first
    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    // Trigger the js alert
    await jsAlertLct.click();
    
    // wait
    await page.waitForTimeout(3000);
});