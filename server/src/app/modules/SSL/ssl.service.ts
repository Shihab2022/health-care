import axios from "axios";
import config from "../../../config";
import { IPaymentData } from "./ssl.interface";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const initPayment = async (paymentData: IPaymentData) => {
    try {
        const data = {
            store_id: config.ssl.store_id,
            store_passwd: config.ssl.store_passwd,
            total_amount: paymentData.amount,
            currency: 'BDT',
            tran_id: paymentData.transactionId,
            success_url: config.ssl.success_url,
            fail_url: config.ssl.fail_url,
            cancel_url: config.ssl.cancel_url,
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'N?A',
            product_name: 'Service.',
            product_category: 'Service',
            product_profile: 'general',
            cus_name: paymentData.name,
            cus_email: paymentData.email,
            cus_add1: paymentData.address,
            cus_add2: 'N/A',
            cus_city: 'N/A',
            cus_state: 'N/A',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: paymentData.phoneNumber,
            cus_fax: paymentData.phoneNumber,
            ship_name: 'N/A',
            ship_add1: 'N/A',
            ship_add2: 'N/A',
            ship_city: 'N/A',
            ship_state: 'N/A',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        const result = await axios({
            method: 'post',
            url: config.ssl.sslPaymentApi,
            data,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        return result.data
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Something went wrong")
    }
}

const validatePayment = async (payload: any) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${config.ssl.sslValidationApi}?val_id=${payload.val_id}&store_id=${config.ssl.store_id}&store_passwd=${config.ssl.store_passwd}&format=json`
        });

        return response.data;
    }
    catch (err) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Payment validation failed!")
    }
}


export const ssl = {
    initPayment,
    validatePayment
}