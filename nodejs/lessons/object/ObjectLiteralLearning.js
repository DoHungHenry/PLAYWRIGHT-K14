// day 6
// Create read update delete

// Object literal - use to construct data object
// Create
let human = {
    name: 'John',
    "age teo": 30,
};

// Read: dot notation - sử dụng khi key không chứa ký tự đặc biệt
console.log(human.name);

// Read: [] bracket syntax - sử dụng khi key chứa ký tự đặc biệt
console.log(human["age teo"]);

// Update
human.name = 'Jane'; // update thuộc tính hiện tại sử dụng dot notation
console.log(human.name);

human["age teo"] = 31; // update thuộc tính hiện tại sử dụng bracket syntax
console.log(human["age"]);

human.gender = "male"; // thêm thuộc tính mới
console.log(human);

// Delete
delete human["age"];
console.log(human);

