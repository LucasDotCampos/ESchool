import axios from "axios";
import "dotenv/config";
import { IUser } from "../modules/user/interfaces";

test("should create user's profile", async () => {
    const user = await axios<IUser>({
        url: `http://localhost:${process.env.PORT}/user/create`,
        method: "POST",
        data: {
            name: "lucas",
            email: "lucas@lucas.com",
            password: "123456",
        },
    });
    expect(user.status).not.toBe(400);
});

test("should get the user's profile", async () => {
    const user = await axios<IUser>({
        url: `http://localhost:${process.env.PORT}/user/profile`,
        method: "GET",
        data: {
            email: "lucas@lucas.com",
        },
    });
    expect(user.data).not.toBeNull();
});

test("should get a list of users", async () => {
    const user = await axios<IUser[]>({
        url: `http://localhost:${process.env.PORT}/user/`,
        method: "GET",
    });
    expect(user.data.length).toBeGreaterThanOrEqual(1);
});

test("should update the user's name", async () => {
    const user = await axios<IUser>({
        url: `http://localhost:${process.env.PORT}/user/update`,
        method: "PUT",
        data: {
            email: "lucas@lucas.com",
            name: "updatenome",
        },
    });

    expect(user.data).not.toBeNull();
});

test("should delete user's profile", async () => {
    const user = await axios<IUser>({
        url: `http://localhost:${process.env.PORT}/user/delete`,
        method: "DELETE",
        data: {
            email: "lucas@lucas.com",
        },
    });
    expect(user.status).not.toBe(400);
});
