
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://programmers.io/');
  await expect(page).toHaveTitle("/Playwright/");
});
