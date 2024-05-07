import { Animal } from "./Animal"

export class Dog extends Animal {
    protected maxSpeed: number;

    constructor(name: string) {
        super(name);
        this.maxSpeed = 60;
        this.speed = this.randomSpeed(this.maxSpeed);
    };
}
