
import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import { fileUploader } from '../../utils/fileUploder';
const router = express.Router()
router.post("/create", fileUploader.upload.single('file'), auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), UserController.createAdmin)

export const userRoutes = router