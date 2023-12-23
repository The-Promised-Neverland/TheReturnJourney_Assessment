import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/productController.js";
import { validateRequest, validateRequiredFields } from "../middlewares/requestValidators.js";

const productRoutes = express.Router();

productRoutes
  .route("/")
  .get(getAllProducts)
  .post(validateRequest, validateRequiredFields, createProduct);

productRoutes
  .route("/:id")
  .get(getProductById)
  .put(validateRequest, updateProductById)
  .delete(deleteProductById);

export default productRoutes;
