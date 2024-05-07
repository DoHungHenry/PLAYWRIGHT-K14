export class Animal {
    protected name: string;
    protected speed: number;
    
    constructor(name: string) {
        this.name = name;
        this.speed = 0;
    };

    getName(): string {
        return this.name;
    };

    getSpeed(): number {
        return this.speed;
    };

    randomSpeed(maxSpeed: number): number {
        return Math.floor(Math.random() * maxSpeed) + 1;
    };
}