import { Locator, Page } from "@playwright/test";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";

export class SearchComponent extends BasePage {

    public static componentSelector = '.search-box';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    searchBoxLct = async (): Promise<Locator> => await this.findLocator('input[type="search"]', { parentLocator: this.componentLocator });
    searchBtnLct = async (): Promise<Locator> => await this.findLocator('input[type="submit"]', { parentLocator: this.componentLocator });
}