import express from "express";
import * as lessonController from "../controllers/lessonController.js";
import { verifyJWT } from "../config/jwtUtils.js";

const lessonRouter = express.Router();

lessonRouter.get("/", verifyJWT, lessonController.renderHomepage);
// lessonRouter.get("/lesson", lessonController.renderSignup);

lessonRouter.post("/api/lessons", lessonController.getLessons);
// lessonRouter.post("/api/signup", lessonController.registerUser);

export default lessonRouter;
