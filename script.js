class Employee {
    #firstName;
    #lastName; 
    constructor(firstName, lastName, gender, adress){
        this.#firstName=firstName;
        this.#lastName=lastName;
        this.gender=gender;
        this.adress=adress;
        this.salaries=[];
    }
    get fullname() {
        return `${this.#firstName} ${this.#lastName}`;
    }
}

class salary {
    constructor(month, salaryAmount){
        this.month=month;
        this.salaryAmount=salaryAmount;
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, gender, adress, department){
        super(firstName, lastName, gender, adress)
        this.department=this.department;
    }
    payToEmployee(Employee, salary){
        Employee.salaries.push(salary);
    }
}
class CEO extends Manager {
    constructor(firstName, lastName, gender, adress, department){
        super(firstName, lastName, gender, adress, department)
        this.department='all';
    }
    payToEmployee(Manager, salary){
        // let superslry = (salary.salaryAmount)*1.15;
        Manager.salaries.push(salary);
    }
}

///////////******************//////////

let Employee1 =new Employee('uri','bloy', 'male', 'kiryat malachi');
let Employee2 =new Employee('abraham','avinu', 'male', 'beer sheva');
let Employee3 =new Employee('shara','mother', 'fmale', 'beer sheva');
let Employee4 =new Employee('golda','meir', 'fmale', 'tel aviv');
let Employee5 =new Employee('david','king', 'male', 'jerusalem');


let slrymay= new salary ('may', 6700);
let slryjune = new salary ('june', 7000);
let slryjuly = new salary ('july', 6500);

let Manager1 =new Manager('david','ben-guryon', 'male', 'jerusalem', 'IT');

let CEO1 = new CEO ('benjamin','netanyahu','male','jerusalem');

Manager1.payToEmployee(Employee1, slryjune);
Manager1.payToEmployee(Employee1, slryjuly);
Manager1.payToEmployee(Employee2, slrymay);
Manager1.payToEmployee(Employee2, slryjune);
Manager1.payToEmployee(Employee2, slryjuly);
Manager1.payToEmployee(Employee3, slrymay);
Manager1.payToEmployee(Employee3, slryjune);
Manager1.payToEmployee(Employee4, slryjuly);
Manager1.payToEmployee(Employee5, slryjuly);

CEO.payToEmployee(Manager1, slrymay);
console.log(Manager1.salaries);
