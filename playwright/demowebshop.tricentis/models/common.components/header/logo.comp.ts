import { BasePage } from "@demowebshop.tricentis/core/models";
import { Locator, Page } from "@playwright/test";

export class LogoComponent extends BasePage {

    public static componentSelector = '.header-logo';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };
}