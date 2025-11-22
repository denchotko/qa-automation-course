//Lecture 13 Homework Assignment: Data-Driven Testing, Hooks, Fixtures & Configuration
//Task 1 — Data-driven login tests (arrays + forEach)

import { test, expect } from "@playwright/test";
import { validUsers, invalidUsers } from "../support/userData.js";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

validUsers.forEach((user) => {
  test(`login succeeds: ${user.username}`, async ({ page }) => {
    await page.goto(loginUrl);
    await page.fill("#username", user.username);
    await page.fill("#password", user.password);
    await page.click("#login-button");

    const successMessage = page.locator("#success-message");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText(`Welcome ${user.username}`);
  });
});

invalidUsers.forEach((user) => {
  test(`login not succeed: ${user.description}`, async ({ page }) => {
    await page.goto(loginUrl);
    // Always fill with a string (empty if invalid)
    await page.locator("#username").fill(user.username || "");
    await page.locator("#password").fill(user.password || "");
    await page.locator("#login-button").click();

    // Assert error banner
    await expect(page.locator("#error-message")).toBeVisible();
    await expect(page.locator("#error-message")).toContainText(
      user.expectedError
    );
  });
});
