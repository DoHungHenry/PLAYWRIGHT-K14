import { Page, test } from '@playwright/test';
import { CheapComputerComponent } from 'demowebshop.tricentis/models/computer.details.page/computer.essential.comp/cheap.computer.comp';
import { OrderComputerFlow } from 'demowebshop.tricentis/models/computer.details.page/computer.flows';

let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});

test('Test Cheap ComputerComponent', async () => {
    await page.goto('https://demowebshop.tricentis.com/build-your-cheap-own-computer');
    const computerFlow: OrderComputerFlow = new OrderComputerFlow(page, CheapComputerComponent);
    await computerFlow.buildComputerAndAddToCart();
})