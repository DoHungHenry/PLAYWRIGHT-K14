import { BasePage } from "@demowebshop.tricentis/core/models";
import { Locator, Page } from "@playwright/test";

export class LinkComponent extends BasePage {

    public static componentSelector = '.header-links-wrapper';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    linkLcts = async (): Promise<Locator[]> => await this.findLocators(this.componentLocator);
};