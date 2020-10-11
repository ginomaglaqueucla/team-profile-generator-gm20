const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');
const generatePage = require('../src/page-template');

function Generate(){
    this.manager;
    this.engineer;
    this.intern;
    let employeeObjects =[];

    Generate.prototype.initialize = function(){
        // Initial question prompts for the Manager
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
            .then(({ name, id, email, office }) => {
                // new instance of Manager
                this.manager = new Manager(name, id, email, role="Manager", office);
                employeeObjects.push(this.manager);
                // select next employee
                this.nextEmployee();
            });
    };

    Generate.prototype.nextEmployee = function(){
        // Series of questions depending on type of employee or if finished
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
        .then(({ nextEmployee, name, id, email, github, school }) => {
            // new instance of engineer if selected, and recall function
            if(nextEmployee === "Engineer"){
                this.engineer = new Engineer(name, id, email, role="Engineer", github);
                employeeObjects.push(this.engineer);
                this.nextEmployee();
            }
            // new instance of intern if selected, and recall function
            else if(nextEmployee === "Intern"){
                this.intern = new Intern(name, id, email, role="Intern", school);
                employeeObjects.push(this.intern);
                this.nextEmployee();
            }
            // finsihed
            else if(nextEmployee === "Finished!"){
                this.createProfile();
            }
        });
    }
    // when finished, call generate page function and write html file
    Generate.prototype.createProfile = function(){
        this.writeFile(generatePage(employeeObjects));

    }

    Generate.prototype.writeFile = function(fileContent) {
        return new Promise((resolve, reject) => {
          fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
        });
    };
}

module.exports = Generate;