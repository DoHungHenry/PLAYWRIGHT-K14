export class RobotCat {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    };

    charge() {
        return `${this.name} robot cat is charging`;
    };
}