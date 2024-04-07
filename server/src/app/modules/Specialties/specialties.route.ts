
import express from "express"
import { SpecialtiesController } from "./specialties.controller"
const router = express.Router()

router.post("/", SpecialtiesController.createSpecialties)

export const SpecialtiesRoute = router