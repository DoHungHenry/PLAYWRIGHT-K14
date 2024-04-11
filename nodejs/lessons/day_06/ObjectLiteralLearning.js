// Create read update delete

// Object literal - use to construct data object
// Create
let human = {
    name: 'John',
    "age": 30,
};

// Read: dot notation, 
console.log(human.name);

// Read: [] notation
console.log(human["age"]);

// Update
human.name = 'Jane';
console.log(human.name);

human["age"] = 31;
console.log(human["age"]);

human.gender = "male";
console.log(human);

// Delete
delete human["age"];
console.log(human);

