import questions from './src/questions.js';
import inquirer from 'inquirer';
// need import classes
const postions = {Managers:[],Engineers:[],Interns:[]};

inquirer.prompt(questions).then(ans=>{
    if(!ans.fillPosition) console.log(ans);
})

