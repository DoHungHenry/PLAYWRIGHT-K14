const Animal = require("./Animal");

class Dog extends Animal {
    constructor(name){
        super(name);
        this.maxSpeed = 60;
        this._speed = this.getSpeed(this.maxSpeed);
    };
}

module.exports = Dog;