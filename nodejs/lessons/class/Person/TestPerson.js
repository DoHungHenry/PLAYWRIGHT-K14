const Person = require("./Person");

const teo = new Person("Teo", 10);

// don't use object properties directly
// console.log(`Name: ${teo._name} - Age: ${teo._age}`); 


// use getter and setter instead
console.log(`Name: ${teo.name} - Age: ${teo.age}`);

teo.name = "Teo Nguyen";
teo.age = 20;
console.log(`Name: ${teo.name} - Age: ${teo.age}`);