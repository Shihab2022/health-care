import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import { pick } from "../../utils/pick";
import { pickAbleField, searchAbleOptions } from "./admin.constant";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllAdminInfo = async (req: Request, res: Response) => {
    try {
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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error!.name || "Something went wrong ",
        })

    }
}
const getAdminById = async (req: Request, res: Response) => {
    try {
        const result = await AdminServices.getAdminByIdFromDB(req.params.id)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Fetch single admin Info",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error!.name || "Something went wrong ",
        })

    }
}
const updateAdminById = async (req: Request, res: Response) => {
    try {
        const result = await AdminServices.updateAdminByIdIntoDB(req.params.id, req.body)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Update admin Info",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error!.name || "Something went wrong ",
        })

    }
}
const deletedAdmin = async (req: Request, res: Response) => {
    try {
        const result = await AdminServices.deleteAdminFromDB(req.params.id)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Deleted admin Info",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error!.name || "Something went wrong ",
        })

    }
}
const softDeletedAdmin = async (req: Request, res: Response) => {
    try {
        const result = await AdminServices.softDeleteAdminFromDB(req.params.id)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Deleted admin Info",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error!.name || "Something went wrong ",
        })

    }
}
export const AdminController = {
    getAllAdminInfo, getAdminById,
    updateAdminById, deletedAdmin, softDeletedAdmin
}