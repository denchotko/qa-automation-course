/**Lecture 7 Homework assignement: Error handling
 * Practice defensive coding for QA automation by applying JavaScript's error handling tools.
 * Task 1: Safe Execution with try...catch
 */

//Safely attempts to parse a JSON string using JSON.parse, catching any errors
//that occur (like malformed JSON).

// task-01/task-01-try-catch.js

// ✅ safeParse: safely parse JSON string
export function safeParse(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return { ok: true, data: parsed };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

// ✅ safeGetEmail: safely access user.email
function safeGetEmail(user) {
  try {
    return user.email || "<no-email>";
  } catch (error) {
    console.log("safeGetEmail error:", error.message);
    return "<no-email>";
  }
}

// ✅ safePush: safely push value into array
function safePush(resultsArray, value) {
  try {
    resultsArray.push(value);
    return true;
  } catch (error) {
    console.log("safePush error:", error.message);
    return false;
  }
}

// ✅ safeSuccessRate: safely calculate success rate
export function safeSuccessRate(passed, total) {
  if (total === 0) return "0.00%";
  try {
    const rate = (passed / total) * 100;
    return `${rate.toFixed(2)}%`;
  } catch (error) {
    console.log("safeSuccessRate error:", error.message);
    return "N/A";
  }
}

// ✅ Console checks

// safeParse
console.log("safeParse valid:", safeParse('{"name":"Alice"}')); // { ok: true, data: { name: 'Alice' } }
console.log("safeParse invalid:", safeParse('{name:"Alice"}')); // { ok: false, error: ... }

// safeGetEmail
console.log(safeGetEmail({ email: "user@example.com" })); // "user@example.com"
console.log(safeGetEmail(null)); // "<no-email>"
console.log(safeGetEmail(undefined)); // "<no-email>"

// safePush

const arr = [];
console.log("safePush valid:", safePush(arr, 123)); // true
console.log("safePush result:", arr); // [123]
console.log("safePush invalid:", safePush(undefined, 456)); // false

// safeSuccessRate
console.log("safeSuccessRate valid:", safeSuccessRate(8, 10)); // "80.00%"
console.log("safeSuccessRate zero total:", safeSuccessRate(0, 0)); // "0.00%"
