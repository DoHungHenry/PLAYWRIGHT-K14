import { Employee } from "./Employee";
import * as _ from 'lodash';

export class EmployeeService {
    static totalSalary(employees: Employee[]): number {
        let totalSalary = 0;
        employees.forEach(employee => {
            totalSalary += employee.getSalary();
        });
        return totalSalary;
    };

    static highestPaidEmployees(employees: Employee[]): Employee[] {
        if (employees.length > 0) {
            let highestSalaryNum = Math.max(...employees.map(employee => employee.getSalary()));
            return employees.filter(employee => employee.getSalary() === highestSalaryNum);
        } else {
            throw new Error("No employees provided.");
        };
    };

    static lowestPaidEmployees(employees: Employee[]): Employee[] {
        if (employees.length > 0) {
            let lowestSalaryNum = Math.min(...employees.map(employee => employee.getSalary()));
            return employees.filter(employee => employee.getSalary() === lowestSalaryNum);
        } else {
            throw new Error("No employees provided.");
        };
    };

    static sortEmployeesBySalary(employees: Employee[]): Employee[] {
        return employees.sort((a, b) => a.getSalary() - b.getSalary());
    };

    static sortEmployeesBySalaryLodash(employees: Employee[]): Employee[] {
        return _.sortBy(employees, ['salary']);
    };

    static sortEmployeesByName(employees: Employee[]): Employee[] {
        return employees.sort((a, b) => a.getName().localeCompare(b.getName()));
    };
}