import { RobotCat } from "./RobotCat";

export class BatteryRobotCat extends RobotCat {
    protected batteryType: string;
    protected id: number;

    constructor(name: string, id: number, batteryType: string) {
        super(name);
        this.id = id;
        this.batteryType = batteryType;
    };

    charge() {
        return super.charge() + `by ${this.batteryType} solar panel` + ` which has id: ${this.id}`;
    };
}