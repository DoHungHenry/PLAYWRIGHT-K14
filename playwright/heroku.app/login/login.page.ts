import { BasePage, LocatorRole } from "demowebshop.tricentis/core/models/base.page";
import { Locator, Page } from "playwright";

export class LoginPage extends BasePage{

    static componentSelector = 'form[name="login"]';
    
    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    usernameLocator = (): Promise<Locator> => this.findLocator('Username', { parentLocator: this.componentLocator, role: LocatorRole.labelInput });
    passwordLocator = (): Promise<Locator> => this.findLocator('Password', { parentLocator: this.componentLocator, role: LocatorRole.labelInput });
    loginButtonLocator = (): Promise<Locator> => this.findLocator('button', { parentLocator: this.componentLocator, hasText: 'Login' });
}