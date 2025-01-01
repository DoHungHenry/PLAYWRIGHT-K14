import { Locator } from "@playwright/test";
import { componentSelector } from "@core/models";
import { ComputerEssentialComp } from "./computer.essential.comp";

@componentSelector(".product-essential")
export class StandardComputerComp extends ComputerEssentialComp {

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };

    selectProcessorType = async (type: string): Promise<void> => {
        const componentSelector = (this.constructor as any).componentSelector;
        console.log(componentSelector);
        
        const optionLcts = await this.findLocators(
            'label:text-is("Processor"):parent + div option', 
            {hasParent: componentSelector}
        );
        const optionLct = optionLcts.find(async (lct) => (await lct.textContent()).includes(type));
        await this.click(optionLct);
    };

    selectRAMType = async (type: string): Promise<void> => {
        const optionLcts = await this.findLocators('label:text-is("RAM"):parent + div option')
        const optionLct = optionLcts.find(async (lct) => (await lct.textContent()).includes(type));
        await this.click(optionLct);
    };
}