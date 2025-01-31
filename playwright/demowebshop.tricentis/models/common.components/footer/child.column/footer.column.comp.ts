import { Locator, Page } from "@playwright/test";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";

export class FooterColumnComponent extends BasePage {

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    }

    titleLct = () => this.findLocator('.h3', { parentLocator: this.componentLocator });

    linkLcts = () => this.findLocators('li a', { parentLocator: this.componentLocator });
}