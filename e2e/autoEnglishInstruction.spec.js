import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test ("AI Auto English Instruction", async ({ page }) => {

const aiArgs = {page, test}

 await page.goto('https://programmers.io/');

 await expect(page).toHaveTitle("IBM i (AS/400) Software Development Services for Modernization, Integration, and Growth");

 await page.getByRole('link', { name: 'Contact us' }).first().click();

 // Wait for the contact form heading to be visible to ensure the page has loaded
 await expect(page.locator('h1:has-text("Contact Us to Start Your Project Today")')).toBeVisible();


 await ai('Fill out the form with realistic values', aiArgs);

 await page.waitForTimeout(10000);

})