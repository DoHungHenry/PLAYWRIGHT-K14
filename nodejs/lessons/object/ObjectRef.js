// day 6

let human = {
    name: 'John',
    age: 30,
    bankAccount: {
        balance: 1000,
        currency: 'USD',
    },
};

// memory address
let arr = [human, human];
arr[0].name = 'Jane'; // change both arr[0] and arr[1] because they are pointing to the same memory address

console.log(arr[1].name); 

// Sallow copy - spread syntax - one 1st level copy, bankAccount is still pointing to the same memory address   
let humanCopy = { ...human };
humanCopy.name = 'Jane';
humanCopy.bankAccount.balance = 2000;

console.log(human);
console.log(humanCopy);

// Sallow copy - Handle for nested object, array... (not for function, circular reference)
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
console.log('-');
console.log(Object.keys(human)); // ['name', 'age', 'bankAccount']

// Object.values(targetObject) - return array of values
console.log('- -');
console.log(Object.values(human)); // ['John', 30, { balance: 1000, currency: 'USD' }]

// Object.entries(targetObject) - return array of key-value pairs
console.log('- - -');
console.log(Object.entries(human)); // [['name', 'John'], ['age', 30], ['bankAccount', { balance: 1000, currency: 'USD' }]]