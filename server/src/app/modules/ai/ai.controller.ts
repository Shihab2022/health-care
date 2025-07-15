import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AiServices } from "./ai.service";

const generatePrompt = catchAsync(async (req: Request, res: Response) => {
  const result = await AiServices.generatePrompt();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Prompt generate successfully ",
    data: result,
  });
});
const GetLargeLanguageModelData = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AiServices.GetLargeLanguageModelData();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Prompt generate successfully ",
      data: result,
    });
  }
);

export const AiController = {
  generatePrompt,
  GetLargeLanguageModelData,
};
