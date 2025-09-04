import { test, expect } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test ("AI Auto English Instruction", async ({ page }) => {

const aiArgs = {page, test}

 await page.goto('https://programmers.io/');

 await page.click('text=Contact us');

 await ai.autoEnglishInstruction(aiArgs, 'Verify the heading text is visible', 'text="Contact Us to Start Your Project Today"');



 await ai.autoEnglishInstruction(aiArgs, 'Click on the "Start a Project" button', 'text="Start a Project"');

 await ai.autoEnglishInstruction(aiArgs, 'Verify the form heading is visible', 'text="Let\'s Start Your Project"');

 await ai.autoEnglishInstruction(aiArgs, 'Fill out the form with name "John Doe"');

})