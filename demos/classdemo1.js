"use strict";

class Employee {

    constructor(id, firstName, lastName, jobTitle, payRate){
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }



}

let e1 = new Employee(1, "Matt", "Christenson", "Clown", 9.99);

let e2 = new Employee(2, "Lawrence", "Tejeda", "Jester", 12.00);


//console.log(e1.employeeId);

let employees = [ e1, e2 ];

for(let emp of employees){
    let intro = `${emp.firstName} ${emp.lastName} is a ${emp.jobTitle} and makes ${emp.payRate} per hour.`
    console.log(intro);
}
