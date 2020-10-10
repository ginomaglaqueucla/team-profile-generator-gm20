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
            });
    }
}

module.exports = Generate;