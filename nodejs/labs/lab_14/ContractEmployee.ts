import { Employee } from "./Employee";

export class ContractEmployee extends Employee{

    constructor(name: string) {
        super(name, 4);
    };
}