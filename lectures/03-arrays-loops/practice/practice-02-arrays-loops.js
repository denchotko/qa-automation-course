//Array of test case names
let testCases = [
  "login_functionality",
  "user_registration",
  "password_reset",
  "profile_update",
  "search_feature",
  "checkout_process",
];

// Array of test results
let testResults = ["PASS", "FAIL", "SKIP", "PASS", "FAIL", "PASS"];

let executionTimes = [1200, 850, 0, 2100, 1800, 950];

// Empty arrays for processing results
let passedTests = [];
let failedTests = [];
let skippedTests = [];
let slowTests = [];

// Threshold for slow tests
const slowThreshold = 1500;

// Process results using for loop and if...else
for (let i = 0; i < testCases.length; i++) {
  let result = testResults[i];
  let time = executionTimes[i];
  let test = testCases[i];

  if (result === "PASS") {
    passedTests.push(test);
  } else if (result === "FAIL") {
    failedTests.push(test);
  } else if (result === "SKIP") {
    skippedTests.push(test);
  }

  if (time > slowThreshold) {
    slowTests.push(test);
  }
}

console.log("Passed Tests:", passedTests);
console.log("Failed Tests:", failedTests);
console.log("Skipped Tests:", skippedTests);
console.log("Slow Tests:", slowTests);
