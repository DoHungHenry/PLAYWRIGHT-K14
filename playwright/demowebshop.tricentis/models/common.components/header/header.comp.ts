import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";
import { LinkComp } from "./link.comp";
import { LogoComp } from "./logo.comp";
import { SearchComp } from "./search.comp";

export class HeaderComp extends BasePage {

    public static compSlt = '.header';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    linkComponent = async (): Promise<LinkComp>  => new LinkComp(await this.findLocator(LinkComp.compSlt));

    logoComponent = async (): Promise<LogoComp> => new LogoComp(await this.findLocator(LogoComp.compSlt));

    searchComponent = async (): Promise<SearchComp> => new SearchComp(await this.findLocator(SearchComp.compSlt));
}