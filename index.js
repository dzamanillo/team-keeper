const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const htmlBuilder = require("./lib/htmlBuilder");
const fs = require("fs");
const path = require("path");

const employees = [];

const managerQuestions = (managerData) => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "managerName",
				message: "Please enter managers name.",
				validate: (managerName) => {
					if (managerName) {
						return true;
					} else {
						console.log("Please enter managers name.");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "managerId",
				message: "Please enter manager ID number.",
				validate: (managerId) => {
					if (managerId) {
						return true;
					} else {
						console.log("Please enter manager ID number.");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "managerEmail",
				message: "Please enter managers email address.",
				validate: (managerEmail) => {
					if (managerEmail) {
						return true;
					} else {
						console.log("Please enter managers email address");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "managerOfficeNumber",
				message: "Please enter managers office number.",
				validate: (managerOfficeNumber) => {
					if (managerOfficeNumber) {
						return true;
					} else {
						console.log("Please enter managers office number.");
						return false;
					}
				},
			},
		])
		.then((data) => {
			const manager = new Manager(
				data.managerName,
				data.managerId,
				data.managerEmail,
				data.managerOfficeNumber
			);
			employees.push(manager);
		});
};

const employeeQuestions = () => {
	return inquirer
		.prompt([
			{
				type: "list",
				name: "employeeSelect",
				message: "What kind of employee would you like to add?",
				choices: ["Engineer", "Intern", "None"],
			},
			{
				type: "input",
				name: "employeeName",
				message: "Please enter employees name.",
				validate: (employeeName) => {
					if (employeeName) {
						return true;
					} else {
						console.log("Please enter employees name.");
						return false;
					}
				},
				when: ({ employeeSelect }) => {
					if (employeeSelect !== "None") {
						return true;
					}
					return false;
				},
			},
			{
				type: "input",
				name: "employeeId",
				message: "Please enter employee ID number.",
				validate: (employeeId) => {
					if (employeeId) {
						return true;
					} else {
						console.log("Please enter employee ID number.");
						return false;
					}
				},
				when: ({ employeeSelect }) => {
					if (employeeSelect !== "None") {
						return true;
					}
					return false;
				},
			},
			{
				type: "input",
				name: "employeeEmail",
				message: "Please enter employees email.",
				validate: (employeeEmail) => {
					if (employeeEmail) {
						return true;
					} else {
						console.log("Please enter employees email.");
						return false;
					}
				},
				when: ({ employeeSelect }) => {
					if (employeeSelect !== "None") {
						return true;
					}
					return false;
				},
			},
			{
				type: "input",
				name: "engineerGit",
				message: "Please enter engineers GitHub username.",
				validate: (engineerGit) => {
					if (engineerGit) {
						return true;
					} else {
						console.log("Please enter engineers GitHub username.");
						return false;
					}
				},
				when: ({ employeeSelect }) => {
					if (employeeSelect === "Engineer") {
						return true;
					} else {
						return false;
					}
				},
			},
			{
				type: "input",
				name: "internSchool",
				message: "Please enter interns school.",
				validate: (internSchool) => {
					if (internSchool) {
						return true;
					} else {
						console.log("Please enter interns school.");
						return false;
					}
				},
				when: ({ employeeSelect }) => {
					if (employeeSelect === "Intern") {
						return true;
					} else {
						return false;
					}
				},
			},
		])
		.then((employeeInfo) => {
			if (employeeInfo.employeeSelect === "Engineer") {
				const engineer = new Engineer(
					employeeInfo.employeeName,
					employeeInfo.employeeId,
					employeeInfo.employeeEmail,
					employeeInfo.engineerGit
				);

				employees.push(engineer);
				return employeeQuestions();
			} else if (employeeInfo.employeeSelect === "Intern") {
				const intern = new Intern(
					employeeInfo.employeeName,
					employeeInfo.employeeId,
					employeeInfo.employeeEmail,
					employeeInfo.internSchool
				);

				employees.push(intern);
				return employeeQuestions();
			} else {
				if (!fs.existsSync(path.join(__dirname, "dist"))) {
					fs.mkdirSync(path.join(__dirname, "dist"));
				}
				fs.writeFileSync("./dist/index.html", htmlBuilder(employees));
			}
		});
};

managerQuestions().then(employeeQuestions);
