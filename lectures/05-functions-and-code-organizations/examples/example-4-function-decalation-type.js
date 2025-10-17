//***Function declaration***

// function calculateAverage(numbers) {
//   let sum = numbers.reduce(function (total, num) {
//     return total + num;
//   }, 0);

//   return sum / numbers.length;
// }
// console.log("Average:", calculateAverage([10, 20, 30])); // Output: Average: 20

//***Function Expression - storing a function in a variable***

// let calculateAverage1 = function (numbers) {
//   let sum = numbers.reduce(function (total, num) {
//     return total + num;
//   }, 0);
//   return sum / numbers.length;
// };
// console.log("Average 1:", calculateAverage1([10, 20, 30])); // Output: Average 1: 20

//***Arrow function - Short and simple functions***
let calculateAverage2 = (numbers) => {
  let sum = numbers.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum / numbers.length;
};
console.log("Average 2:", calculateAverage2([10, 20, 30]));
