import { Page } from "@playwright/test";
import { ProductItemComp } from "../common.components/product.item.card/product.item.comp";
import { HeaderComp } from "../common.components/header/header.comp";
import { BasePage } from "@core/models/base.page";
import { FooterComponent } from "../common.components/footer/footer.comp";

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