import { Request, Response } from "express";
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { IAuthUser } from "../../interface/common";

const createAdmin = catchAsync(async (req: Request, res: Response) => {

    const result = await UserServices.createAdmin(req)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin created successfully",
        data: result
    })
})

const createDoctor = catchAsync(async (req: Request, res: Response) => {

    const result = await UserServices.createDoctor(req)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Doctor created successfully",
        data: result
    })
})
const getMyProfile = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {
    const result = await UserServices.getMyProfile(req.user)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile Info get successfully",
        data: result
    })
})
const updateMyProfile = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {

    const user = req.user;

    const result = await UserServices.updateMyProfile(user as IAuthUser, req);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My profile updated!",
        data: result
    })
});
const createPatient = catchAsync(async (req: Request, res: Response) => {

    const result = await UserServices.createPatient(req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Patient Created successfuly!",
        data: result
    })
});
export const UserController = {
    createAdmin,
    getMyProfile,
    updateMyProfile,
    createDoctor,
    createPatient
}