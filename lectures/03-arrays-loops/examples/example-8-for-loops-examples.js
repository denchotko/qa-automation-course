let emaiList = ["valid@test.com", "invalid-email", "another@valid.com"];

for (let i = 0; i < emaiList.length; i++) {
  let email = emaiList[i];
  let isValid = email.includes("@") && ".";
  console.log("isValid", isValid);
}

let results = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
let resultsNumber = results.length;
console.log("Total results:", resultsNumber);
let firstResult = results[0];
if (firstResult === "PASS") {
  console.log("First result:", firstResult);
}

console.log("With LOOP");
let passCounter = 0;
for (let i = 0; i < results.length; i++) {
  if (results[i] === "PASS") {
    passCounter++;
  }
}

console.log("Total passe tests:", passCounter);
