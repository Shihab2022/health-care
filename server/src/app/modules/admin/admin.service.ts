import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getAllAdminFromDB = async (params: any) => {
    const { searchTerm, ...filterData } = params
    const andConditions: Prisma.AdminWhereInput[] = []
    const adminSearchAbleFields = ["name", "email"]

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
        where: whereCondition
    })
    return result
}

export const AdminServices = {
    getAllAdminFromDB
}