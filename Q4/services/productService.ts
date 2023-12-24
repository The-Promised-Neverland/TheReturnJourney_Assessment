import ProductModel from '../models/productModel.js';
import connectDB from "../data/connectLocalDB.js"
import ProductDetails from '../interfaces/productDetailsInterface.js';

class productService {
  private database: ProductModel[];

  constructor() {
    this.database = connectDB();
  }

  allProducts(): ProductModel[] {
    return this.database;
  }

  getById(productId: number): ProductModel | undefined {
    const product = this.database.find((p) => p.id === productId);
    return product;
  }

  updateById(productId: number, updateDetails: Partial<ProductDetails>): boolean {
    const index = this.database.findIndex((p) => p.id === productId);

    if (index !== -1) {
      this.database[index] = { ...this.database[index], ...updateDetails };
      return true;
    }

    return false;
  }

  deleteById(productId: number): boolean {
    const index = this.database.findIndex((p) => p.id === productId);

    if (index !== -1) {
      this.database.splice(index, 1);
      return true;
    }

    return false;
  }

  newProduct(productDetails: ProductDetails): void {
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