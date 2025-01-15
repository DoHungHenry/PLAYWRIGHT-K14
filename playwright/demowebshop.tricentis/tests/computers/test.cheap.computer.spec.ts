import { CheapComputerComponent } from '@modules/demowebshop.tricentis/computer.details.page/computer.essential.comp';
import { OrderComputerFlow } from '@modules/demowebshop.tricentis/computer.details.page/computer.flows';
import { Page, test } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});

test('Test Cheap ComputerComponent', async () => {
    await page.goto('https://demowebshop.tricentis.com/build-your-cheap-own-computer');
    const computerFlow: OrderComputerFlow = new OrderComputerFlow(page, CheapComputerComponent);
    await computerFlow.buildComputerAndAddToCart();
})