import {
  getAllProducts,
  saveProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};

const createProduct = async (product) => {
  return await saveProduct(product);
};

const getById = async (id) => {
  return await getProductById(id);
};

const update = async (id, data) => {
  return await updateProduct(id, data);
};

const remove = async (id) => {
  return await deleteProduct(id);
};

export default { getAll, createProduct, getById, update, remove };
