import express from "express"
import { AdminController } from "./admin.controller"
import validateRequest from "../../middlewares/validateRequest"
import { adminValidationSchemas } from "./admin.validations"
import auth from "../../middlewares/auth"
import { UserRole } from "@prisma/client"

const router = express.Router()
router.get('/', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), AdminController.getAllAdminInfo)
router.get('/:id', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), AdminController.getAdminById)
router.patch('/:id', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), validateRequest(adminValidationSchemas.update), AdminController.updateAdminById)
router.delete('/:id', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), AdminController.deletedAdmin)
router.delete('/soft/:id', auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), AdminController.softDeletedAdmin)

export const AdminRoutes = router