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
    getUser(){
        
    }
};
export class Customer extends User{
    constructor(id, usrName, displayName, mail, passwd){
        super(id, usrName, displayName, mail, passwd);
        this.activeServices = [];
        this.closedServices = [];
        this.registeredVehicles = [];
        this.recepites = []
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
    setSalary(newSalry){
        this.salary = newSalry;
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

class Vehicle{
    constructor(id, brand, model, yop, ec, mileage, hp, gt, ft, carPlate, vin){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.yearOfProduction = yop;
        this.engineCapacity = ec;
        this.mileage = mileage;
        this.horsePower = hp;
        this.gearboxType =gt;
        this.fuelType = ft;
        this.carPlate = carPlate;
        this.vin = vin;
    }
};
export class Car extends Vehicle{
    constructor(id, brand, model, yop, ec, mileage, hp, gt, ft, carPlate,vin,version,NoD, type){
        super(id, brand, model, yop, ec, mileage, hp, gt, ft, carPlate,vin);
        this.version = version;
        this.numberOfDoors = NoD;
        this.type = type;
    }
    getInfo(){

    }
};
export class Truck extends Vehicle{
    constructor(id, brand, model, yop, ec, mileage, hp, gt, ft, carPlate,vin, axisPlacement){
        super(id, brand, model, yop, ec, mileage, hp, gt, ft, carPlate,vin);
        this.axisPlacement = axisPlacement;
    }
    getInfo(){

    }
};

export class ServiceOrder{
    constructor(id,customer, servicedVehicle, desc){
        this.id = id;
        this.oDate = (new Date()).toUTCString();
        this.cDate = null;
        this.customer = customer;
        this.servicedVehicle = servicedVehicle;
        this.isActive = true;
        this.desc = desc;
    }
}
export class CarPart{
    constructor(id, name, category, condition){
        this.id = id;
        this.name =name;
        this.category = category;
        this.condition = condition;
    }
};
export class Issue{
    constructor(name, category, importance){
        this.name = name;
        this.category = category;
        this.importance = importance;
        this.partsRequired = [];
    }
    addPart(part){
        this.partsRequired.push(part);
    }
};
export class Recepit{
    constructor(id, desc, price){
        this.id = id;
        this.description = desc;
        this.price = price;
    }
    getInfo(){

    }
}
export class Invoice{
    constructor(id, desc, price, nip,customer){
        this.id = id;
        this.description = desc;
        this.price = price;
        this.nip = nip;
        this.customer = customer;
    }
    getInfo(){

    }
}