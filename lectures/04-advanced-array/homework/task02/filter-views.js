/* eslint-disable no-unused-vars */
/**
 * #Select subsets with filter
 * Filters out only the failed test results.
 *
 * @param {string[]} results - Array of test result strings like "PASS", "FAIL", "SKIP"
 * @returns {string[]} Array containing only "FAIL" entries
 */
function getFailedResults(results) {
  return results.filter(function (result) {
    return result === "FAIL";
  });
}
let results = ["PASS", "FAIL", "SKIP", "FAIL"];
let failed = getFailedResults(results);

/**
 * Filters tests to return only those with "HIGH" priority.
 *
 * @param {Array[]} tests - Array of test arrays shaped like [name, status, time, priority]
 * @returns {Array[]} Array of tests with priority "HIGH"
 */
function getHighPriorityTests(tests) {
  return tests.filter(([name, status, time, priority]) => priority === "HIGH");
}
let testData = [
  ["LoginTest", "PASS", 120, "HIGH"],
  ["SignupTest", "FAIL", 450, "LOW"],
  ["CheckoutTest", "SKIP", 300, "HIGH"],
  ["SearchTest", "PASS", 200, "MEDIUM"],
];

/**
 * Filters and returns only tests with execution time greater than 1000ms.
 *
 * @param {Array[]} tests - Array of test arrays shaped like [name, status, time, priority]
 * @returns {Array[]} Array of tests with time > 1000
 */
function getSlowTests(tests) {
  return tests.filter(function ([name, status, time, priority]) {
    return time > 1000;
  });
}

let highPriority = getHighPriorityTests(testData);
console.log(highPriority);

let testDataSlow = [
  ["LoginTest", "PASS", 120, "HIGH"],
  ["SignupTest", "FAIL", 1450, "LOW"],
  ["CheckoutTest", "SKIP", 300, "HIGH"],
  ["SearchTest", "PASS", 2000, "MEDIUM"],
];

let slowTests = getSlowTests(testDataSlow);

/**
 * Finds test names that contain a specific keyword.
 *
 * @param {string[]} names - Array of test name strings
 * @param {string} keyword - Keyword to search for
 * @returns {string[]} Array of names that include the keyword
 */
function findTestsByKeyword(names, keyword) {
  return names.filter(function (name) {
    return name.includes(keyword);
  });
}
let testNames = ["LoginTest", "SignupFlow", "CheckoutTest", "SearchFeature"];
let keyword = "Test";

let matched = findTestsByKeyword(testNames, keyword);

//Demonstration sample for each function
console.log(failed);
// Output: ["FAIL", "FAIL"]
console.log(highPriority);
// Output: [["LoginTest", "PASS", 120, "HIGH"], ["CheckoutTest", "SKIP", 300, "HIGH"]]
console.log(slowTests);
// Output: [["SignupTest", "FAIL", 1450, "LOW"], ["SearchTest", "PASS", 2000, "MEDIUM"]]
console.log(matched);
// Output: ["LoginTest", "CheckoutTest"]
