/**
 * Creates a comprehensive test validation and reporting system using advances arrays and loops.
 * Step 3.1. Conditionals Inside Loopes for Advanced Test Result Processing
 * Analyzes test results and categorizes them based on result and execution time.
 * @param {Array} testUsernames- Array of test names.
 * @param {Array} testResults - Array of test results ("PASS", "FAIL", "SKIP").
 * @param {Array} executionTimes - Array of execution times in milliseconds.
 * @returns {[string[], string[], string[]]} - [criticalFailures, slowTests, quickPasses]
 */
export function analyzeTestResults(testNames, testResults, executionTimes) {
  let criticalFailures = [];
  let slowTests = [];
  let quickPasses = [];

  for (let i = 0; i < testNames.length; i++) {
    let name = testNames[i];
    let result = testResults[i];
    let time = executionTimes[i];

    if (result === "FAIL" && name.includes("login")) {
      criticalFailures.push(name);
      console.log(`Critical Failure: ${name}`);
    } else if (result === "PASS" && time > 2000) {
      slowTests.push(name);
      console.log(`Slow Test: ${name} - ${time}ms`);
    } else if (result === "PASS" && time <= 500) {
      quickPasses.push(name);
      console.log(`Quick Pass: ${name} - ${time}ms`);
    }
  }
  console.log(`Total Critical Failures: ${criticalFailures.length}`);
  console.log(`Total Slow Tests: ${slowTests.length}`);
  console.log(`Total Quick Passes: ${quickPasses.length}`);

  return [criticalFailures, slowTests, quickPasses];
}

analyzeTestResults(
  [
    "login_test",
    "logout_test",
    "data_fetch_test",
    "profile_update_test",
    "payment_processing_test",
  ],
  ["FAIL", "PASS", "PASS", "PASS", "FAIL"],
  [2000, 1800, 1600, 400, 3500]
);

/**
 * Processes test cases across multiple environments and summarizes results.
 * @param {Array} testCases - Array of test case names.
 * @param {Array} environments - Array of environment names.
 * @return {string[]} - Summary object with total tests, passed, failed, and skipped counts.
 */

export function processTestsAcrossEnvironments(testCases, environments) {
  let environmentResults = [];

  for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];

    for (let j = 0; j < environments.length; j++) {
      let environment = environments[j];

      // Simulate status based on environment
      let status =
        environment === "production"
          ? Math.random() < 0.5
            ? "FAIL"
            : "PASS" // Higher failure rate
          : Math.random() < 0.9
            ? "PASS"
            : "FAIL"; // Lower failure rate

      let resultString = `${testCase}|${environment}|${status}`;
      environmentResults.push(resultString);

      console.log(`Processed: ${resultString}`);
    }
  }

  return environmentResults;
}

processTestsAcrossEnvironments(
  ["login", "checkout"],
  ["staging", "production"]
);

/**
 * Validates user test data across emails, passwords, and ages.
 * @param {string[]} emails - Array of email addresses
 * @param {string[]} passwords - Array of passwords
 * @param {number[]} ages - Array of ages
 * @returns {[string[], string[], string[]]} - [validUsers, invalidUsers, fixableUsers]
 */

export function validateTestDataQuality(emails, passwords, ages) {
  let validUsers = [];
  let invalidUsers = [];
  let fixableUsers = [];

  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    let password = passwords[i];
    let age = ages[i];

    let isEmailValid = email.includes("@") && email.includes(".");
    let isPasswordValid = password.length >= 8;
    let isAgeValid = age >= 18 && age <= 100;

    let userLabel = `user${i + 1}`;

    if (isEmailValid && isPasswordValid && isAgeValid) {
      validUsers.push(userLabel);
      console.log(`${userLabel} is valid`);
    } else if (!isEmailValid && !isPasswordValid && !isAgeValid) {
      invalidUsers.push(userLabel);
      console.log(`${userLabel} is invalid`);
    } else {
      fixableUsers.push(userLabel);
      console.log(`${userLabel} is fixable`);
    }
  }

  return [validUsers, invalidUsers, fixableUsers];
}

/**
 * Step 3.2. Loop Control with Break and Continue
 * Finds the first critical error in test results or returns -1 if none found.
 * @param {string[]} testResults - Array of test result statuses ("PASS", "FAIL", etc.)
 * @param {string[]} errorMessages - Array of error messages corresponding to each test
 * @returns {number} - Index of the first critical error, or -1 if none found
 */
export function findFirstCriticalError(testResults, errorMessages) {
  for (let i = 0; i < testResults.length; i++) {
    if (
      testResults[i] === "FAIL" &&
      errorMessages[i] &&
      errorMessages[i].toLowerCase().includes("critical")
    ) {
      console.log(`Critical error found at index ${i}: ${errorMessages[i]}`);
      return i;
    }
  }
  console.log("No critical error found.");
  return -1;
}

