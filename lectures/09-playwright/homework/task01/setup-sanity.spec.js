//Lecture 9 Homework Assignment: Playwright Introduction & First Test
//Task 1: Project Setup and First Sanity Run
//Objective: Install Playwright, confirm the repository configuration, and run a short sanity test against the public demo site.

import { test, expect } from "@playwright/test";

test("Sanity check: Navigate to login page and verify URLs", async ({
  page,
}) => {
  await page.goto("http://training.skillo-bg.com:4300/posts/all");
  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/posts/all");

  await page.locator('a[href="/users/login"]').click();
  await expect(page).toHaveURL(
    "http://training.skillo-bg.com:4300/users/login"
  );
});
