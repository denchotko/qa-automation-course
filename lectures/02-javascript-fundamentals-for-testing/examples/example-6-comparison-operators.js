// Test validation examples
let expectedStatusCode = 200;
let actualStatusCode = 200;
let expectedMessage = "Welcome";
let actualMessage = "Welcome";

// Equality checks (most common in testing)
console.log("Status code match:", expectedStatusCode == actualStatusCode); // true
console.log("Message match:", expectedMessage == actualMessage); // true

// Strict equality (recommended for testing)
console.log("Strict status check:", expectedStatusCode === actualStatusCode); // true
console.log("Type-safe check:", "200" === 200); // false - different types!

// Inequality checks
let errorCount = 0;
console.log("No errors:", errorCount == 0); // true
console.log("Has errors:", errorCount != 0); // false

// Numeric comparisons for validation
let responseTime = 250;
let maxAllowedTime = 500;
console.log("Performance OK:", responseTime < maxAllowedTime); // true
console.log("Within limits:", responseTime <= maxAllowedTime); // true

// Range validation
let userAge = 25;
let minAge = 18;
let maxAge = 65;
console.log("Age valid:", userAge >= minAge && userAge <= maxAge); // true
