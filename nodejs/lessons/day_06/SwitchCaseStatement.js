const readLine = require("readline-sync");
const inputNum = getUserInputNum();

switch (inputNum) {
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  case 8:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input");
    break;
}

function getUserInputNum() {
  return readLine.question("Enter a number between 2 and 8: ");
}
