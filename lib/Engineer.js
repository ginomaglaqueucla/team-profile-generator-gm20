const Employee = require('./Employee');

// jest.mock('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github){
        super(name, id, email);
        this.role = role;
        this.github = github;
    }

    getGithub(){
        return{
            github: this.github
        }
    }
    getRole(){
        return{
            role: "Engineer"
        }
    }
    
}

module.exports = Engineer;