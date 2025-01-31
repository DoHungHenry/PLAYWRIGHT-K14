import { Locator, Page } from "@playwright/test";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";

export class LogoComponent extends BasePage {

    public static componentSelector = '.header-logo';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    logoLct = async (): Promise<Locator> => await this.findLocator('img[alt="Tricentis Demo Web Shop"]', { parentLocator: this.componentLocator });
}