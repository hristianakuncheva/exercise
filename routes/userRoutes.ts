import {Router} from "express";
import {getUser, login} from "../controllers/userController";

export const userRoutes = Router();

userRoutes.get("/users", getUser);

userRoutes.get("/login", login)
