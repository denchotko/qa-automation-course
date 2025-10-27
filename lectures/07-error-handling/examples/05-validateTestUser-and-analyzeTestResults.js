function validatePassword(password) {
  if (!password) {
    throw new Error("Password is required!");
  }

  if (typeof password !== "string") {
    throw new Error("Password must be string");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (password.length > 100) {
    throw new Error("Password is too long (max 100 characters)");
  }

  return true;
}

let password = "212";
try {
  console.log("Is password valid:", validatePassword(password));
} catch (error) {
  console.log(
    ` The password: ${password} is not valid!. Error: ${error.message}`
  );
}

let validPassword = "54546545645645JKS554";
console.log("Is password valied:", validatePassword(validPassword));
