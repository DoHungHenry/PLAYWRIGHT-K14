class JavaOverloading {
    static add(a, b) {
        return a + b;
    };

    static add(a, b, c) {
        return a + b + c;
    };
}
// not a number because javascript does not support method overloading like java, js take the last method declared in class if there are multiple methods with the same name
console.log(JavaOverloading.add(1, 2)); // NaN
console.log(JavaOverloading.add(1, 2, 3)); // 6

class JSOverloading {
    // JS Rest parameters
    static add(... numbers) {
        return numbers.reduce((a, b) => a + b);
    };

    // varargs
    static add() {
        return Array.from(arguments).reduce((a, b) => a + b);
    };
}

console.log(JSOverloading.add(1, 2)); // 3
console.log(JSOverloading.add(1, 2, 3)); // 6


module.exports = {
    JavaOverloading,
    JSOverloading
}