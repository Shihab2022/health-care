import express from 'express';
import { AuthController } from './auth.controller';
const router = express.Router()



router.post('/login', AuthController.loginUser)
router.post('/refresh-token', AuthController.genRefreshToken)

export const AuthRouter = router
