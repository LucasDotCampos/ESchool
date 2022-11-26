import { Request, Response } from "express";
import UserService from "../services";

export default class UserController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const userService = new UserService();
            const user = await userService.index();
            return response.status(200).json(user);
        } catch (err: any) {
            return response.status(400).json(err.message);
        }
    }

    public async getUser(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { email } = request.body;
            const userService = new UserService();
            const user = await userService.getUser(email);
            return response.status(200).json(user);
        } catch (err: any) {
            return response.status(400).json(err.message);
        }
    }

    public async create(request: Request, response: Response) {
        try {
            const { name, email, password } = request.body;
            const userService = new UserService();
            const user = await userService.create({
                name,
                email,
                password,
            });
            return response.status(200).json(user);
        } catch (err: any) {
            return response.status(400).json(err.message);
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const { email, name } = request.body;
            const userService = new UserService();
            const user = await userService.update(email, name);
            return response.status(200).json(user);
        } catch (err: any) {
            return response.status(400).json(err.message);
        }
    }

    public async delete(request: Request, response: Response) {
        try {
            const { email } = request.body;
            const userService = new UserService();
            const user = await userService.delete(email);
            return response.status(200).json("Deleted successfully");
        } catch (err: any) {
            return response.status(400).json(err.message);
        }
    }
}
