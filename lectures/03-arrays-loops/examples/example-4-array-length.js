let testEnvironments = ["development", "staging", "production"];

console.log("Number of environments:", testEnvironments.length); // 3
console.log("Last environment:", testEnvironments[testEnvironments.length - 1]); // "production"

// Using length in conditional logic
if (testEnvironments.length > 0) {
  console.log("We have environments to test");
} else {
  console.log("No test environments configured");
}

// Practical example: checking if we have enough test data
let userAccounts = ["user1@test.com", "user2@test.com"];
if (userAccounts.length >= 5) {
  console.log("Sufficient test users for comprehensive testing");
} else {
  console.log(`Need more test users. Current count: ${userAccounts.length}`);
}
