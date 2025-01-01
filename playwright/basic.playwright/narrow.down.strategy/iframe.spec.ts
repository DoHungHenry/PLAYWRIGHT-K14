import { expect, test } from '@playwright/test';

test('Narrow down - iframe', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // id start with mce
    const iframeIdStartWithLct = page.frameLocator('iframe[id^="mce"]');

    // id end with ifr
    // const iframeIdEndWithLct = page.locator('iframe[id$="ifr"]');

    // id contains text mce
    // const iframeIdContainTextLct = page.locator('iframe[id*="mce"]');

    // narrow down from iframe to p in iframe
    const textLct = iframeIdStartWithLct.locator('p');
    const backBtnLct = page.locator('button[title="Undo"]');

    expect(await textLct.innerText()).toEqual('Your content goes here.');

    await page.pause();
    await textLct.click();
    await textLct.clear();
    await textLct.fill('Hello World');

    await page.waitForTimeout(2000);

    expect(await textLct.innerText()).toEqual('Hello World');

    await backBtnLct.click();
    expect(await textLct.innerText()).toEqual('Your content goes here.');

    await page.waitForTimeout(2000);
});