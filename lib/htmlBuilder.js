const createTeam = (team) => {
	console.log("Team: ", team);
	const managerCard = (manager) => {
		return `
	<li>${manager.getName()}</li>
	`;
	};
	const engineerCard = (engineer) => {
		return `
	<li>${engineer.getName()}</li>
	`;
	};
	const internCard = (intern) => {
		return `
	<li>${intern.getName()}</li>
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
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body>
    
${createTeam(team)}

</body>
</html>

    `;
};

module.exports = htmlBuilder;
