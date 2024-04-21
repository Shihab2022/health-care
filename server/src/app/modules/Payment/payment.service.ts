import axios from "axios";
import config from "../../../config";
import prisma from "../../utils/prisma";
import { ssl } from "../SSL/ssl.service";

const initPayment = async (appointmentId: string) => {

    const paymentData = await prisma.payment.findFirstOrThrow({
        where: {
            appointmentId
        },
        include: {
            appointment: {
                include: {
                    patient: true
                }
            }
        }
    });
    const initPaymentData = {
        amount: paymentData.amount,
        name: paymentData.appointment.patient.name,
        transactionId: paymentData.transactionId,
        email: paymentData.appointment.patient.email,
        address: paymentData.appointment.patient.address,
        phoneNumber: paymentData.appointment.patient.contactNumber

    }
    const result = await ssl.initPayment(initPaymentData)
    return {
        paymentUrl: result.GatewayPageURL
    }
}

export const PaymentService = {
    initPayment,
}