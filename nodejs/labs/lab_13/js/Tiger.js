const Animal = require("./Animal");

class Tiger extends Animal {
    constructor(name){
        super(name);
        this.maxSpeed = 100;
        this._speed = this.speed(this.maxSpeed);
    };
}

module.exports = Tiger;