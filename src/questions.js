const questions = [
  {
    type: "confirm",
    name: "fillPosition",
    message: "Would you like to fill a position?",
  },
  {
    type: "list",
    name: "role",
    message: "What positon would you like to fill?",
    choices: ["Manager", "Engineer", "Intern"],
    when: ({ fillPosition }) => fillPosition,
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee?",
    when: ({ fillPosition }) => fillPosition,
  },
  {
    type: "number",
    name: "id",
    message: "What is the employee ID number?",
    when: ({ fillPosition }) => fillPosition,
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee e-mail adress?",
    when: ({ fillPosition }) => fillPosition,
  },
  {
    type: "number",
    name: "officeNumber",
    message: "What is the manager's office number?",
    when: ({ role }) => role == "Manager",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
    when: ({ role }) => role == "Engineer",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
    when: ({ role }) => role == "Intern",
  }
];

module.exports = questions;
