import { BaseComponent } from "@core/models/base.component";
import { Locator } from "@playwright/test";
import { FooterGenericComp } from "./child.comp/footer.generic.comp";
import { InfoColumnComp2 } from "./child.comp/info.column.comp2";

type FooterCompConstructor<T extends FooterGenericComp> = new (compLct: Locator) => T;

export class FooterComponent2 extends BaseComponent {

    public static compSlt = '.footer';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    footerColumnComp2<T extends FooterGenericComp>(
        footerColumnComp: FooterCompConstructor<T>
    ): T {
        return new footerColumnComp(this.findLctBySlt(footerColumnComp.compSlt));
    };
}