import { Animal } from "./Animal";

export class AnimalService {
    static getWinner(animals: NonNullable<Animal[]>): Animal[] {
        if(animals.length > 0) {
            let fastestSpeed = Math.max(...animals.map(animal => animal.getSpeed()));
            return animals.filter(animal => animal.getSpeed() === fastestSpeed);
        } else {
            console.log("No animals found!");
            return [];
        };
    }
}