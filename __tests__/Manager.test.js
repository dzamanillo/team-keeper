const Manager = require("../lib/Manager");

test("creates manager obj", () => {
	const manager = new Manager("Dan", 1, "test@test.com", 2);

	expect(manager.name).toBe("Dan");
	expect(manager.id).toBe(1);
	expect(manager.email).toBe("test@test.com");
	expect(manager.officeNumber).toBe(2);
});
