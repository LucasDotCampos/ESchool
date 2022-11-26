import { Router } from "express";
import UserController from "../controller";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/create", userController.create);
userRoutes.get("/", userController.index);
userRoutes.get("/profile", userController.getUser);
userRoutes.put("/update", userController.update);
userRoutes.delete("/delete", userController.delete);

export default userRoutes;
