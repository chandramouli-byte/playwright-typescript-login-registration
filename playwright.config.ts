import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'], // console output
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    screenshot: 'only-on-failure', // optional
    trace: 'on-first-retry',       // optional
  },
});