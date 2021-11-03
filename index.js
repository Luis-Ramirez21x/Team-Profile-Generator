const Inquirer = require('inquirer');
const Jest = require('jest');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');

const htmlStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile | Home </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>    
<div class='header'>
<h1>My Team</h1>
</div>`;
const htmlEnd = `</body>
</html>`;
let htmlBodyString ='';
let employeeList = [];

const managerQuestionPrompt = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: "input",
        message:"What is the team manager's id?",
        name: "id",
    },
    {
        type: "input",
        message:"What is the team manager's email?",
        name: "email",
    },
    {
        type: "input",
        message:"What is the team manager's office number?",
        name: "officeNumber",
    },

];

const engineerQuestionPrompt = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: 'engineerGithub',
    },

];
const internQuestionsPrompt =[
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: 'school',
    },

]
function anotherEmployeePrompt(){
    inquirer
        .prompt(    {
            type: "list",
            message:"Which type of team member would you like to add?",
            name: "employeeType",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
        },)
        .then((response) =>{
            if(response.employeeType === 'Engineer'){
                inquirer.prompt(engineerQuestionPrompt)
                        .then((response) =>{
                            const engineer = new Engineer(response.name, response.id, response.email, response.engineerGithub);
                            employeeList.push(engineer);
                            anotherEmployeePrompt();
                        })
            } else if(response.employeeType === 'Intern'){
                inquirer.prompt(internQuestionsPrompt)
                        .then((response) =>{
                            const intern = new Intern(response.name, response.id, response.email, response.internSchool);
                            employeeList.push(intern);
                            anotherEmployeePrompt();
                        })
            } else if (response.employeeType === "I don't want to add any more team members"){
              createEmployeeCards();
              fs.writeFile('myTeam.html', createEmployeeCards(),(error, data) =>
              error ? console.error(error) : console.log('succesfully created'))
            }
        })
}

inquirer.prompt(managerQuestionPrompt).then((employee) =>{
    const manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber)
    employeeList.push(manager);
    anotherEmployeePrompt();
    
})

function createEmployeeCards(){
    employeeList.forEach(employee =>{
         // add boot strap html here
         htmlBodyString += `
         <div class="card text-white bg-primary mb-3" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${employee.getName()}</h5>
           <h5 class="card-title">${employee.getRole()}</h5>
         </div>
         <div class="employee-info">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">${employee.getId()}</li>
           <li class="list-group-item">${employee.getEmail()}</li>
           <li class="list-group-item">${employee.getUnique()}</li>
         </ul>
         </div>
       </div>`
    })
    return htmlStart + htmlBodyString + htmlEnd;
}

