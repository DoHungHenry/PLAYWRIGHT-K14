import { BaseComponent } from "@modules/base.components/base.component";
import {Locator, Page} from "@playwright/test";

export class SearchComponent extends BaseComponent{

    public static selector = '.search-box';

    constructor(private component: Locator) {
        super(component.page());
        this.component = component;
    };

    searchBoxLct = (): Locator => this.findLctByLct(this.component, 'input[id="small-searchterms"]');
    searchBtnLct = (): Locator => this.findLctByLct(this.component, 'input[class*="search-box-button"]');

    searchProduct = async (productName: string) => {
        await this.fill(this.searchBoxLct(), productName);
        await this.click(this.searchBtnLct());
    };
}