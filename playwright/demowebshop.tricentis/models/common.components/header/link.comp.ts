import { Locator, Page } from "@playwright/test";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";

export class LinkComponent extends BasePage {

    public static componentSelector = '.header-links-wrapper';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    linkLcts = async (): Promise<Locator[]> => await this.findLocators('li a', { parentLocator: this.componentLocator });
};