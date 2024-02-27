// A: Function declaration: hoisting
// param1, param2 - parameters
// 1, a: argument(s) là giá trị thực sự của param1, param2 tại thời điểm runtime
// inside {}: scope or codeblock or function body

// console.log(myVar); => ReferenceError: Cannot access 'myVar' before initialization because myVar is not hoisted outside function body
let myF = myFunction(1, a);
console.log(myF); // function is hoisted
function myFunction(param1, param2) {
    var myVar = 10;
    param1 = 1;
    param2 = 2;
    return param1 + param2;
};


let myFunctionValue = myFunction(1, 2);

// B: Function expression: no hoisting
const myFunction2 = function() {
  console.log('Hello world!');
};