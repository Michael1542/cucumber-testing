import { Given, When, Then, Before, BeforeAll, BeforeStep, After, AfterAll, AfterStep } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext} from '@playwright/test';


let browser: Browser;
let page: Page;
let context:BrowserContext;

export const pageFixture = {
    page:undefined as unknown as Page
}