//Test data as string

let testUserEmail = "john.doe@test.company.com";
let expectedSuccessMessage = "Login successful";
let baseURL = "https://staging-app.com";

//String conctenation - building dynamic test
let testMessage = "Testing user:" + testUserEmail;
console.log(testMessage);

//Template literals (modern JavaScript way) - more readable for complex strings
let loginAttempt = `Attempting log for ${testUserEmail} on ${baseURL}`;
console.log(loginAttempt);

//Multi-line strings for complex test data
