const { randomSpeed } = require("../../utils/NumberHelper");

class Animal {
    constructor(name, maxSpeed) {
        this._name = name;
        this.maxSpeed = maxSpeed;
        this._speed = this._getSpeed(this.maxSpeed);
    };

    get name() {
        return this._name;
    };

    get speed() {
        return this._speed;
    };

    _getSpeed() {
        return randomSpeed(this.maxSpeed);
    };
}

module.exports = Animal;