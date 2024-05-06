import { ContractEmployee } from "./ContractEmployee";
import { EmployeeService } from "./EmployeeService";
import { FullTimeEmployee } from "./FullTimeEmployee";

const contractEmp1 = new ContractEmployee("John");
const contractEmp2 = new ContractEmployee("Henry");

const fullTimeEmployee1 = new FullTimeEmployee("Nancy");
const fullTimeEmployee2 = new FullTimeEmployee("Cindy");

const employees: ContractEmployee[] = [contractEmp1, contractEmp2, fullTimeEmployee1, fullTimeEmployee2];

const totalSalary = EmployeeService.totalSalary(employees);
const highestPaidEmployees = EmployeeService.highestPaidEmployees(employees);
const lowestPaidEmployees = EmployeeService.lowestPaidEmployees(employees);
// const sortedEmployeesBySalary = EmployeeService.sortEmployeesBySalary(employees);
const sortedEmployeesBySalary = EmployeeService.sortEmployeesBySalaryLodash(employees);
const sortedEmployeesByName = EmployeeService.sortEmployeesByName(employees);

console.log(`Total salary: ${totalSalary}`);
console.log(`Highest paid employees: ${JSON.stringify(highestPaidEmployees, null, 2)}`);
console.log(`Lowest paid employees: ${JSON.stringify(lowestPaidEmployees, null, 2)}`);
console.log(`Sorted employees by salary: ${JSON.stringify(sortedEmployeesBySalary, null, 2)}`);
console.log(`Sorted employees by name: ${JSON.stringify(sortedEmployeesByName, null, 2)}`);


