//Lecture 10 Homework Assignment: Advanced UI Interactions
//Task 1: Session Submission & Confirmation
//Automate the entire application process through the summit application page: fill in the drop-down menus, check boxes, selection buttons, and file uploads; submit the application and verify that the confirmation page displays the submitted information;
//Anticipate a negative scenario in which the validation dialog box blocks the submission of the application until it is confirmed.

import { test, expect } from "@playwright/test";
import { getLocalUrl } from "./getLocalUrl.js";
import path from "path";

const formUrl = getLocalUrl("../pages/registration-form.html", import.meta.url);

test("Happy path — successful submission and confirmation", async ({
  page,
}) => {
  await page.goto(formUrl);

  const filePaths = [
    "lectures/10-advanced-ui-interactions/homework/sample-test-files/sample.pdf",
    "lectures/10-advanced-ui-interactions/homework/sample-test-files/example.txt",
  ];

  await page.locator("#session-format").selectOption("Deep Dive (45 mins)");
  await page.locator("#topic-visual").check();
  await page.locator("#level-intro").check();
  await page.locator("#code-of-conduct").check();
  await page.locator("#materials").setInputFiles(filePaths);

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/session-confirmation\.html/);
  await expect(
    page.getByRole("heading", { name: /Thank you for your submission/i })
  ).toBeVisible();
  await expect(page.getByText("Deep Dive (45 mins)")).toBeVisible();
  await expect(page.getByText("Visual Design")).toBeVisible(); // Adjust if label differs
  await expect(page.getByText("Introductory")).toBeVisible(); // Adjust if label differs

  for (const filePath of filePaths) {
    const fileName = path.basename(filePath);
    await expect(page.getByText(fileName)).toBeVisible();
  }
});

test("Negative — validation blocks submission when required data is missing", async ({
  page,
}) => {
  await page.goto(formUrl);

  // Intentionally omit session format
  await page.locator("#topic-visual").check();
  await page.locator("#level-intro").check();
  await page.locator("#code-of-conduct").check();
  await page
    .locator("#materials")
    .setInputFiles([
      "lectures/10-advanced-ui-interactions/homework/sample-test-files/sample.pdf",
    ]);

  // Listen for validation dialog
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toMatch(/Please select a session format/i);
    await dialog.accept();
  });

  await page.locator('button[type="submit"]').click();

  // Confirm still on the form page
  await expect(page).toHaveURL(formUrl);
});
