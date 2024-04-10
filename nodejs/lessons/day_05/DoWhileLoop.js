const readLine = require("readline-sync");

let guessingTime = 0;
let ranNum = getRandNum();

do {
    let userNum = getUserNum();
    if (userNum === ranNum) {
        console.log("You got it!");
        break;
    } else {
        console.log("Try again!");
        guessingTime++;
    };

} while (guessingTime < 3);

if (guessingTime == 3) {
    console.log("You lose!");
};

function getRandNum() {
    return Math.floor(Math.random() * 10) + 1;
};


function getUserNum() {
    let userNum = readLine.question("Enter your number: ");
    return parseInt(userNum);
};