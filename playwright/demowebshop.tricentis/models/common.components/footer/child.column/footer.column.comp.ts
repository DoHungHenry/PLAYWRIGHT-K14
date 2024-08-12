import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export abstract class FooterColumnComp extends BasePage {

    protected constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
        this.compLct.scrollIntoViewIfNeeded();
    };

    titleLct = () => this.findLocator(this.compLct, '.h3');

    linkLcts = () => this.findLocators(this.compLct, 'li a');
}