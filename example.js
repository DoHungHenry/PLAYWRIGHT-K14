function extractNumber(str) {
    const numericString = str.replace(/[^0-9.]/g, '');
    return Number(numericString);
};

let myStr1 = 'QTY: 1';
let myStr2 = 'B: $100.98 ';
let myStr3 = 'S: $0.0673 ';

console.log(extractNumber(myStr1)); // Outputs: 1
console.log(extractNumber(myStr2)); // Outputs: 100
console.log(extractNumber(myStr3)); // Outputs: 0