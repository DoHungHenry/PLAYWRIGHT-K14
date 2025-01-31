import { Locator, Page } from "@playwright/test";
import { FooterComponent } from "../common.components/footer/footer.comp";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";
import { HeaderComponent } from "../common.components/header/header.comp";
import { ProductItemComponent } from "../common.components/product.item.card/product.item.comp";


export class HomePage extends BasePage {

    public static componentSelector = '.home-page';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    headerComponent = async (): Promise<HeaderComponent> => await this.findComponent(HeaderComponent, { parentLocator: this.componentLocator });

    productItemComponent = async (): Promise<ProductItemComponent[]> => await this.findComponents(ProductItemComponent, { parentLocator: this.componentLocator });

    footerComponent = async (): Promise<FooterComponent> => await this.findComponent(FooterComponent, { parentLocator: this.componentLocator });
}