const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Generate(){
    this.manager;
    this.engineer;

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
        .prompt([        
        {
            type: 'list',
            name: 'nextEmployee',
            message: 'Choose next Employee to enter',
            choices: ['Engineer', 'Intern', 'Finished!'],
        },
        {
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
            name: 'github',
            message: 'Enter GitHub:',
            when: ({ nextEmployee }) => {
                if (nextEmployee === "Engineer") {
                  return true;
                } else {
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'school',
            message: 'Enter School:',
            when: ({ nextEmployee }) => {
                if (nextEmployee === "Intern") {
                  return true;
                } else {
                  return false;
                }
              }
        }
        ])
        // destructure name from the prompt object
        .then(({ nextEmployee, name, id, email, github, school }) => {
            if(nextEmployee === "Engineer"){
                this.engineer = new Engineer(name, id, email, role="Engineer", github);
                console.log(this.engineer);
                this.nextEmployee();
            }
            else if(nextEmployee === "Intern"){
                this.intern = new Intern(name, id, email, role="Intern", school);
                console.log(this.intern);
                this.nextEmployee();
            }
            else if(nextEmployee === "Finish"){
                this.createProfile();
            }
        });
    }
}

module.exports = Generate;