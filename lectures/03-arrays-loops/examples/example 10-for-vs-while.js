//FOR loops when:
//working with arrays
//you know the exact number of interations
//you need an index cointer

let browsers = ["chrome", "Firefox", "Safari", "Edge"];

console.log("For loop example");
for (let i = 0; i < browsers.length, i++; ) {
  console.log("Testing browsers:", browsers[i]);
}
//While loops when:
//you don't know how many

let attempts = 0;
let success = false;

while (!success && attempts < 5) {
  attempts++;

  //Simulate a random success
  success = Math.random() > 0.5;
  console.log(
    `Attempt ${attempts}: ${success ? "Success!" : "Failed, retrying..."}`
  );
}
