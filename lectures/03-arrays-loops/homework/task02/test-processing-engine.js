/**
 * Building a tests for the processing engine using for loops and while loops
 to automate repetetive testing tasks. 

 * Step 2.1. For Loop Test Data Processors  
 * Processes all test users by logging each one and returning the total count.  \
 * @param {Array} testUsers - Array of user email strings.
 * @returns {number} - Total number of users processed.
 */

export function processAllTestUsers(testUsers) {
  for (let i = 0; i < testUsers.length; i++) {
    console.log(`Processing user ${i + 1}: ${testUsers[i]}`);
  }

  console.log(`Total users processed: ${testUsers.length}`);
  return testUsers.length;
}
processAllTestUsers([
  "dorice@example.com",
  "Al@example.com",
  "baby_G@example.com",
]);

/**
 * Validates a list of emails by cheking fr the "@" symbol using a for loop.
 * @param {Array} emailList - Array of email strings to validate.
 * @returns {Array} - Array of valid email strings.
 */

export function validateEmailList(emailList) {
  let validEmails = [];
  let invalidEmails = [];

  for (let i = 0; i < emailList.length; i++) {
    if (emailList[i].includes("@")) {
      validEmails.push(emailList[i]);
      console.log(`Valid email found: ${emailList[i]}`);
    } else {
      invalidEmails.push(emailList[i]);
      console.log(`Invalid email found: ${emailList[i]}`);
    }
  }
  console.log(`Total valid emails: ${validEmails.length}`);
  console.log(`Total invalid emails: ${invalidEmails.length}`);

  return validEmails;
}
validateEmailList(["dorice@example.com", "Alexample.com", "example.com"]);

/**
 * Calculations total,average, and slowest response time from array.
 * @param {Array} responseTimes - Array of response time numbers in ms.
 * @returns {Object} - Object containing total, average, and slowest response times.
 */

export function calculateResponseTimes(responseTimesArray) {
  let totalTime = 0;
  let slowestTime = 0;

  for (let i = 0; i < responseTimesArray.length; i++) {
    let time = responseTimesArray[i];
    totalTime += time;

    if (time > slowestTime) {
      slowestTime = time;
    }

    console.log(`Response ${i + 1}: ${time}ms`);
  }

  let averageTime = totalTime / responseTimesArray.length;

  console.log(`Total time: ${totalTime}ms`);
  console.log(`Average time: ${averageTime.toFixed(2)}ms`);
  console.log(`Slowest time: ${slowestTime}ms`);

  return [totalTime, averageTime, slowestTime];
}
calculateResponseTimes([120, 200, 150, 300, 250]);

/**
 * Simulates execution of tests cases and tracks their results.
 * @param {Array} testCases - Array of test case names.
 * @returns {string} executionResults - Summary of test execution results.
 */

/**
 * Executes test cases and logs results using a for loop.
 * @param {string[]} testCases - Array of test case names
 * @returns {string[]} - Array of result strings like "testName:PASS" or "testName:FAIL"
 */
export function executeTestCases(testCases) {
  let executionResults = [];
  let passedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < testCases.length; i++) {
    let status = i % 3 === 0 ? "FAIL" : "PASS";
    let result = `${testCases[i]}:${status}`;
    executionResults.push(result);
    console.log(`Executed: ${testCases[i]} - ${status}`);

    if (status === "PASS") {
      passedCount++;
    } else {
      failedCount++;
    }
  }

  console.log(`Total Passed: ${passedCount}`);
  console.log(`Total Failed: ${failedCount}`);

  return executionResults;
}

/**
 * Step 2.2. Builds while Loop Test Data Processing Systems
 * Simulating retrying  atest failed up to 3 times.
 * @param {string} testName - Name of the test case to retry.
 * @returns {[boolean, number]} - [testPassed, attempts]
 */

export function retryFailedTest(testName) {
  let attempts = 0;
  let maxRetries = 3;
  let testPassed = false;

  while (attempts < maxRetries && !testPassed) {
    attempts++;
    if (attempts === 3) {
      // Simulate a pass on the 3rd attempt
      testPassed = true;

      let status = testPassed ? "PASS" : "FAIL";
      console.log(`Retry attempt ${attempts} for ${testName}: ${status}`);
    }

    if (testPassed) {
      console.log(`${testName} passed after ${attempts} attempt(s).`);
    } else {
      console.log(`${testName} failed after ${attempts} attempt(s).`);
    }
  }
  return [testPassed, attempts];
}

retryFailedTest("login_test");

/**Monitors and processes a test queue with a time limit.
 * @param {string[]} testQueue - Array of test names
 * @returns {[number, number]} - [processedCount, remainingQueueLength]
 */

export function monitorTestQueue(testQueue) {
  let processedCount = 0;
  let maxProcessingTime = 10; // seconds

  while (testQueue.length > 0 && processedCount < maxProcessingTime) {
    testQueue.pop();
    processedCount++;
    console.log(
      `Processed test ${processedCount}, Queue remaining: ${testQueue.length}`
    );
  }

  if (testQueue.length === 0) {
    console.log("Processing stopped: All tests completed.");
  } else if (processedCount === maxProcessingTime) {
    console.log("Processing stopped: Time limit reached.");
  }

  return [processedCount, testQueue.length];
}

/**
 * Cretas a function that processing a stream of test results and calculates statistics.
 * @param {string[]} testResults - Array of test result strings like "PASS", "FAIL", "SKIP"
 * @returns {[number, number, number]} - [passCount, failCount, successRate]
 */

export function analyzeTestResults(testResults) {
  let passCount = 0;
  let failCount = 0;
  let currentIndex = 0;

  while (currentIndex < testResults.length) {
    let result = testResults[currentIndex];
    if (result === "PASS") {
      passCount++;
    } else if (result === "FAIL") {
      failCount++;
    }
    console.log(`Processing result ${currentIndex + 1}: ${result}`);
    currentIndex++;
  }
  let total = passCount + failCount;
  let successRate = total > 0 ? (passCount / total) * 100 : 0;

  return [passCount, failCount, successRate.toFixed(2)];
}
analyzeTestResults(["PASS", "FAIL", "PASS", "SKIP", "FAIL", "PASS"]);

/**
 * Comppares data processing using for loop vs while loop.
 * @param {Array} dataArray - Array of data items to process.
 * @returns {[number, number]} - [forProcessedCount, whileProcessedCount]
 */

export function compareLoopProcessing(dataArray) {
  console.log("Comparing for loop vs while loop approaches");

  let forProcessedCount = 0;
  let forStartTime = Date.now();

  for (let i = 0; i < dataArray.length; i++) {
    forProcessedCount++;
  }

  let forEndTime = Date.now();
  let forDuration = forEndTime - forStartTime;

  let whileProcessedCount = 0;
  let index = 0;
  let whileStartTime = Date.now();

  while (index < dataArray.length) {
    whileProcessedCount++;
    index++;
  }

  let whileEndTime = Date.now();
  let whileDuration = whileEndTime - whileStartTime;

  console.log(
    `For loop processed ${forProcessedCount} items in ${forDuration}ms`
  );
  console.log(
    `While loop processed ${whileProcessedCount} items in ${whileDuration}ms`
  );

  return [forProcessedCount, whileProcessedCount];
}

compareLoopProcessing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//ENd of file

export function task02Function() {
  console.log("Task 2 executed");
}
