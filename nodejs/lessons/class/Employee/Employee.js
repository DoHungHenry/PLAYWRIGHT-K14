class Employee {
    constructor(salary) {
        this._salary = salary;
    };

    get salary() {
        return this._salary;
    };

    set salary(salary) {
        this._salary = salary;
    };

    // Support method: to handle data inside this class, not for outside
    _validateSalary(salary) {
        if (salary <= 0) {
            throw new Error('Salary must be greater than 0');
        } else {
            return true;
        };
    };

    // Service method: same as function in controller, this is not wrong but should not be used
}

module.exports = Employee;