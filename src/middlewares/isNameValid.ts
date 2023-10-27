import { Request, Response, NextFunction } from "express";
import { market } from "../database";

export const isNameValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (market.some((product) => product.name === req.body.name)) {
    return res.status(409).json({ message: "Already have this product in stock" });
  }
  next();
};
