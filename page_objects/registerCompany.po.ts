import CsvParse, { RegisterTestCaseData } from '../utils/csvParse';
import { Page, expect, Locator } from '@playwright/test';

const csvParseObj = new CsvParse();

class Register {

    private page: Page;
    private testCaseIds: string[];
    private filePath: string = "./files/register_company.csv";

    private linkRegister = ".register-login-link.pointer.text-decoration-none";
    private txtName = "#NAME";
    private txtEmail = "#EMAIL";
    private txtPhone = "#PHONE";
    private txtCompanyName = "#COMPANY_NAME";

    private btnDma = "//label[normalize-space()='Digital Marketing Agency']";
    private btnRetailer = "//label[normalize-space()='Retailer']";
    private btnApiUser = "//label[normalize-space()='API User']";
    private btnPassword = "//label[normalize-space()='Password']";
    private txtPassword = "#PASSWORD";
    private txtConfirmPassword = "#CONFIRM_PASSWORD";
    private btnOtp = "//label[normalize-space()='OTP']";

    private checkBoxTermsAndConditions = "#agreeTermsConditions";
    private btnAccept = "//button[normalize-space()='Accept']";
    private btnStart = "button[type='submit']";

    constructor(page: Page, testCaseIds: string[]) {
        this.page = page;
        this.testCaseIds = testCaseIds;
    }

    private async getTestCaseData(): Promise<RegisterTestCaseData[]> {
        return await csvParseObj.getTestCaseData(this.filePath, this.testCaseIds);
    }

    private async clickIfYes(value: string | undefined, locator: Locator) {
        if (value?.toUpperCase() === 'Y') {
            await locator.click();
        }
    }

    private async fillIfYes(value: string | undefined, locator: Locator, csvValue: string) {
        if (value?.toUpperCase() === 'Y') {
            await locator.fill(csvValue);
        }
    }

    private async registerCompany(expectedText: string): Promise<string> {
        const testCaseData = await this.getTestCaseData();

        if (testCaseData.length === 0) {
            throw new Error("No test cases found for provided IDs");
        }

        const data = testCaseData[0];

        const {
            url,
            name,
            email,
            phone,
            companyName,
            dma,
            retailer,
            apiUser,
            password,
            passwordSet,
            otp
        } = data;

        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');

        await this.page.locator(this.linkRegister).click();

        // ✅ Use CSV values directly
        await this.page.locator(this.txtName).fill(name);
        await this.page.locator(this.txtEmail).fill(email);
        await this.page.locator(this.txtPhone).fill(phone);
        await this.page.locator(this.txtCompanyName).fill(companyName);

        await this.clickIfYes(dma, this.page.locator(this.btnDma));
        await this.clickIfYes(retailer, this.page.locator(this.btnRetailer));
        await this.clickIfYes(apiUser, this.page.locator(this.btnApiUser));

        await this.clickIfYes(password, this.page.locator(this.btnPassword));
        await this.fillIfYes(password, this.page.locator(this.txtPassword), passwordSet);
        await this.fillIfYes(password, this.page.locator(this.txtConfirmPassword), passwordSet);

        await this.clickIfYes(otp, this.page.locator(this.btnOtp));

        await this.page.locator(this.checkBoxTermsAndConditions).check();
        await this.page.locator(this.btnAccept).click();
        await this.page.locator(this.btnStart).click();

        await expect(this.page.getByText(expectedText)).toBeVisible();

        console.log("🎉 REGISTERED EMAIL (from CSV):", email);

        // ✅ Return CSV email (no transformation)
        return email;
    }

    async register_company(): Promise<string> {
        return await this.registerCompany('Login');
    }
}

export default Register;