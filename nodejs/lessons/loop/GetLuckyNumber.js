const readLine = require("readline-sync");

let isPlaying = true;
while (isPlaying) {
    printGameMenu();
    let userChoice = getUserOption();

    if(userChoice == 0){
        isPlaying = false;
    } else if(userChoice == 1){
        let ranNum = Math.floor(Math.random() * 10) + 1;
        console.log("The lucky number is: " + ranNum);
        
    } else {
        console.log("Invalid option");
    };
}

console.log("Goodbye!");

function printGameMenu(){
    console.log("Game Menu");
    console.log("1. Generate a random number (1-10)");
    console.log("0. Exit");
};

function getUserOption(){
    let option = readLine.question("Enter your option: ");
    return parseInt(option);
};

