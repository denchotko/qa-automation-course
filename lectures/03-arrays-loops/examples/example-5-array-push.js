let testResults = ["PASS", "FAIL"];
console.log("Initial results:", testResults);

// Adding new test results as they come in
testResults.push("PASS");
console.log("After adding one result:", testResults);

testResults.push("SKIP");
testResults.push("FAIL");
console.log("After adding more results:", testResults);

// Practical example: collecting failed test names
let failedTests = [];
failedTests.push("login_with_invalid_email");
failedTests.push("password_reset_with_expired_token");

console.log("Failed tests to investigate:", failedTests);
console.log("Number of failures:", failedTests.length);

// Using push() with conditional logic
let statusCode = 404;
let errors = [];

if (statusCode >= 400) {
  errors.push(`HTTP Error: ${statusCode}`);
}

if (errors.length > 0) {
  console.log("Errors found:", errors);
}
