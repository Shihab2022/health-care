import express from 'express';
import { DoctorController } from './doctor.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
const router = express.Router()

router.get('/', DoctorController.getAllFromDB)
router.get('/:id', DoctorController.getByIdFromDB);
//task 5
router.delete(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    DoctorController.deleteFromDB
);

// task 6
router.delete(
    '/soft/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    DoctorController.softDelete);
export const DoctorRoutes = router
