import express from "express";
import * as chatController from "../controllers/chatController.js";
import { verifyJWT } from "../config/jwtUtils.js";

const chatRouter = express.Router();

chatRouter.get('/api/chat/:roomId', verifyJWT, chatController.getMessages);
chatRouter.post('/api/chat/:roomId', verifyJWT, chatController.sendMessage);

export default chatRouter;
