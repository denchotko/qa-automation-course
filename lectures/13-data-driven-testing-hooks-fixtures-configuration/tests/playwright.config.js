// import { defineConfig, devices } from "@playwright/test";

// export default defineConfig({
//   // Since this config lives inside the tests folder, keep tests relative to here
//   testDir: ".",

//   // Per-test timeout
//   timeout: 30_000,

//   // Safety on CI
//   forbidOnly: !!process.env.CI,
//   retries: process.env.CI ? 2 : 0,

//   // Reporter
//   reporter: "html",

//   // Shared settings for all projects
//   use: {
//     // Optional baseURL if you point tests to a real app
//     // baseURL: process.env.BASE_URL || "http://localhost:3000",

//     // Helpful debug artifacts
//     trace: "on-first-retry",
//     screenshot: "only-on-failure",
//     video: "retain-on-failure",
//   },

//   // Cross-browser projects for 08-cross-browser.spec.js
//   projects: [
//     {
//       name: "chromium",
//       use: { ...devices["Desktop Chrome"] },
//     },
//     {
//       name: "firefox",
//       use: { ...devices["Desktop Firefox"] },
//     },
//     {
//       name: "webkit",
//       use: { ...devices["Desktop Safari"] },
//     },
//   ],
// });
