import { BaseComponent } from "@modules/base.components/base.component";
import {Locator, Page} from "@playwright/test";
import { InfoColumnComp } from "./info.column/info.column.comp";
import { FollowUsColumnComp } from "./follow.us.column/follow.us.column.comp";
import { CustomerServiceColumnComp } from "./customer.service.column/customer.service.comp";
import { MyAccountColumnComp } from "./my.account.column/my.account.column.comp";

export class FooterComponent extends BaseComponent{

    public static compSlt = '.footer';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    infoColumnComp = (): InfoColumnComp => new InfoColumnComp(this.findLctBySlt(InfoColumnComp.compSlt));
    followUsColumnComp = (): FollowUsColumnComp => new FollowUsColumnComp(this.findLctBySlt(FollowUsColumnComp.compSlt));
    customerServiceColumnComp = (): CustomerServiceColumnComp => new CustomerServiceColumnComp(this.findLctBySlt(CustomerServiceColumnComp.compSlt));
    myAccountColumnComp = (): MyAccountColumnComp => new MyAccountColumnComp(this.findLctBySlt(MyAccountColumnComp.compSlt));
}