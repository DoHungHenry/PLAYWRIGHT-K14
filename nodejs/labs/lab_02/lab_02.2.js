/**
 * ## Lab 2.2:
Allow user to input a number, print out it’s an odd or even number
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your num: ", (inputStr) => {
  inputNum = parseInt(inputStr);
  if (inputNum % 2 == 0) {
    console.log(`Even number`);
  } else {
    console.log(`Odd number`);
  }
});
