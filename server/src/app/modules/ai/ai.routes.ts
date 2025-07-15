import express from "express";
import { AiController } from "./ai.controller";
const router = express.Router();
router.get("/generate", AiController.generatePrompt);
router.get("/generate-large", AiController.GetLargeLanguageModelData);

export const AiRoutes = router;
