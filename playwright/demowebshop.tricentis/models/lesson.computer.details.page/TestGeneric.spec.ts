import { test } from '@playwright/test';
import { ComputerDetailsPage } from './ComputerDetailsPage';
import { ComputerEssentialComponent } from './ComputerEssentialComponent';
import { CheapComputerComponent } from './CheapComputerComponent';
import { StandardComputerComponent } from './StandardComputerComponent';

test('Test Generic Component in Page', async ({ page }) => {
    const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(page);
    const cheapComputerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(CheapComputerComponent);
    const standardComputerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(StandardComputerComponent);

    await cheapComputerComp.selectProcessorType("dadfdasf");
    await standardComputerComp.selectProcessorType("dadfdasf");
})