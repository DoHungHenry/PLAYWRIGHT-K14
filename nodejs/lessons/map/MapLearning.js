// CRUD
let myMap = new Map();

myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("job", "Developer");
myMap.set("hobby", "Reading");
myMap.set("address", "123 Main St");


console.log(myMap);

// read a single value from the map by key
console.log(myMap.get("name")); // John

// has
console.log(myMap.has("name")); // true

// Loop the map's entries
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// myMap.keys() returns an iterator
for (const key of myMap.keys()) { 
    console.log(key);
}
// convert this iterator to an array
let keys = Array.from(myMap.keys());

// myMap.values() returns an iterator
for (const value of myMap.values()) { 
    console.log(value);
}
// convert this iterator to an array
let values = Array.from(myMap.values());

myMap.delete("name");


let myMap2 = new Map([
    ["name", "John"],
    ["age", 30],
    ["job", "Developer"],
    ["hobby", "Reading"],
    ["address", "123 Main St"]
]);