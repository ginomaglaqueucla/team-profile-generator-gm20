const inquirer = require('inquirer');

class Employee {
    constructor(){
        this.name = '';
        this.id = 0;
        this.email = '';
        this.role = '';
    }

    getName() {
        return {
            name: this.name
        }
    }

    getId() {
        return {
            id: this.id
        }
    }

    getEmail() {
        return {
            email: this.email
        }
    }

    getRole() {
        return {
            role: this.role
        }
    }
}

module.exports = Employee;