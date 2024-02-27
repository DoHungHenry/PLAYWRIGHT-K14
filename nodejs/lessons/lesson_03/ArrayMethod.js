const { filterEvenNums, sortNumAsc, sortNumDesc } = require('../utils/ArrayHelper');

// Literal declaration
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Most of methods to process an array can accept a function by parameter
// 1.1 filter
let evenNums = myArr.filter(filterEvenNums);

// 1.2 map st -> logic -> st else
const a = myArr.map(convertToEvenNums);

function convertToEvenNums(value, index, array) {
    if (value % 2 === 0) {
        return value;
    } else {
        return value + 1;
    };
}

// 1.3 sort: desc and asc
// sort string
const strArr = ['a', 'c', 'b', 'd', 'e'];
strArr.sort();
strArr.reverse();

// sort number
const numArr = [123, 31, 226, 43, 47];
numArr.sort(); // 123, 226, 31, 43, 47 => wrong
numArr.sort(sortNumAsc);
numArr.sort(sortNumDesc);

// 1.4 forEach




console.log(numArr);