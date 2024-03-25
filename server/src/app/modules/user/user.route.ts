
import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';

const router = express.Router()

router.post("/create", auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), UserController.createAdmin)

export const userRoutes = router