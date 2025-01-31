import { Locator, Page } from "@playwright/test";
import { LinkComponent } from "./link.comp";
import { LogoComponent } from "./logo.comp";
import { SearchComponent } from "./search.comp";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";

export class HeaderComponent extends BasePage {

    public static componentSelector = '.header';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    linkComponent = async (): Promise<LinkComponent> => await this.findComponent(LinkComponent, { parentLocator: this.componentLocator });

    logoComponent = async (): Promise<LogoComponent> => await this.findComponent(LogoComponent, { parentLocator: this.componentLocator });

    searchComponent = async (): Promise<SearchComponent> => await this.findComponent(SearchComponent, { parentLocator: this.componentLocator });
}