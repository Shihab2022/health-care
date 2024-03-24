import { Prisma, PrismaClient } from "@prisma/client"
import { adminSearchAbleFields } from "./admin.constant"
import calculatePagination from "../../utils/calculatePagination"
import prisma from "../../utils/prisma"
import { IAdminFilterRequest, TAdmin } from "./admin.interface"
import { IPaginationOptions } from "../../interface/pagination"




const getAllAdminFromDB = async (params: IAdminFilterRequest, options: IPaginationOptions) => {
    const { limit, skip, page } = calculatePagination(options)
    const { searchTerm, ...filterData } = params
    const andConditions: Prisma.AdminWhereInput[] = []

    if (searchTerm) {
        andConditions.push({
            OR: adminSearchAbleFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive"
                }
            }))
        })
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: (filterData as any)[key]
                }
            }))
        })
    }
    const whereCondition: Prisma.AdminWhereInput = { AND: andConditions }
    const result = await prisma.admin.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: {
            [(options?.sortBy as any)]: options?.sortOrder
        }
    })
    const total = await prisma.admin.count({
        where: whereCondition
    })
    return {
        meta: {
            page, limit, total
        },

        data: result
    }
}
const getAdminByIdFromDB = async (id: string) => {
    const result = await prisma.admin.findUnique({
        where: {
            id
        }
    })
    return result
}
const updateAdminByIdIntoDB = async (id: string, data: Partial<TAdmin>) => {
    await prisma.admin.findUniqueOrThrow({
        where: { id }
    })
    const result = await prisma.admin.update({
        where: {
            id
        },
        data
    })
    return result
}
const deleteAdminFromDB = async (id: string) => {
    const result = await prisma.$transaction(async (transactionClient) => {
        const deletedAdmin = await transactionClient.admin.delete({ where: { id } })
        await transactionClient.user.delete({ where: { email: deletedAdmin.email } })
    })
    return result
}
const softDeleteAdminFromDB = async (id: string) => {
    const result = await prisma.$transaction(async (transactionClient) => {
        const deletedAdmin = await transactionClient.admin.update({
            where: { id }, data: {
                isDeleted: true
            }
        })
        await transactionClient.user.update({ where: { email: deletedAdmin.email }, data: { status: "DELETED" } })
    })
    return result
}

export const AdminServices = {
    getAllAdminFromDB, getAdminByIdFromDB, updateAdminByIdIntoDB, deleteAdminFromDB, softDeleteAdminFromDB
}