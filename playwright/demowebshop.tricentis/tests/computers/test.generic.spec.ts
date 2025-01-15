
import {
    CheapComputerComponent,
    ComputerDetailsPage,
    ComputerEssentialComponent,
    StandardComputerComponent
} from 'models/demowebshop.tricentis';
import { Page, test } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});


test('Generic Component', async () => {
    const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(page);
    const cheapComputerComponent: ComputerEssentialComponent = computerDetailsPage.computerComponent(CheapComponentuterComponent);
    const standardComputerComponent: ComputerEssentialComponent = computerDetailsPage.computerComponent(StandardComputerComponent);

    await cheapComputerComponent.selectProcessorType("123acv");
    // await cheapComputerComponent.selectRAMType('16GB');

    await standardComputerComponent.selectProcessorType("456234asdas");
    // await standardComputerComponent.selectRAMType('32GB');
});