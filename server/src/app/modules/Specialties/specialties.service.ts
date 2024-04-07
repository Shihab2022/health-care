import { Request } from "express";

const createSpecialties = async (req: Request) => {
    console.log("hello")
    return "ok"
}
export const SpecialtiesServices = {
    createSpecialties
}