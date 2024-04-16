import { Page } from '@playwright/test';
import { BaseComponent } from '../base.components/base.component';
import LoginPage from '../heroku.app/login.page';

export class BasePage extends BaseComponent {
    constructor(page: Page) {
        super(page);
    };
}