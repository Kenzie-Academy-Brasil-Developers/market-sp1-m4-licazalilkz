import { Router } from "express";
import {
  createProduct,
  deletById,
  editProduct,
  findById,
  readProduct,
} from "../logics";
import { validation } from "../middlewares/validation";
import { createValidation } from "../schema/productValidation";
import { isIdValid } from "../middlewares/isIdValid";
import { editValidation } from "../schema/editProductValidation";
import { isNameValid } from "../middlewares/isNameValid";

export const productRouter = Router();

productRouter.get("/", readProduct);

productRouter.post("/", validation(createValidation), isNameValid, createProduct);

productRouter.get("/:id", isIdValid, findById);

productRouter.patch("/:id", validation(editValidation), isIdValid, editProduct);

productRouter.delete("/:id", isIdValid, deletById);
