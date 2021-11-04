const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getUnique(){
        return `Office Number # ${this.officeNumber}`;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;