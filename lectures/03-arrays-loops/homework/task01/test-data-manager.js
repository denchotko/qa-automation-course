/**This file containes functions for building comprehensive test data management system,
 using the basic array operations.
 * Step 1.1. Create Basic Test Data Arrays
 *
 * Creates a function intializeTestData with 3 arrays and displays their lengths:
 * 1. An empty array testUser to be filled with test usernames.
 * 2. An array testEnvironments containing the strings "development", "staging", and "production".
 * @param {Array} testUsernames - Array of test usernames.
 * @param {Array} testEnvironments - Array of test environments.
 * @param {Array} browserTypes   - Array of browser types.
 * @returns {string}  - All three arrays in order   
 */

export function intializeTestData() {
  let testUser = [];
  let testEnvironments = ["development", "staging", "production"];
  let browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];
  console.log("browserTypes length:", browserTypes.length);
  return [testUser, testEnvironments, browserTypes];
}

intializeTestData();

/**
 * Creates a function takes three parameters from previous fucntion
 * Displays first and last element of test data arrays.
 * @param {Array} testUsernames - Array of test usernames.
 * @param {Array} testEnvironments - Array of test environments.
 * @param {Array} browserTypes   - Array of browser types.
 * @returns {Number}- Total count of elements across all arrays.
 */

export function displayTestDataInfo(testUsers, testEnvironments, browserTypes) {
  const totalElements =
    testUsers.length + testEnvironments.length + browserTypes.length;

  const firstUser = testUsers[0] || "No users available";
  const lastUser = testUsers[testUsers.length - 1] || "No users available";
  const firstEnvironment = testEnvironments[0] || "No environments available";
  const lastEnvironment =
    testEnvironments[testEnvironments.length - 1] ||
    "No environments available";
  const firstBrowser = browserTypes[0] || "No browsers available";
  const lastBrowser =
    browserTypes[browserTypes.length - 1] || "No browsers available";

  console.log(`First user: ${firstUser}'
    - Last user: ${lastUser}'
    - First environment: ${firstEnvironment}'
    - Last environment: ${lastEnvironment}'
    - First browser: ${firstBrowser}'
    - Last browser: ${lastBrowser}'
    - Total elements across all arrays: ${totalElements}`);

  return totalElements;
}

displayTestDataInfo(
  ["dorice", "paul"],
  ["development", "staging"],
  ["Chrome", "Firefox"]
);

/**
 * Step 1.2.Build Test Data Manipulation Functions
 * Adds a new user email to the user array and returns the updated length.
 * @param {Array} userArray - Array of test usernames.
 * @param {string} newUserEmail - New user email to add.
 * @returns {number} - Updated length of the user array.
 */

export function addTestUser(userArray, newUserEmail) {
  console.log(`Current array length: ${userArray.length}`);

  userArray.push(newUserEmail);

  console.log(`New array length: ${userArray.length}`);
  console.log(`Updated user array: ${userArray}`);

  return userArray.length;
}
addTestUser(["dorice"], "paul");

/**
 * Builds a test queue with predefined test names and returns array of test case names.
 * @returns {Array} - Array of test case names.
 */

export function buildTestQueue() {
  let testQueue = [];

  let testCases = [
    "login_test",
    "logout_test",
    "registration_test",
    "password_reset_test",
    "profile_update_test",
  ];

  for (let i = 0; i < testCases.length; i++) {
    testQueue.push(testCases[i]);
    console.log(`Added ${testCases[i]}, Queue length: ${testQueue.length}`);
  }

  return testQueue;
}
buildTestQueue();

/**
 * Processes each test in the queue using a while loop and pop() method.
 * @param {Array} testQueue - Array of test case names.
 * @returns {number} - Total number of tests processed.
 */

export function processTestQueue(testQueue) {
  let processedCount = 0;

  while (testQueue.length > 0) {
    let currentTest = testQueue.pop();
    processedCount++;
    console.log(
      `Processing ${currentTest}, Remaining in queue: ${testQueue.length}`
    );
  }
  console.log("All tests processed, queue is empty");
  return processedCount++;
}
processTestQueue([
  "login_test",
  "logout_test",
  "registration_test",
  "password_reset_test",
  "profile_update_test",
]);

/**
 * Creates a function to manage test results by categorizing them into passed, failed, and skipped.
 * Logs the length of each category and returns all three arrays.
 * @returns {Array} - An array containing [passedTests, failedTests, skippedTests]
 */

export function manageTestResults() {
  let passedTests = [];
  let failedTests = [];
  let skippedTests = [];
  // Add sample date using push()
  passedTests.push("Login functionality");
  failedTests.push("payment_processing");
  skippedTests.push("email_notifications");

  console.log(`Passed tests count: ${passedTests.length}`);
  console.log(`Failed tests count: ${failedTests.length}`);
  console.log(`Skipped tests count: ${skippedTests.length}`);

  return [passedTests, failedTests, skippedTests];
}
manageTestResults();

/**
 * Step 1.3. Advanced Array Operations for Test Scenarios
 * Create a function with environment array and removes the last environment using pop() then add the first ellement to the end using push().
 * Display the modified array and return it.
 * @param {Array} environmentsArray - Array of test environments.
 * @returns {Array} - Modified array of test environments.
 */

export function rotateTestEnvironments(environmentsArray) {
  console.log("Before rotation:", environmentsArray);

  let firstElement = environmentsArray[0]; // access first element
  let lastElement = environmentsArray.pop(); // remove last element
  environmentsArray.push(firstElement); // add first element to the end
  environmentsArray[0] = lastElement; // set last element as first element

  console.log("After rotation:", environmentsArray);
  return;
}

rotateTestEnvironments(["development", "staging", "production"]);

/**
 * Validates the integrity of test data arrays.
 * @param {Array} testUsers - Array of test user emails.
 * @param {Array} testEnvironments - Array of test environments.
 * @param {Array} browserTypes - Array of browser types.
 * @returns {Array} validationIssues - Array of validation issues results.
 */

export function validateTestData(testUsers, testEnvironments, browserTypes) {
  let validationIssues = [];
  if (testUsers.length === 0) {
    validationIssues.push("No test users defined");
  }
  if (testEnvironments.length < 2) {
    validationIssues.push("Insufficient test environments");
  }
  if (browserTypes.length < 3) {
    validationIssues.push("Not enough browsers for testin");
  }
  console.log(`Validation:${browserTypes.length} browser(s) available`);
  return;
}

validateTestData(["dorice"], ["development", "staging"], ["Chrome", "Firefox"]);

/**
 * Generates a summary reports of tests results.
 * @param {Array} passedTests - Array of passed test names.
 * @param {Array} failedTests - Array of failed test names.
 * @param {Array} skippedTests - Array of skipped test names.
 * @returns {Object} - Summary object with counts of each category.
 */

export function generateTestReport(passedTests, failedTests, skippedTests) {
  let report = {
    passed: passedTests.length,
    failed: failedTests.length,
    skipped: skippedTests.length,
  };
  console.log(`Test Report - Passed: ${report.passed}' 
        - Failed: ${report.failed}' 
        - Skipped: ${report.skipped}`);
  return report;
}
generateTestReport(
  ["Login functionality"],
  ["payment_processing"],
  ["email_notifications"]
);
//end of file
