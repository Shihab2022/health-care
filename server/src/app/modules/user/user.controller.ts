import { Request, Response } from "express";
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createAdmin = catchAsync(async (req: Request, res: Response) => {

    const result = await UserServices.createAdmin(req)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin created successfully",
        data: result
    })
})
export const UserController = {
    createAdmin
}