import questions from './src/questions.js';
import inquirer from 'inquirer';
import Manager from './lib/Manager.js'
import Engineer from './lib/Engineer.js'
import Intern from './lib/Intern.js'
import htmlGen from './src/htmlGen.js'

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