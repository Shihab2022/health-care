import express from "express"
import { AdminController } from "./admin.controller"
import validateRequest from "../../middlewares/validateRequest"
import { adminValidationSchemas } from "./admin.validations"

const router = express.Router()
router.get('/', AdminController.getAllAdminInfo)
router.get('/:id', AdminController.getAdminById)
router.patch('/:id', validateRequest(adminValidationSchemas.update), AdminController.updateAdminById)
router.delete('/:id', AdminController.deletedAdmin)
router.delete('/soft/:id', AdminController.softDeletedAdmin)

export const AdminRoutes = router