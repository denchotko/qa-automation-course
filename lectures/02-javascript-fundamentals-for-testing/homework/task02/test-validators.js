/**
 * This file contain functions for building validation testing system using comparison operators, logical operators,
 * and string methods to verify test results and process response data.
 *
 *
 * Step 2.1. Comparison Operator Validation Function
 *
 * Validates if the actual status code matches the expected one using both strict and loose equality.
 * @param {string} validateStatusCode - The expected status code to validate against (e.g., "200").
 * @param {string} actualStatusCode - The actual status code returned from the API response.
 * @returns {boolean} - Returns true if the status code is 200, otherwise false.
 */

export function validateStatusCode(expectedCode, actualCode) {
  console.log(
    `Validating Status Code: Expected: ${expectedCode}, Actual: ${actualCode}`
  );

  // Strict equality check
  const isSrictiEqual = expectedCode === actualCode;
  console.log(`Strict equality(===): ${isSrictiEqual}`);

  // Loose equality check
  const isLooseEqual = expectedCode == actualCode;
  console.log(`Loose equality(==): ${isLooseEqual}`);

  if (isSrictiEqual !== isLooseEqual) {
    console.log(
      "Note:Strict and loose equality produced different results due to type differences."
    );
  }
  return isSrictiEqual;
}

/**
 * Validates if the actual response time is less than or equal to the maximum time.
 *@param {number} actualTime - The actual response time in milliseconds.
 *@param {number} maxTime - The maximum acceptable response time in milliseconds.
 *@returns {boolean} - Returns true if the actual response time is less than or equal to the maximum time, otherwise false.
 */

export function valideResponseTime(actualTime, maxTime) {
  const result = actualTime <= maxTime;
  console.log(
    `Response time ${actualTime}ms is within limit ${maxTime}ms: ${result}`
  );
  return result;
}

/**
 * Validates if the actual response time is within the specified range (minTime to maxTime).
 * @param {number} valideResponseTime - The actual response time in milliseconds.
 * @param {number} minTime - The minimum acceptable response time in milliseconds.
 * @param {number} maxTime - The maximum acceptable response time in milliseconds.
 * @returns {boolean} - Returns true if the actual response time is less than or equal to the maximum time, otherwise false.
 */

export function valideResponseTimeRange(responseTime, minTime, maxTime) {
  const result = responseTime >= minTime && responseTime <= maxTime;
  console.log(
    `Response time ${responseTime}ms is within range ${minTime}ms - ${maxTime}ms: ${result}`
  );
  return result;
}

/**
 * Compares two version strings to check if they are different.
 * @param {string} currentVersion - The current version of the software (e.g., "1.0.0").
 * @param {string} requiredVersion - The required version to validate against (e.g., "1.0.0").
 * @returns {boolean} - Returns true if the current version matches the required version, otherwise false.
 */

export function validateVersion(currentVersion, requiredVersion) {
  const areDifferent = currentVersion !== requiredVersion;
  console.log(
    `Current version (${currentVersion}) is different from required version (${requiredVersion}): ${areDifferent}`
  );
  return areDifferent;
}

/**
 *  Validates if an error message contains keywords like "error", "failed", or "invalid".
 * @param {string}  errorMessage- The error message to validate.
 * @returns {boolean} True if the error message contains any of the keywords, otherwise false.
 */

export function validateErrorMessage(errorMessage, expectedText) {
  const lowerCaseMessage = errorMessage.toLowerCase();
  const containsTextPos = lowerCaseMessage.indexOf(expectedText.toLowerCase());
  const containsText = containsTextPos !== -1;

  console.log(
    `Error message contains expected text ("${expectedText}"): ${containsTextPos}`
  );
  return containsText;
}

/**Validates a function extracted user ID as a sring from a response object.
 * @param {object} response - The response object containing user data.
 * @returns {string}  - Returns extraxted user ID as a string.
 */

export function extractUserId(responseText) {
  console.log(`Extracting UserId from: "${responseText}"`);
  const marker = "ID:";
  const markerPos = responseText.indexOf(marker);

  if (markerPos === -1) {
    console.log("User ID marker not found in the response text.");
    return null;
  }
  let userId = responseText.slice(markerPos + marker.length).trim();
  console.log(`Extracted User ID: ${userId}`);
  return userId;
}

export function validateEmailFormat(email) {
  console.log(`Validating Email Format: "${email}"`);
  const hasAtSign = email.includes("@");
  const hasDot = email.includes(".");
  const atIndex = email.indexOf("@");
  const lastDotIndex = email.lastIndexOf(".");
  const isTrimmed = email.trim() === email;
  const atBeforeDot = atIndex > -1 && lastDotIndex > atIndex;

  const isValid = hasAtSign && hasDot && atBeforeDot && isTrimmed;
  console.log(`- Has '@'? ${hasAtSign}`);
  console.log(`- Has '.'? ${hasDot}`);
  console.log(`- '@' before last '.'? ${atBeforeDot}`);
  console.log(`- Is trimmed? ${isTrimmed}`);
  console.log(`- Final Validation: ${isValid}`);
  return isValid;
}

