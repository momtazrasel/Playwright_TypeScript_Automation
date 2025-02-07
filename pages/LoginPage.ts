import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import * as data from '../configs/env.json'

export class LoginPage extends BasePage {
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = '#login';

  constructor(page: Page) {
    super(page);
  }

  async login() {
    await this.page.fill(this.usernameInput, data.username);
    await this.page.fill(this.passwordInput, data.password);
    await this.page.click(this.loginButton);
  }
}
