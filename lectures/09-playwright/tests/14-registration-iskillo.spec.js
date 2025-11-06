import { test, expect } from "@playwright/test";

function generateEmail() {
  //Email construction logic goes here
  return "clever@mail.com";
}

function generateDate() {
  return "11-05-2025";
}

test("Successful registration", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/users/register");
  await expect(page.locator("h4")).toHaveText("Sign up");

  await page.locator("input[name=username]").fill("automation-qa");
  await page.locator("input[type=email]").fill(generateEmail());

  await page.locator("input[type=date]").fill(generateDate());
});