/**
 * Processes a CSV string into an array of test data.
 * @param {string} csvString - A string of comma-separated values.
 */
export function processTestDataCSV(csvString) {
  console.log(`Processing CSV String: "${csvString}"`);
  const dataArray = csvString.split(",");
  console.log(`- Original String: "${csvString}"`);
  console.log(`- Resulting Array:`, dataArray);
  return dataArray;
}

/**
 * Normalizes a test name by trimming whitespace and converting it to lowercase.
 * @param {string} testName - The test name to normalize.
 * @returns {string} The normalized test name.
 */
export function normalizeTestName(testName) {
  console.log(`Normalizing Test Name: "${testName}"`);
  const trimmedName = testName.trim();
  const lowerCaseName = trimmedName.toLowerCase();
  const underscoredName = lowerCaseName.replace(/\s+/g, "_");
  const limitedName = underscoredName.slice(0, 20);
  console.log(
    `- Transformation Steps: "${testName}" -> "${trimmedName}" -> "${lowerCaseName}" -> "${underscoredName}" -> "${limitedName}"`
  );
  return limitedName;
}

// Step 2.3: Logical Operators for Complex Validation

/**
 * Validates a complete API response based on multiple criteria.
 * @param {number} statusCode - The HTTP status code.
 * @param {number} responseTime - The response time in ms.
 * @param {boolean} hasData - Whether the response contains data.
 * @param {number} errorCount - The number of errors reported.
 * @returns {boolean} True if all conditions for a successful response are met.
 */
export function validateCompleteAPIResponse(
  statusCode,
  responseTime,
  hasData,
  errorCount
) {
  const isSuccess =
    statusCode === 200 && responseTime < 1000 && hasData && errorCount === 0;
  console.log(`Complex API Validation:
    - Status: ${statusCode} (Expected: 200)
    - Time: ${responseTime}ms (Expected: < 1000ms)
    - Has Data: ${hasData} (Expected: true)
    - Errors: ${errorCount} (Expected: 0)
    - Overall Result: ${isSuccess}`);
  return isSuccess;
}

/**
 * Checks if a user has access to a specific test environment.
 * @param {string} userRole - The role of the user (e.g., "admin", "viewer").
 * @param {boolean} isAuthenticated - Whether the user is authenticated.
 * @param {string} environment - The environment being accessed (e.g., "prod", "staging").
 * @returns {boolean} True if access should be granted.
 */
export function checkTestEnvironmentAccess(
  userRole,
  isAuthenticated,
  environment
) {
  const isAdminOrTester = userRole === "admin" || userRole === "tester";
  const isDevOrStaging = environment === "dev" || environment === "staging";
  const hasAccess = isAuthenticated && isAdminOrTester && isDevOrStaging;
  console.log(`Environment Access Check:
    - Role: ${userRole}, Auth: ${isAuthenticated}, Env: ${environment}
    - Access Granted? ${hasAccess}`);
  return hasAccess;
}

/**
 * Validates that a test has not failed due to errors, cancellation, or timeout.
 * @param {boolean} hasErrors - True if there were errors.
 * @param {boolean} isCancelled - True if the test was cancelled.
 * @param {boolean} isTimeout - True if the test timed out.
 * @returns {boolean} True if the test did not fail.
 */
export function validateTestNotFailed(hasErrors, isCancelled, isTimeout) {
  const didNotFail = !(hasErrors || isCancelled || isTimeout);
  console.log(`Test Failure Check:
    - Has Errors: ${hasErrors}, Cancelled: ${isCancelled}, Timeout: ${isTimeout}
    - Did Not Fail? ${didNotFail}`);
  return didNotFail;
}

/**
 * A complex validation scenario combining multiple conditions.
 * @param {number} statusCode - HTTP status code.
 * @param {number} responseTime - Response time in ms.
 * @param {string} userRole - User's role.
 * @param {number} dataCount - Number of data items returned.
 * @param {string} environment - The test environment.
 * @returns {boolean} The final validation result.
 */
export function complexValidationScenario(
  statusCode,
  responseTime,
  userRole,
  dataCount,
  environment
) {
  // Example logic: (statusCode === 200 && responseTime < 500) || (userRole === "admin" && environment === "dev")
  const statusAndPerf = statusCode === 200 && responseTime < 500;
  const adminDev = userRole === "admin" && environment === "dev";
  const finalResult = statusAndPerf || adminDev;
  console.log(`Complex Scenario Validation:
    - Status: ${statusCode} === 200? ${statusCode === 200}
    - ResponseTime: ${responseTime} < 500? ${responseTime < 500}
    - UserRole: ${userRole} === 'admin'? ${userRole === "admin"}
    - Environment: ${environment} === 'dev'? ${environment === "dev"}
    - (statusCode === 200 && responseTime < 500): ${statusAndPerf}
    - (userRole === 'admin' && environment === 'dev'): ${adminDev}
    - Final Result: ${finalResult}`);
  return finalResult;
}
// End of file

