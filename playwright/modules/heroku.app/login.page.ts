import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "@core/models/base.component";

export default class LoginPage extends BaseComponent {

    constructor(page: Page) {
        super(page);
    };

    usernameLct = (): Locator => this.findLctBySlt('#username');
    passwordLct = (): Locator => this.findLctBySlt('#password');
    loginButtonLct = (): Locator => this.findLctBySlt('button[type="submit"]');

    inputUsername = async (username: string) => await this.fill(this.usernameLct(), username);
    inputPassword = async (password: string) => await this.fill(this.passwordLct(), password);
    clickLoginButton = async () => await this.click(this.loginButtonLct());
}