import { test, expect } from "@playwright/test";
import { SessionFormPage } from "../page-objects/SessionFormPage.js";
import { SessionConfirmationPage } from "../page-objects/SessionConfirmationPage.js";
import { SubmissionsTablePage } from "../page-objects/SubmissionsTablePage.js";
import path from "path";

test("Happy path — successful submission and confirmation", async ({
  page,
}) => {
  const formPage = new SessionFormPage(page);
  await test.step("Navigate to the session form", async () => {
    await formPage.navigate();
  });

  const filePaths = [
    "lectures/10-advanced-ui-interactions/homework/sample-test-files/sample.pdf",
    "lectures/10-advanced-ui-interactions/homework/sample-test-files/example.txt",
  ];

  await test.step("Complete and submit the form", async () => {
    await formPage.completeSubmission({
      format: "Deep Dive (45 mins)",
      topics: ["visual"],
      audience: "intro",
      files: filePaths,
    });
  });

  const confirmationPage = new SessionConfirmationPage(page);

  await test.step("Verify confirmation page content", async () => {
    await expect(page).toHaveURL(/confirmation\.html/);
    await expect(confirmationPage.successMessage).toBeVisible();
    await expect(
      confirmationPage.selectedFormat("Deep Dive (45 mins)")
    ).toBeVisible();
    await expect(
      confirmationPage.selectedTopic("Visual Regression")
    ).toBeVisible();
    await expect(
      confirmationPage.selectedAudience("Introductory")
    ).toBeVisible();

    for (const filePath of filePaths) {
      const fileName = path.basename(filePath);
      await expect(confirmationPage.uploadedFile(fileName)).toBeVisible();
    }
  });
});

test("Negative path — validation prevents submission and shows a dialog", async ({
  page,
}) => {
  const formPage = new SessionFormPage(page);
  await test.step("Navigate to the session form", async () => {
    await formPage.navigate();
  });

  await test.step("Fill form with missing format", async () => {
    await formPage.setTopics(["visual"]);
    await formPage.selectAudience("intro");
    await formPage.acceptCodeOfConduct();
    await formPage.uploadFiles([
      "lectures/10-advanced-ui-interactions/homework/sample-test-files/sample.pdf",
    ]);
  });

  await test.step("Submit and handle validation dialog", async () => {
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toMatch(/Please select a session format/i);
      await dialog.accept();
    });

    await formPage.clickSubmit();
    await expect(page).toHaveURL(formPage.url);
  });
});

test("Verify table headers and total count", async ({ page }) => {
  const tablePage = new SubmissionsTablePage(page);
  await tablePage.navigate();

  const headers = await tablePage.getHeaders();
  expect(headers).toEqual([
    "Speaker",
    "Session Format",
    "Topics",
    "Audience Level",
    "Files",
    "Status",
    "Actions",
  ]);

  const count = await tablePage.getTotalCount();
  expect(count).toBeGreaterThan(0);
});

test("Approve a submission and verify status", async ({ page }) => {
  const tablePage = new SubmissionsTablePage(page);
  await tablePage.navigate();
  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    await dialog.accept();
  });

  const speaker = "John Doe";
  await tablePage.approve(speaker);

  await expect
    .poll(
      async () => {
        const status = await tablePage.getStatus(speaker);
        return status;
      },
      { timeout: 20000 } // Add this option
    )
    .toBe("Approved");
});

test("Decline a submission and verify status", async ({ page }) => {
  const tablePage = new SubmissionsTablePage(page);
  await tablePage.navigate();

  const speaker = "Jane Smith";
  await tablePage.decline(speaker);

  await expect
    .poll(
      async () => {
        const status = await tablePage.getStatus(speaker);
        return status;
      },
      {
        timeout: 20000,
      }
    )
    .toContain("Declined");
});
