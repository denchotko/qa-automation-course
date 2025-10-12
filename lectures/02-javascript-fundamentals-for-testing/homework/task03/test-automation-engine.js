import {
  generateTestUserName,
  buildTestURL,
  createTestMessage,
  calculateResponseTime,
  calculateSuccessRate,
  adjustTimeout,
  incrementTestCounter,
  processTestEnvironment,
  extractTestInfo,
  buildTestSummary,
} from "./task01/test-data-generators.js";
import {
  validateStatusCode,
  validateResponseTime,
  validatePerformanceRange,
  compareVersions,
  validateErrorMessage,
  extractUserIdFromResponse,
  validateEmailFormat,
  processTestDataCSV,
  normalizeTestName,
  validateCompleteAPIResponse,
  checkTestEnvironmentAccess,
  validateTestNotFailed,
  complexValidationScenario,
} from "./task02/test-validators.js";
import {
  determineTestAction,
  validateTestData,
  processTestResults,
  getTestStatus,
  determineTimeout,
  formatTestDuration,
  getTestPriority,
  handleTestEnvironment,
  processHTTPStatusCode,
  selectTestDataSet,
  complexTestDecision,
} from "./task03/test-decision-engine.js";

/**
 * ==========================================================================
 * MASTER TEST AUTOMATION ENGINE (Refactored for Lecture 2 Scope)
 * ==========================================================================
 * This engine demonstrates a single end-to-end test scenario, integrating
 * all functions from Tasks 1-3 using only strings, numbers, operators, and
 * conditional logic (if/else, ternary, switch, nested conditions).
 */

function runTestAutomationWorkflow() {
  console.log("--- Starting Refactored Test Automation Workflow ---");

  // 1. Test Setup & Data Generation
  const environment = "staging";
  const testUserName = generateTestUserName("qa_user");
  const testURL = buildTestURL(environment, "users", 12345);
  console.log(`Generated Test User: ${testUserName}`);
  console.log(`Constructed Test URL: ${testURL}`);
  createTestMessage("User Creation", "STARTED", 0);
  processTestEnvironment("  staging-us-west  ");

  // 2. Test Execution Simulation
  const startTime = 1000;
  const endTime = 1350; // Simulated response time
  const responseTime = calculateResponseTime(startTime, endTime);

  // 3. Response Processing & Validation
  const apiResponseStatusCode = 201;
  const apiResponseMessage = "User created successfully with ID: usr_98765";
  const apiResponseEmail = "test@example.com";
  const apiResponseErrorMessage = "API error: invalid token.";
  const apiResponseErrorCount = 1;

  extractUserIdFromResponse(apiResponseMessage);
  validateStatusCode(201, apiResponseStatusCode);
  validateResponseTime(responseTime, 500);
  validatePerformanceRange(responseTime, 100, 1000);
  compareVersions("1.2.3", "1.2.4");
  validateErrorMessage(apiResponseErrorMessage);
  validateEmailFormat(apiResponseEmail);
  processTestDataCSV("test1,test2,test3");
  normalizeTestName("User Creation Test");
  extractTestInfo("UserCreation:PASSED:350ms");
  validateCompleteAPIResponse(
    apiResponseStatusCode,
    responseTime,
    true,
    apiResponseErrorCount
  );
  checkTestEnvironmentAccess("tester", true, environment);
  validateTestNotFailed(false, false, false);
  complexValidationScenario(
    apiResponseStatusCode,
    responseTime,
    "tester",
    5,
    environment
  );

  // 4. Decision-Making & Reporting
  const isResponseFullyValid =
    apiResponseStatusCode === 201 &&
    responseTime < 500 &&
    apiResponseErrorCount === 0;
  getTestStatus(isResponseFullyValid);
  processHTTPStatusCode(apiResponseStatusCode);
  let testResult;
  if (isResponseFullyValid) {
    testResult = determineTestAction("pass", 0);
  } else {
    testResult = determineTestAction("fail", 1);
  }
  console.log(`Determined Test Result: ${testResult}`);

  validateTestData(apiResponseEmail, "testpass456", 28);
  processTestResults(20, 18, environment);
  determineTimeout(environment);
  formatTestDuration(responseTime);
  getTestPriority(apiResponseErrorCount, responseTime);
  handleTestEnvironment(environment);
  selectTestDataSet("api");
  complexTestDecision("tester", environment, "api", true);

  // 5. Final Summary
  buildTestSummary("User Creation E2E Test", environment, 50, 180.5);
  incrementTestCounter(10);
  adjustTimeout(12000, 3);
  calculateSuccessRate(25, 22);

  console.log("--- Refactored Test Automation Workflow Completed ---");
}

runTestAutomationWorkflow();
