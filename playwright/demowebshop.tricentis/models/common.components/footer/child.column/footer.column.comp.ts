import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export abstract class FooterColumnComp extends BasePage {

    protected constructor(private componentLocator: Locator) {
        super(componentLocator.page());
        this.componentLocator = componentLocator;
        this.componentLocator.scrollIntoViewIfNeeded();
    };

    titleLct = () => this.findLocator(this.componentLocator, '.h3');

    linkLcts = () => this.findLocators(this.componentLocator, 'li a');
}