import express from "express";
import * as lessonController from "../controllers/lessonController.js";
import { verifyJWT } from "../config/jwtUtils.js";

const lessonRouter = express.Router();

lessonRouter.get("/", verifyJWT, lessonController.renderHomepage);
lessonRouter.get("/create", verifyJWT, lessonController.renderCreation);
lessonRouter.get("/lessons/:subject", verifyJWT, lessonController.renderSubject);
lessonRouter.get("/view/:lessonId", verifyJWT, lessonController.renderLesson);
lessonRouter.get("/add", verifyJWT, lessonController.renderSelection);

lessonRouter.post("/api/lessons", verifyJWT, lessonController.getLessons);
lessonRouter.post("/api/create", verifyJWT, lessonController.createLesson);

lessonRouter.put("/api/subjects", verifyJWT, lessonController.updateSubjects);

export default lessonRouter;
