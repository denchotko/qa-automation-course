import { test } from "@playwright/test";
test("Understanding the page object", async ({ page }) => {
  //Navigate to URls
  await page.goto("https://practice.expandtesting.com/");

  //Get page info
  let url = page.url();
  console.log("Current URL:", url);

  let title = await page.title();
  console.log("Page title", title);

  //Take actions
  await page.reload(); //Refresh the page
  await page.goBack(); //Go back in history
  await page.goForward(); // Go forward in history
});
