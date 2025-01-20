// import { Locator } from "@playwright/test";
// import { ComputerEssentialComponent } from "./computer.essential.comp";
// import { appendComponentSelector } from "@demowebshop.tricentis/core/models";

// @appendComponentSelector(".product-essential")
// export class StandardComputerComponent extends ComputerEssentialComponent {

//     constructor(componentLocator: Locator) {
//         super(componentLocator);
//     };

//     selectProcessorType = async (type: string): Promise<void> => {
//         const componentSelector = (this.constructor as any).componentSelector;
//         console.log(componentSelector);

//         const optionLcts = await this.findLocators(
//             'label:text-is("Processor"):parent + div option',
//             { hasParent: componentSelector }
//         );
//         const optionLct = optionLcts.find(async (lct) => (await lct.textContent()).includes(type));
//         await this.click(optionLct);
//     };

//     selectRAMType = async (type: string): Promise<void> => {
//         const optionLcts = await this.findLocators('label:text-is("RAM"):parent + div option')
//         const optionLct = optionLcts.find(async (lct) => (await lct.textContent()).includes(type));
//         await this.click(optionLct);
//     };
// }