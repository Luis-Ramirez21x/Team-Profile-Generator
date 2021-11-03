const Inquirer = require('inquirer');
const Jest = require('jest');
const Employee = require('./employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');

const htmlStartString = '';
const htmlBodyString ='';
const htmlEndString = '';
let employeeList = [];

const managerQuestionPrompt = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: "input",
        message:"What is the team manager's id?",
        name: "managerId",
    },
    {
        type: "input",
        message:"What is the team manager's email?",
        name: "managerEmail",
    },
    {
        type: "input",
        message:"What is the team manager's office number?",
        name: "managerOfficeNumber",
    },

];

const engineerQuestionPrompt = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'engineerEmail',
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
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'internId',
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: 'internSchool',
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
                            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                            employeeList.push(engineer);
                            anotherEmployeePrompt();
                        })
            } else if(response.employeeType === 'Intern'){
                inquirer.prompt(internQuestionsPrompt)
                        .then((response) =>{
                            const intern = new Intern(response.internName, response.internId, response.interEmail, response.internSchool);
                            employeeList.push(intern);
                            anotherEmployeePrompt();
                        })
            } else{
                break;
            }
        })
}

function createEmployeeCards(){
    employeeList.forEach(employee =>{
         // add boot strap html here
         htmlBodyString = htmlBodyString + `
         <div class="card text-white bg-primary mb-3" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">Card title</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
         <div class="employee-info">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Cras justo odio</li>
           <li class="list-group-item">Dapibus ac facilisis in</li>
           <li class="list-group-item">Vestibulum at eros</li>
         </ul>
         </div>
       </div>`
    })
}

    inquirer
    .prompt(
        managerQuestionPrompt
        )
        .then((response) => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
            employeeList.push(manager);
            anotherEmployeePrompt();
        })
        .then()

console.log('Please build your team')

