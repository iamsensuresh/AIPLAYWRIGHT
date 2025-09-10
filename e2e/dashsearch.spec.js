import { test, expect } from "@playwright/test";

test("Dash Search for AS400", async ({ page }) => {
  await page.goto("https://programmers.io/");

  // Click on the search icon
  await page.locator(".dash-search-icon").click();

  // Type "AS400" into the search input
  await page.locator('input[name="s"]').type("AS400");

  // Press Enter to initiate the search
  await page.keyboard.press("Enter");

  // Wait for the search results to load and validate them
  await expect(page.locator("h1.page-title")).toHaveText("Search results for “AS400”");
  
  // You can add more specific assertions here to validate the search results
});
