class Robot {
    static id = 0;

    constructor() {
        Robot.id++;
    };

    getId() {
        return Robot.id;
    };

    setId(id) {
        Robot.id = id;
    };
}

module.exports = Robot;


const robot1 = new Robot();
console.log(robot1.getId()); // 1

const robot2 = new Robot();
console.log(robot1.getId()); // 2
console.log(robot2.getId()); // 2