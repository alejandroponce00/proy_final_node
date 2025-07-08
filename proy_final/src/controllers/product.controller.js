// controller
import productService from "../services/product.service.js";

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;
    const newProduct = {
      nombre,
      precio: +precio,
      disponible: disponible || false,
    };

    await productService.createProduct(newProduct);
    res
      .status(200)
      .json({ message: "Producto creado correctamente", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    res
      .status(200)
      .json({ message: "Producto encontrado", payload: product });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Producto no encontrado", error: error.message });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updated = await productService.update(id, updatedData);
    res
      .status(200)
      .json({ message: "Producto actualizado", payload: updated });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar producto", error: error.message });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.remove(id);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar producto", error: error.message });
  }
};

// Exportar todas las funciones
export default {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