/**
 * Processes only valid tests, skipping those marked as SKIP or INVALID.
 * @param {string[]} testNames - Array of test case names
 * @param {string[]} testStatuses - Array of test statuses aligned by index
 * @returns {string[]} - Array of successfully processed test names
 */

export function processValidTestsOnly(testNames, testStatuses) {
  const processedTests = [];

  for (let i = 0; i < testNames.length; i++) {
    let name = testNames[i];
    let status = testStatuses[i];

    if (status === "SKIP" || status === "INVALID") {
      console.log(`Skipping ${name} due to status: ${status}`);
      continue;
    }

    // Simulate processing
    processedTests.push(name);
    console.log(`Processed: ${name}`);
  }

  return processedTests;
}
let testNames = ["login", "checkout", "profile", "search"];
let testStatuses = ["PASS", "SKIP", "INVALID", "PASS"];

let result = processValidTestsOnly(testNames, testStatuses);
console.log("Final processed tests:", result);

/**
 * Monitors test execution and stops when failure limit is reached.
 * @param {string[]} testQueue - Array of test names to process
 * @param {number} maxFailures - Maximum allowed failures before stopping
 * @returns {[number, number, number]} - [processedCount, failureCount, remainingTests]
 */

export function monitorTestExecutionWithLimits(testQueue, maxFailures) {
  let failureCount = 0;
  let processedCount = 0;

  while (testQueue.length > 0) {
    const currentTest = testQueue.pop();

    // Simulate test result: 80% chance of PASS, 20% chance of FAIL
    const testPassed = Math.random() < 0.8;

    processedCount++;
    console.log(`Processing: ${currentTest} → ${testPassed ? "PASS" : "FAIL"}`);

    if (!testPassed) {
      failureCount++;
      console.log(`Failure count: ${failureCount}`);
    }

    if (failureCount >= maxFailures) {
      console.log(`Max failures reached (${maxFailures}). Stopping execution.`);
      break;
    }
  }

  return [processedCount, failureCount, testQueue.length];
}

/**
 * Step 3.3:
 * Executes a comprehensive test suite across all combinations of testCases, environments, and userRoles.
 * @param {string[]} testCases - Array of test case names
 * @param {string[]} environments - Array of environment names
 * @param {string[]} userRoles - Array of user role identifiers
 * @returns {object} - Object containing categorized results
 */

export function executeComprehensiveTestSuite(
  testCases,
  environments,
  userRoles
) {
  let passedResults = [];
  let failedResults = [];
  let skippedResults = [];
  let criticalResults = [];

  for (let i = 0; i < testCases.length; i++) {
    for (let j = 0; j < environments.length; j++) {
      for (let k = 0; k < userRoles.length; k++) {
        const caseName = testCases[i];
        const env = environments[j];
        const role = userRoles[k];

        // Skip rule
        if (env === "production" && role === "guest") {
          skippedResults.push(`${caseName}|${env}|${role}|SKIP`);
          continue;
        }

        // Critical rule
        if (caseName.includes("security") || caseName.includes("payment")) {
          criticalResults.push(`${caseName}|${env}|${role}|CRITICAL`);
        }

        // Simulate result
        const passed = Math.random() < 0.7;
        const status = passed ? "PASS" : "FAIL";
        const result = `${caseName}|${env}|${role}|${status}`;

        if (passed) {
          passedResults.push(result);
        } else {
          failedResults.push(result);
        }

        console.log(`Processed: ${result}`);
      }
    }
  }

  return [passedResults, failedResults, skippedResults, criticalResults];
}

/**
 * Builds detailed report metrics using numbers and arrays.
 * Processes parallel arrays of test results and calculates key statistics.
 * @param {string[]} resultNames - Names of the test cases
 * @param {string[]} resultStatuses - Statuses like "PASS", "FAIL", "SKIP"
 * @param {number[]} resultTimes - Execution times in milliseconds
 * @param {string[]} resultEnvironments - Environment names like "staging", "production"
 * @returns {number[]} - Array of metrics: [totalCount, passCount, failCount, slowCount]
 */

export function generateDetailedTestReport(
  resultNames,
  resultStatuses,
  resultTimes
) {
  let totalCount = resultNames.length;
  let passCount = 0;
  let failCount = 0;
  let slowCount = 0;

  for (let i = 0; i < totalCount; i++) {
    if (resultStatuses[i] === "PASS") passCount++;
    if (resultStatuses[i] === "FAIL") failCount++;
    if (resultTimes[i] > 2000) slowCount++;
  }

  console.log("Total:", totalCount);
  console.log("Passed:", passCount);
  console.log("Failed:", failCount);
  console.log("Slow (>2000ms):", slowCount);

  return [totalCount, passCount, failCount, slowCount];
}

//End of file

export function task03Function() {
  console.log("Task 3 executed");
}
