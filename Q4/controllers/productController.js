import connectDB from "../data/connectLocalDB.js";

let database = connectDB();

const getAllProducts = (req, res) => {
  res.status(200).json(database);
};

const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = database.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

const updateProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = database.findIndex((p) => p.id === productId);

  if (index !== -1) {
    database[index] = { ...database[index], ...updatedProduct };
    res.json(database[index]);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

const deleteProductById = (req, res) => {
  const productId = parseInt(req.params.id);

  const index = database.findIndex((p) => p.id === productId);

  if (index !== -1) {
    database.splice(index, 1);

    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

const createProduct = (req, res) => {
  const newProduct = req.body;

  const newProductId = database.length + 1;
  const productWithId = { id: newProductId, ...newProduct };

  database.push(productWithId);

  res.status(201).json(productWithId);
};

export {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  createProduct,
};
