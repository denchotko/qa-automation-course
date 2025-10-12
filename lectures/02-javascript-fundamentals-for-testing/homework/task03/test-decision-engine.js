/**
 * This file implements decision-making logic for test automation using if/else,
 * ternary operators, switch statements, and nested conditions. These functions
 * help control test flow based on various outcomes and environment settings.
 */

// Step 3.1: If/Else Statements for Test Flow Control

/**
 * Determines the next action in a test based on the result and retry count.
 * @param {string} testResult - The result of the test (e.g., "passed", "failed", "skipped").
 * @param {number} retryCount - The number of retries attempted so far.
 */
export function determineTestAction(testResult, retryCount) {
  console.log(
    `Determining action for: result=${testResult}, retries=${retryCount}`
  );
  if (testResult === "pass") {
    console.log("Action: Test passed. Proceeding to the next test.");
    return "complete";
  } else if (testResult === "fail" && retryCount < 3) {
    console.log(`Action: Test failed. Retrying (attempt ${retryCount + 1}).`);
    return "retry";
  } else if (testResult === "fail" && retryCount >= 3) {
    console.log(
      "Action: Test failed after maximum retries. Marking as failed and stopping."
    );
    return "abort";
  } else {
    console.log("Action: Unknown test result. Reporting an error.");
    return "investigate";
  }
}

/**
 * Validates user test data (email, password, age) based on a set of rules.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @param {number} age - The user's age.
 */
export function validateTestData(email, password, age) {
  console.log(
    `Validating test data: email=${email}, password=${password}, age=${age}`
  );
  if (!email || !email.includes("@")) {
    console.log("- Email format is invalid.");
    return "Invalid email";
  } else {
    console.log("- Email format is valid.");
    if (!password || password.length < 8) {
      console.log("- Password is too short (less than 8 characters).");
      return "Invalid password";
    } else {
      console.log("- Password length is sufficient.");
      if (typeof age !== "number" || age < 18 || age > 100) {
        console.log("- Age is not within valid range (18-100).");
        return "Invalid age";
      } else {
        console.log("- User is of valid age.");
        return "valid";
      }
    }
  }
}

/**
 * Processes test results to calculate success rate and assign a grade.
 * @param {number} totalTests - The total number of tests.
 * @param {number} passedTests - The number of passed tests.
 * @param {string} environment - The environment where tests were run.
 * @returns {object} An object with calculated metrics and a grade.
 */
export function processTestResults(totalTests, passedTests, environment) {
  const failedTests = totalTests - passedTests;
  let successRate = (passedTests / totalTests) * 100;
  let grade;
  // Adjust thresholds for production
  let excellentThreshold = 95;
  let goodThreshold = 85;
  let acceptableThreshold = 70;
  if (environment === "production") {
    excellentThreshold += 5;
    goodThreshold += 5;
    acceptableThreshold += 5;
  }
  if (successRate >= excellentThreshold) {
    grade = "excellent";
  } else if (successRate >= goodThreshold) {
    grade = "good";
  } else if (successRate >= acceptableThreshold) {
    grade = "acceptable";
  } else {
    grade = "needs improvement";
  }
  console.log(
    `Processing results: ${passedTests}/${totalTests} passed (${successRate.toFixed(2)}%) in ${environment}. Grade: ${grade}`
  );
  return { totalTests, passedTests, failedTests, successRate, grade };
}

// Step 3.2: Ternary Operators for Concise Logic

/**
 * Returns a test status string based on a boolean flag.
 * @param {boolean} isPassed - True if the test passed.
 */
export function getTestStatus(isPassed) {
  const status = isPassed ? "✅ PASSED" : "❌ FAILED";
  console.log(`The result is: ${status}`);
  return status;
}

/**
 * Determines the appropriate timeout based on the environment.
 * @param {string} environment - The test environment (e.g., "production", "staging").
 */
export function determineTimeout(environment) {
  const timeout = environment === "production" ? 30000 : 10000;
  console.log(`Environment: ${environment}, Selected Timeout: ${timeout}ms`);
  return timeout;
}

/**
 * Formats a duration from milliseconds to seconds if it's over 1000ms.
 * @param {number} durationMs - The duration in milliseconds.
 */
export function formatTestDuration(durationMs) {
  const formattedDuration =
    durationMs >= 1000
      ? `${(durationMs / 1000).toFixed(2)}s`
      : `${durationMs}ms`;
  console.log(`Original: ${durationMs}ms, Formatted: ${formattedDuration}`);
  return formattedDuration;
}

/**
 * Determines the priority of a test based on error count and response time.
 * @param {number} errorCount - The number of errors.
 * @param {number} responseTime - The response time in ms.
 */
export function getTestPriority(errorCount, responseTime) {
  const priority =
    errorCount > 0 ? "high" : responseTime > 1000 ? "medium" : "low";
  console.log(
    `Errors: ${errorCount}, Time: ${responseTime}ms. Priority set to: ${priority}`
  );
  return priority;
}

