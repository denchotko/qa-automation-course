let incompletData = ["api_test", "PASS", 500];

let [testName, testStatus, executionTime = 100] = incompletData;

console.log(`Test: ${testName}, Status: ${testStatus}, Time: ${executionTime}`);
