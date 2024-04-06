import { PrismaClient, UserRole, UserStatus } from "@prisma/client"
import bcrypt from "bcrypt"
import prisma from "../../utils/prisma"
import config from "../../../config"
import { fileUploader } from "../../utils/fileUploder"
import { IFile } from "../../interface/file"
import { IAuthUser } from "../../interface/common"
import { Request } from "express"

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
    else if (userInfo.role === UserRole.DOCTOR) {
        profileInfo = await prisma.doctor.findUniqueOrThrow({
            where: {
                email
            }
        })
    }
    // else if (userInfo.role === UserRole.PATIENT) {
    //     profileInfo = await prisma.patients.findUniqueOrThrow({
    //         where: {
    //             email
    //         }
    //     })
    // }

    return { ...userInfo, ...profileInfo }

}

const updateMyProfile = async (user: IAuthUser, req: Request) => {
    const userInfo = await prisma.user.findUniqueOrThrow({
        where: {
            email: user?.email,
            status: UserStatus.ACTIVE
        }
    });

    let profileInfo;

    if (userInfo.role === UserRole.SUPER_ADMIN) {
        profileInfo = await prisma.admin.update({
            where: {
                email: userInfo.email
            },
            data: req.body
        })
    }
    else if (userInfo.role === UserRole.ADMIN) {
        profileInfo = await prisma.admin.update({
            where: {
                email: userInfo.email
            },
            data: req.body
        })
    }
    else if (userInfo.role === UserRole.DOCTOR) {
        profileInfo = await prisma.doctor.update({
            where: {
                email: userInfo.email
            },
            data: req.body
        })
    }
    // else if (userInfo.role === UserRole.PATIENT) {
    //     profileInfo = await prisma.patient.update({
    //         where: {
    //             email: userInfo.email
    //         },
    //         data: req.body
    //     })
    // }

    return { ...profileInfo };
}
export const UserServices = {
    createAdmin,
    getMyProfile,
    updateMyProfile
}