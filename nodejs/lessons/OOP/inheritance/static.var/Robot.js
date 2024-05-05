class Robot {
    static id = 0;

    constructor() {
        Robot.id++;
    };

    getId() {
        return Robot.id;
    };

    static doSomething() {
        return 'Doing something';
    };
}

module.exports = Robot;
