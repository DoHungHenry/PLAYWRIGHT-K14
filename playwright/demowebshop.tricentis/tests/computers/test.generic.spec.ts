
import {
    CheapComputerComp,
    ComputerDetailsPage,
    ComputerEssentialComp,
    StandardComputerComp
} from 'models/demowebshop.tricentis';
import { Page, test } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});


test('Generic Component', async () => {
    const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(page);
    const cheapComputerComp: ComputerEssentialComp = computerDetailsPage.computerComp(CheapComputerComp);
    const standardComputerComp: ComputerEssentialComp = computerDetailsPage.computerComp(StandardComputerComp);

    await cheapComputerComp.selectProcessorType("123acv");
    // await cheapComputerComp.selectRAMType('16GB');

    await standardComputerComp.selectProcessorType("456234asdas");
    // await standardComputerComp.selectRAMType('32GB');
});