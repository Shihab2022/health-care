import express from "express"
import { AdminController } from "./admin.controller"

const router = express.Router()
router.get('/', AdminController.getAllAdminInfo)
router.get('/:id', AdminController.getAdminById)
router.patch('/:id', AdminController.updateAdminById)
router.delete('/:id', AdminController.deletedAdmin)
router.delete('/soft/:id', AdminController.softDeletedAdmin)

export const AdminRoutes = router