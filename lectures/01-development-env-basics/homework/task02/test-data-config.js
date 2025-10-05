//Steps from 3 to 5 (Create test Date Configuration)

const BASE_URL = "https://demo-qa-site.com";
// eslint-disable-next-line no-unused-vars
const TIMEOUT_MS = 30000;

const apiEndpoints = {
  login: "https://demo-qa-site.com/login",
  users: "https://demo-qa-site.com/users",
  products: "https://demo-qa-site.com/products",
};

let testUser = {
  email: "testuser1@example.com",
  password: "SecurePassword123",
  expectWelcomeMessage: "Welcome to the dashboard",
};

let adminUser = {
  email: "admin@exmple.com",
  password: "adminSecret456",
};

let userId = 123;
let isLoggedIn = true;
let debugMode = true;
let runSlowTests = false;
let useTestData = true;

function loadTestScenario(userType) {
  const activeUser = userType === "admin" ? adminUser : testUser;
  console.log("Navigating to:", BASE_URL);
  console.log("=== Test Scenario Loaded ===");

  console.log("User Type:", userType);
  console.log("Email:", activeUser.email);
  console.log("Paswword", activeUser.password);
  console.log("Login Endpoints:", apiEndpoints);

  console.log("User ID type:", typeof userId);
  console.log("User is logged in:", isLoggedIn);
  console.log("Debug mode:", debugMode);
  console.log("Slow tests:", runSlowTests);
  console.log("Test data:", useTestData);
}
loadTestScenario("test");
loadTestScenario("admin");

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
function LogTestConfiguration() {
  const baseName = "testuser";
  const minPasswordLenght = 8;
  const emailDomain = "@testmail.com";
  const timestamp = Date.now();
  // Log configurations
  console.log("===Test Configuration Loaded===");
  console.log(`Base Name: ${baseName}`);
  console.log(`Lenght: ${minPasswordLenght}`);
  console.log(`Email Domain: ${emailDomain}`);
  console.log(`Timestamp: ${timestamp}`);
}

LogTestConfiguration();
