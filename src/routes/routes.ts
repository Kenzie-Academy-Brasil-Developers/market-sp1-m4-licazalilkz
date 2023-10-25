import { Router } from "express";
import {
  createProduct,
  deletById,
  editProduct,
  findById,
  readProduct,
} from "../logic";
import { validation } from "../middlewares/validation";
import { createValidation } from "../schema/productValidation";
import { isIdValid } from "../middlewares/isIdValid";
import { editValidation } from "../schema/editProductValidation";

export const productRouter = Router();

productRouter.get("/products", readProduct);

productRouter.post("/", validation(createValidation), createProduct);

productRouter.get("/:id", isIdValid, findById);

productRouter.patch("/:id", validation(editValidation), isIdValid, editProduct);

productRouter.delete("/:id", isIdValid, deletById);
