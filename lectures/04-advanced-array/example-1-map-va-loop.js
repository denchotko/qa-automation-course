// let testResults = ["PASS", "FAIL", "PASS", "SKIP"];
// let formatResults = [];

// for(let i = 0, i < testResults.length, i++) {
//    if(testResults[i} === "PASS") {
//       formatedResults.push("===>Pass<===");
//    } else {
//       formatedResults.push("===>Other<===");
//    }
//  }

// console.log("Old may results:", formatedResults);

// let betterFormatted = testResults.map(function(results) {
//     if (testResults === "PASS" {
//         return "===>PASS(===)";

//     })
// }

let testCases = ["login", "logout", "register", "reset_password"];

// "test"->"test_login"

let testNames = testCases.map(function (testCase) {
  return "test_" + testCase;
});

console.log("Original:", testCases);
console.log("Transformed:", testNames);
