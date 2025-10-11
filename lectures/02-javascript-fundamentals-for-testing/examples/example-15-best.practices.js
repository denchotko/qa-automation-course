// ✅ Good: Clear and readable conditions
function validateLoginForm(email, password) {
  if (!email || email.trim().length === 0) {
    return "Email is required";
  }

  if (!email.includes("@")) {
    return "Email format is invalid";
  }

  if (!password || password.length < 8) {
    return "Password must be at least 8 characters";
  }

  return "Form is valid";
}

// Test the validation
console.log(validateLoginForm("", "password")); // Email is required
console.log(validateLoginForm("user@test.com", "123")); // Password must be at least 8 characters
console.log(validateLoginForm("user@test.com", "password123")); // Form is valid

// ❌ Avoid: Deeply nested conditions that are hard to read
// ❌ Avoid: Complex ternary operators
// ❌ Avoid: Switch statements with many cases (consider objects instead)
