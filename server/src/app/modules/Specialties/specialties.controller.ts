import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { SpecialtiesServices } from "./specialties.service";
import { pick } from "../../utils/pick";
import { doctorFilterableFields } from "../Doctor/doctor.constant";

const createSpecialties = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtiesServices.createSpecialties(req);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialties created successfully",
    data: result,
  });
});
const getSpecialties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, doctorFilterableFields);

  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await SpecialtiesServices.getSpecialties(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialties get successfully",
    data: result,
  });
});
const deleteSpecialties = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SpecialtiesServices.deleteSpecialties(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialties delete successfully",
    data: result,
  });
});

export const SpecialtiesController = {
  createSpecialties,
  getSpecialties,
  deleteSpecialties,
};
