const BatteryRobotCat = require("./BatteryRobotCat");
const Charger = require("./Charger");
const SolarRobotCat = require("./SolarRobotCat");

// model
const batteryRobotCat = new BatteryRobotCat('batteryRobotCat', 1, 5000);
const solarRobotCat = new SolarRobotCat('solarRobotCat', 2, 'solar x');

// controller
Charger.charge([batteryRobotCat, solarRobotCat]);
