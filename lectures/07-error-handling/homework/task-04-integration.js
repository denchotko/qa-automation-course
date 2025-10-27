/**
 * Lecture 7 Homework assignement: Error handling
 * Practice defensive coding for QA automation by applying JavaScript's error handling tools.
 * Integration Task: Resilient Test Runner
 * Build a sinle script tath:
 *  - Parses test configuration JSON safely
 *  - Validates configuration and test data with your validators
 *  - Executes a few “tests” wrapped in try...catch
 *  - Computes simple metrics without crashing
 *  - Exports a JSON summary string
 */
// ✅ Tiny inputs
const configJson = `{
  "environment": "staging",
  "baseUrl": "http://api.example.com",
  "retries": 3
}`;

const rawResults = [
  { name: "Login", status: "PASS", duration: 5 },
  { name: "Upload", status: "FAIL", duration: 3 },
  { name: "Download", status: "PASS", duration: 4 },
  { name: "Logout", status: "SKIP", duration: 2 },
];

import {
  safeParse,
  safeSuccessRate,
} from "../homework/task01/task-01-try-catch.js";
import {
  validateRequired,
  validateRange,
  validateTestResults,
} from "../homework/task02/task-02-throw.js";
import { runWithCleanup } from "../homework/task03/task-03-finally.js";

//=== Helpers ===
//Task 1
// ✅ Parse config
const parsed = safeParse(configJson);
if (!parsed.ok) {
  console.log("Config parse error:", parsed.error);
  console.log("Aborting integration.");
  process.exit(1);
}

const config = parsed.data;
// Task 2
// ✅ Validate config
try {
  validateRequired(config.environment, "Environment");
  validateRequired(config.baseUrl, "Base URL");
  if (!config.baseUrl.includes("http"))
    throw new Error("Base URL must include 'http'");
  validateRange(config.retries, 0, 5, "Retries");
} catch (error) {
  console.log(error.name, error.message);
  process.exit(1);
}

// ✅ Validate results
try {
  validateTestResults(rawResults);
} catch (error) {
  console.log(error.name, error.message);
  process.exit(1);
}

// ✅ Execute each item
let totalCases = rawResults.length;
let failedCount = 0;
let passedCount = 0;
let totalDuration = 0;
const cleanupLog = [];

//Task 3
for (const test of rawResults) {
  console.log(`Starting execution for test: "${test.name}"`);

  try {
    if (test.status === "FAIL")
      throw new Error(`❌ "${test.name}" encountered a failure`);
    passedCount++;
    console.log(`✅ "${test.name}" completed successfully`);
  } catch (error) {
    console.log(`⚠️ Error in "${test.name}":`, error.message);
    failedCount++;
  } finally {
    totalDuration += test.duration;
    console.log(`🧹 Initiating cleanup for "${test.name}"`);

    // 🧹 Emphasize cleanup with test name
    console.log(`Performing cleanup for "${test.name}"`);
    runWithCleanup({
      name: `cleanup-${test.name}`,
      shouldFail: false,
    });

    console.log(`"${test.name}" finished with duration: ${test.duration}s\n`);
  }
}

// ✅ Compute metrics
const successRate = safeSuccessRate(passedCount, totalCases);
const report = {
  environment: config.environment,
  totalCases,
  failedCount,
  successRate,
  cleanupLog,
};

console.log("Report:", JSON.stringify(report));
console.log("Total duration:", totalDuration + "s");

// ✅ Cleanup demo
console.log("Finalizing test suite....");
runWithCleanup({ name: "finalize", shouldFail: false });
