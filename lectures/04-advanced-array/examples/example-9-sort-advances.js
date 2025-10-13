// Sort test results by execution Time

let testNames = ["Logintest", "logout_test", "register_test", "delete_test"];
let executionTimes = [250, 100, 1200, 800];

//
let testIndices = [0, 1, 2, 3];

let sortedBytime = testIndices.slice().sort(function (indexA, indexB) {
  return executionTimes[indexA] - executionTimes[indexB];
});

console.log("Tests sorted by execution time");
sortedBytime.forEach(function (index) {
  console.log(`${testNames[index]} : ${executionTimes[index]}ms`);
});
