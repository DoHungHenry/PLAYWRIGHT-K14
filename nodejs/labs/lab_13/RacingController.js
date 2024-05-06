class RacingController {

    static racing(animals) {
        if (animals.length > 0) {
            let maxSpeed = Math.max(...animals.map(animal => animal._speed));
            let fastestAnimals = animals.filter(animal => animal._speed === maxSpeed);
            return fastestAnimals;
        } else {
            throw new Error('No animal');
        };
    }
};

module.exports = RacingController;