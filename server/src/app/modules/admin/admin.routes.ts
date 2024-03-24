import express from "express"
import { AdminController } from "./admin.controller"

const router = express.Router()
router.get('/', AdminController.getAllAdminInfo)
router.get('/:id', AdminController.getAdminById)
router.patch('/:id', AdminController.updateAdminById)

export const AdminRoutes = router