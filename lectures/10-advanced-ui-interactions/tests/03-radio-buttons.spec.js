import { test, expect } from "@playwright/test";
const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("check and uncheck checkboxes", async ({ page }) => {
  await page.goto(complexFormPageUrl);

  const radioButtonLocator = page.locator("#exp-beginner");
  await radioButtonLocator.check();
  await expect(radioButtonLocator).toBeChecked();

  const intermediateRadioButtonLocator = page.locator("#exp-intermediate");
  await intermediateRadioButtonLocator.check();
  await expect(radioButtonLocator).not.toBeChecked();
});
