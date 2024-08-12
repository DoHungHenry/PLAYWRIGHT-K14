import { BasePage } from "@core/models";
import { Locator, Page } from "@playwright/test";

export default class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    usernameLct = (): Locator => this.findLocator('#username');
    passwordLct = (): Locator => this.findLocator('#password');
    loginButtonLct = (): Locator => this.findLocator('button[type="submit"]');

    inputUsername = async (username: string) => await this.fill(this.usernameLct(), username);
    inputPassword = async (password: string) => await this.fill(this.passwordLct(), password);
    clickLoginButton = async () => await this.click(this.loginButtonLct());
}