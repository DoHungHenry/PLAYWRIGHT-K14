import { test } from '@playwright/test';

test('Locate element - Xpath', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/', { waitUntil: 'load' });
    const elemental = await page
        .waitForSelector('//a[contains(text(), "Elemental Selenium")]'); // [] mean having condition, inside can be a condition

    await elemental.click();

    await page.waitForTimeout(2000);
});

test('Locate element - CSS', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/', { waitUntil: 'load' });

    const elemental = await page
        .waitForSelector('a:has-text("Elemental")');

    await elemental.click();

    await page.waitForTimeout(2000);
});

test('Locate element - data-testid (highly recommendation for modern web application)', async ({ page }) => {
    // <button data-testid="directions">Itinéraire</button>
    await page.goto('url');

    const elemental = page.getByTestId('directions');

    await elemental.click();

    await page.waitForTimeout(2000);
});

test('Locate element - custom data-testid in project', async ({ page }) => {
    // <button data-teo="directions">Itinéraire</button> // teo is a custom attribute which configured in playwright.config.ts: testIdAttribute: 'data-teo',
    await page.goto('url');

    const elemental = page.getByTestId('directions');

    await elemental.click();

    await page.waitForTimeout(2000);
});

test('Locate element - Filter - hasText', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');

    const elemental = page.locator('a').filter({ hasText: 'Elemental Selenium' });

    await elemental.scrollIntoViewIfNeeded();
    await elemental.click();

    await page.waitForTimeout(2000);
});

test('Locate element - Multiple matching', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');

    // use elementHandles() to get all elements
    const elems = await page.locator('a').elementHandles(); // same as page.$$('a')

    await elems[10].click();
    await page.waitForLoadState('domcontentloaded');

    // use .all() to get all elements

    await page.waitForTimeout(2000);
});

test('Handle login form', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    const username = page.locator('input[name="username"]');
    const password = page.locator('input[name="password"]');
    const submit = page.locator('button[type="submit"]');

    await username.fill('tomsmith');
    await password.fill('SuperSecretPassword!');
    await submit.click();

    await page.waitForTimeout(2000);
});

test('Get textContent, innerText', async ({ page }) => {
    // <h3>Elemental Selenium <span>abc</span></h3>
    // h3.textContent = 'Elemental Selenium abc'
    // h3.innerText = 'Elemental Selenium'
});