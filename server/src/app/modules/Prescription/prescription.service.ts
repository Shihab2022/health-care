
import { AppointmentStatus, PaymentStatus } from "@prisma/client";
import { IAuthUser } from "../../interface/common";
import prisma from "../../utils/prisma";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";

const insertIntoDB = async (user: IAuthUser, payload: Partial<Prescription>) => {
    const appointmentData = await prisma.appointment.findUniqueOrThrow({
        where: {
            id: payload.appointmentId,
            status: AppointmentStatus.COMPLETED,
            paymentStatus: PaymentStatus.PAID
        },
        include: {
            doctor: true
        }
    });

    if (!(user?.email === appointmentData.doctor.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "This is not your appointment!")
    };

    const result = await prisma.prescription.create({
        data: {
            appointmentId: appointmentData.id,
            doctorId: appointmentData.doctorId,
            patientId: appointmentData.patientId,
            instructions: payload.instructions as string,
            followUpDate: payload.followUpDate || null || undefined
        },
        include: {
            patient: true
        }
    });


    return result;
};

export const PrescriptionService = {
    insertIntoDB,
    // patientPrescription,
    // getAllFromDB
}
