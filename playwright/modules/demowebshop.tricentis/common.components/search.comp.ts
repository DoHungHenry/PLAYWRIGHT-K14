import { BaseComponent } from "@modules/base.components/base.component";
import {Locator, Page} from "@playwright/test";

export class SearchComponent extends BaseComponent{

    public static selector = '.search-box';

    private searchBoxLoc = 'input[id="small-searchterms"]';
    private searchBtnLoc = 'input[class*="search-box-button"]';

    constructor(private component: Locator) {
        super(component.page());
        this.component = component;
    }

    searchBox(): Locator {
        return this.component.locator(this.searchBoxLoc);
    }

    searchBtn(): Locator {
        return this.component.locator(this.searchBtnLoc);
    }

    searchBoxLct = (): Locator => this.component.locator(this.searchBoxLoc);
    searchBtnLct = (): Locator => this.component.locator(this.searchBtnLoc);

    inputSearch = async (searchText: string) => await this.fill(this.searchBoxLct(), searchText);
}