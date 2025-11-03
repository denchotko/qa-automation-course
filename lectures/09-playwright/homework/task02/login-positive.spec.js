//Lecture 9 Homework Assignment: Playwright Introduction & First Test
//Task 2: Positive Path — Successful Login (Public Site)
//Objective: Write your first complete UI test against the public site that performs a successful login and verifies navigation to the profile page and basic profile info.

import { test, expect } from "@playwright/test";

test("Positive login: navigate to profile page", async ({ page }) => {
  // Go to the public posts page
  await page.goto("http://training.skillo-bg.com:4300/posts/all");

  // Click the Login link
  await page.locator('a[href="/users/login"]').click();
  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );

  // Fill in login form using ID-based selectors
  await expect(page.locator("#defaultLoginFormUsername")).toBeVisible();
  await expect(page.locator("#defaultLoginFormPassword")).toBeVisible();
  await expect(page.locator("#sign-in-button")).toBeVisible();

  await page.locator("#defaultLoginFormUsername").fill("user@example.com");
  await page.locator("#defaultLoginFormPassword").fill("P12345");
  await page.locator("#sign-in-button").click();

  // Wait for navigation and look for profile link
  await page.waitForLoadState("networkidle");

  // ✅ Use a selector that matches the dynamic profile link
  const profileLink = page.locator('a.nav-link[href^="/users/"]');
  await expect(profileLink).toBeVisible();
  await profileLink.click();

  // Verify profile page URL and heading
  await expect(page).toHaveURL(/\/users\/\d+$/);
  await expect(page.locator("h2")).toBeVisible();
});
