// Lab 2.1 + Suggest user to increase/decrease weight

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your height (m): ", (inputHeight) => {
  readline.question("Enter your weight (kg): ", (inputWeight) => {
    // Your if-else statement goes here, using inputHeight and inputWeight
    let bmi = inputWeight / (inputHeight * inputHeight);

    if (bmi < 18.5) {
      console.log(
        `Underweight with BMI = ${bmi}, you should increase your weight`
      );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log(
        `Normal weight with BMI = ${bmi}, you should maintain your weight`
      );
    } else if (bmi >= 25 && bmi <= 29.9) {
      console.log(
        `Overweight with BMI = ${bmi}, you should decrease your weight`
      );
    } else {
      console.log(`Obesity with BMI = ${bmi}, you should decrease your weight`);
    }

    readline.close();
  });
});
