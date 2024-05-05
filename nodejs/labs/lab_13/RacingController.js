class RacingController {

    static racing(animals) {
        if (animals.length === 0) {
            throw new Error('No animal');
        };

        let maxSpeed = Math.max(...animals.map(animal => animal._speed));

        let fastestAnimals = animals.filter(animal => animal._speed === maxSpeed);

        return fastestAnimals;
    }
};

module.exports = RacingController;