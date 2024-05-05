randomSpeed = (maxSpeed) => {
    // Generate a random number between 1 and maxSpeed
    return Math.floor(Math.random() * maxSpeed) + 1;
};

module.exports = {
    randomSpeed: randomSpeed,
};