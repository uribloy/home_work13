let Employees=[]; // מערך עובדים

// מחלקת עובדים
class Employee { 
    #firstName;
    #lastName; 
    constructor(firstName, lastName, gender, adress){
        this.#firstName=firstName;
        this.#lastName=lastName;
        this.gender=gender;
        this.adress=adress;
        this.salaries=[];
        this.addToEmployees();
    }
    getfullname() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    addToEmployees() {
        Employees.push(`${this.getfullname()}`);
    }
}

// מחלקת משכורות
class salary {
    constructor(month, salaryAmount){
        this.month=month;
        this.salaryAmount=salaryAmount;
    }
}

// מחלקת מנהלים (הרחבת עובדים)
class Manager extends Employee {
    constructor(firstName, lastName, gender, adress, department){
        super(firstName, lastName, gender, adress)
        this.department=department;
    }
    payToEmployee(Employee, salary){  // הוספת משכורת לעובדים
        Employee.salaries.push(salary);
    }
}

// מחלקת מנכ"ל (הרחבת מנהלים)
class CEO extends Manager {
    constructor(firstName, lastName, gender, adress, department){
        super(firstName, lastName, gender, adress, department)
        this.department='prime minister';
    }
    #payToEmployee(Manager, salary){  // הוספת משכורת למנהלים
        let superslry = (salary.salaryAmount)*1.1;
        Manager.salaries.push(superslry);
    }
    printreport(){ // הדפסת רשימת עובדים
        console.log(Employees);
    };
}


///////////******************//////////

// הגדרת עובדים
let Employee1 =new Employee('uri','bloy', 'male', 'kiryat malachi');
let Employee2 =new Employee('abraham','avinu', 'male', 'beer sheva');
let Employee3 =new Employee('shara','mother', 'fmale', 'beer sheva');
let Employee4 =new Employee('golda','meir', 'fmale', 'tel aviv');
let Employee5 =new Employee('david','king', 'male', 'jerusalem');

// הגדרת משכורות
let slrymay= new salary ('may', 6700);
let slryjune = new salary ('june', 7000);
let slryjuly = new salary ('july', 6500);

// הגדרת מנהל ומנכ"ל
let Manager1 =new Manager('david','ben-guryon', 'male', 'sde boker','IT');
let CEO1 = new CEO ('benjamin','netanyahu','male','jerusalem');

// הוספת משכורות לעובדים
Manager1.payToEmployee(Employee1, slryjune);
Manager1.payToEmployee(Employee1, slryjuly);
Manager1.payToEmployee(Employee2, slrymay);
Manager1.payToEmployee(Employee2, slryjune);
Manager1.payToEmployee(Employee2, slryjuly);
Manager1.payToEmployee(Employee3, slrymay);
Manager1.payToEmployee(Employee3, slryjune);
Manager1.payToEmployee(Employee4, slryjuly);
Manager1.payToEmployee(Employee5, slryjuly);

// הוספת משכורות למנהל(ים)
CEO1.payToEmployee(Manager1, slrymay);
CEO1.payToEmployee(Manager1, slryjune);
CEO1.payToEmployee(Manager1, slryjuly);

// הצגה (חלקית) של עובדים
console.log(Employee2);
console.log(Employee4);
console.log(Manager1);
console.log(CEO1);

// הדפסת דוח עובדים
CEO1.printreport();
