import express from "express";
import * as userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/login", userController.renderLogin);
userRouter.get("/signup", userController.renderSignup);

userRouter.post("/api/login", userController.verifyLogin);
userRouter.post("/api/signup", userController.registerUser);

export default userRouter;
