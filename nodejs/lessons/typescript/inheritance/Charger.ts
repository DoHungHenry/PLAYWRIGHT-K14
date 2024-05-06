import { RobotCat } from "./RobotCat";

export class Charger {

    // params is an array of objects of type RobotCat, 
    // it means that the array can only contain objects of type RobotCat
    static charge(robotList: RobotCat[]) {
        robotList.forEach(robot =>
            console.log(robot.charge())
        );
    };
}