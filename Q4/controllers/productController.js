import productService from "../services/productService.js"

/*
HttpMethod: GET
Endpoint: /
Request: None
Response: JSON, All products 
*/

const getAllProducts = (req, res) => {
  const products = productService.allProducts();
  res.status(200).json(products);
};


/*
HttpMethod: GET
Endpoint: /:id
Request: productId passed as 'id' params
Response: JSON, Product having id 
*/
const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);

  const product = productService.getById(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};


/*
HttpMethod: PUT
Endpoint: /:id
Request: productId passed as 'id' params
Response: JSON, Updated product having id 
*/
const updateProductById = (req, res) => {
  const productId = parseInt(req.params.id);

  const isUpdated = productService.updateById(productId, req.body)
  if (isUpdated) {
    res.json({ message: "Product updated successfully" });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};


/*
HttpMethod: DELETE
Endpoint: /:id
Request: productId passed as 'id' params
Response: JSON message 
*/
const deleteProductById = (req, res) => {
  const productId = parseInt(req.params.id);

  const isDeleted = productService.deleteById(productId);

  if (isDeleted) {
    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};


/*
HttpMethod: POST
Endpoint: /
Request: Product details passed as Params
Response: JSON message 
*/
const createProduct = (req, res) => {
  newProduct(req.body);
  res.status(201).json({ message: 'Product created successfully' });
};

export {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  createProduct,
};
