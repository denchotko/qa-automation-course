let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function (accumulator, currentNumbers) {
  console.log(`Adding, ${currentNumbers} to ${accumulator}`);
  return accumulator + currentNumbers;
}, 0); //Start with 0

console.log("Total:", total);
