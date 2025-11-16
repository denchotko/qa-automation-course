//Lecture 13 Homework Assignment: Data-Driven Testing, Hooks, Fixtures & Configuration
//Task 2: Hooks for Automatic Setup/Cleanup
//A spec demonstrating beforeEach navigation for UI tests.

import { test, expect } from "@playwright/test";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

// ✅ Valid login test
test("login succeeds with valid credentials", async ({ page }) => {
  await page.fill("#username", "admin");
  await page.fill("#password", "admin123");
  await page.click("#login-button");

  const successMessage = page.locator("#success-message");
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText("Welcome admin");
});

// ❌ Invalid login test
test("login fails with empty password", async ({ page }) => {
  await page.fill("#username", "user");
  await page.fill("#password", "");
  await page.click("#login-button");

  const errorMessage = page.locator("#error-message");
  await expect(errorMessage).toBeVisible();
});
