import { Locator } from "@playwright/test";
import { componentSelector } from "@core/models";
import { ComputerEssentialComp } from "./computer.essential.comp";

@componentSelector(".product-essential")
export class CheapComputerComp extends ComputerEssentialComp {

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };

    selectProcessorType = async (type: string): Promise<void> => await this.selectCompOption(type);

    selectRAMType = async (type: string): Promise<void> => await this.selectCompOption(type);
}