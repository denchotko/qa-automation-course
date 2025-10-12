/**
 * 🧪 Integration Test File
 *
 * This script demonstrates the integration of all key array and loop concepts covered in the QA automation course.
 * It imports and executes three task modules:
 *
 * - Task 1: Containes functions for building comprehensive test data management system,
 using the basic array operations.
 * - Task 2: Building a tests for the processing engine using for loops and while loops
 to automate repetetive testing tasks. 
 * - Task 3: Creates a comprehensive test validation and reporting system using advances arrays and loops.
 *
 * Each task showcases how to process parallel arrays using `for` loops,
 * apply conditional logic, and extract meaningful insights from structured data.
 *
 * Run this file with Node.js to verify that all modules work together correctly.
 */

/**📎Integration test
 * Executes an integration test to verify that multiple components or systems work together as expected.
 */

import { task01Function } from "./task01/test-data-manager.js";
import { task02Function } from "./task02/test-processing-engine.js";
import { task03Function } from "./task03/advanced-test-processor.js";

function integrationTest() {
  task01Function();
  task02Function();
  task03Function();

  console.log("Integration test completed!");
}
integrationTest();

/**
 *Integration Step 1: Create Master Test Controller
 */

// Uses initializeTestData from Task 01
// Imports from Task 1, Task 2, and Task 3
import { initializeTestData } from "./task01/test-data-manager.js";
import { buildTestQueue } from "./task01/test-data-manager.js";
import { processAllTestUsers } from "./task02/test-processing-engine.js";
import { analyzeTestResults } from "./task03/advanced-test-processor.js";

// Step 1: Initialize test data
const [testUsers, testEnvironments, browserTypes] = initializeTestData();
console.log("✅ Initialized Test Data:");
console.log("Users:", testUsers);
console.log("Environments:", testEnvironments);
console.log("Browsers:", browserTypes);

// Step 2: Build test queue
const testQueue = buildTestQueue();
console.log("\n🧪 Test Queue Created:");
console.log(testQueue);

// Step 3: Simulate user testing
const totalUsersProcessed = processAllTestUsers(testUsers);
console.log(`\n👥 Total Users Processed: ${totalUsersProcessed}`);

// Step 4: Simulate test results (for demo purposes)
const testResults = ["FAIL", "PASS", "PASS", "PASS", "FAIL"];
const executionTimes = [2000, 1800, 1600, 400, 3500];

// Step 5: Analyze results
const [criticalFailures, slowTests, quickPasses] = analyzeTestResults(
  testQueue,
  testResults,
  executionTimes
);

// Step 6: Show summary
console.log("\n📊 Test Summary:");
console.log("Critical Failures:", criticalFailures);
console.log("Slow Tests:", slowTests);
console.log("Quick Passes:", quickPasses);

// Step 7: Return summary array
const summary = [
  `Users Processed: ${totalUsersProcessed}`,
  `Critical Failures: ${criticalFailures.length}`,
  `Slow Tests: ${slowTests.length}`,
  `Quick Passes: ${quickPasses.length}`,
  `Failures: ${criticalFailures}`,
  `Quick Passes: ${quickPasses}`,
];

console.log("\n🔚 Final Summary Array:");
console.log(summary);

/**
 * Integration Step 2: Build Complete Demo Workflow
 */

function runTestSuiteDemo() {
  console.log("🚀 Starting Test Suite Demo");

  // 1. Create sample test data
  const testUsers = ["alice@example.com", "bob@example.com"];
  const testCases = ["login_test", "signup_test", "checkout_test"];

  console.log("\n📦 Test Data:");
  console.log("Users:", testUsers);
  console.log("Cases:", testCases);

  // 2. Process test users
  console.log("\n👥 Processing Users:");
  for (let i = 0; i < testUsers.length; i++) {
    console.log(`User ${i + 1}: ${testUsers[i]}`);
  }

  // 3. Run test cases with retry logic
  console.log("\n🧪 Running Test Cases:");
  const testResults = [];
  const executionTimes = [];

  for (let i = 0; i < testCases.length; i++) {
    let attempts = 0;
    let passed = false;

    while (attempts < 2 && !passed) {
      attempts++;
      passed = Math.random() > 0.3; // 70% chance to pass
    }

    const time = Math.floor(Math.random() * 3000); // 0–2999 ms
    testResults.push(passed ? "PASS" : "FAIL");
    executionTimes.push(time);

    console.log(`${testCases[i]} → ${passed ? "PASS" : "FAIL"} (${time}ms)`);
  }

  // 4. Analyze results
  console.log("\n📊 Analyzing Results:");
  const failed = [];
  const slow = [];
  const quick = [];

  for (let i = 0; i < testCases.length; i++) {
    if (testResults[i] === "FAIL") {
      failed.push(testCases[i]);
    } else if (executionTimes[i] > 2000) {
      slow.push(testCases[i]);
    } else if (executionTimes[i] <= 500) {
      quick.push(testCases[i]);
    }
  }

  // 5. Final report
  console.log("\n📋 Final Report:");
  console.log("Failed:", failed);
  console.log("Slow:", slow);
  console.log("Quick:", quick);

  const summary = [
    `Users tested: ${testUsers.length}`,
    `Total tests: ${testCases.length}`,
    `Passed: ${testCases.length - failed.length}`,
    `Failed: ${failed.length}`,
    `Quick passes: ${quick.length}`,
  ];

  console.log("\n✅ Summary:");
  console.log(summary);
}

// Run the demo
runTestSuiteDemo();
