import { BasePage } from "@core/models";
import { Page } from "@playwright/test";
import { FooterComponent, HeaderComp, ProductItemComp } from "../common.components";
import { FooterComponent2 } from "../common.components/footer.generic";


export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    headerComp = (): HeaderComp => new HeaderComp(this.findLocator(HeaderComp.compSlt));

    async ProductItemCompList(): Promise<ProductItemComp[]> {
        const productItemComponents = await this.findLctsBySlt(ProductItemComp.compSlt);
        return productItemComponents.map(compLct => new ProductItemComp(compLct));
    };

    footerComp = (): FooterComponent => new FooterComponent(this.findLocator(FooterComponent.compSlt));

    footerGenericComp = (): FooterComponent2 => new FooterComponent2(this.findLocator(FooterComponent2.compSlt));
}