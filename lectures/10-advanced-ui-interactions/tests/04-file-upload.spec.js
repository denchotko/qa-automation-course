import { test, expect } from "@playwright/test";
import path from "node:path";

const complexFormPageUrl = new URL(
  "../pages/complex-form.html",
  import.meta.url
).href;

test("upload a single file", async ({ page }) => {
  const filePath = path.resolve(
    "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
  );
  await page.goto(complexFormPageUrl);

  const fileInputLocator = page.locator("#resume");
  await fileInputLocator.setInputFiles(filePath);

  await expect(page.locator("#file-info")).toContainText("sample-resume.pdf");
});

test("upload a multiple files", async ({ page }) => {
  const files = [
    path.resolve(
      "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
    ),
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file2.txt"),
  ];

  await page.goto(complexFormPageUrl);

  const fileInputLocator = page.locator("#resume");
  await fileInputLocator.setInputFiles(files);
  await expect(page.locator("#file-info")).toContainText("sample-resume.pdf");
  await expect(page.locator("#file-info")).toContainText("file2.txt");
});
