import express, { NextFunction, Request, Response } from "express";
import { SpecialtiesController } from "./specialties.controller";
import { fileUploader } from "../../utils/fileUploder";
import { SpecialtiesValidation } from "./specialties.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
const router = express.Router();

router.get("/", SpecialtiesController.getSpecialties);
router.post(
  "/",
  //   auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = SpecialtiesValidation.create.parse(JSON.parse(req.body.data));
    return SpecialtiesController.createSpecialties(req, res, next);
  }
);
router.delete("/:id", SpecialtiesController.deleteSpecialties);
export const SpecialtiesRoute = router;
