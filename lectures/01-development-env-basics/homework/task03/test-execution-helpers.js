function startTestSuite(suiteName) {
  console.log(`=== Starting Test Suite: ${suiteName} ===`);
  const startTime = new Date();
  console.log(`Start Time: ${startTime.toISOString()}`);
  return startTime;
}

function endTestSuite(suiteName, startTime) {
  const duration = (new Date() - startTime) / 1000;
  console.log(`=== Completed Test Suite: ${suiteName} ===`);
  console.log(`Duration: ${duration.toFixed(2)} seconds`);
  return duration;
}

const start = startTestSuite("Login Functionality Tests");

endTestSuite("Login Functionality Tests", start);

function logTestStep(stepNumber, description, status = "unknown") {
  const timestamp = new Date().toISOString();
  const message = `[${timestamp}] Step ${stepNumber}: ${description} — Status: ${status.toUpperCase()}`;

  const logMethods = {
    pass: console.log,
    fail: console.error,
  };

  (logMethods[status.toLowerCase()] || console.warn)(message);
}
logTestStep(1, "Login button is visible", "pass");
logTestStep(2, "Login with invalid credentials", "fail");

function generateTestReport(testResults) {
  const { passed, failed, skipped } = testResults;
  const total = passed + failed + skipped;
  const passRate = ((passed / total) * 100).toFixed(2);

  console.log("===Test Report===");
  console.log(`Total     :${total}`);
  console.log(`Passed    :${passed}`);
  console.log(`Failed    :${failed}`);
  console.log(`Skipped   :${skipped}`);
  console.log(`Pass %    :${passRate}%`);

  return { total, passed, failed, skipped, passRate: `${passRate}%` };
}
generateTestReport({ passed: 28, failed: 10, skipped: 6 });

function debugVariable(variableName, variableValue) {
  console.log("===Debuging Info===");
  console.log(`Name : ${variableName}`);
  console.log(`Value: ${variableValue}`);
  console.log(`Type : ${typeof variableValue}`);
}

debugVariable("username", "testuser");
debugVariable("age", 35);
debugVariable("isLoggedIn", true);

function compareExpectedActual(expected, actual) {
  const match = expected === actual;

  console.log("===Comparison Result===");
  console.log(`Expected: ${expected}`);
  console.log(`Actual  : ${actual}`);
  console.log(`Match   : ${match}`);

  return match;
}
compareExpectedActual("12", "12"); //returns true
compareExpectedActual("admin", "user"); //returns false

function logSystemInfo() {
  const timestamp = Date.now();
  const username = "testuser";
  const age = 35;
  const isLoggedIn = true;

  console.log("===System Info===");
  console.log(`Timestamp  : ${timestamp}`);
  console.log(`username   : ${typeof username}`);
  console.log(`age        : ${typeof age}`);
  console.log(`isLoggedIn : ${typeof isLoggedIn}`);

  const info = {
    timestamp: timestamp,
    stringTypeExample: typeof testString,
    numberTypeExample: typeof testNumber,
    booleanTypeExample: typeof testBoolean,
  };

  return info;
}

export {
  startTestSuite,
  endTestSuite,
  logTestStep,
  generateTestReport,
  logSystemInfo,
};