// Step 3.3: Switch Statements for Scenario Handling

/**
 * Handles test environment settings using a switch statement.
 * @param {string} environment - The environment name (e.g., "dev", "staging", "prod").
 * @returns {object} An object with timeout and debugMode settings.
 */
export function handleTestEnvironment(environment) {
  let settings;
  switch (environment) {
    case "development":
      console.log("Using dev settings");
      settings = { timeout: 5000, debugMode: true };
      break;
    case "staging":
      console.log("Using staging settings");
      settings = { timeout: 10000, debugMode: true };
      break;
    case "production":
      console.log("Using production settings");
      settings = { timeout: 30000, debugMode: false };
      break;
    default:
      console.log("Unknown environment");
      settings = { timeout: 10000, debugMode: false };
      break;
  }
  return settings;
}

/**
 * Provides an interpretation of an HTTP status code.
 * @param {number} statusCode - The HTTP status code.
 */
export function processHTTPStatusCode(statusCode) {
  let interpretation;
  switch (statusCode) {
    case 200:
      interpretation = "Success - Request completed";
      break;
    case 201:
      interpretation = "Created - Resource created successfully";
      break;
    case 400:
      interpretation = "Bad Request - Check your data";
      break;
    case 401:
      interpretation = "Unauthorized - Authentication required";
      break;
    case 404:
      interpretation = "Not Found - Resource doesn't exist";
      break;
    case 500:
      interpretation = "Server Error - Internal server error";
      break;
    default:
      interpretation = `Unexpected status code: ${statusCode}`;
      break;
  }
  console.log(`Status Code: ${statusCode}, Interpretation: ${interpretation}`);
  return interpretation;
}

/**
 * Selects a test data set based on the type of test.
 * @param {string} testType - The type of test (e.g., "smoke", "regression", "performance").
 */
export function selectTestDataSet(testType) {
  let dataSet;
  switch (testType) {
    case "login":
      dataSet = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
      ];
      break;
    case "registration":
      dataSet = [
        { email: "a@example.com", password: "abc12345" },
        { email: "b@example.com", password: "def67890" },
      ];
      break;
    case "api":
      dataSet = [
        { endpoint: "/get", method: "GET" },
        { endpoint: "/post", method: "POST" },
      ];
      break;
    case "performance":
      dataSet = [
        { users: 100, duration: 60000 },
        { users: 500, duration: 120000 },
      ];
      break;
    default:
      dataSet = [];
      break;
  }
  console.log(
    `Test Type: ${testType}, Selected Data Set: ${Array.isArray(dataSet) ? dataSet.length : 0} records.`
  );
  return dataSet;
}

// Step 3.4: Nested Conditions for Complex Scenarios

/**
 * Makes a complex decision based on multiple factors using nested conditions.
 * @param {string} userRole - The user's role.
 * @param {string} environment - The test environment.
 * @param {string} testType - The type of test.
 * @param {boolean} hasPermission - Whether the user has explicit permission.
 */
export function complexTestDecision(
  userRole,
  environment,
  testType,
  hasPermission
) {
  console.log(
    `Complex Decision: Role=${userRole}, Env=${environment}, Type=${testType}, Permission=${hasPermission}`
  );
  let allowed = false;
  let reason = "";
  let logLevel = "info";
  if (userRole === "admin") {
    if (environment === "production") {
      if (testType === "critical") {
        allowed = true;
        reason = "Admin allowed to run critical tests in production.";
        logLevel = "warn";
        console.log(
          "Decision: Allow critical test execution on production for admin."
        );
      } else {
        allowed = true;
        reason = "Admin allowed to run non-critical tests in production.";
        logLevel = "info";
        console.log(
          "Decision: Allow non-critical test execution on production for admin."
        );
      }
    } else {
      allowed = true;
      reason = "Admin allowed to run all tests in non-production.";
      logLevel = "info";
      console.log("Decision: Allow all tests for admin in non-production.");
    }
  } else if (userRole === "tester") {
    if (hasPermission === true) {
      if (environment !== "production") {
        allowed = true;
        reason = "Tester with permission allowed in non-production.";
        logLevel = "info";
        console.log(
          "Decision: Allow tester with permission in non-production."
        );
      } else {
        allowed = false;
        reason = "Tester denied access to production.";
        logLevel = "error";
        console.log("Decision: Deny tester access to production.");
      }
    } else {
      allowed = false;
      reason = "Tester without permission denied.";
      logLevel = "error";
      console.log("Decision: Deny tester without permission.");
    }
  } else {
    allowed = false;
    reason = "Non-admin/tester denied all access.";
    logLevel = "error";
    console.log("Decision: Deny all access for other roles.");
  }
  return { allowed, reason, logLevel };
}
//End of file
