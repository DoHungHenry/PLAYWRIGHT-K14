import {test} from '@playwright/test';
import { OrderComputerFlow } from './OrderComputerFlows';
import { StandardComputerComponent } from './StandardComputerComponent';

test('Test Standard ComputerComponent', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/build-your-own-computer');
    const computerFlow: OrderComputerFlow = new OrderComputerFlow(page, StandardComputerComponent);
    await computerFlow.buildCompSpecAndAddToCart();
})