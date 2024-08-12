import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";
import { FooterGenericComp } from "./child.comp/footer.generic.comp";

type FooterCompConstructor<T extends FooterGenericComp> = new (compLct: Locator) => T;

export class FooterComponent2 extends BasePage {

    public static compSlt = '.footer';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    async footerColumnComp2<T extends FooterGenericComp>(
        footerColumnComp: FooterCompConstructor<T>
    ): Promise<T> {
        return new footerColumnComp(await this.findLocator((footerColumnComp as any).compSlt));
    };
}