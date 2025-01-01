import test, { expect } from "@playwright/test";
import { LoginPage } from "./login.page";

test('Test Heroku Login', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    const loginPage = new LoginPage(page.locator(LoginPage.componentSelector));
    const usernameLocator = await loginPage.usernameLocator();
    const passwordLocator = await loginPage.passwordLocator();
    const loginButtonLocator = await loginPage.loginButtonLocator();
    await usernameLocator.fill('tomsmith');
    await passwordLocator.fill('SuperSecretPassword!');
    await loginButtonLocator.click();
    expect((await (page.locator('div[data-alert]')).textContent()).trim()).toContain('You logged into a secure area!');
    await page.waitForTimeout(2000);
})