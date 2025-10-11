let results = ["PASS", "FAIL", "SKIP", "PASS", "FAIL"];

let formattedFailures = results
  .filter(function (result) {
    return result === "FAIL";
  })

  .map(function (result) {
    return "⚠️" + result + " - Needs Inventigation";
  });
console.log("Formatted failures:", formattedFailures);
