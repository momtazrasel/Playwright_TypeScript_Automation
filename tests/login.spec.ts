import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit('https://example.com/login');
    await loginPage.login('testuser', 'password123');
    expect(await page.url()).toContain('/dashboard');
  });
});
