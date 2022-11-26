import UserService from "../modules/user/services";

test("should delete and create a user", async () => {
    const userService = new UserService();

    const alreadyExists = await userService.getUser("test.skip@test.com");

    if (alreadyExists) {
        await userService.delete("test@test.com");
    }

    await userService.create({
        email: "test@test.com",
        name: "123",
        password: "123",
    });

    const user = await userService.getUser("test@test.com");

    expect(user).not.toBeNull();
});

test("should update user", async () => {
    const userService = new UserService();

    await userService.update("test@test.com", "Dev");

    const user = userService.getUser("test@test.com");
    expect(user).not.toBeNull();
});

test("should get a list of users", async () => {
    const userService = new UserService();
    const users = await userService.index();
    expect(users.length).toBeGreaterThan(0);
    userService.delete("test@test.com");
});
