import { Locator } from "@playwright/test";
import { compSlt } from "@core/models";
import { ComputerEssentialComp } from "./computer.essential.comp";

@compSlt(".product-essential")
export class CheapComputerComp extends ComputerEssentialComp {

    constructor(compLct: Locator) {
        super(compLct);
    };

    selectProcessorType = async (type: string): Promise<void> => await this.selectCompOption(type);

    selectRAMType = async (type: string): Promise<void> => await this.selectCompOption(type);
}