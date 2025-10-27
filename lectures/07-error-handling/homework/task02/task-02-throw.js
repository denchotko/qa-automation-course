/**Lecture 7 Homework assignement: Error handling
 * Practice defensive coding for QA automation by applying JavaScript's error handling tools.
 * Task 2: Custom Validation with throw
 */

// ✅ validateRequired
export function validateRequired(value, fieldName) {
  if (!value) {
    throw new Error(fieldName + " is required");
  }
}

// ✅ validateArray
export function validateArray(data, fieldName) {
  if (!Array.isArray(data)) {
    throw new TypeError(fieldName + " must be an array");
  }
}

// ✅ validateRange
export function validateRange(value, min, max, fieldName) {
  if (value < min || value > max) {
    throw new RangeError(`${fieldName} must be between ${min} and ${max}`);
  }
}

// ✅ validateEmail (lecture-friendly)
function validateEmail(email) {
  if (
    typeof email !== "string" ||
    email.length < 5 ||
    !email.includes("@") ||
    !email.includes(".")
  ) {
    throw new Error("Invalid email format");
  }
}

// ✅ validatePassword (simple rules)
function validatePassword(password) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let hasDigit = false;

  for (let i = 0; i < digits.length; i++) {
    if (password.includes(digits[i])) {
      hasDigit = true;
      break;
    }
  }

  if (typeof password !== "string" || password.length < 8 || !hasDigit) {
    throw new Error("Password does not meet minimum requirements");
  }
}

// ✅ validateTestResults
export function validateTestResults(results) {
  validateArray(results, "Test results");

  for (let i = 0; i < results.length; i++) {
    const test = results[i];
    const validStatus = ["PASS", "FAIL", "SKIP"];

    if (
      typeof test !== "object" ||
      !validStatus.includes(test.status) ||
      typeof test.duration !== "number" ||
      test.duration < 0
    ) {
      throw new Error("Invalid test result at index " + i);
    }
  }
}

// ✅ Demonstration Calls

// validateRequired
try {
  validateRequired("", "Username");
} catch (error) {
  console.log(error.name, error.message); // Error Username is required
}

// validateArray
try {
  validateArray("not-an-array", "Items");
} catch (error) {
  console.log(error.name, error.message); // TypeError Items must be an array
}

// validateRange
try {
  validateRange(150, 0, 100, "Score");
} catch (error) {
  console.log(error.name, error.message); // RangeError Score must be between 0 and 100
}

// validateEmail
try {
  validateEmail("bademail");
} catch (error) {
  console.log(error.name, error.message); // Error Invalid email format
}

// validatePassword
try {
  validatePassword("weakpass");
} catch (error) {
  console.log(error.name, error.message); // Error Password does not meet minimum requirements
}

// validateTestResults
try {
  validateTestResults([
    { status: "PASS", duration: 5 },
    { status: "FAIL", duration: 3 },
    { status: "UNKNOWN", duration: 2 }, // Invalid status
  ]);
} catch (error) {
  console.log(error.name, error.message); // Error Invalid test result at index 2
}
