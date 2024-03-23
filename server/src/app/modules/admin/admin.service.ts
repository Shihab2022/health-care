import { Prisma, PrismaClient } from "@prisma/client"
import { adminSearchAbleFields } from "./admin.constant"
import calculatePagination from "../../utils/calculatePagination"
import prisma from "../../utils/prisma"




const getAllAdminFromDB = async (params: any, options: any) => {
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
                    equals: filterData[key]
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
            [options?.sortBy]: options?.sortOrder
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

export const AdminServices = {
    getAllAdminFromDB, getAdminByIdFromDB
}