import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export class SearchComp extends BasePage {

    public static compSlt = '.search-box';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };
    searchBoxLct = (): Locator => this.compLct.locator('input[type="search"]');
    searchBtnLct = (): Locator => this.compLct.locator('input[type="submit"]');

    searchProduct = async (productName: string) => {
        await this.clickClearFill(this.searchBoxLct(), productName);
    };
}