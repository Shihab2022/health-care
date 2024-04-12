import { Doctor } from "@prisma/client";
import prisma from "../../utils/prisma";

const getAllFromDB = async () => {

    const result = await prisma.doctor.findMany()

    return result;
};

export const DoctorService = {
    getAllFromDB,
}