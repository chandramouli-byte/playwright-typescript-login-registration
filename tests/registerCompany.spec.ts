import { test, Page } from '@playwright/test';
import Register from '../page_objects/registerCompany.po';

test.describe('TS_01 - Registration Test Suite', () => {

  let page: Page;
  let registerObj: Register;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test('Test case 1 - Register DMA with password', async ({ }, testInfo) => {
    const testCaseIds = ['TC_01'];
    registerObj = new Register(page, testCaseIds);

    try {
      await registerObj.register_company();
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

  // test('Test case 2 - Register DMA with OTP', async ({ }, testInfo) => {
  //   const testCaseIds = ['TC_02'];
  //   registerObj = new Register(page, testCaseIds);

  //   try {
  //     await registerObj.register_company();
  //   } catch (error) {
  //     // Capture screenshot only on failure
  //     const screenshotBuffer = await page.screenshot({ fullPage: true });
  //     testInfo.attach('Failed Test Screenshot', {
  //       body: screenshotBuffer,
  //       contentType: 'image/png',
  //     });
  //     throw error;
  //   }
  // });

  // test('Test case 3 - Register Retailer with password', async ({ }, testInfo) => {
  //   const testCaseIds = ['TC_03'];
  //   registerObj = new Register(page, testCaseIds);

  //   try {
  //     await registerObj.register_company();
  //   } catch (error) {
  //     // Capture screenshot only on failure
  //     const screenshotBuffer = await page.screenshot({ fullPage: true });
  //     testInfo.attach('Failed Test Screenshot', {
  //       body: screenshotBuffer,
  //       contentType: 'image/png',
  //     });
  //     throw error;
  //   }
  // });

  // test('Test case 4 - Register Retailer with OTP', async ({ }, testInfo) => {
  //   const testCaseIds = ['TC_04'];
  //   registerObj = new Register(page, testCaseIds);

  //   try {
  //     await registerObj.register_company();
  //   } catch (error) {
  //     // Capture screenshot only on failure
  //     const screenshotBuffer = await page.screenshot({ fullPage: true });
  //     testInfo.attach('Failed Test Screenshot', {
  //       body: screenshotBuffer,
  //       contentType: 'image/png',
  //     });
  //     throw error;
  //   }
  // });

  // test('Test case 5 - Register API user with password', async ({ }, testInfo) => {
  //   const testCaseIds = ['TC_05'];
  //   registerObj = new Register(page, testCaseIds);

  //   try {
  //     await registerObj.register_company();
  //   } catch (error) {
  //     // Capture screenshot only on failure
  //     const screenshotBuffer = await page.screenshot({ fullPage: true });
  //     testInfo.attach('Failed Test Screenshot', {
  //       body: screenshotBuffer,
  //       contentType: 'image/png',
  //     });
  //     throw error;
  //   }
  // });

  // test('Test case 6 - Register API user with OTP', async ({ }, testInfo) => {
  //   const testCaseIds = ['TC_06'];
  //   registerObj = new Register(page, testCaseIds);

  //   try {
  //     await registerObj.register_company();
  //   } catch (error) {
  //     // Capture screenshot only on failure
  //     const screenshotBuffer = await page.screenshot({ fullPage: true });
  //     testInfo.attach('Failed Test Screenshot', {
  //       body: screenshotBuffer,
  //       contentType: 'image/png',
  //     });
  //     throw error;
  //   }
  // });

  test.afterEach(async () => {
    await page.close();
  });

});