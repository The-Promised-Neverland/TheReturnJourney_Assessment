import supertest from "supertest";
import app from "../app.js";

const request = supertest(app);

// Mock data for testing
const mockProducts = [
    {
        id: 1,
        name: "Smartphone",
        brand: "TechGuru",
        price: 499.99,
        currentStock: 50,
        reviews: 4,
        description: "A high-end smartphone with the latest features.",
    },
    {
        id: 2,
        name: "Laptop",
        brand: "PowerBook",
        price: 1099.99,
        currentStock: 20,
        reviews: 5,
        description: "Powerful laptop for professional use and gaming.",
    },
    {
        id: 3,
        name: "Smart TV",
        brand: "VisionMaster",
        price: 799.99,
        currentStock: 30,
        reviews: 3,
        description: "Ultra HD Smart TV with a large display and smart features.",
    },
];



// Mocking the productService functions
jest.mock("../services/productService.ts", () => {
    const ProductModel = require("../models/productModel.js").default; // Direct import of ProductModel
    return {
        allProducts: jest.fn(() => mockProducts),
        getById: jest.fn((id) => mockProducts.find((product) => product.id === id)),
        updateById: jest.fn((id, data) => {
            const index = mockProducts.findIndex((product) => product.id === id);
            if (index !== -1) {
                mockProducts[index] = { ...mockProducts[index], ...data };
                return true;
            }
            return false;
        }),
        deleteById: jest.fn((id) => {
            const index = mockProducts.findIndex((product) => product.id === id);
            if (index !== -1) {
                mockProducts.splice(index, 1);
                return true;
            }
            return false;
        }),
        newProduct: jest.fn((productDetails) => {
            const newProduct = new ProductModel(
                mockProducts.length + 1,
                productDetails.name,
                productDetails.brand,
                productDetails.price,
                productDetails.currentStock,
                productDetails.reviews,
                productDetails.description
            );
            mockProducts.push(newProduct);
        }),
    };
});



/* -------------------------------x--------------------------------GET OPERATIONS------------------------x-------------------------------------x--------------- */

describe("GET /, get all products", () => {
    test("should return all products", async () => {
        const response = await request.get("/api/products");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProducts);
    });
});

describe("GET /:id, get product by id", () => {
    test("should return a specific product by id", async () => {
        const productId = 1;
        const response = await request.get(`/api/products/${productId}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProducts[0]);
    });

    test("should return 404 if product id not found", async () => {
        const nonExistentProductId = 999;
        const response = await request.get(`/api/products/${nonExistentProductId}`);
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: "Product not found" });
    });
});


/* -------------------------------x--------------------------------POST OPERATIONS----------------------------------x-------------------------------------x--------------- */


describe("POST /, creates a new product", () => {
    test("should create a new product", async () => {
        const newProductData = {
            name: "New Product",
            brand: "BrandNew",
            price: 299.99,
            currentStock: 10,
            reviews: 5,
            description: "A brand new product for testing purposes.",
        };
        const response = await request.post("/api/products").send(newProductData);
        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: "Product created successfully" });

        const addedProduct = mockProducts.find((product) => product.name === newProductData.name);
        expect(addedProduct).toBeTruthy();
    });

    test("should return 400 for incomplete product information", async () => {
        // Omitting the 'price' field intentionally
        const incompleteProductData = {
            name: "Incomplete Product",
            brand: "BrandIncomplete",
            currentStock: 5,
            reviews: 3,
            description: "An incomplete product for testing purposes.",
        };
        const response = await request.post("/api/products").send(incompleteProductData);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Missing required fields: price" });
    });

    test("should return 400 for non-valid inputs", async () => {
        // Providing an extra field 'invalidField' which is not allowed
        const nonValidProductData = {
            name: "Non-Valid Product",
            brand: "BrandNonValid",
            price: 199.99,
            currentStock: 8,
            reviews: 2,
            description: "A non-valid product for testing purposes.",
            invalidField: "This field should not be allowed",
        };
        const response = await request.post("/api/products").send(nonValidProductData);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid details: invalidField" });
    });
});


/* -------------------------------x--------------------------------PUT OPERATIONS-----------------------------x-------------------------------------x--------------- */


describe("PUT /:id, update product by id", () => {
    test("should update a product by id", async () => {
        const productIdToUpdate = 1;
        const updatedProductData = {
            name: "Updated Product",
            brand: "BrandUpdated",
            price: 599.99,
            currentStock: 15,
            reviews: 4,
            description: "An updated product with new features.",
        };
        const response = await request.put(`/api/products/${productIdToUpdate}`).send(updatedProductData);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Product updated successfully" });
        const updatedProduct = mockProducts.find((product) => product.id === productIdToUpdate);
        expect(updatedProduct).toEqual({
            id: productIdToUpdate,
            ...updatedProductData,
        });
    });

    test("should return 404 if product id not found for update", async () => {
        const nonExistentProductId = 999;
        const response = await request.put(`/api/products/${nonExistentProductId}`).send({});
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: "Product not found" });
    });


    test("should return 400 for non-valid inputs", async () => {
        // Providing an extra field 'invalidField' which is not allowed
        const productIdToUpdate = 1;
        const updateProductData = {
            name: "Non-Valid Product",
            brand: "BrandNonValid",
            price: 199.99,
            currentStock: 8,
            reviews: 2,
            description: "A non-valid product for testing purposes.",
            invalidField: "This field should not be allowed",
        };
        const response = await request.put(`/api/products/${productIdToUpdate}`).send(updateProductData);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid details: invalidField" });
    });
});


/* -------------------------------x---------------------------------DELETE OPERATIONS-------------------------------x-------------------------------------x--------------- */



describe("DELETE /:id, delete product by id", () => {
    test("should delete a product by id", async () => {
        const productIdToDelete = 1;
        const response = await request.delete(`/api/products/${productIdToDelete}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Product deleted successfully" });
        // Check that the product is no longer present in mockProducts
        const deletedProduct = mockProducts.find((product) => product.id === productIdToDelete);
        expect(deletedProduct).toBeUndefined();
    });

    test("should return 404 if product id not found for delete", async () => {
        const nonExistentProductId = 999;
        const response = await request.delete(`/api/products/${nonExistentProductId}`);
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: "Product not found" });
    });
});
