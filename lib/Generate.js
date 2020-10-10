const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');

function Generate(){
    this.manager;

    Generate.prototype.initialize = function(){
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: 'Enter Name:'
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter Employee ID:' 
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter Email:' 
            },
            {
                type: 'text',
                name: 'office',
                message: 'Enter Office Number:' 
            }])
            // destructure name from the prompt object
            .then(({ name, id, email, office }) => {
                this.manager = new Manager(name, id, email, role="Manager", office);
                console.log(this.manager);

                // select next employee
                this.nextEmployee();
            });
    };

    Generate.prototype.nextEmployee = function(){
        inquirer
        .prompt({
            type: 'list',
            name: 'nextEmployee',
            message: 'Choose next Employee to enter',
            choices: ['Engineer', 'Intern', 'Finished!'],
        })
        // destructure name from the prompt object
        .then(({ nextEmployee }) => {
            // this.manager = new Manager(name, id, email, role="Manager", office);
            console.log("this.manager)");

            // select next employee
            // this.nextEmployee();
        });
    }
}

module.exports = Generate;