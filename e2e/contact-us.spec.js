import { test, expect } from '@playwright/test';

test('Navigate to Programmers.io and click Contact Us', async ({ page }) => {
  await page.goto('https://programmers.io/');
  await page.click('text=Contact us');
  // You can add assertions here to verify the navigation
  // For example, check if the URL is correct
  await expect(page).toHaveURL(/.*contact/);

  // Verify the heading text is visible
  await expect(page.locator('text="Contact Us to Start Your Project Today"')).toBeVisible();
});
