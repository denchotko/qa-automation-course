// Lecture 6 - Homework Assignment: Objects, Classes, and JSON
// The primary goal is to practice using JavaScript Objects, Arrays, and Classes to structure, analyze, and serialize test data.
// You will move from modeling individual test results to building a complete, reusable reporting tool and preparing its data for exchange via JSON.
//Task 3: JSON Serialization and Parsing

// Small userProfile object
let userProfile = {
  username: "testUser",
  email: "test@example.com",
  role: "qa",
  active: true,
};
// Small caseList array
let caseList = [
  { name: "login_test", status: "PASS", duration: 250 },
  { name: "logout_test", status: "FAIL", duration: 180 },
  { name: "register_test", status: "PASS", duration: 1200 },
];

// Helpers
export function toJson(value) {
  return JSON.stringify(value);
}
export function fromJson(jsonString) {
  return JSON.parse(jsonString);
}
// A. Convert userProfile to JSON
console.log(`Original userProfile type: ${typeof userProfile}`); // object
let profileJson = toJson(userProfile);
console.log(`Converted to JSON type: ${typeof profileJson}`); // string

// B. Parse JSON back and confirm property access
let parsedProfile = fromJson(profileJson);
console.log("\nParsed userProfile:");
console.log("- Email:", parsedProfile.email);
console.log("- Role:", parsedProfile["role"]);

// C. Convert caseList to JSON and parse back
let caseJson = toJson(caseList);
let parsedCases = fromJson(caseJson);
console.log("\nParsed caseList:");
console.log("- Total cases:", parsedCases.length);
console.log("- First case name:", parsedCases[0].name);
