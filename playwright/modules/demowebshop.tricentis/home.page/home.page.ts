import { BasePage } from "@core/models";
import { Page } from "@playwright/test";
import { FooterComponent, HeaderComp, ProductItemComp } from "../common.components";


export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    headerComp = (): HeaderComp => new HeaderComp(this.findLctBySlt(HeaderComp.compSlt));

    async ProductItemCompList(): Promise<ProductItemComp[]> {
        const productItemComponents = await this.findLctsBySlt(ProductItemComp.compSlt);
        return productItemComponents.map(compLct => new ProductItemComp(compLct));
    };

    footerComp = (): FooterComponent => new FooterComponent(this.findLctBySlt(FooterComponent.compSlt));
}