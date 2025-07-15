import express from "express";
import { AiController } from "./ai.controller";
const router = express.Router();
router.get("/generate", AiController.generatePrompt);
export const AiRoutes = router;
