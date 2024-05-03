const RobotCat = require("./RobotCat");

class BatteryRobotCat extends RobotCat {
    constructor(name, id, batteryCapacity) {
        super(name, id);
        this.batteryCapacity = batteryCapacity;
    };

    charge() {
        return super.charge() + ' for battery with capacity: ' + this.batteryCapacity;
    };
}

module.exports = BatteryRobotCat;