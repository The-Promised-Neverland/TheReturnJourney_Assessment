import fs from "fs";

const connectDB = () => {
  const databaseFilePath = "B:\\React\\backend-dev assignment\\Q4\\data\\data-store.json";

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
