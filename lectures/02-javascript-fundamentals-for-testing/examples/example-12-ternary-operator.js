// Basic ternary syntax: condition ? valueIfTrue : valueIfFalse
let testPassed = true;
let result = testPassed ? "PASS" : "FAIL";
console.log("Test result:", result);

// Practical testing examples
let userCount = 5;
let message = userCount > 0 ? `Found ${userCount} users` : "No users found";
console.log(message);

// Combining with function calls
function logTestResult(condition, testName) {
  let status = condition ? "✅ PASSED" : "❌ FAILED";
  console.log(`${testName}: ${status}`);
}

let statusCode = 200;
let responseTime = 300;

logTestResult(statusCode === 200, "Status Code Check");
logTestResult(responseTime < 500, "Performance Check");

// Nested ternary (use sparingly)
let priority =
  responseTime < 100 ? "fast" : responseTime < 500 ? "acceptable" : "slow";
console.log("Response priority:", priority);
