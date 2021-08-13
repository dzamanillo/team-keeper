const createTeam = (team) => {
	console.log("Team: ", team);
	const managerCard = (manager) => {
		return `
		<div class="card m-2" style="width: 18rem">
		<div class="card-body bg-primary text-light">
			<p class="card-title display-5">${manager.getName()}</>
			<p class="card-text employee-title"><span><i class="fas fa-coffee"></i></span> Manager</p>
		</div>
		<div class="card-body bg-lightGrey">
		<ul class="list-group list-group-flush m-3 border">
			<li class="list-group-item">ID: ${manager.getId()}</li>
			<li class="list-group-item">
				Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
			</li>
			<li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
		</ul>
		</div>
	</div>
	`;
	};
	const engineerCard = (engineer) => {
		return `
		<div class="card m-2" style="width: 18rem">
		<div class="card-body bg-primary text-light">
			<p class="card-title display-5">${engineer.getName()}</>
			<p class="card-text employee-title"><span><i class="fas fa-glasses"></i></span> Engineer</p>
		</div>
		<div class="card-body bg-lightGrey">
		<ul class="list-group list-group-flush m-3 border">
			<li class="list-group-item">ID: ${engineer.getId()}</li>
			<li class="list-group-item">
				Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
			</li>
			<li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
		</ul>
		</div>
	</div>
	`;
	};
	const internCard = (intern) => {
		return `
		<div class="card m-2" style="width: 18rem">
		<div class="card-body bg-primary text-light">
			<p class="card-title display-5">${intern.getName()}</>
			<p class="card-text employee-title"><span><i class="fas fa-user-graduate"></i></span> Intern</p>
		</div>
		<div class="card-body bg-lightGrey">
		<ul class="list-group list-group-flush m-3 border">
			<li class="list-group-item">ID: ${intern.getId()}</li>
			<li class="list-group-item">
				Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
			</li>
			<li class="list-group-item">School: ${intern.getSchool()}</li>
		</ul>
		</div>
	</div>
	`;
	};

	const html = [];

	// Manager
	html.push(
		team
			.filter((employee) => employee.getRole() === "Manager")
			.map((manager) => managerCard(manager))
	);

	// Engineer
	html.push(
		team
			.filter((employee) => employee.getRole() === "Engineer")
			.map((engineer) => engineerCard(engineer))
			.join("")
	);

	// Intern
	html.push(
		team
			.filter((employee) => employee.getRole() === "Intern")
			.map((intern) => internCard(intern))
			.join("")
	);
	console.log("From Page Gen: ", html);
	return html.join("");
};

const htmlBuilder = (team) => {
	return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<script src="https://kit.fontawesome.com/f4851f2fb3.js" crossorigin="anonymous"></script>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
	<link rel="stylesheet" href="./style.css" />
	</head>
<body>
<header class="bg-danger text-light display-3 text-center p-3 container">
My Team
<div class="card-body"></header></div>

<main class="container p-4 d-flex flex-wrap justify-content-center">
    
${createTeam(team)}

</main>
</body>
</html>

    `;
};

module.exports = htmlBuilder;
