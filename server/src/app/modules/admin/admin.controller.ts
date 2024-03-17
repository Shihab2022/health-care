import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import { pick } from "../../utils/pick";

const getAllAdminInfo = async (req: Request, res: Response) => {
    try {
        const filterValue = pick(req.query, ['name', "email", "contactNumber", "searchTerm"])
        const result = await AdminServices.getAllAdminFromDB(filterValue)
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