import fs from "fs";
import ProductDetails from "../interfaces/productDetailsInterface.js";

const connectDB = (): ProductDetails[] => {
  const databaseFilePath = "B:\\React\\backend-dev assignment\\Q4\\data\\data-store.json";

  try {
    const data = fs.readFileSync(databaseFilePath, "utf8");
    const parsedData: ProductDetails[] = JSON.parse(data);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error("Error reading database file:", error);
    return [];
  }
};
export default connectDB;