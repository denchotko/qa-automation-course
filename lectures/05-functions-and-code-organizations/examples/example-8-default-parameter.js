function analyzeTestResults(results, includedSkipped = true) {
  let analysisResults = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "SKIP" && !includedSkipped) {
      continue;
    }
    analysisResults.push(results[i]);
  }
  return analysisResults;
}

let testResults = ["PASS", "FAIL", "SKIP", "PASS"];
// console.log("Include skipped:", analyzeTestResults(testResults));
console.log("Exclude skipped:", analyzeTestResults(testResults, false));
