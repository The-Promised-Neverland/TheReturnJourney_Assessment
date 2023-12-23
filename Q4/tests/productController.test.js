import request from "supertest";
import app from "../app.js";


import {
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    createProduct,
} from "../controllers/productController.js"


// Mock your connectDB function
jest.mock('../data/connectLocalDB.js');




