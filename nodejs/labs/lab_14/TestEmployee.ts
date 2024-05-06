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
const sortedEmployeesBySalary = EmployeeService.sortEmployeesBySalary(employees);
const sortedEmployeesBySalaryAsn = EmployeeService.sortEmployeesBySalaryLodashAsn(employees);
const sortedEmployeesBySalaryDesc = EmployeeService.sortEmployeesBySalaryLodashDesc(employees);
const sortEmployeesByNameAtoZ = EmployeeService.sortEmployeesByNameAtoZ(employees);
const sortEmployeesByNameZtoA = EmployeeService.sortEmployeesByNameZtoA(employees);

console.log(`Total salary: ${totalSalary}`);
console.log(`Highest paid employees: ${JSON.stringify(highestPaidEmployees, null, 2)}`);
console.log(`Lowest paid employees: ${JSON.stringify(lowestPaidEmployees, null, 2)}`);
console.log(`Sorted employees by salary: ${JSON.stringify(sortedEmployeesBySalary, null, 2)}`);
console.log(`Sorted employees by salary ascending: ${JSON.stringify(sortedEmployeesBySalaryAsn, null, 2)}`);
console.log(`Sorted employees by salary descending: ${JSON.stringify(sortedEmployeesBySalaryDesc, null, 2)}`);
console.log(`Sorted employees by name a to z: ${JSON.stringify(sortEmployeesByNameAtoZ, null, 2)}`);
console.log(`Sorted employees by name z to a: ${JSON.stringify(sortEmployeesByNameZtoA, null, 2)}`);





