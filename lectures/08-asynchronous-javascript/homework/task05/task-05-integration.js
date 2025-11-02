////Lecture 8: Homework Assignment: Asynchronous JavaScript
//Integration Task: Async Test Runner
//Combine your helpers into a tiny, readable runner that simulates preparing data, executing a few async “tests,” and printing a summary without crashes.

//Reuse helpers from previous tasks
import { delayedLog, delay } from "../task01/task-01-sync-vs-async.js";
import { runSafeOperation } from "../task04/task-04-async-await-try-catch.js";

//Main assync runner
async function run() {
  console.log("Preparing test data...");
  delayedLog("Preparation step A done", 500);
  await delay(700); // Simulate second preparation step

  //Define operations
  const operations = [
    "loadUser",
    "fetchReport",
    "failAuth",
    "syncData",
    "failBackup",
  ];
  const results = [];
  let passed = 0;
  let failed = 0;

  for (let name of operations) {
    const shouldFail = name.includes("fail"); // Simple failure rule
    const result = await runSafeOperation(name, shouldFail);
    results.push(result);
    if (result.ok) {
      passed++;
    } else {
      failed++;
    }
  }
  // 📊 Summary
  const summary = {
    total: operations.length,
    passed,
    failed,
  };

  console.log("Summary:", summary);
}

run();
