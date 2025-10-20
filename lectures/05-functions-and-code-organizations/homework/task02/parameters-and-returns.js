// Lection 5 Homework Assignment: Functions & Code Organization
// Task02: Parameters and return values in practical validators/formatters.
// Create a functions and getting useful results back, keeping the logic minimal and reusable.

/**
 * Checks if a string has the basic structure of a valid email
 * (contains "@" and "." and is not empty).
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if all three conditions are met, false otherwise.
 */

function isValidEmail(email) {
  let hasAtSymbol = email.includes("@");
  let hasDotSymbol = email.includes(".");
  let isNotEmpty = email.length > 0;
  return hasAtSymbol && hasDotSymbol && isNotEmpty;
}
console.log(isValidEmail("user@test.com")); // Expected result:true
console.log(isValidEmail("invalid-email")); // Expected result:false
console.log(isValidEmail("")); // Expected result:false

/**
 * Formats a duration given in milliseconds into a human-readable string.
 * @param {number} milliseconds - The duration in milliseconds.
 * @returns {string} The formatted time string (e.g., "50ms" or "1.5s").
 */

function formatDuration(milliseconds) {
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    return (milliseconds / 1000).toFixed(1) + "s";
  }
}
console.log(`Formatted time : ${formatDuration(999)}`); // Expected result:999ms
console.log(`Formatted time : ${formatDuration(1000)}`); // Expected result:1.0s
console.log(`Formatted time : ${formatDuration(1500)}`); // Expected result:1.5s

/**
 * Generates a test email address using a base name and an optional domain.
 * The default domain is "testcompany.com".
 * @param {string} baseName - The local part of the email (e.g., "user123").
 * @param {string | undefined} domain - The domain part (e.g., "example.com") or undefined.
 * @returns {string} The complete email address.
 */

function generateTestEmail(baseName, domain) {
  if (!domain) {
    domain = "testcompany.com";
  }
  return baseName + "@" + domain;
}

// Test email generation
console.log("Generated emails:");
console.log(generateTestEmail("john", "testcompany.com")); // With domain: "john@testcompany.com"
console.log(generateTestEmail("sarah")); //Without Domain:sarah@testcompany.com//
