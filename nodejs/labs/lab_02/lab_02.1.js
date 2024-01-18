/**
 * ## Lab 2.1:
Get input from user about height(m) and weight(kg) then calculate BMI
- Underweight = <18.5
- Normal weight = 18.5 – 24.9
- Overweight = 25–29.9
- Obesity = BMI of 30 or greater

```
BMI = weight / (height x 2)
```

 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your height (m): ", (inputHeight) => {
  readline.question("Enter your weight (kg): ", (inputWeight) => {
    // Your if-else statement goes here, using inputHeight and inputWeight
    let bmi = inputWeight / (inputHeight * inputHeight);

    if (bmi < 18.5) {
      console.log(`Underweight with BMI = ${bmi}`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log(`Normal weight with BMI = ${bmi}`);
    } else if (bmi >= 25 && bmi <= 29.9) {
      console.log(`Overweight with BMI = ${bmi}`);
    } else {
      console.log(`Obesity with BMI = ${bmi}`);
    }

    readline.close();
  });
});
