import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const configs = require('../configs/env.json'); // ✅ Use require

// Custom test with beforeEach hook
export const test = base.extend({
  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit('./');
    await loginPage.login(); // ✅ Corrected variable name
    await use(page);
  },
});
