import { Locator, Page } from "@playwright/test";
import { LinkComp } from "./link/link.comp";
import { LogoComp } from "./logo/logo.comp";
import { SearchComp } from "./search/search.comp";
import { BaseComponent } from "@modules/base.components/base.component";

export class HeaderComp extends BaseComponent {

    public static compSlt = '.header';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    linkComponent = (): LinkComp => new LinkComp(this.findLctBySlt(LinkComp.compSlt));

    logoComponent = (): LogoComp => new LogoComp(this.findLctBySlt(LogoComp.compSlt));

    searchComponent = (): SearchComp => new SearchComp(this.findLctBySlt(SearchComp.compSlt));
}