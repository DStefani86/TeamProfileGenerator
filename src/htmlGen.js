const { writeFile } = require("fs");

const htmlGen = ({ Managers, Engineers, Interns }) => {
  let output = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />node
    <link rel="stylesheet" href="../assets/css/style.css"/>
    <title>Team Profile Generator</title>
  </head>
  <body>
    <div class="jumbotron center jumbotron-fluid">
      <div class="container">
        <h1 class="display-8">Team Profile</h1>
      </div>
    </div>
`;

  if (Managers.length) {
    output += '<div class="row">';
    output += "<h1>Managers</h1> <hr> </div>";
    Managers.forEach((mgr) => {
      output += ` <div class="card" style="width: 18rem">
        <div class="card-body">
        <h2>${mgr.getName()}</h2>
          <h5 class="emp-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID#: ${mgr.getId()} </li>
          <li class="list-group-item">
           E-Mail:<a href="mailto: ${mgr.getEmail()}" class="email-link"> ${mgr.getEmail()} </a>
          </li>
          <li class="list-group-item">Office Numer: ${mgr.getOfficeNumber()} </li>
        </ul>
        <div class="card-body"></div>
      </div>`;
    });

    ;
  }
;
  if (Engineers.length) {
    output += '<div class="row">';
output += "<h1>Engineers</h1> <hr></div>"
    Engineers.forEach((eng) => {
      output += ` <div class="card" style="width: 18rem">
        <div class="card-body">
        <h2>${eng.getName()}</h2>
          <h5 class="emp-title">Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID#: ${eng.getId()} </li>
          <li class="list-group-item">
            Email:<a href="mailto:${eng.getEmail()}" class="email-link"> ${eng.getEmail()} </a>
          </li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${eng.getGithub()}"> ${eng.getGithub()}</a></li>
        </ul>
        <div class="card-body"></div>
      </div>`;
    });
  }

    
  if (Interns.length) {
    output += '<div class="row">';
output += "<h1>Interns</h1> <hr> </div>"
    Interns.forEach((int) => {
      output += ` <div class="card" style="width: 18rem">
        <div class="card-body">
        <h2>${int.getName()}</h2>
          <h5 class="emp-title">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID#: ${int.getId()} </li>
          <li class="list-group-item">
            Email:<a href="mailto:${int.getEmail()}" class="email-link"> ${int.getEmail()} </a>
          </li>
          <li class="list-group-item">School: ${int.getSchool()}</li>
        </ul>
        <div class="card-body"></div>
      </div>`;
    });
;
  }

  output += `
    <script src="./index.js"></script>
  </body>
</html>
`;

  writeFile("./dist/team.html", output, () =>
    console.log("created html file...")
  );
};

module.exports = htmlGen;
