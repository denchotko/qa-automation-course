/**
 * #Transform data with map
 * Transforms an array of test result strings into human-readable status messages.
 *Converts raw test status strings into emoji-labeled human-readable messages.
 * @param {string[]} results - Array of test result strings like "PASS", "FAIL", "SKIP"
 * @returns {string[]} Array of formatted status messages with emojis
 */

function buildVisualStatuses(results) {
  return results.map(function (status) {
    if (status === "PASS") {
      return "✅ PASSED";
    } else if (status === "FAIL") {
      return "❌ FAILED";
    } else {
      return "⏭️ SKIPPED";
    }
  });
}

let results = ["PASS", "FAIL", "SKIP", "UNKNOWN"];
const visualResults = buildVisualStatuses(results);

/**
 * Converts an array of execution times in milliseconds into formatted strings.
 * @param {number[]} times - Array of execution times in milliseconds
 * @returns {string[]} Array of formatted time strings ending with "ms"
 */
function formatExecutionTimes(times) {
  return times.map(function (time) {
    return `${time}ms`;
  });
}
let rawTimes = [120, 240, 2500];
let formatted = formatExecutionTimes(rawTimes);

/**
 * Generates test email addresses based on numeric IDs.
 * @param {number[]} ids - Array of numeric user IDs
 * @returns {string[]} Array of email strings like "testuser{id}@example.com"
 */
function generateTestEmails(ids) {
  return ids.map(function (id) {
    return `testuser${id}@example.com`;
  });
}
let ids = [101, 202, 303];
let emails = generateTestEmails(ids);

/**
 * Rates performance based on execution times.
 * @param {number[]} times - Array of execution times in milliseconds
 * @returns {string[]} Array of performance labels: "Fast", "Normal", or "Slow"
 */
function ratePerformance(times) {
  return times.map(function (time) {
    if (time < 300) {
      return "Fast";
    } else if (time < 1000) {
      return "Normal";
    } else {
      return "Slow";
    }
  });
}
let executionTimes = [150, 450, 1200, 999];
let ratings = ratePerformance(executionTimes);

// Demonstration sample for each function

console.log(visualResults);
// Output: ["✅ PASSED", "❌ FAILED", "⏭️ SKIPPED"]

console.log(formatted);
// Output :["120ms", "240ms", "2500ms"]

console.log(emails);
// Output: ["testuser101@example.com", "testuser202@example.com", "testuser303@example.com"]

console.log(ratings);
// Output: [ "Fast", "Normal", "Slow", "Normal ]
