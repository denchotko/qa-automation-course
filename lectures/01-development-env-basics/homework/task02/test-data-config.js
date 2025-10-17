//Steps from 3 to 5 (Create test Date Configuration)

const BASE_URL = "https://demo-qa-site.com";

const DEFAULT_TIMEOUT = 30000;

// A collection of API endpoints for the application.
const API_ENDPOINTS = {
  login: "/api/login",
  users: "/api/users",
  products: "/api/products",
};

// Using `let` for user credentials that might be reassigned in different test scenarios.
let testUserEmail = "testuser1@example.com";
let testUserPassword = "SecurePassword123";
let adminUserEmail = "admin.user@example.com";

// Expected text content for assertions.
let expectedWelcomeMessage = "Welcome to the dashboard";

// --- Feature Flags ---

// Boolean flags to control test execution behavior.
let debugMode = true;
let runSlowTests = false;
let useTestData = true;

// Code for building Data Validation function

function validateEmail(email) {
  const isValid = email.includes("@") && email.includes(".");
  console.log(`Email "${email}" is valid: ${isValid}`);
  return isValid;
}

validateEmail("test@example.com"); // Output: Email "test@example.com" is valid: true
validateEmail("invalid-email"); // Output: Email "invalid-email" is valid: false

function validatePassword(password) {
  let isValid = password.length >= 8;
  console.log(`Password "${password}" is valid: ${isValid}`);
  return isValid;
}

validatePassword("12345678"); // true
validatePassword("123456"); // false

//Code for function generate Unique email

function generateUniqueEmail(baseName) {
  const timestamp = Date.now();
  const email = `${baseName}${timestamp}@testmail.com`;
  console.log("Generated Email:", email);
  return email;
}

generateUniqueEmail("testuser");

//Code that shows the current timestamp when the configuration was loaded
function logTestConfiguration() {
  console.log("--- Current Test Configuration ---");
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Default Timeout: ${DEFAULT_TIMEOUT}`);
  console.log("Configured API endpoints:", Object.keys(API_ENDPOINTS));
  console.log(`Test User Email: ${testUserEmail}`);
  console.log(`Test User Password: ${testUserPassword ? "***" : "<none>"}`);
  console.log(`Admin User Email: ${adminUserEmail}`);
  console.log(`Expected Welcome Message: ${expectedWelcomeMessage}`);
  console.log(`Debug Mode: ${debugMode}`);
  console.log(`Use Test Data: ${useTestData}`);
  console.log(`Run Slow Tests: ${runSlowTests}`);
  console.log("---------------------------------");
}

logTestConfiguration();

export { validateEmail, generateUniqueEmail };
