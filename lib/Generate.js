const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');
const generatePage = require('../src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site.js');

function Generate(){
    this.manager;
    this.engineer;
    this.intern;

    Generate.prototype.initialize = function(){
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: 'Enter Name:',
                validate: userInput => {
                    if (userInput) {
                      return true;
                    } else {
                      console.log('REQUIRED!');
                      return false;
                    }
                  }
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter Employee ID:',
                validate: userInput => {
                    if (userInput) {
                      return true;
                    } else {
                      console.log('REQUIRED!');
                      return false;
                    }
                  }
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter Email:',
                validate: userInput => {
                    if (userInput) {
                      return true;
                    } else {
                      console.log('REQUIRED!');
                      return false;
                    }
                  }
            },
            {
                type: 'text',
                name: 'office',
                message: 'Enter Office Number:',
                validate: userInput => {
                    if (userInput) {
                      return true;
                    } else {
                      console.log('REQUIRED!');
                      return false;
                    }
                  }
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
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log('REQUIRED!');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'name',
            message: 'Enter Name:',
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log('REQUIRED!');
                  return false;
                }
            },
            when: ({ nextEmployee }) => {
                if (nextEmployee === "Finished!") {
                  return false;
                } else {
                  return true;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Enter Employee ID:',
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log('REQUIRED!');
                  return false;
                }
            },
            when: ({ nextEmployee }) => {
                if (nextEmployee === "Finished!") {
                  return false;
                } else {
                  return true;
                }
            } 
        },
        {
            type: 'text',
            name: 'email',
            message: 'Enter Email:',
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log('REQUIRED!');
                  return false;
                }
            },
            when: ({ nextEmployee }) => {
                if (nextEmployee === "Finished!") {
                  return false;
                } else {
                  return true;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: 'Enter GitHub:',
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log('REQUIRED!');
                  return false;
                }
              },
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
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log('REQUIRED!');
                  return false;
                }
              },
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
            else if(nextEmployee === "Finished!"){
                this.createProfile();
            }
        });
    }

    Generate.prototype.createProfile = function(){
        employeeObjects = [this.manager, this.engineer, this.intern];
        generatePage(employeeObjects);
    }
}

module.exports = Generate;