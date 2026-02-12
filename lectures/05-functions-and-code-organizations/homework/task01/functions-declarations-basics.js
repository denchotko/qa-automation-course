//Lecture 5: Homework Assignment: Functions & Code Organization
// Task 1: Refactor duplication with function declarations
// Objective: Remove repetitive logic by extracting it into clean, reusable function declarations.

/**
 * Counts the number of tests that resulted in a "PASS".
 * @param {string[]} results - An array of test results ("PASS", "FAIL", "SKIP").
 * @returns {number} The total count of "PASS" results.
 */

function countPassedTests(results) {
  let passedCount = 0;
  for (let i = 0; i < results.length; i++) {
    console.log(i);
    if (results[i] === "PASS") {
      passedCount++;
    }
  }
  return passedCount;
}
/**
 * Formats a execution time given in milliseconds to one decimal place converted to seconds.
 * @param {number} milliseconds - The duration in milliseconds.
 * @returns {string} The formatted time string (e.g., "50ms" or "1.5s").
 */

function formatExecutionTime(milliseconds) {
  //Check if the time is less than 1000 ms
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    const seconds = milliseconds / 1000;
    return seconds.toFixed(1) + "s";
  }
}

/**
 * Finds and returns the names of all tests that resulted in a "FAIL".
 * @param {string[]} testNames - An array of test names.
 * @param {string[]} testResults - An array of corresponding test results ("PASS", "FAIL", "SKIP").
 * @returns {string[]} An array containing the names of the failed tests.
 */

function findFailedTest(testNames, testResults) {
  let failedTests = [];
  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      failedTests.push(testNames[i]);
    }
  }
  return failedTests;
}

// Minimum demonstration to verify outputs.
let testResults = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];

let count = countPassedTests(testResults);

let names = ["login_test", "logout_test", "register_Test"];
let results = ["PASS", "FAIL", "PASS"];
let failures = findFailedTest(names, results);

console.log(`Passed Tests: ${count}`); // Output: Passed Tests: 3
console.log(`Formatted time : ${formatExecutionTime(999)}`); // Expected result:999ms
console.log(`Formatted time : ${formatExecutionTime(1000)}`); // Expected result:1.0s
console.log(`Formatted time : ${formatExecutionTime(1500)}`); // Expected result:1.5s
console.log(`Failed tests : ${failures}`);
