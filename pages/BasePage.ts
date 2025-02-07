import { Page, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit(url: string) {
    await this.page.goto(url);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }
}
