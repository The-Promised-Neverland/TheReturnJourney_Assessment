import ProductModel from '../models/productModel.js';
import connectDB from "../data/connectLocalDB.js"

class productService {
    constructor() {
        this.database = connectDB(); // Ensure you have the connectDB function imported
    }

    allProducts() {
        return this.database;
    }

    getById(productId) {
        const product = this.database.find((p) => p.id === productId);
        return product;
    }

    updateById(productId, updateDetails) {
        const index = this.database.findIndex((p) => p.id === productId);
        if (index !== -1) {
            this.database[index] = { ...this.database[index], ...updateDetails };
            return true;
        }
        return false;
    }

    deleteById(productId) {
        const index = this.database.findIndex((p) => p.id === productId);
        if (index !== -1) {
            this.database.splice(index, 1);
            return true;
        }
        return false;
    }

    newProduct(productDetails) {
        const newProduct = new ProductModel(
            this.database.length + 1,
            productDetails.name,
            productDetails.brand,
            productDetails.price,
            productDetails.currentStock,
            productDetails.reviews,
            productDetails.description
        );
        this.database.push(newProduct);
    }
}

export default new productService();
