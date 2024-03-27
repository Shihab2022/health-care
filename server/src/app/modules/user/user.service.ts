import { PrismaClient, UserRole } from "@prisma/client"
import bcrypt from "bcrypt"
import prisma from "../../utils/prisma"
import config from "../../../config"
import { fileUploader } from "../../utils/fileUploder"
import { IFile } from "../../interface/file"

const createAdmin = async (req: any) => {
    const file: IFile = req.file
    if (file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(file)
        req.body.admin.profilePhoto = uploadToCloudinary?.secure_url
    }
    const data = req.body
    const hashPass = await bcrypt.hash(data.password, 12)
    const userData = {
        password: hashPass,
        email: data.admin.email,
        role: UserRole.ADMIN
    }
    const result = await prisma.$transaction(async (transactionClient) => {
        await transactionClient.user.create({
            data: userData
        })

        const createAdmin = await transactionClient.admin.create({
            data: data.admin
        })

        return createAdmin
    })
    return result
}

export const UserServices = {
    createAdmin
}