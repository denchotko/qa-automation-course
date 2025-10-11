//BAsic arithmetic in testing context

let baseTimeout = 5000; // 5 sec
let additionalTime = 2000; // 2 sec
let totalTimeout = baseTimeout + additionalTime;
console.log(`Total timeout: ${totalTimeout}ms`);

//Calculating test execution times
let testStartTime = 1000;
let testEndTime = 3500;
let executionTime = testEndTime - testStartTime;
console.log("Test executed in:" + executionTime + "ms");

// let startTime = Date.now();

// for (let i = 0; i < 1000000; i++) {

// }

// let endTime = Date.now();
// let executionTime = endTime - startTime;
// console.log(`Execution time: ${executionTime} ms`);

//Working with counts and iterations
let totalTests = 20;
let failedTests = 3;
let passedTests = totalTests - failedTests;
let successRate = (passedTests / totalTests) * 100;
console.log(`"Success rate:" ${successRate}%`);

//Modulo operator
let testDataSets = 4;
let currentIteration = 7;
let dateSetToUse = currentIteration % testDataSets; //Results in 3
console.log("Using test date set: ", dateSetToUse);

//Incrementing counters (common in loop)

let attemptCount = 0;
attemptCount++; //Same as attemptCount = attemptCount + 1 => 0+1 = 1
console.log("Attempt number: ", attemptCount);
