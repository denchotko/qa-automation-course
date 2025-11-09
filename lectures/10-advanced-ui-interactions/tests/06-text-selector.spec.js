import { test, expect } from "@playwright/test";

const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("text selector", async ({ page }) => {
  await page.goto(tablePageUrl);

  const johnRow = page.locator("text='John Doe'");
  await expect(johnRow).toBeVisible();
});

test("find elements by exact text", async ({ page }) => {
  const complexFormPageUrl = new URL(
    "../pages/complex-form.html",
    import.meta.url
  ).href;
  await page.goto(complexFormPageUrl);

  const btn = page.locator("text=Submit Registration");
  await expect(btn).toBeVisible();
  await btn.click();
});

