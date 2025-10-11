/**
 *This file contains functions for generating dynamic test data generator.
 *It includes helpers for username,  URL and messages
* Isuseful for creating realistic inputs in test scenarios.
/*

/**
 * Generates a test user name with a unique timestamp to ensure uniqueness.
 * @param {string} basePrefix - The base prefix for the user name (e.g., "testuser").
 * @returns {string} The generated unique user name.
 */

// Step 1.1 String-Based Test Data Generators

/**
 * Creates a function that generates user name with unique timestamp.
 * @param {string} basePresfix dor user name(e.g.,"testuser")
 * @returns {string} This is generated unique user name.
 */

export function generateTestUserName(basePrefix) {
  const timestamp = Date.now();
  const userName = basePrefix + "_" + timestamp;
  console.log(`Generated username: ${userName}`);
  return userName;
}
generateTestUserName("basePrefix");
/**
 * Creates a function that generates complete URL for specific environment, endpoint and userID.
 * @param {string} environment - The target environment (e.g., "api","staging",""prod).
 * @param {string} endpoint - The endpoint API path(e.g., "api/login").
 * @param {string} userId - The user identifier to include in the query string.
 * @returns {string}The fully constructed test URL.
 */

export function buildTestURL(environment, endpoint, userId) {
  const url = `https://${environment}.testsite.com/${endpoint}?user=${userId}`;
  console.log(`Generated test URL for environment "${environment}": ${url}`);
  return url;
}
buildTestURL("dev", "api/login", "user123");

/**
 * Creates a that return formatted message containing test name, status, and duration.
 * @param {string} testName - The name of the test.
 * @param {string} status - The result status(e.g., "Passed", "Failed")
 * @param {string} duration - The duration of the test (e.g., "38ms")
 * @returns {string} A formatted summary message.

 */

export function createTestMessage(testName, status, duration) {
  const message = `Test: ${testName} | Status: ${status} | Duration: ${duration}`;
  console.log(message);
  return message;
}

createTestMessage("LoginTest", "Passed", 38);

//Step 1.2 Arithmetic Operations for Test Metrics

/**
 * Calculates the response time milliseconds.
 * @param {string} startTime - The timestamp when the operation started (e.g., from Date.now()).
 * @param {string} endTime - The timestamp when the operation ended.
 * @param {number} duration - The duration of the test (e.g., "38ms")
 * @returns {number} The duration of the test in milliseconds.
 */

export function calculateResponseTime(startTime, endTime) {
  const duration = endTime - startTime;
  console.log("Response time:", duration, "ms");
  return duration;
}
calculateResponseTime(30000, 35000);

/**
 * Calculates success rate based on the total and passed tests
 * @param {string} totalTests - The total number of test executes.
 * @param {string} passedTests - The number of tests that passed.
 * @returns {object} The success rate as a percentage.

 */

export function calculateSuccessRate(totalTests, passedTests) {
  const failedTests = totalTests - passedTests;
  const successRate = (passedTests / totalTests) * 100;
  console.log(`Test Metrics:
    - Total Tests: ${totalTests}
    - Passed: ${passedTests}
    - Failed: ${failedTests}
    - Success Rate: ${successRate.toFixed(2)}%`);

  return {
    totalTests,
    passedTests,
    failedTests,
    successRate,
  };
}
calculateSuccessRate(18, 5);

/**Adjusts a timeout value based on a multiplier, wrapping around if it exceeds 30000ms.
 * @param {string} baseTimeout {} baseTimeout - The base timeout in milliseconds.
 * @param {number} multiplier - The multiplier to apply.
 * @returns {number}The adjusted timeout value.
 */

export function adjustTimeout(baseTimeout, multiplier) {
  const originalTimeout = baseTimeout * multiplier;
  let adjustedTimeout;

  if (originalTimeout > 30000) {
    adjustedTimeout = originalTimeout % 30000;
  } else {
    adjustedTimeout = originalTimeout;
  }

  console.log("Original Timeout:", originalTimeout, "ms");
  console.log("Adjusted Timeout:", adjustedTimeout, "ms");

  return adjustedTimeout;
}
adjustTimeout(32000, 1);

/**
 * Increment the test counter by 1, then adds 5 more
 * Logs the progression from original to final count.
 * @param {number} currentCount - The current test count.
 * @returns {number} The final The final incremented count.
 */

export function incrementTestCounter(currentCount) {
  console.log("Original Count:", currentCount);

  currentCount++; // Increment by 1
  console.log("After +1:", currentCount);

  currentCount += 5; // Add 5 more
  console.log("After +5:", currentCount);

  console.log("Final Count:", currentCount);
  return currentCount;
}
incrementTestCounter(10);

//Step 1.3. Advanced String Manipulation for Test Data

/**
 * Processes the test environment name by normalizing and formatting it.
 * @param {string} environmentName - The name of the environment (e.g., "Dev", "STAGING").
 * @returns {object} An object containing originalName, normalizedName, baseURL, and displayName.
 */

export function processTestEnvironment(environmentName) {
  const originalName = environmentName;
  const normalizedName = environmentName.toLowerCase();
  const baseURL = `https://${normalizedName}.example.com`;
  const displayName = environmentName.toUpperCase();

  console.log(`Processing Environment: '${environmentName}'
    - Original: '${originalName}'
    - Normalized: '${normalizedName}'
    - Base URL: '${baseURL}'
    - Display Name: '${displayName}'`);
  return { originalName, normalizedName, baseURL, displayName };
}

/**
 *Extracts test information from a formatted result string.
 *Logs the extraction process and results
 * @param {string} testResultString - A string in the format "TestName:PASSED:250ms".
 * @returns {object} An object containing testName, status, durationMs.
 */

export function extractTestInfo(testResultString) {
  const parts = testResultString.split(":");
  const testName = parts[0];
  const status = parts[1];
  const durationRaw = parts[2];
  const duration = parseInt(durationRaw.replace("ms", ""), 10);

  console.log(`Extracting from: "${testResultString}"
    - Test Name: ${testName}
    - Status: ${status}
    - Duration: ${duration}ms`);

  return { testName, status, duration };
}
extractTestInfo("LoginTest:PASSED:300ms");

/**
 * Builds a comprehensive test summary report.
 * @param {string} testName - The name of the test.
 * @param {string} environment - The test environment (e.g., "staging", "production").
 * @param {number} userCount - Number of users involved in the test.
 * @param {number} avgResponseTime - Average response time per user in milliseconds.
 * @returns {string} A formatted multi-line test summary.
 */

// // Create a comprehensive test report
// let testSummary = `
// === ${testSiteName} Test Report ===
// Environment: ${testEnvironment}
// Base URL: ${baseUrl}
// Duration: ${testDuration} seconds
// Max Wait: ${maxWaitTime} seconds
// `;

// console.log(testSummary);

export function buildTestSummary(
  testName,
  environment,
  userCount,
  avgResponseTime
) {
  const totalExecutionTime = userCount * avgResponseTime;

  let summary = `
🧪 Test Summary: ${testName}
-------------------------
Environment       : ${environment}
User Count        : ${userCount}
Avg Response Time : ${avgResponseTime.toFixed(2)}ms
Total Execution   : ${totalExecutionTime.toFixed(2)}ms
-------------------------
`;

  console.log(summary);
  return summary;
}
buildTestSummary("LoginTest", "staging", 50, 112.328);
