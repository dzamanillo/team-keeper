const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an employee obj", () => {
	const employee = new Employee("Dan", 1, "test@test.com");

	expect(employee.name).toBe("Dan");
	expect(employee.id).toBe(1);
	expect(employee.email).toBe("test@test.com");
});

test("returns employees name", () => {
	const employee = new Employee("Dan", 1, "test@test.com");

	expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("returns employees id", () => {
	const employee = new Employee("Dan", 1, "test@test.com");

	expect(employee.getId()).toBe(employee.id);
});

test("returns employees email", () => {
	const employee = new Employee("Dan", 1, "test@test.com");

	expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("get employee role", () => {
	const employee = new Employee("Dan", 1, "test@test.com");

	expect(employee.getRole()).toEqual(expect.any(String));
});
