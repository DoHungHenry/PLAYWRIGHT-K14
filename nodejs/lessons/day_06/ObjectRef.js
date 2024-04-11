let human = {
    name: 'John',
    age: 30,
    bankAccount: {
        balance: 1000,
        currency: 'USD',
    },
};

// Shallow copy - spread syntax - one level copy
let humanCopy = { ...human };
humanCopy.name = 'Jane';
humanCopy.bankAccount.balance = 2000;

console.log(human);
console.log(humanCopy);

// Shallow copy - Handle for nested, array
let bi = {
    name: 'John',
    age: 30,
    bankAccount: {
        balance: 1000,
        currency: 'USD',
    },
};

let biCopy = JSON.parse(JSON.stringify(bi));
biCopy.name = 'Jane';
biCopy.bankAccount.balance = 2000;

console.log(bi);
console.log(biCopy);

// Object.keys(targetObject) - return array of keys
console.log(Object.keys(human));

// Object.values(targetObject) - return array of values
console.log(Object.values(human));

// Object.entries(targetObject) - return array of key-value pairs
console.log(Object.entries(human));