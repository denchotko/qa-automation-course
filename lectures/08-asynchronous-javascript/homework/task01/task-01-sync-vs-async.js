//Lecture 8: Homework Assignment: Asynchronous JavaScript
//Task 01: Synchronous vs Asynchronous Execution
//Create tiny, reusable delay utilities for later tasks hich will allow you to understand the difference
//between synchronous and asynchronous execution order

// Synchronous flow demonstration
function logSynchronousFlow() {
  console.log("Start");
  console.log("Middle");
  console.log("End");
}

//Helper fucntion 1 - Asynchronous logging with setTimeout
function delayedLog(message, delayMs) {
  setTimeout(function () {
    console.log(message);
  }, delayMs);
}

//Helper function 2 - Promise-based delay function
function delay(ms) {
  return new Promise(function (resolve, reject) {
    if (ms >= 0) {
      setTimeout(function () {
        resolve(true); // ✅ Successful delay
      }, ms);
    } else {
      reject(new Error("Delay time must be non-negative")); // Invalid delay
    }
  });
}

// Run synchronous flow
logSynchronousFlow();

// Demonstrate async ordering
console.log("Before delay");
delayedLog("After 1000ms", 1000);
console.log("After scheduling delay");

// Export helpers for reuse in later tasks
export { delayedLog, delay };
