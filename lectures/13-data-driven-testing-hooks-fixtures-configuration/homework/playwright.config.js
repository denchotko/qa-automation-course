//Lecture 13 Homework Assignment: Data-Driven Testing, Hooks, Fixtures & Configuration
//Task 3: Playwright Configuration (Local to Homework)
//Task 4: Cross-Browser and Device Projects

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Since this config lives inside the tests folder, keep tests relative to here
  testDir: "./tests",

  // Per-test timeout
  timeout: 30_000,

  // Safety on CI
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  // Reporter
  reporter: "html",

  // Shared settings for all projects
  use: {
    // Optional baseURL if you point tests to a real app
    // baseURL: process.env.BASE_URL || "http://localhost:3000",

    // Helpful debug artifacts
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // Optional: baseURL for relative navigation in real apps
    baseURL: "http://localhost:3000",
  },

  // Cross-browser projects for 08-cross-browser.spec.js
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "Mobile Chrome", // optional mobile project
      use: { ...devices["Pixel 5"] },
    },
  ],
});
