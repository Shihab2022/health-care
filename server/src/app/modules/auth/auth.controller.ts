import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthServices.loginUser(req.body)
    const { refreshToken, accessToken, needPasswordChange } = result
    res.cookie("refreshToken", refreshToken, {
        secure: false,
        httpOnly: true
    })
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Login successfully",
        data: {
            accessToken, needPasswordChange
        }
    })
})
const genRefreshToken = catchAsync(async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies
    const result = await AuthServices.GenerateRefreshToken(refreshToken)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Login successfully",
        data: result
    })
})
const changePassword = catchAsync(async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;

    const result = await AuthServices.changePassword(user, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Password Changed successfully",
        data: result
    })
})
const forgotPassword = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthServices.forgotPassword(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Password Changed successfully",
        data: result
    })
})
export const AuthController = {
    loginUser,
    genRefreshToken,
    changePassword,
    forgotPassword
}