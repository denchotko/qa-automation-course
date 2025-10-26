//Lecture 6 - Homework Assignment: Objects, Classes, and JSON
//The primary goal is to practice using JavaScript Objects, Arrays, and Classes to structure, analyze, and serialize test data.
// You will move from modeling individual test results to building a complete, reusable reporting tool and preparing its data for exchange via JSON.
// Task 1: Object Modeling for Test Data

//Create the object with initial properties
let testConfig = {
  suiteName: "LoginTests",
  envirenment: "staging",
  maxTimeoutMs: 5000,
};

//Add a new property using dot notation
testConfig.retryCount = 3;

//Creates a 3 user objects and one of them accessed the "role" using bracket notation.
let testUser1 = {
  username: "user1",
  email: "user1@example.com",
  password: "pass1234!",
  role: "qa",
  active: true,
  validate: function () {
    return (
      typeof this.username === "string" &&
      typeof this.email === "string" &&
      typeof this.password === "string" &&
      typeof this.role === "string" &&
      typeof this.active === "boolean" &&
      this.active === true
    );
  },
};

let testUser2 = {
  username: "user2",
  email: "user2@example.com",
  password: "pass!1289",
  role: "qa",
  active: true,
  validate: testUser1.validate,
};

let testUser3 = {
  username: "user3",
  email: "user3@example.com",
  password: "pass1256!",
  role: "qa",
  active: true,
  validate: testUser1.validate,
};

//Creates an array with 6 objects
//Implement this simple utilitis objects with methods
let testUtils = {
  getFailedTests(cases) {
    return cases.filter((test) => test.status === "FAIL");
  },

  getHighPriorityNames(cases) {
    return cases
      .filter((test) => test.priority === "high")
      .map((test) => test.name);
  },

  getTotalDuration(cases) {
    return cases.reduce((sum, test) => sum + test.duration, 0);
  },
};

export default testUtils;

let sampleCases = [
  { name: "login_test", status: "PASS", duration: 250, priority: "high" },
  { name: "logout_test", status: "FAIL", duration: 180, priority: "medium" },
  { name: "register_test", status: "PASS", duration: 1200, priority: "high" },
  { name: "profile_test", status: "SKIP", duration: 0, priority: "low" },
  { name: "dashboard_test", status: "PASS", duration: 420, priority: "medium" },
  { name: "notification_test", status: "FAIL", duration: 280, priority: "low" },
];

//---Minimal console demos---
console.log("Test configuration retry is set to:" + testConfig.retryCount);
console.log("User 1 valid:", testUser1.validate());
console.log("User 2 valid:", testUser2.validate());
console.log("User 3 role:", testUser3["role"]);

console.log("Failed Tests:", testUtils.getFailedTests(sampleCases));
console.log(
  "High Priority Test Names:",
  testUtils.getHighPriorityNames(sampleCases)
);
console.log("Total Duration:", testUtils.getTotalDuration(sampleCases), "ms");
