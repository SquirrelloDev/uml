import * as classes from './classes.js';
const exampleCustomer = new classes.Customer(0,"martin05","Marcin", "martin05@gmail.com", "qwerty");
const exampleVehicle = new classes.Car(0,"Toyota", "Yaris", 2016, 1.6, 50000, 90, "manual", "petrol", "EL05643", 1000203, null, 3, "Kombi");
exampleCustomer.registeredVehicles.push(exampleVehicle);
export class ServiceDB{
    constructor(){
         this.userDB = [exampleCustomer];
         this.vehicleDB = [exampleVehicle];
         this.invoiceDB = [];
         this.partsDB = []; 
    }
    sendStatus(){

    }
    recieveStatus(){

    }
}
export class ServiceOrderManager{

    static createOrder(user, vehicle, description){
        const newOrder = new classes.ServiceOrder(0,user,vehicle,description);
        user.activeServices.push(newOrder);
    }
    static closeOrder(order, description, priceFor){
        order.isActive = false;
        this.generateRecepit(order,description, priceFor);
    }
    static generateRecepit(order,desc, price){
        const newRecepit = new classes.Recepit(0,desc, price);
        order.customer.closedServices.push(order);
        let activeTempId = order.customer.activeServices.indexOf(this);
        order.customer.activeServices.splice(activeTempId, 1);
        
    }
}

