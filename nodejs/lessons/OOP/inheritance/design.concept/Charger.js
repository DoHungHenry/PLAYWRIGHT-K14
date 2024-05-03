class Charger {

    // IS-A RobotCat
    static charge(robotCatList) {
        robotCatList.forEach(robotCat => {
            console.log(robotCat.charge());
        });
    }
}

module.exports = Charger;