/**
 * # Aggregate metrics with reduce
 * Creates a functions with Array.redue to compute metrics such as counts, averages, and extremes.
 *
 *
 */

/**
 * Counts the number of each result type: "PASS", "FAIL", "SKIP".
 *
 * @param {string[]} results - Array of result strings like "PASS", "FAIL", "SKIP"
 * @returns {number[]} Array of counts: [passCount, failCount, skipCount]
 */
function countResultsByType(results) {
  return results.reduce(
    function (acc, result) {
      if (result === "PASS") {
        acc[0]++;
      } else if (result === "FAIL") {
        acc[1]++;
      } else if (result === "SKIP") {
        acc[2]++;
      }
      return acc;
    },
    [0, 0, 0]
  );
}

let sampleResults = ["PASS", "FAIL", "SKIP", "PASS", "FAIL"];
let counts = countResultsByType(sampleResults);

/**
 * Calculates the average execution time for passed tests.
 *
 * @param {string[]} results - Array of result strings like "PASS", "FAIL", "SKIP"
 * @param {number[]} times - Array of execution times in milliseconds (same length as results)
 * @returns {number} Average time for passed tests, or 0 if none passed
 */
function averageTimeForPassed(results, times) {
  const [totalTime, passedCount] = results.reduce(
    function (acc, result, index) {
      if (result === "PASS") {
        acc[0] += times[index]; // totalTime
        acc[1] += 1; // passedCount
      }
      return acc;
    },
    [0, 0]
  );

  return passedCount > 0 ? totalTime / passedCount : 0;
}
let results = ["PASS", "FAIL", "PASS", "SKIP"];
let times = [100, 500, 300, 200];

let avg = averageTimeForPassed(results, times);

/**
 * Finds the name of the slowest test based on execution times.
 *
 * @param {string[]} names - Array of test names
 * @param {number[]} times - Array of execution times (same length as names)
 * @returns {string} Name of the slowest test, or "" if arrays are empty
 */
function findSlowestTest(names, times) {
  if (names.length === 0 || times.length === 0) {
    return "";
  }

  const slowestIndex = times.reduce(function (
    slowestSoFar,
    currentTime,
    currentIndex
  ) {
    return currentTime > times[slowestSoFar] ? currentIndex : slowestSoFar;
  }, 0);

  return names[slowestIndex] || "";
}
let testNames = ["LoginTest", "SignupTest", "CheckoutTest"];
let testTimes = [120, 1450, 800];
let slowest = findSlowestTest(testNames, testTimes);

//Demonstration sample for each function
console.log(counts);
// Output: [2, 2, 1]
console.log(avg);
// Output: 200
console.log(slowest);
// Output: "SignupTest"
