const Animal = require("./Animal");

class Horse extends Animal{
    constructor(name){
        super(name);
        this.maxSpeed = 75;
        this._speed = this.getSpeed(this.maxSpeed);
    };
}

module.exports = Horse;