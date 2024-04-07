import { Request } from "express";
import { fileUploader } from "../../utils/fileUploder";
import prisma from "../../utils/prisma";

const createSpecialties = async (req: Request) => {
    const file = req.file
    if (file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(file)
        req.body.icon = uploadToCloudinary?.secure_url;
    }
    const result = await prisma.specialties.create({
        data: req.body
    })
    return result
}
export const SpecialtiesServices = {
    createSpecialties
}