const RobotCat = require("./RobotCat");

class SolarRobotCat extends RobotCat {
    constructor(name, id, solarPanel) {
        super(name, id);
        this.solarPanel = solarPanel;
    };

    charge() {
        return super.charge() + ' using solar panel: ' + this.solarPanel;
    };
}

module.exports = SolarRobotCat;