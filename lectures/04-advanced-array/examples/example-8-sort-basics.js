let testNames = ["zebrra_test", "alpha_test", "beta_test"];
let sortedNames = testNames.slice().sort();

console.log("Origin:", testNames);
console.log("Sorted:", sortedNames);

let score = [100, 20, 5, 30];
let wrongSort = score.slice().sort();
console.log("Wrong sort:", wrongSort);

let correctSort = score.slice().sort(function (a, b) {
  return b - a; //Descending order
});

console.log("Correct sort:", correctSort);
