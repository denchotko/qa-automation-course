//Lecture 10 Homework Assignment: Advanced UI Interactions
//Task 2: Tables — Review & Moderate Submissions
//Work with the submissions table to review session proposals: verify structure and counts, approve a submission (alert dialog, status update without removal), and decline a submission (confirm dialog, row removal and count update).

import { test, expect } from "@playwright/test";
import { getLocalUrl } from "../task01/getLocalUrl.js";

const tableUrl = getLocalUrl("../pages/table-page.html", import.meta.url);

test("TestA: Count and headers", async ({ page }) => {
  await page.goto(tableUrl);
  //Count table rows
  const rows = page.locator("tbody > tr");
  await expect(rows).toHaveCount(5);

  //Verify headers
  const headers = page.locator("thead th");
  const expected = [
    "Speaker",
    "Session Format",
    "Topics",
    "Audience Level",
    "Files",
    "Status",
    "Actions",
  ];
  for (let i = 0; i < expected.length; i++) {
    await expect(headers.nth(i)).toHaveText(expected[i]);
  }

  //Verify total submissions
  await expect(page.locator("#total-count")).toHaveText("5");
});

test("B: Approve Session — alert dialog + status update", async ({ page }) => {
  await page.goto(tableUrl);

  const row = page.locator("tbody > tr", { hasText: "John Doe" });

  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Approved submission for John Doe");
    await dialog.accept();
  });

  await row.locator("button", { hasText: "Approve" }).click();

  await expect(page).toHaveURL(tableUrl);
  await expect(row).toBeVisible();
  await expect(row.locator(".pill.status-approved")).toHaveText("Approved");
  await expect(page.locator("#total-count")).toHaveText("5");
});

test("Test C: Decline Session — confirm dialog + row removal", async ({
  page,
}) => {
  await page.goto(tableUrl);

  // Locate row for Jane Smith
  const row = page.locator("tbody > tr", { hasText: "Jane Smith" });

  // Register confirm dialog handler
  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain(
      "Are you sure you want to decline the submission for Jane Smith?"
    );
    await dialog.accept();
  });

  // Click Decline button in that row
  await row.locator("button", { hasText: "Decline" }).click();

  // Verify row is removed
  await expect(row).toHaveCount(0);

  // Verify total submissions is now 4
  await expect(page.locator("#total-count")).toHaveText("4");
});
