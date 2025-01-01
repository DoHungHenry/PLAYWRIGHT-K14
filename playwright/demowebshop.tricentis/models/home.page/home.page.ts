import { BasePage } from "@core/models";
import { Page } from "@playwright/test";
import { FooterComponent, HeaderComp, ProductItemComp } from "../common.components";
import { FooterComponent2 } from "../common.components/footer.generic";


export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    headerComp = (): HeaderComp => new HeaderComp(this.findLocator(HeaderComp.componentSelector));

    async ProductItemCompList(): Promise<ProductItemComp[]> {
        const productItemComponents = await this.findLctsBySlt(ProductItemComp.componentSelector);
        return productItemComponents.map(componentLocator => new ProductItemComp(componentLocator));
    };

    footerComp = (): FooterComponent => new FooterComponent(this.findLocator(FooterComponent.componentSelector));

    footerGenericComp = (): FooterComponent2 => new FooterComponent2(this.findLocator(FooterComponent2.componentSelector));
}