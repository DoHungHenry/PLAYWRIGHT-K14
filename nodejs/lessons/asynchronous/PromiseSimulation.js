// day 9

// Using thenable chaining
async1('param1')
    .then(returnValue1 => async2(returnValue1))
    .then(returnValue2 => async3(returnValue2))
    .then(returnValue3 => console.log(returnValue3));

// using async/await // same result as above
async function asyncFunction() {
    const returnValue1 = await async1('param1');
    const returnValue2 = await async2(returnValue1);
    const returnValue3 = await async3(returnValue2);
    console.log(returnValue3);
};
asyncFunction();

// using async/await: define and run in the same block
(async function () {
    const returnValue1 = await async1('param1');
    const returnValue2 = await async2(returnValue1);
    const returnValue3 = await async3(returnValue2);
    console.log(returnValue3);
})();

// Target: return a Promise
function async1(param1) {
    console.log('processing param 1 ', param1);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`1. async1: ${param1}`);
        }, 1000);
    });
};
function async2(param2) {
    console.log('processing param 2 ', param2);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`2. async2: ${param2}`);
        }, 1000);
    });
};
function async3(param3) {
    console.log('processing param 3 ', param3);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`3. async3: ${param3}`);
        }, 1000);
    });
};

