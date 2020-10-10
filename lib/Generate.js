const inquirer = require('inquirer');

function Generate(){

    Generate.prototype.initialize = function(){
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'Enter Name: '
        },
        {
            type: 'text',
            name: 'id',
            message: 'Enter Employee ID: ' 
        },
        {
            type: 'text',
            name: 'email',
            message: 'Enter Email: ' 
        },
        {
            type: 'text',
            name: 'office',
            message: 'Enter Office Number: ' 
        }
        );
    }
}