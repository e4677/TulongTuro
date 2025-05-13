import express from "express";
import * as userController from "../controllers/userController.js";
import { logout } from "../config/jwtUtils.js";

const userRouter = express.Router();

userRouter.get("/login", userController.renderLogin);
userRouter.get("/signup", userController.renderSignup);
userRouter.get("/logout", logout);

userRouter.post("/api/login", userController.verifyLogin);
userRouter.post("/api/signup", userController.registerUser);

export default userRouter;
