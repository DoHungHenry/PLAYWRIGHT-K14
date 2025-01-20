import { BasePage } from "@demowebshop.tricentis/core/models";
import { Locator, Page } from "@playwright/test";

export class SearchComponent extends BasePage {

    public static componentSelector = '.search-box';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };
    
    searchBoxLct = (): Locator => this.componentLocator.locator('input[type="search"]');
    searchBtnLct = (): Locator => this.componentLocator.locator('input[type="submit"]');

    searchProduct = async (productName: string) => {
        await this.clickClearFill(this.searchBoxLct(), productName);
    };
}