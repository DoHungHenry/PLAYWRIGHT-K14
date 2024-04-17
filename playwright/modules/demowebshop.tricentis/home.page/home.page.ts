import { Page } from "@playwright/test";
import { BasePage } from "../../base.pages/base.page";
import { SearchComponent } from "../../demowebshop.tricentis/common.components/search.comp";
import { ProductItemComponent } from "../common.components/product.item.comp";

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    searchComponent = (): SearchComponent => new SearchComponent(this.findLctBySlt(SearchComponent.selector));

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemComponents = await this.findLctsBySlt(ProductItemComponent.selector);
        return productItemComponents.map(comp => new ProductItemComponent(this.page, comp));
    };
}