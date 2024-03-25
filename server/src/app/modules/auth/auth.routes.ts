import express from 'express';
import { AuthController } from './auth.controller';
import auth from '../../middlewares/auth';

const router = express.Router()



router.post('/login', auth("ADMIN"), AuthController.loginUser)
router.post('/refresh-token', AuthController.genRefreshToken)

export const AuthRouter = router

