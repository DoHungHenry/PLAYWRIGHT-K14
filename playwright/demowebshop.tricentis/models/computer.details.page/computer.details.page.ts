import { Locator, Page } from "@playwright/test";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";
import { ComputerEssentialComponent } from "./computer.essential.comp/computer.essential.comp";

/* 
- To make sure computerComponent() method get parameter which is ComputerEssentialComponent type (not instance of ComputerEssentialComponent), 
we don't need do this using java, but with ts, we need to define type for the parameter of computerComponent method
=> khi computerComponent() nhận Teo param (Teo có type là is a ComponentuterEssentialComponent): <Teo extends ComponentuterEssentialComponent>
thì đem constructor của Teo ra ngoài để init 1 cái object của Teo: [new(componentLocator: Locator)] 
sau đó trả về Teo type (chứ không phải là instance của Teo): [=> Teo;]
*/
export type ComputerComponentConstructor<Teo extends ComputerEssentialComponent> = new (componentLocator: Locator) => Teo;

export class ComputerDetailsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    /* 
    - Boundary Generic type: <Teo extends ComputerEssentialComponent>
    - Purpose of this computerComponent method is to get componentSelector value from Teo class (Teo is a ComputerEssentialComponent)
    that is a ComputerEssentialComponent type (only concrete class of ComputerEssentialComponent because ComputerEssentialComponent is abstract class)
    */
    computerComponent<Teo extends ComputerEssentialComponent>(
        computerComponentClass: ComputerComponentConstructor<Teo>
    ): Teo {
        console.log((computerComponentClass as any).selectorValue);
        return new computerComponentClass(this.page.locator((computerComponentClass as any).selectorValue));
    };
}