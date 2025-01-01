import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/models";
import { ComputerEssentialComp } from "./computer.essential.comp";

/* 
- To make sure computerComp() method get parameter which is ComputerEssentialComp type (not instance of ComputerEssentialComp), 
we don't need do this using java, but with ts, we need to define type for the parameter of computerComp method
=> khi computerComp() nhận Teo param (Teo có type là is a ComputerEssentialComp): <Teo extends ComputerEssentialComp>
thì đem constructor của Teo ra ngoài để init 1 cái object của Teo: [new(componentLocator: Locator)] 
sau đó trả về Teo type (chứ không phải là instance của Teo): [=> Teo;]
*/
export type ComputerCompConstructor<Teo extends ComputerEssentialComp> = new(componentLocator: Locator) => Teo;

export class ComputerDetailsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    };

    /* 
    - Boundary Generic type: <Teo extends ComputerEssentialComp>
    - Purpose of this computerComp method is to get componentSelector value from Teo class (Teo is a ComputerEssentialComp)
    that is a ComputerEssentialComp type (only concrete class of ComputerEssentialComp because ComputerEssentialComp is abstract class)
    */
    computerComp<Teo extends ComputerEssentialComp>(
        computerCompClass: ComputerCompConstructor<Teo>
    ): Teo {
        console.log((computerCompClass as any).selectorValue);
        return new computerCompClass(this.page.locator((computerCompClass as any).selectorValue));
    };
}