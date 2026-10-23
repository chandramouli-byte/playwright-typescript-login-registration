import fs from 'fs';
import csv from 'csv-parser';

export type LoginTestCaseData = {
    testCaseId: string;
    url: string;
    email: string;
    isPassword: string;
    password: string;
    emailUrl: string
};

export type RegisterTestCaseData = {
    testCaseId: string;
    url: string;
    name: string;
    email: string;
    phone: string;
    companyName: string;
    dma?: string;
    retailer?: string;
    apiUser?: string;
    password?: string;
    passwordSet: string;
    otp?: string;
};

class CsvParse {
    async getTestCaseData<T>(filePath: string, testCaseIds: string[]): Promise<T[]> {
        return new Promise((resolve, reject) => {
            const results: T[] = [];

            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => {
                    if (testCaseIds.includes(data.testCaseId)) {
                        results.push(data as T);
                    }
                })
                .on('end', () => resolve(results))
                .on('error', reject);
        });
    }
}

export default CsvParse;