class User{
    constructor(id, usrName, displayName, mail, passwd){
        this.id = id;
        this.usrName = usrName;
        this.displayName = displayName;
        this.mail = mail;
        this.passwd = passwd;
    }
    setCredentials(password){
        this.passwd = password;
    }
};
export class Customer extends User{
    constructor(id, usrName, displayName, mail, passwd){
        super(id, usrName, displayName, mail, passwd);
        this.activeServices = [];
        this.closedServices = [];
        this.registeredVehicles = [];
    }
};
export class Employee extends User{
    constructor(id, usrName, displayName, mail, passwd, assigment, salary){
        super(id, usrName, displayName, mail, passwd);
        this.assigment = assigment;
        this.salary = salary;
    }
    setAssigment(assigment){
        this.assigment = assigment;
    }
    setSalary(){

    }
};
export class Mechanic extends Employee{
    constructor(id, usrName, displayName, mail, passwd, salary){
        super(id, usrName, displayName, mail, passwd, "mechanic", salary);
        this.qualifications = [];
    }
};
export class Admin extends Employee{
    constructor(id, usrName, displayName, mail, passwd, salary){
        super(id, usrName, displayName, mail, passwd, "admin", salary);
    }
    addEmployee(user, userDB){
        userDB.push(user);
    }
    changeAssigment(employee, assigment){
        employee.setAssigment(assigment);
    }
    changeAssigment(employee, assigment){
        employee.setSalary(assigment);
    }
    changeCredentials(user, password){
        user.setCredentials(password);
    }
    deleteUser(user, db){
        let temp = db.indexOf(user);
        db.splice(temp, 1);
    }


};