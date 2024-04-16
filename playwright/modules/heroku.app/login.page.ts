import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "modules/base.components/base.component";

export default class LoginPage extends BaseComponent {

    constructor(page: Page) {
        super(page);
    };

    usernameLct = (): Locator => this.findLct('#username');
    passwordLct = (): Locator => this.findLct('#password');
    loginButtonLct = (): Locator => this.findLct('button[type="submit"]');

    inputUsername = async (username: string) => await this.fill(this.usernameLct(), username);
    inputPassword = async (password: string) => await this.fill(this.passwordLct(), password);
    clickLoginButton = async () => await this.click(this.loginButtonLct());
}