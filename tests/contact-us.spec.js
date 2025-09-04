import { test, expect } from '@playwright/test';

test('Navigate to Programmers.io and click Contact Us', async ({ page }) => {
  await page.goto('https://programmers.io/');
  await page.click('text=Contact us');
  // You can add assertions here to verify the navigation
  // For example, check if the URL is correct
  await expect(page).toHaveURL(/.*contact/);
});
