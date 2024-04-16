import { Page } from "@playwright/test";
import { BasePage } from "../../base.pages/base.page";
import { SearchComponent } from "../../demowebshop.tricentis/common.components/search.comp";

export default class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    searchComponent(): SearchComponent {
        return new SearchComponent(this.page.locator(SearchComponent.selector));
    }

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemComponents = await this.page.locator(ProductItemComponent.selector).all();
        return productItemComponents.map(comp => new ProductItemComponent(comp));
    }

}