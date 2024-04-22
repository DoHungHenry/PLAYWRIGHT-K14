/* 
# DAY 07's LAB

Given string: 'Hello, my name is John, and my job is a developer, what your name, what your job'
Use object to group words and count the number of words
name: 2
job: 2

* Please solve the excersize for countWords in the session by using object, not a Map
(do NOT use Object.entries() method to get a map)
* The program need to allow user to input a sentence, not hard code

*/

const readLine = require("readline-sync");

const userInputStr = readLine.question("Please input a sentence: ");

// replace all the special characters with empty string
const replacedStr = userInputStr.replace(/[^\w\s]/gi, "");

// replace all the place that include more than one space with one space
const cleanedStr = replacedStr.replace(/\s{2,}/gi, " ");

// split the string by space
const individualWords = cleanedStr.split(" ");

// create an object to store the word and the number of word
let wordCount = {};

// loop through the array of words
for (const word of individualWords) {
  // if the word is not in the object, add the word to the object and set the value to 1
  if (!wordCount[word]) {
    wordCount[word] = 1;
  } else {
    // if the word is in the object, increase the value by 1
    wordCount[word] += 1;
  }
}

// print out the result
for (const key in wordCount) {
  console.log(`${key}: ${wordCount[key]}`);
}
