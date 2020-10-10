const Employee = require('./Employee');

// jest.mock('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber){
        super(name, id, email);
        this.role = role;
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;