import {test} from '@playwright/test';
import OrderComputerFlow from './OrderComputerFlows';
import { CheapComputerComponent } from './CheapComputerComponent';

test('Test Cheap ComputerComponent', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/build-your-cheap-own-computer');
    const computerFlow: OrderComputerFlow = new OrderComputerFlow(page, CheapComputerComponent);
    await computerFlow.buildCompSpecAndAddToCart();
})