import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";
import { LinkComp } from "./link.comp";
import { LogoComp } from "./logo.comp";
import { SearchComp } from "./search.comp";

export class HeaderComp extends BasePage {

    public static componentSelector = '.header';

    constructor(private componentLocator: Locator) {
        super(componentLocator.page());
        this.componentLocator = componentLocator;
    };

    linkComponent = async (): Promise<LinkComp>  => new LinkComp(await this.findLocator(LinkComp.componentSelector));

    logoComponent = async (): Promise<LogoComp> => new LogoComp(await this.findLocator(LogoComp.componentSelector));

    searchComponent = async (): Promise<SearchComp> => new SearchComp(await this.findLocator(SearchComp.componentSelector));
}