//Lecture 5
//Integration Task: Reusable Test Utilities Demo

// 1.GLOBAL SCOPE DATE DEFINITION
const names = [
  "Auth Flow",
  "Profile Update",
  "Payment API",
  "Cart Load",
  "Navigation",
  "Reporting",
];
const results = ["PASS", "FAIL", "PASS", "FAIL", "SKIP", "PASS"];
const times = [50, 1200, 345, 2005, 102, 890];

// 2. REQUIRED UTILITY FUNCTIONS

// From Task 1:
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

function formatExecutionTime(milliseconds) {
  //Check if the time is less than 1000 ms
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    const seconds = milliseconds / 1000;
    return seconds.toFixed(1) + "s";
  }
}

function findFailedTest(testNames, testResults) {
  let failedTests = [];
  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      failedTests.push(testNames[i]);
    }
  }
  return failedTests;
}
// From Task 2:
function isValidEmail(email) {
  let hasAtSymbol = email.includes("@");
  let hasDotSymbol = email.includes(".");
  let isNotEmpty = email.length > 0;
  return hasAtSymbol && hasDotSymbol && isNotEmpty;
}

//3.INTEGRATION AND OUTPUT
let totalTests = names.length;
let passedCount = countPassedTests(results);
let successRate = ((passedCount / totalTests) * 100).toFixed(1);

console.log("===TEST SUITE REPORT===");

// --- BASIC METRICS SECTION ---
console.log("\n=== BASIC METRICS ===");
console.log(`Total Tests Executed: ${totalTests}`);
console.log(`Tests Passed: ${passedCount}`);
console.log(`Success Rate: ${successRate}%`);

// --- FAILURES SECTION ---
let failures = findFailedTest(names, results);
console.log("\n====FAILURES===");
console.log(`Failed Test Names: [${failures.join(", ")}]`);

// --- FORMATTED TIMES SECTION ---
const formattedTimes = times.map(formatExecutionTime);
console.log("\n=== FORMATTED TIMES ===");
names.forEach((name, index) => {
  console.log(`\t- ${name}: ${formattedTimes[index]}`);
});

// --- EMAIL VALIDATION (SAMPLE) SECTION ---
console.log("\n=== EMAIL VALIDATION (SAMPLE) ===");
const validEmail = "qa.tester@project.com";
const invalidEmail = "missingdot@project";
const emptyEmail = "";

console.log(`'${validEmail}' is valid? ${isValidEmail(validEmail)}`);
console.log(`'${invalidEmail}' is valid? ${isValidEmail(invalidEmail)}`);
console.log(`'${emptyEmail}' is valid? ${isValidEmail(emptyEmail)}`);

console.log("\n=========================================");
