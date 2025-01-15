import { Locator, Page } from "@playwright/test";
import { HeaderComponent, ProductItemComponent } from "../common.components";
import { BasePage } from "@demowebshop.tricentis/core/models/base.page";
import { FooterComponent } from "../common.components/footer/footer.comp";


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