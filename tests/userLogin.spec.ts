import { test, Page } from '@playwright/test';
import UserLogin from '../page_objects/userLogin.po';

test.describe.only('TS_02 - Login Test Suite', () => {

  let page: Page;
  let loginObj: UserLogin;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test('Test Case 1 - Admin Login With Password', async ({ }, testInfo) => {
    const testCaseIds = ['TC_01'];
    loginObj = new UserLogin(page, testCaseIds);

    try {
      await loginObj.valid_login();
    } catch (error) {
      // Capture screenshot only on failure
      const screenshotBuffer = await page.screenshot({ fullPage: true });
      testInfo.attach('Failed Test Screenshot', {
        body: screenshotBuffer,
        contentType: 'image/png',
      });
      throw error;
    }
  });

  test('Test Case 2 - DMA Login With Password', async ({ }, testInfo) => {
    const testCaseIds = ['TC_02'];
    loginObj = new UserLogin(page, testCaseIds);

    try {
      await loginObj.valid_login();
    } catch (error) {
      // Capture screenshot only on failure
      const screenshotBuffer = await page.screenshot({ fullPage: true });
      testInfo.attach('Failed Test Screenshot', {
        body: screenshotBuffer,
        contentType: 'image/png',
      });
      throw error;
    }
  });

  test('Test Case 3 - DMA Login With OTP', async ({ }, testInfo) => {
    const testCaseIds = ['TC_03'];
    loginObj = new UserLogin(page, testCaseIds);

    try {
      await loginObj.valid_login();
    } catch (error) {
      // Capture screenshot only on failure
      const screenshotBuffer = await page.screenshot({ fullPage: true });
      testInfo.attach('Failed Test Screenshot', {
        body: screenshotBuffer,
        contentType: 'image/png',
      });
      throw error;
    }
  });

  test('Test Case 4 - Retailer Login With Password', async ({ }, testInfo) => {
    const testCaseIds = ['TC_04'];
    loginObj = new UserLogin(page, testCaseIds);

    try {
      await loginObj.valid_login();
    } catch (error) {
      // Capture screenshot only on failure
      const screenshotBuffer = await page.screenshot({ fullPage: true });
      testInfo.attach('Failed Test Screenshot', {
        body: screenshotBuffer,
        contentType: 'image/png',
      });
      throw error;
    }
  });

  test('Test Case 5 - Retailer Login With OTP', async ({ }, testInfo) => {
    const testCaseIds = ['TC_05'];
    loginObj = new UserLogin(page, testCaseIds);

    try {
      await loginObj.valid_login();
    } catch (error) {
      // Capture screenshot only on failure
      const screenshotBuffer = await page.screenshot({ fullPage: true });
      testInfo.attach('Failed Test Screenshot', {
        body: screenshotBuffer,
        contentType: 'image/png',
      });
      throw error;
    }
  });

  test('Test Case 6 - API User Login With Password', async ({ }, testInfo) => {
    const testCaseIds = ['TC_06'];
    loginObj = new UserLogin(page, testCaseIds);

    try {
      await loginObj.valid_login();
    } catch (error) {
      // Capture screenshot only on failure
      const screenshotBuffer = await page.screenshot({ fullPage: true });
      testInfo.attach('Failed Test Screenshot', {
        body: screenshotBuffer,
        contentType: 'image/png',
      });
      throw error;
    }
  });

  test('Test Case 7 - API User Login With OTP', async ({ }, testInfo) => {
    const testCaseIds = ['TC_07'];
    loginObj = new UserLogin(page, testCaseIds);

    try {
      await loginObj.valid_login();
    } catch (error) {
      // Capture screenshot only on failure
      const screenshotBuffer = await page.screenshot({ fullPage: true });
      testInfo.attach('Failed Test Screenshot', {
        body: screenshotBuffer,
        contentType: 'image/png',
      });
      throw error;
    }
  });

  test.afterEach(async () => {
    await page.close();
  });

});