// Basic assignement
let testResult;
testResult = "pending";
console.log("Initial result:", testResult);

//Common assignement operators

let errCount = 0;
errCount += 1; //Same as errorCount = errorCount + 1;
errCount += 1;
console.log("Error so far:", errCount);

// Building test messages incrementally
let testLog = "Test started";
testLog += " - Navigation completed";
testLog += " - Login attempted";
testLog += " - Verification passed";
console.log("Final log:", testLog);

// Working with timeout calculations
let waitTime = 1000;
waitTime *= 2; // Double the wait time
console.log("Adjusted wait time:", waitTime + "ms");
