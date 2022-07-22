const questions = require('./src/questions.js');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const htmlGen = require('./src/htmlGen.js')

const positions = {Managers:[],Engineers:[],Interns:[]};

const init = () => {
    inquirer.prompt(questions).then((ans)=>{
        const {fillPosition,role,name,id,email} = ans;

        if(!fillPosition) return htmlGen(positions);

        role == 'Manager'
        ? positions.Managers.push(new Manager(name,id,email,ans.officeNumber))
        : role == 'Engineer'
        ? positions.Engineers.push(new Engineer(name,id,email,ans.github))
        : positions.Interns.push(new Intern(name,id,email,ans.school))


        init();
    })
};

init ();