import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.route("/").get(getAllProducts).post(createProduct);

productRoutes
  .route("/:id")
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById);

export default productRoutes;
