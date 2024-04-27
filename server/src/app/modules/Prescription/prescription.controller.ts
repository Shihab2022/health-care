import httpStatus from "http-status";
import { IAuthUser } from "../../interface/common";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";
import { PrescriptionService } from "./prescription.service";

const insertIntoDB = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {
    const user = req.user;
    const result = await PrescriptionService.insertIntoDB(user as IAuthUser, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Prescription created successfully',
        data: result,
    });
});

export const PrescriptionController = {
    insertIntoDB,
    // patientPrescription,
    // getAllFromDB
};