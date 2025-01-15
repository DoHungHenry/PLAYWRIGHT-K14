import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export class SearchComponent extends BasePage {

    public static componentSelector = '.search-box';

    constructor(private componentLocator: Locator) {
        super(componentLocator.page());
        this.componentLocator = componentLocator;
    };
    searchBoxLct = (): Locator => this.componentLocator.locator('input[type="search"]');
    searchBtnLct = (): Locator => this.componentLocator.locator('input[type="submit"]');

    searchProduct = async (productName: string) => {
        await this.clickClearFill(this.searchBoxLct(), productName);
    };
}