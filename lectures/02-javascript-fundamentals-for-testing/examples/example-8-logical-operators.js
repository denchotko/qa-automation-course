// (&&) all conditions must be true;
// (||) at least one conditions must be true;
// NOT (!) Reverses boolean true;
// AND operator (&&) - all conditions must be true

let isLoggedIn = true;
let hasPermissions = true;
let canAccessFeature = isLoggedIn && hasPermissions;
console.log("Can access feature:", canAccessFeature); // true

// OR operator (||) - at least one condition must be true
let isAdminUser = false;
let isOwner = true;
let canDeleteItem = isAdminUser || isOwner;
console.log("Can delete:", canDeleteItem); // true

// NOT operator (!) - reverses boolean value
let hasErrors = false;
let testPassed = !hasErrors;
console.log("Test passed:", testPassed); // true

// Complex test validation scenarios
let statusCode = 200;
let responseTime = 300;
let hasRequiredData = true;

let apiTestPassed = statusCode === 200 && responseTime < 500 && hasRequiredData;
console.log("API test passed:", apiTestPassed); // true
