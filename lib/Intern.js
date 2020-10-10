const Employee = require('./Employee');

// jest.mock('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email);
        this.role = role;
        this.school = school;
    }

    getSchool(){
        return{
            school: this.school
        }
    }
    getRole(){
        return{
            role: "Intern"
        }
    }
    
}

module.exports = Intern;