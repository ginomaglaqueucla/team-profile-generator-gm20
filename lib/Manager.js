const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber){
        super(name, id, email);
        this.role = role;
        this.officeNumber = officeNumber;
    }
    getRole(){
        return{
            role: "Manager"
        }
    }
}

module.exports = Manager;