let testQueue = ["test1", "test2", "test3", "test4"];
console.log("Test queue:", testQueue);

// Process tests one by one (removing from end)
let currentTest = testQueue.pop();
console.log("Running test:", currentTest); // "test4"
console.log("Remaining tests:", testQueue); // ["test1", "test2", "test3"]

let nextTest = testQueue.pop();
console.log("Next test:", nextTest); // "test3"
console.log("Queue after running 2 tests:", testQueue);

// Practical example: managing a retry stack
let retryStack = [];
retryStack.push("failed_login_test");
retryStack.push("failed_api_test");

console.log("Tests to retry:", retryStack);

// Retry the most recent failure first
let testToRetry = retryStack.pop();
console.log("Retrying:", testToRetry);
console.log("Remaining retries:", retryStack);
