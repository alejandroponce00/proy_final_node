// services
import { getAllProducts, saveProduct } from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};
const createProduct = async (product) => {
  return await saveProduct(product);
};

export default { getAll, createProduct };
