const EXPECTED_TIME = 10;
let actualTime = 8;

if (actualTime > EXPECTED_TIME) {
    console.log("You are late");
} else if (actualTime === EXPECTED_TIME) {
    console.log("You are on time");
} else {
    console.log("You are early");
};