import { Locator, Page } from "@playwright/test";
import { LinkComponent } from "./link.comp";
import { LogoComponent } from "./logo.comp";
import { SearchComponent } from "./search.comp";
import { BasePage } from "@demowebshop.tricentis/core/models/base.page";

export class HeaderComponent extends BasePage {

    public static componentSelector = '.header';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    linkComponent = async (): Promise<LinkComponent> => new LinkComponent(await this.findLocator(LinkComponent.componentSelector));

    logoComponent = async (): Promise<LogoComponent> => new LogoComponent(await this.findLocator(LogoComponent.componentSelector));

    searchComponent = async (): Promise<SearchComponent> => new SearchComponent(await this.findLocator(SearchComponent.componentSelector));
}