import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee{

    constructor(name: string) {
        super(name, 5);
    };
}