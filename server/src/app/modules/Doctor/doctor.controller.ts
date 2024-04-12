import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { pick } from "../../utils/pick";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { DoctorService } from "./doctor.service";
import { doctorFilterableFields } from "./doctor.constant";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, doctorFilterableFields);

    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    const result = await DoctorService.getAllFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Doctors retrieval successfully',
        data: result,
    });
});

export const DoctorController = {
    getAllFromDB,
}