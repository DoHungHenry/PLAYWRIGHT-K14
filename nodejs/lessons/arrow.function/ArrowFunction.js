// day 12
const Post = require("../../labs/lab_11/Post");

// Function Declaration (hoisting works)
function sum(a, b) {
    return a + b;
};

// Function Expression
const sum = function (a, b) {
    return a + b;
};

// Arrow Function

const sum = (a, b) => a + b;

// Arrow Function with multiple lines

const sum = (a, b) => {
    return a + b;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.filter(num => num % 2 === 0)); // [2, 4]

// using arrow function with destructuring
// const p = post => new Post(post.userId, post.id, post.title, post.body);
// above line can be written as below
const tempPost = { userId: 1, id: 1, title: "title", body: "body" };
const p = ({ userId, id, title, body }) => new Post(userId, id, title, body);
console.log(p(tempPost)); // Post { _userId: 1, _id: 1, _title: 'title', _body: 'body' }


// Lexical this binding
const person = {
    name: "John",
    sayHi: function () {
        console.log(`Hi, my name is ${this.name}`);
    }
}