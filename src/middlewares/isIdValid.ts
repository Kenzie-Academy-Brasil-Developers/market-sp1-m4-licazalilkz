import { NextFunction, Request, Response } from "express";
import { market } from "../database";

export const isIdValid = (req: Request, res: Response, next: NextFunction) => {
  const findProduct = market.find(
    (product) => product.id.toString() === req.params.id
  );

  if (!findProduct) {
    return res.status(404).json({ message: "Not found product with this id" });
  }

  res.locals.findProduct = findProduct;

  return next();
};
