// Lecture 6 - Homework Assignment: Objects, Classes, and JSON
// The primary goal is to practice using JavaScript Objects, Arrays, and Classes to structure, analyze, and serialize test data.
// You will move from modeling individual test results to building a complete, reusable reporting tool and preparing its data for exchange via JSON.
//Task04: Integrate your objects, classes, and JSON utilities to produce a compact console report for a tiny dataset with minimal new code.

// === IMPORTS ===
import { TestUser, TestCase } from "../task02/task-02-classes.js";
import testUtils from "../task01/task-01-objects.js";
import { toJson, fromJson } from "../task03/task-03-json.js";

// === DATASET ===
// Users
const users = [
  new TestUser("user1", "user1@example.com", "pass1234", "(qa)", true),
  new TestUser("user2", "invalidemail.com", "short", "(dev)", false),
];

// Test cases using class
const testCases = [
  new TestCase("login_test", "Checks login with valid credentials"),
  new TestCase("logout_test", "Ensures logout clears session"),
];
testCases[0].complete("PASS", 850);
testCases[1].complete("FAIL", 1450);

// Sample cases for utility functions (with priority)
const sampleCases = [
  { name: "login_test", status: "PASS", duration: 250, priority: "high" },
  { name: "logout_test", status: "FAIL", duration: 180, priority: "medium" },
  { name: "register_test", status: "PASS", duration: 1200, priority: "high" },
  { name: "profile_test", status: "SKIP", duration: 0, priority: "low" },
  { name: "dashboard_test", status: "PASS", duration: 420, priority: "medium" },
  { name: "notification_test", status: "FAIL", duration: 280, priority: "low" },
];

// === METRICS USING sampleCases ===
console.log("=== BASIC METRICS ===");
console.log("Total cases:", sampleCases.length);
console.log("Total duration (ms):", testUtils.getTotalDuration(sampleCases));
console.log("Number of FAILs:", testUtils.getFailedTests(sampleCases).length);

console.log("\n=== PRIORITY HIGHLIGHTS ===");
console.log(
  "High priority test names:",
  testUtils.getHighPriorityNames(sampleCases)
);

console.log("\n=== USER VALIDATION ===");
users.forEach((user) => {
  console.log(user.getInfo(), "| Valid:", user.validate());
});

// === JSON DEMO ===
const userProfile = {
  username: "testUser",
  email: "test@example.com",
  role: "qa",
  active: true,
};

const caseList = [
  { name: "login_test", status: "PASS", duration: 250 },
  { name: "logout_test", status: "FAIL", duration: 180 },
  { name: "register_test", status: "PASS", duration: 1200 },
];

console.log("\nOriginal userProfile type:", typeof userProfile);
const profileJson = toJson(userProfile);
console.log("Converted to JSON type:", typeof profileJson);

const parsedProfile = fromJson(profileJson);
console.log("\nParsed userProfile:");
console.log("- Email:", parsedProfile.email);
console.log("- Role:", parsedProfile["role"]);

const caseJson = toJson(caseList);
const parsedCases = fromJson(caseJson);
console.log("\nParsed caseList:");
console.log("- Total cases:", parsedCases.length);
console.log("- First case name:", parsedCases[0].name);

// === JSON SUMMARY ===
console.log("\n=== JSON SUMMARY ===");
const report = {
  suiteName: "Core Functionality",
  environment: "staging",
  totalCases: sampleCases.length,
  failedCount: testUtils.getFailedTests(sampleCases).length,
  highPriorityNames: testUtils.getHighPriorityNames(sampleCases),
};

const reportJson = toJson(report);
console.log("JSON string:", reportJson);

const parsedReport = fromJson(reportJson);
console.log("Parsed suite name:", parsedReport.suiteName);
