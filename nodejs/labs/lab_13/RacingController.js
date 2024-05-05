class RacingController {
    //  
    // and will return 
    /* 
    racing function that has: 
    param is an array of object which has type is Animal
    output is a maxSpeed of the fastest animal
    */

    static racing(animals) {
        let maxSpeed = Math.max(...animals.map(animal => animal._speed));

        let fastestAnimals = animals.filter(animal => animal._speed === maxSpeed);
        
        return fastestAnimals
    }
};

module.exports = RacingController;