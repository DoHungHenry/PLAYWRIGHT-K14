const Animal = require("./Animal");

class Horse extends Animal{
    constructor(name, speed){
        super(name, speed);
    };
}

module.exports = Horse;