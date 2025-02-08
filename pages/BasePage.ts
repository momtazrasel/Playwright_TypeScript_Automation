import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit(url: string) {
    await this.page.goto(url);
  }

  async isElementVisible(locator: string) {
    const element = this.page.locator(locator);
    await expect(element).toBeVisible();
  }

  async clickElement(locator: string) {
    await this.page.locator(locator).click();
  }

  async enterText(locator: string, text: string) {
    await this.page.locator(locator).fill(text);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }
}
