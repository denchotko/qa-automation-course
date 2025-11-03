//Lecture 9 Homework Assignment: Playwright Introduction & First Test
//Task03: Negative Path — Invalid Credentials and Empty Fields (Public Site)
//Objective: Create tests that validate error handling and form validation behavior for the login page.

import { test, expect } from "@playwright/test";

//TestA:Invalid credentials
test("Test A: Invalid credentials should not log in", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/users/login");

  await expect(page.locator("#defaultLoginFormUsername")).toBeVisible();
  await expect(page.locator("#defaultLoginFormPassword")).toBeVisible();
  await expect(page.locator("#sign-in-button")).toBeVisible();

  await page.locator("#defaultLoginFormUsername").fill("best@example.com");
  await page.locator("#defaultLoginFormPassword").fill("12345");
  await page.locator("#sign-in-button").click();

  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );
  await expect(page.locator("#sign-in-button")).toBeVisible();
  await expect(page.locator('a[href^="/users/login"]')).toHaveCount(0);

  // Optional: check for error message
  await expect(page.locator("text=Wrong username or password!")).toBeVisible();
});

//Test B — Empty field submission
test("Test B: Empty field submission should not log in", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/users/login");

  await expect(page.locator("#defaultLoginFormUsername")).toBeVisible();
  await expect(page.locator("#defaultLoginFormPassword")).toBeVisible();
  await expect(page.locator("#sign-in-button")).toBeVisible();

  await page.locator("#sign-in-button").click();

  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );
  await expect(page.locator('a[href^="/users/login"]')).toHaveCount(0);

  // Optional: try only username
  await page.locator("#defaultLoginFormUsername").fill("wrong@example.com");
  await page.locator("#sign-in-button").click();
  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );

  // Optional: try only password
  await page.locator("#defaultLoginFormUsername").fill("");
  await page.locator("#defaultLoginFormPassword").fill("12345");
  await page.locator("#sign-in-button").click();
  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );
});
