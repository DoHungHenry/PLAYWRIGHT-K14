import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";
import { InfoColumnComp } from "./child.column/info.column.comp";
import { FollowUsColumnComp } from "./child.column/follow.us.column.comp";
import { CustomerServiceColumnComp } from "./child.column/customer.service.comp";
import { MyAccountColumnComp } from "./child.column/my.account.column.comp";

export class FooterComponent extends BasePage {

    public static compSlt = '.footer';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    infoColumnComp = async (): Promise<InfoColumnComp> => new InfoColumnComp(await this.findLocator(InfoColumnComp.compSlt));
    followUsColumnComp = async (): Promise<FollowUsColumnComp> => new FollowUsColumnComp(await this.findLocator(FollowUsColumnComp.compSlt));
    customerServiceColumnComp = async (): Promise<CustomerServiceColumnComp> => new CustomerServiceColumnComp(await this.findLocator(CustomerServiceColumnComp.compSlt));
    myAccountColumnComp = async (): Promise<MyAccountColumnComp> => new MyAccountColumnComp(await this.findLocator(MyAccountColumnComp.compSlt));
}