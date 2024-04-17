import { Page } from '@playwright/test';
import { BaseComponent } from '../base.components/base.component';

export class BasePage extends BaseComponent {
    constructor(page: Page) {
        super(page);
    };
}