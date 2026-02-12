// /Use function expressions

let formatter;
let environment = "test";

if (environment === "development") {
  formatter = function (message) {
    return "[DEV]" + message;
  };
} else {
  formatter = function (message) {
    return message;
  };
}
console.log(formatter("Test completed"));

// Arrow functions

let testTimes = [200, 800, 1200, 450];
let slowTests = testTimes.filter((time) => time > 600);
console.log("Slow tests:", slowTests);

let formattedTimes = testTimes.map((time) => time + "ms");
console.log("Formatted", formattedTimes);

let total = testTimes.reduce((sum, time) => sum + time, 0);
console.log("Total time:", total);
