import { Request, Response } from "express";
import { market } from "./database";

export const readProduct = (req: Request, res: Response) => {
  return res.status(200).json(market);
};

export const createProduct = (req: Request, res: Response) => {
  const optionDate = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const dataVality = new Date();
  dataVality.setDate(dataVality.getDate() + 365);

  const newProduct = {
    id: market.length+1,
    name: req.body.name,
    price: req.body.price,
    weight: req.body.weight,
    calories: req.body.calories,
    section: req.body.section,
    validity: dataVality.toLocaleDateString("pt-br"),
  };
  market.push(newProduct);
  return res
    .status(201)
    .json({ message: "created sucessfully", product: newProduct });
};

export const findById = (req: Request, res: Response) => {
  return res.status(200).json(res.locals.findProduct);
};

export const deletById = (req: Request, res: Response) => {
  const index = market.findIndex(
    (product) => product.id.toString() === req.params.id
  );

  market.splice(index, 1);

  return res.status(200).json({ message: "product deleted" });
};

export const editProduct = (req: Request, res: Response) => {
  const index = market.findIndex(
    (product) => product.id.toString() === req.params.id
  );
  const newProduct = {
    id: market.length,
    name: req.body.name,
    price: req.body.price,
    weight: req.body.weight,
    calories: req.body.calories,
    section: req.body.section,
    validity: Date(),
  };
  market.splice(index, 1, newProduct);

  return res.status(200).json({ message: "Product sucessfuly edit" });
};
