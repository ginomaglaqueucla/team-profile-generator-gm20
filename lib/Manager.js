const Employee = require('./Employee');

jest.mock('../lib/Employee');

class Manager extends Employee {
    constructor(name ='', id=1, email='', role='Manager'){
        super(name);
    }

    officeNumber() {

    }


}

module.exports = Manager;