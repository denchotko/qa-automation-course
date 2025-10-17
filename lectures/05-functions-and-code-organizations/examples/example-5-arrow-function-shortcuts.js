let isPass = (result) => {
  return result === "PASS";
};

let isPass2 = (result) => result === "PASS";

let isPass3 = (result) => result === "PASS";

console.log(isPass("PASS"));

console.log(isPass("PASS"));
console.log(isPass2("FAIL"));
console.log(isPass3("PASS"));

let formatTime = (ms) => ms + "ms";
console.log(formatTime(500));

let isSlowTest = (time) => time > 1000;
console.log(isSlowTest(1001));

let countPassed = (results) =>
  results.filter((result) => result === "PASS").length;
console.log(countPassed(["PASS", "FAIL", "PASS"]));
