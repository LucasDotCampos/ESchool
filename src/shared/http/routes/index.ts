import { Router } from "express";
import userRoutes from "../../../modules/user/routes";

const route = Router();

route.use("/user", userRoutes);

export default route;
