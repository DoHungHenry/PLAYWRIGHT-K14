import { Locator } from "@playwright/test";
import { LinkComp } from "./link.comp";
import { LogoComp } from "./logo.comp";
import { SearchComp } from "./search.comp";
import { BaseComponent } from "@core/models";

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