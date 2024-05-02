class Circle {
    static pi = 3.14;

    static calculateArea(radius) {
        return this.pi * radius * radius;
    }

    calculateCircumference(radius){ 
        return 2 * Circle.pi * radius;
    }
}

Circle.calculateArea(5); // returns 78.5

let circleObj = new Circle();
circleObj.calculateCircumference(5) // returns 31.4000000
//circleObj.calculateArea(); <-- cannot call this