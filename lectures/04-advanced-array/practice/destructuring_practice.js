// Example rawTestData array with one test data entry
// const rawTestData = [["Login Test", "Passed", 120, "High"]];

// let [testName, testStatus, time, priority] = rawTestData[0];

// console.log(`Name: ${testName}`);
// console.log(`Status: ${testStatus}`);
// console.log(`Execution Time: ${time}ms`);
// console.log(`Priority: ${priority}`);

// TRANSFORM DATA WITH MAP

// 

let formattedReports = rawTestData.map(test => {
  let [testName, testStatus, time, priority] = test;
  let icon = testStatus === "PASS" ? "✅" :
             testStatus === "FAIL" ? "❌" : "❤️";
  return `${icon} ${testName} (${time}ms) - ${priority} priority`;
});

formattedReports.forEach(report => console.log(report));
