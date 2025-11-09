import { test, expect } from "@playwright/test";

const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("count table rows", async ({ page }) => {
  await page.goto(tablePageUrl);

  const rows = page.locator("#users-table tbody tr");
  const rowCount = await rows.count();

  console.log("Total rows:", rowCount);
  expect(rowCount).toBe(5);
});

test("get data from specific cell", async ({ page }) => {
  await page.goto(tablePageUrl);

  const firstRowName = await page
    .locator("#users-table tbody tr:first-child td:nth-child(2)")
    .textContent();

  console.log("First user name:", firstRowName);
  expect(firstRowName).toBe("John Doe");
});

test("find specific row by content", async ({ page }) => {
  await page.goto(tablePageUrl);

  const janeRow = page.locator("#users-table tbody tr", {
    hasText: "Jane Smith",
  });

  await expect(janeRow).toBeVisible();
  const email = await janeRow.locator("td:nth-child(3)").textContent();
  console.log("Jane's email:", email);
  expect(email).toBe("jane@example.com");
});
