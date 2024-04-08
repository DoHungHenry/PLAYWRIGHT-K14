import { test } from '@playwright/test';

test('Narrow down - dynamic ', async ({ page }) => {
    // click remove button
    // checkbox was removed
    // It's gone text was displayed

    await page.goto('https://the-internet.herokuapp.com/dynamic_controls', { waitUntil: 'networkidle' });

    // checkbox comp locators
    const checkboxCompLct = page.locator('#checkbox-example');
    const checkboxLct = checkboxCompLct.locator('input[type="checkbox"]');
    const removeBtnLct = checkboxCompLct.locator('button:has-text("Remove")');
    const addBtnLct = checkboxCompLct.locator('button:has-text("Add")');
    const itsGoneTxtLct = checkboxCompLct.locator('p:has-text("It\'s gone!")');
    const itsBackTxtLct = checkboxCompLct.locator('p:has-text("It\'s back!")');

    // interact with checkbox comp: click remove
    const start1 = performance.now();
    await removeBtnLct.click();
    await checkboxLct.waitFor({ state: 'detached' });
    await itsGoneTxtLct.waitFor({ state: 'visible' });
    const end1 = performance.now();
    console.log(`Execution time: ${end1 - start1} ms`);

    // interact with checkbox comp: click add
    const start2 = performance.now();
    await addBtnLct.click();
    await checkboxLct.waitFor({ state: 'visible' });
    await itsBackTxtLct.waitFor({ state: 'visible' });
    await itsGoneTxtLct.waitFor({ state: 'detached' });
    const end2 = performance.now();
    console.log(`Execution time: ${end2 - start2} ms`);

    // input comp locators
    const inputCompLct = page.locator('#input-example');
    const inputLct = inputCompLct.locator('input');
    const enableBtnLct = inputCompLct.locator('button:has-text("Enable")');
    const disableBtnLct = inputCompLct.locator('button:has-text("Disable")');

    // interact with input comp: enable, fill, disable
    const start3 = performance.now();
    await enableBtnLct.click();
    await inputLct.isEnabled();
    await inputLct.click();
    await inputLct.fill('Hello World');
    await disableBtnLct.click();
    await inputLct.isDisabled();
    const end3 = performance.now();
    console.log(`Execution time: ${end3 - start3} ms`);
    await page.waitForTimeout(2000);
});