import { test } from '@playwright/test';

const url = 'https://the-internet.herokuapp.com/javascript_alerts';

test('Handle JS Prompt', async ({ page }) => {
    await page.goto(url);
    const jsPromptLct =  page.locator('button[onclick="jsPrompt()"]');

    // MUST define the event first
    page.on('dialog', async dialog => {
        await dialog.accept('Im a prompt!');
    });

    // Trigger the js alert
    await jsPromptLct.click();
    
    // wait
    await page.waitForTimeout(3000);
});