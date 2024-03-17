import { Request, Response } from "express";
import { AdminServices } from "./admin.service";

const getAllAdminInfo = async (req: Request, res: Response) => {
    try {
        const result = await AdminServices.getAllAdminFromDB(req.query)
        res.status(200).json({
            success: true,
            message: "Fetch all the admin Info",
            data: result
        })
    } catch (error) {
        console.log("error", error)

    }
}
export const AdminController = {
    getAllAdminInfo
}