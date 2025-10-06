// Test data as strings
let testUserEmail = "john.doe@testcompany.com";
let expectedSuccessMessage = "Login successful";
let baseURL = "https://staging-app.com";

// String concatenation - building dynamic test data
let testMessage = "Testing user: " + testUserEmail;
console.log(testMessage);

// Template literals (modern JavaScript way) - more readable for complex strings
let loginAttempt = `Attempting login for ${testUserEmail} on ${baseURL}`;
console.log(loginAttempt);

// Multi-line strings for complex test data
let testScenario = `
Test Case: User Login
User: ${testUserEmail}
Expected: ${expectedSuccessMessage}
Environment: ${baseURL}
`;
console.log(testScenario);
