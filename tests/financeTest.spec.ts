import { test } from '../tests/hooks';
import { FinancePage } from '../pages/FinancePage';

test.describe('Finance Module Tests', () => {
  test('Verify Finance Module is Accessible', async ({ page }) => {
    const financePage = new FinancePage(page);
    await financePage.navigateToFinanceModule();
    await financePage.verifyFinanceModuleIsDisplayed();
  });

  test('Verify Transactions Tab in Finance Module', async ({ page }) => {
    const financePage = new FinancePage(page);
    await financePage.navigateToFinanceModule();
    await financePage.verifyTransactionsTab();
  });
});