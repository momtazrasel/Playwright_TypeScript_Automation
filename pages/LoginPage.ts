import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import * as data from '../configs/env.json';

export class LoginPage extends BasePage {
  private usernameInput = "(//input[@id='email'])[1]";
  private passwordInput = '#password';
  private loginButton = "(//button[@type='submit'])[1]";
  private logo = "(//a[@class='brand'])[1]"; // Ensure this is the correct element to check for errors

  constructor(page: Page) {
    super(page);
  }

  async login() {
    await this.page.fill(this.usernameInput, data.username);
    await this.page.fill(this.passwordInput, data.password);
    await this.page.click(this.loginButton);
    
    // Wrap errorMessage with page.locator
    const errorLocator = this.page.locator(this.logo);

    // Check for text in the error message locator
    await expect(errorLocator).toBeVisible(); // Or the actual expected text
  }

  async verifyLoginSuccess() {
    await this.isElementVisible(this.logo); // Adjust according to your application
  }

  // async verifyInvalidLogin() {
  //   await this.isElementVisible(this.logo);
  // }

}
