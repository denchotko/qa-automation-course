let firstTest = "login_test";
let secondTest = "logout_test";

console.log("Before swap:", firstTest, secondTest);

//Traditional swap

let temp = firstTest;
firstTest = secondTest;
secondTest = temp;

console.log("After traditional swap:", firstTest, secondTest);

//Destructuring
[firstTest, secondTest] = [secondTest, firstTest];
console.log("After Destructuring swap:", firstTest, secondTest);
