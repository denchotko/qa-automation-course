import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("select option from dropdown by value", async ({ page }) => {
  await page.goto(complexFormPageUrl);
  const dropdown = await page.locator("#country");
  await page.locator("#country").selectOption("usa");
  await expect(dropdown).toHaveValue("usa");
});
test("select option from dropdown by value", async ({ page }) => {
  await page.goto(complexFormPageUrl);
  const dropdown = await page.locator("#country");
  await page.locator("#country").selectOption("usa");
  await expect(dropdown).toHaveValue("usa");
});