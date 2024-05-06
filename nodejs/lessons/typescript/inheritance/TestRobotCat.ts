import { BatteryRobotCat } from "./BatteryRobotCat";
import { Charger } from "./Charger";
import { SolarRobotCat } from "./SolarRobotCat";


const solarRobotCat = new SolarRobotCat("Jerry", 1, 'solar 123');
const batteryRobotCat = new BatteryRobotCat("Jack", 2, 'battery 123');

const robotList = [solarRobotCat, batteryRobotCat];

console.log(Charger.charge(robotList));
