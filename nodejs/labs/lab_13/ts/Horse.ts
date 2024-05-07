import { Animal } from "./Animal"

export class Horse extends Animal {
    protected maxSpeed: number;

    constructor(name: string) {
        super(name);
        this.maxSpeed = 75;
        this.speed = this.randomSpeed(this.maxSpeed);
    };
}