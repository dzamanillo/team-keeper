const Employee = require("../lib/Employee");

test("creates an employee obj", () => {
	const employee = new Employee("Dan", 1, "dzamanillok@gmail.com");

	expect(employee.name).toEqual(expect.any(String));
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});

test("returns employees name", () => {
	const employee = new Employee("Dan", 1, "dzamanillok@gmail.com");

	expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("returns employees id", () => {
	const employee = new Employee("Dan", 1, "dzamanillok@gmail.com");

	expect(employee.getId()).toBe(employee.id);
});

test("returns employees email", () => {
	const employee = new Employee("Dan", 1, "dzamanillok@gmail.com");

	expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});
