const Intern = require("../lib/Intern");

test("create intern obj", () => {
	const intern = new Intern("Dan", 1, "test@test.com", "school");

	expect(intern.name).toBe("Dan");
	expect(intern.id).toBe(1);
	expect(intern.email).toBe("test@test.com");
	expect(intern.school).toBe("school");
});
