class SalaryController {
    getTotalSalary(employees) {
        let totalSalary = 0;
        employees.forEach(employee => {
            totalSalary += employee.salary;
        });
        return totalSalary;
    }
}

module.exports = SalaryController;