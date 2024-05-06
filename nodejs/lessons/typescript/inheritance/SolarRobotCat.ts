import { RobotCat } from "./RobotCat";

export class SolarRobotCat extends RobotCat {
    protected solarPanelSerial: string;
    protected id: number;

    constructor(name: string, id: number, solarPanelSerial: string) {
        super(name);
        this.id = id;
        this.solarPanelSerial = solarPanelSerial;
    };

    // override the charge method from the parent class
    // method signature and params should be the same
    charge() {
        return super.charge() + `by ${this.solarPanelSerial} solar panel` + ` which has id: ${this.id}`;
    };
}