const Robot = require("./Robot");

const robot1 = new Robot();
console.log(robot1.getId()); // 1

const robot2 = new Robot();
console.log(robot1.getId()); // 2
console.log(robot2.getId()); // 2

