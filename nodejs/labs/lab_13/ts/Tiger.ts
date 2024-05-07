import { Animal } from "./Animal"

export class Tiger extends Animal {
    protected maxSpeed: number;

    constructor(name: string) {
        super(name);
        this.maxSpeed = 100;
        this.speed = this.randomSpeed(this.maxSpeed);
    };
}