//Lecture 5: Homework Assignment: Functions & Code Organization
//Task04: Uses global configuration and returns a result from inside a function

let testEnvironment = "staging";
let maxRetries = 3;

/**
 * Executes a test, simulating an attempt count and using global configuration.
 * @param {string} testName - The name of the test to run.
 * @returns {string} A summary of the test execution.
 */

function runTest(testName) {
  let attempts = maxRetries + 1; //Simulate a failed test if attempts > maxRetries
  let testResult;

  if (attempts <= maxRetries) {
    testResult = "PASS";
  } else {
    testResult = "FAIL";
  }

  // Logging a local variable inside its scope (Success)
  console.log(
    `[LOG] Inside runTest: Local variable 'attempts' is ${attempts}. (Accessible)`
  );

  return `[REPORT] Test: ${testName} | Env: ${testEnvironment} | Attempts: ${attempts} | Result: ${testResult}`;
}

/**
 * Updates the global maxRetries configuration value.
 * @param {number} newMaxRetries - The new value for maxRetries.
 * @returns {number} The updated global maxRetries value.
 */
function configureRetries(newMaxRetries) {
  // This line assigns the function parameter's value to the global variable.
  maxRetries = newMaxRetries;

  return maxRetries;
}
// ===============================================
// DEMONSTRATION OF SCOPE BEHAVIOR
// ===============================================

console.log("--- Initial Global State ---");
console.log(`Global maxRetries BEFORE config: ${maxRetries}`);

console.log("\n--- Running Tests (maxRetries=3) ---");
console.log(runTest("UserLoginCheck")); // Uses global maxRetries=3, attempts=4 -> FAIL
console.log(runTest("DataIntegrity")); // Uses global maxRetries=3, attempts=4 -> FAIL

// DEMO: Logging a local variable outside its function scope (Error)
// console.log(`Outside runTest: attempts is ${attempts}`);
// Uncommenting this line causes an error because the variable is function-scoped (local).

console.log("\n--- Configuring Global Retries ---");
let newRetries = 5;
configureRetries(newRetries);

console.log(
  `Global maxRetries AFTER config: ${maxRetries} (Modified Globally)`
);

console.log("\n--- Running Tests with New Config (maxRetries=5) ---");
console.log(runTest("SystemHealthCheck")); // Uses new global maxRetries=5, attempts=6 -> FAIL
