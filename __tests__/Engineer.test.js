const Engineer = require("../lib/Engineer");

test("create engineer obj", () => {
	const engineer = new Engineer("Dan", 1, "test@test.com", "test");

	expect(engineer.name).toBe("Dan");
	expect(engineer.id).toBe(1);
	expect(engineer.email).toBe("test@test.com");
	expect(engineer.github).toBe("test");
});

test("returns github", () => {
	const engineer = new Engineer("Dan", 1, "test@test.com", "test");

	expect(engineer.getGithub()).toEqual(engineer.github);
});
