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

const getMyProfile = async (user: any) => {
    const email = user.email
    const userInfo = await prisma.user.findUniqueOrThrow({
        where: {
            email
        },
        select: {
            id: true,
            email: true,
            role: true,
            needPasswordChange: true,
            status: true
        }
    })

    let profileInfo
    if (userInfo.role === UserRole.SUPER_ADMIN || userInfo.role === UserRole.ADMIN) {
        profileInfo = await prisma.admin.findUniqueOrThrow({
            where: {
                email
            }
        })
    }
    return { ...userInfo, ...profileInfo }

}

export const UserServices = {
    createAdmin,
    getMyProfile
}