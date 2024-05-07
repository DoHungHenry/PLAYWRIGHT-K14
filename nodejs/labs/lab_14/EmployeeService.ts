import { Employee } from "./Employee";
import _ from 'lodash';

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

    static sortEmployeesBySalaryLodashAsn(employees: Employee[]): Employee[] {
        return _.orderBy(employees, ['salary'], ['asc']);
    };

    static sortEmployeesBySalaryLodashDesc(employees: Employee[]): Employee[] {
        return _.orderBy(employees, ['salary'], ['desc']);
    };

    static sortEmployeesByNameAtoZ(employees: Employee[]): Employee[] {
        return _.orderBy(employees, ['name'], ['asc']);
    };

    static sortEmployeesByNameZtoA(employees: Employee[]): Employee[] {
        return _.orderBy(employees, ['name'], ['desc']);
    };
}