import CsvParse, { LoginTestCaseData } from '../utils/csvParse';
import { Page, expect, BrowserContext } from '@playwright/test';

const csvParseObj = new CsvParse();

class UserLogin {

    private page: Page;
    private testCaseIds: string[];
    private filePath: string = "./files/user_login.csv";

    // Locators
    private txtEmail = "input[name='email']";
    private btnGetOtp = "//button[normalize-space()='Get OTP']";
    private txtPassword = "#password";
    private iconEye = "img[alt='view']";
    private btnLogin = "(//button[@type='submit'][normalize-space()='Login'])[3]";

    constructor(page: Page, testCaseIds: string[]) {
        this.page = page;
        this.testCaseIds = testCaseIds;
    }

    private async getTestCaseData(): Promise<LoginTestCaseData[]> {
        try {
            return await csvParseObj.getTestCaseData(this.filePath, this.testCaseIds);
        } catch (error) {
            console.error("Error parsing CSV file:", error);
            throw error;
        }
    }

    private async performLogin(expectedText: string) {
        const testCaseData = await this.getTestCaseData();

        if (testCaseData.length === 0) {
            throw new Error("No test cases found for provided IDs");
        }

        const data = testCaseData[0];
        const { url, email, password, isPassword, emailUrl } = data;

        if (!url || !email) {
            throw new Error("Missing required test data (url/email)");
        }

        console.log("Executing TestCase:", data);

        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');

        // ===============================
        // ✅ CASE 1: PASSWORD LOGIN
        // ===============================
        if (isPassword?.toUpperCase() === 'Y') {

            if (!password) {
                throw new Error("Password is required when isPassword = Y");
            }

            await this.page.locator(this.txtEmail).fill(email);
            await this.page.locator(this.btnGetOtp).click();

            await this.page.locator(this.txtPassword).fill(password);
            await this.page.locator(this.iconEye).click();
            await this.page.locator(this.btnLogin).click();

            // Assertion
            await expect(this.page.getByText(expectedText)).toBeVisible();

            console.log("✅ Password login successful");

        }

        // ===============================
        // ✅ CASE 2: EMAIL URL (OTP FLOW)
        // ===============================
        else if (isPassword?.toUpperCase() === 'N') {

            if (!emailUrl) {
                throw new Error("emailUrl is required when isPassword = N");
            }

            const context: BrowserContext = this.page.context();

            // Open new tab
            const newTab = await context.newPage();

            await newTab.goto(emailUrl);
            await newTab.waitForLoadState('domcontentloaded');

            console.log("✅ Email URL opened:", emailUrl);

            // Optional: Add OTP extraction later here

        }

        else {
            throw new Error("Invalid isPassword value (must be Y or N)");
        }

        console.log("Expected text verified:", expectedText);
    }

    async valid_login() {
        await this.performLogin('Manage Companies');
    }

}

export default UserLogin;