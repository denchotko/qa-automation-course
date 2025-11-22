//Lecture 13 Homework Assignment: Data-Driven Testing, Hooks, Fixtures & Configuration
//Integration Task - Suite-Level Reuse Across Projects
//Demnstrates data-driven tests+hooks+optional fixture reuse

import { test, expect } from "@playwright/test";
import { validUsers } from "../support/userData.js";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

validUsers.slice(0, 2).forEach((user) => {
  test(`login succeeds: ${user.username}`, async ({ page }) => {
    await page.fill("#username", user.username);
    await page.fill("#password", user.password);
    await page.click("#login-button");

    const successMessage = page.locator("#success-message");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText(`Welcome ${user.username}`);
  });
});

// Validates testUser data without browser interaction
test("fixture provides testUser with email and age", async ({ testUser }) => {
  expect(testUser.email).toMatch(/@/);
  expect(typeof testUser.age).toBe("number");
  expect(testUser.age).toBeGreaterThanOrEqual(18);
});
