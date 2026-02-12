//Lecture 5: Homework Assignment: Functions & Code Organization
//Task03:Create a function type in three variants.

// --- 1. Function Declaration ---
/**
 * Formats a test result using a function declaration.
 * Uses a ternary operator to select an icon based on the status.
 */
function formatTestResultDecl(testName, status) {
  let icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + "(" + status + ")";
}

// --- 2. Function Expression ---
/**
 * Formats a test result using a function expression assigned to 'let'.
 */
let formatTestResultExpr = function (testName, status) {
  let icon = status === "PASS" ? "✅" : "❌";

  return icon + " " + testName + " (" + status + ")";
};

// --- 3. Arrow Function ---
/**
 * Formats a test result using an arrow function assigned to 'let'.
 */
let formatTestResultArrow = (testName, status) => {
  let icon = status === "PASS" ? "✅" : "❌";

  return icon + " " + testName + " (" + status + ")";
}; // Semicolon here too, as it's an assignment.

// --- Example Usage to Demonstrate All Three ---

const name1 = "LoginCheck";
const name2 = "SqlConnection";

console.log("--- Function Declaration ---");
console.log(formatTestResultDecl(name1, "PASS")); // ✅ LoginCheck (PASS)
console.log(formatTestResultDecl(name2, "FAIL")); // ❌ DBConnection (FAIL)

console.log("\n--- Function Expression ---");
console.log(formatTestResultExpr(name1, "PASS")); // ✅ LoginCheck (PASS)
console.log(formatTestResultExpr(name2, "FAIL")); // ❌ DBConnection (FAIL)

console.log("\n--- Arrow Function ---");
console.log(formatTestResultArrow(name1, "PASS")); // ✅ LoginCheck (PASS)
console.log(formatTestResultArrow(name2, "FAIL")); // ❌ DBConnection (FAIL)

// Implement average function in three variants:

// --- 1. Function Declaration ---
/**
 * Formats a test result using a function declaration.
 */

function calculateAverage(numbers) {
  let sum = numbers.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum / numbers.length;
}

// 2. Function Expression (Using Array.reduce)
/**
 * Calculates the average of an array of numbers using a function expression.
 */

let calculateAverage1 = function (numbers) {
  let sum = numbers.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum / numbers.length;
};

// 3. Arrow Function (Using Array.reduce)
/**
 * Calculates the average of an array of numbers using an arrow function.
 */

let calculateAverage2 = (numbers) => {
  let sum = numbers.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum / numbers.length;
};

// --- Example Usage to Demonstrate All Three average functions---

console.log("Average:", calculateAverage([10, 20, 30])); // Output: Average: 20
console.log("Average 1:", calculateAverage1([10, 20, 30])); // Output: Average 1: 20
console.log("Average 2:", calculateAverage2([10, 20, 30])); // Output: Average 2: 20
