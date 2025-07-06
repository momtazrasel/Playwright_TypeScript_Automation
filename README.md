# 🚀 Playwright TypeScript Automation Framework

This is an advanced automation framework built using **Playwright with TypeScript**, implementing the **Page Object Model (POM)** design pattern, login hook reusability, and modular test structure.

---

## Install dependencies
    npm install

## Install Playwright browsers
    npx playwright install --with-deps


## Running the Tests
    npx playwright test

## Run Specific file
    npx playwright test tests/login.spec.ts
    npx playwright test tests/financeTest.spec.ts

## Run tests with UI (headed mode)
    npx playwright test --headed


## HTML Report (Like Extent Report)
    npx playwright show-report


## GitHub Actions Integration

    .github/workflows/playwright.yml:
        name: Playwright Tests

        on:
            push:
                branches:
                    - main
            pull_request:
                branches:
                    - main

        jobs:
            test:
                runs-on: ubuntu-latest

                steps:
                    - name: Checkout Repository
                      uses: actions/checkout@v4

                    - name: Set Up Node.js
                      uses: actions/setup-node@v4
                      with:
                        node-version: 18

                    - name: Install Dependencies
                      run: npm ci

                    - name: Install Playwright Browsers
                      run: npx playwright install --with-deps

                    - name: Run Playwright Tests
                      run: npx playwright test

                    - name: Upload Playwright Report
                      if: always()
                      uses: actions/upload-artifact@v4
                      with:
                        name: playwright-report
                        path: playwright-report/
                        retention-days: 7
