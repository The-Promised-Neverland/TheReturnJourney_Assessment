import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const connectDB = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const databaseFilePath = path.join(__dirname, "./data-store.json");
  try {
    const data = fs.readFileSync(databaseFilePath, "utf8");
    const parsedData = JSON.parse(data);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error("Error reading database file:", error);
    return [];
  }
};

export default connectDB;
