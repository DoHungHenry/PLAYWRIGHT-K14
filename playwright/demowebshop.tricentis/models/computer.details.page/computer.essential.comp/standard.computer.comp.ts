import { Locator } from "@playwright/test";
import { compSlt } from "@core/models";
import { ComputerEssentialComp } from "./computer.essential.comp";

@compSlt(".product-essential")
export class StandardComputerComp extends ComputerEssentialComp {

    constructor(compLct: Locator) {
        super(compLct);
    };

    selectProcessorType = async (type: string): Promise<void> => {
        const compSlt = (this.constructor as any).compSlt;
        console.log(compSlt);
        
        const optionLcts = await this.findLocators(
            'label:text-is("Processor"):parent + div option', 
            {hasParent: compSlt}
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