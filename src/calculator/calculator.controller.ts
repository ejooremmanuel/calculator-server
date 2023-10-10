import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { evaluate } from "mathjs";
import { CalculatorModel } from "../models/calculator.model";

export const calculate = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const expression = evaluate(req.body.expression);

    await CalculatorModel.create({
      user: req?.user?._id,
      result: expression,
      expression: req.body.expression,
    });

    return res.status(200).json({
      success: true,
      result: expression,
      expression: req.body.expression,
    });
  }
);
export const deleteEntry = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    await CalculatorModel.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
    });
  }
);
export const deleteAllEntries = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    await CalculatorModel.deleteMany({
      user: req?.user?._id,
    });

    return res.status(200).json({
      success: true,
    });
  }
);
export const getUserCalculationHistory = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const data = await CalculatorModel.find({
      user: req?.user?._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: data?.map((x) => ({
        result: x?.result,
        expression: `${x?.expression}`,
        _id: x?._id,
      })),
    });
  }
);
