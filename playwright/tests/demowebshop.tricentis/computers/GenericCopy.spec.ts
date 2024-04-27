import CheapComputerComponent from '@modules/demowebshop.tricentis/computer.details.page.lesson/CheapComputerComponent';
import ComputerDetailsPage from '@modules/demowebshop.tricentis/computer.details.page.lesson/ComputerDetailsPage';
import ComputerEssentialComponent from '@modules/demowebshop.tricentis/computer.details.page.lesson/ComputerEssentialComponent';
import StandardComputerComponent from '@modules/demowebshop.tricentis/computer.details.page.lesson/StandardComputerComponent';
import { test } from '@playwright/test';

test('Test Generic Component in Page', async ({ page }) => {
    const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(page);
    const cheapComputerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(CheapComputerComponent);
    const standardComputerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(StandardComputerComponent);

    await cheapComputerComp.selectProcessorType("dadfdasf");
    await standardComputerComp.selectProcessorType("dadfdasf");
})