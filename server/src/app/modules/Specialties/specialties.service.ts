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
const getSpecialties = async () => {
    const result = await prisma.specialties.findMany()
    return result
}
const deleteSpecialties = async (id: string) => {
    const result = await prisma.specialties.delete({ where: { id } })
    return result
}
export const SpecialtiesServices = {
    createSpecialties,
    getSpecialties,
    deleteSpecialties
}