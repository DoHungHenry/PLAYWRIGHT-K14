let a = 1;
let b = 2;

let c = ++a + b++;

console.log(a, b, c); //2,3,4

// prefix => right operand => assign to left operand => left operand;