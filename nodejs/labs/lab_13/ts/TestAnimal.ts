import { AnimalService } from "./AnimalService";
import { Dog } from "./Dog";
import { Horse } from "./Horse";
import { Tiger } from "./Tiger";

const dog1 = new Dog("Rex");
const dog2 = new Dog("Fido");

const horse1 = new Horse("Black Beauty");
const horse2 = new Horse("Silver");

const tiger1 = new Tiger("Tiger");
const tiger2 = new Tiger("Leo");

const animals = [dog1, dog2, horse1, horse2, tiger1, tiger2];

console.log(JSON.stringify(animals, null, 2));

const winners = AnimalService.getWinner(animals);

for(const winner of winners) {
    console.log(`The winner animal in racing contest is ${winner.getName()} with a speed of ${winner.getSpeed()}!`);
}
