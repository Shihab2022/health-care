import { NextFunction, Request, Response } from "express";
import { AdminServices } from "./admin.service";
import { pick } from "../../utils/pick";
import { pickAbleField, searchAbleOptions } from "./admin.constant";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const getAllAdminInfo = catchAsync(async (req: Request, res: Response) => {
    const filterValue = pick(req.query, pickAbleField)
    const options = pick(req.query, searchAbleOptions)
    const result = await AdminServices.getAllAdminFromDB(filterValue, options)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Fetch all the admin Info",
        meta: result.meta,
        data: result.data
    })
})
const getAdminById = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminServices.getAdminByIdFromDB(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Fetch single admin Info",
        data: result
    })

})
const updateAdminById = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminServices.updateAdminByIdIntoDB(req.params.id, req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Update admin Info",
        data: result
    })
})
const deletedAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminServices.deleteAdminFromDB(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Deleted admin Info",
        data: result
    })
})
const softDeletedAdmin = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminServices.softDeleteAdminFromDB(req.params.id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Deleted admin Info",
        data: result
    })
})
export const AdminController = {
    getAllAdminInfo, getAdminById,
    updateAdminById, deletedAdmin, softDeletedAdmin
}