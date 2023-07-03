
export interface Person {
    name: string;

}

export interface Salaried{
    salary: number;
}

export class Employee implements Salaried, Person {
    name: string;
    salary: number;
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    public toString(): string {
        return `${this.name} makes ${this.salary}`;
    }
}

let employee = new Employee("John", 50000);
console.log(employee.toString());

let partialEmployee: Partial<Person> = {name: "John"};
console.log(partialEmployee);
 