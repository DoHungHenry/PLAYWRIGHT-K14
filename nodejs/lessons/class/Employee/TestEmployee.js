const Employee = require('./Employee');
const SalaryController = require('./SalaryController');

const Ti  = new Employee(1000);
const Teo = new Employee(2000);

const salaryController = new SalaryController();

console.log(salaryController.getTotalSalary([Ti, Teo])); // 3000