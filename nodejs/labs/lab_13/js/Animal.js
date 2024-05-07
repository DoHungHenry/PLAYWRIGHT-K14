const { randomSpeed } = require("../../../utils/NumberHelper");

class Animal {
    constructor(name) {
        this._name = name;
    };

    get name() {
        return this._name;
    };

    get speed() {
        return this._speed;
    };

    speed() {
        return randomSpeed(this.maxSpeed);
    };
}

module.exports = Animal;