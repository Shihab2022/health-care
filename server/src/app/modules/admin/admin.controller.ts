import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import { pick } from "../../utils/pick";
import { pickAbleField, searchAbleOptions } from "./admin.constant";

const getAllAdminInfo = async (req: Request, res: Response) => {
    try {
        const filterValue = pick(req.query, pickAbleField)
        const options = pick(req.query, searchAbleOptions)
        const result = await AdminServices.getAllAdminFromDB(filterValue, options)
        res.status(200).json({
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
        res.status(200).json({
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
export const AdminController = {
    getAllAdminInfo, getAdminById
}