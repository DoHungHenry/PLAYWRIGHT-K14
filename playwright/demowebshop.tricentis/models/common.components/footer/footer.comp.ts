import { Locator, Page } from "@playwright/test";
import { InfoColumnComponent } from "./child.column/info.column.comp";
import { FollowUsColumnComponent } from "./child.column/follow.us.column.comp";
import { CustomerServiceColumnComponent } from "./child.column/customer.service.comp";
import { MyAccountColumnComponent } from "./child.column/my.account.column.comp";
import { BasePage } from "@demowebshop.tricentis/core/models/base.page";
import { appendComponentSelector } from "@demowebshop.tricentis/core/models/base.decorator";

export interface IFooterColumnComponent {
    titleLct: () => Promise<Locator>;
    linkLcts: () => Promise<Locator[]>;
}

@appendComponentSelector('footer')
export class FooterComponent extends BasePage {

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    infoColumnComponent = async (): Promise<InfoColumnComponent> => new InfoColumnComponent(await this.findLocator(InfoColumnComponent.componentSelector));
    followUsColumnComponent = async (): Promise<FollowUsColumnComponent> => new FollowUsColumnComponent(await this.findLocator(FollowUsColumnComponent.componentSelector));
    customerServiceColumnComponent = async (): Promise<CustomerServiceColumnComponent> => new CustomerServiceColumnComponent(await this.findLocator(CustomerServiceColumnComponent.componentSelector));
    myAccountColumnComponent = async (): Promise<MyAccountColumnComponent> => new MyAccountColumnComponent(await this.findLocator(MyAccountColumnComponent.componentSelector));
}