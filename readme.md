# Playwright CSV-Driven Test Framework with Allure Reports

This project is a Playwright-based automation framework that supports:

- CSV-driven test cases
- Environment configuration via `.env`
- Native Playwright methods (no custom utility)
- Allure reporting for test results
- Multi-browser support with screenshots, videos, and traces

---

## 1. Project Structure
project/
├── tests/ # Test specs
│ └── login.spec.ts
├── pages/ # Page object models
│ └── login.ts
├── utils/ # Utilities
│ └── csvparse.ts
├── files/ # CSV test data
│ └── login_page.csv
├── .env # Environment variables
├── playwright.config.ts # Playwright configuration
├── package.json
└── README.md

----------------------------------------------------------------

## 2. Install Dependencies

1. Initialize npm in the project root:

npm init -y

2. Install Playwright and supporting packages:

npm install -D @playwright/test allure-playwright csv-parser dotenv

3. Install Playwright browsers:

npx playwright install
npm playwright install@latest

4. Install Allure CLI globally (for generating reports):

npm install -D allure-playwright
npm install -g allure-commandline
allure --version

----------------------------------------------------------------

# Playwright TypeScript Login & Registration Automation

A UI test automation project built using Playwright and TypeScript to validate Login and Registration workflows.

## Key Features

- **Page Object Model (POM):** Separates page locators and actions from test logic.
- **Reusable Fixtures:** Provides shared test setup and reusable page objects.
- **CSV-Based Data-Driven Testing:** Executes test scenarios using external CSV test data.
- **Test Data Management:** Keeps test inputs organized and reusable.
- **Assertions:** Validates expected application behavior and test outcomes.
- **Failure Screenshots:** Captures screenshots automatically when tests fail.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- CSV-based test data

## Project Scope

This project demonstrates maintainable UI automation practices through Login and Registration scenarios, reusable framework components, and data-driven test execution.