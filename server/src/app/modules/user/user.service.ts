import { PrismaClient, UserRole } from "@prisma/client"
import bcrypt from "bcrypt"
import prisma from "../../utils/prisma"

const createAdmin = async (data: any) => {
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