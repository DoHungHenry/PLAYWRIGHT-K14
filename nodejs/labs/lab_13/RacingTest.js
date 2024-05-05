const horse = require('./Horse.js');
const dog = require('./Dog.js');
const tiger = require('./Tiger.js');
const RacingController = require('./RacingController.js');

// const horse1 = new horse('Horse1', 75);
// const horse2 = new horse('Horse2', 75);
// const dog1 = new dog('Dog1', 60);
// const dog2 = new dog('Dog2', 60);
// const tiger1 = new tiger('Tiger1', 100);
// const tiger2 = new tiger('Tiger2', 100);

const horse1 = new horse('Horse1');
const horse2 = new horse('Horse2');
const dog1 = new dog('Dog1');
const dog2 = new dog('Dog2');
const tiger1 = new tiger('Tiger1');
const tiger2 = new tiger('Tiger2');

const animals = [horse1, horse2, dog1, dog2, tiger1, tiger2];
console.log(JSON.stringify(animals, null, 2));

const fastestAnimals = RacingController.racing(animals);

for (const fastestAnimal of fastestAnimals) {
    console.log(`Winner is ${fastestAnimal.name}, with speed: ${fastestAnimal.speed}`);
};

// console.log(`Winner is ${fastestAnimal.name}, with speed: ${fastestAnimal.speed}`);