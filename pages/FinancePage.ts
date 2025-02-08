import { BasePage } from './BasePage';

export class FinancePage extends BasePage {
  private moduleDropdown = "(//a[@class='ant-dropdown-trigger ant-dropdown-link'])[1]";
  private financeModule = "(//a[normalize-space()='Finance & Accounts'])[1]";
  
  async navigateToFinanceModule() {
    await this.clickElement(this.moduleDropdown);
  }

  async verifyFinanceModuleIsDisplayed() {
    await this.isElementVisible(this.financeModule);
  }

  async verifyTransactionsTab() {
    await this.clickElement(this.financeModule);
    await this.isElementVisible(this.financeModule);
  }
}
