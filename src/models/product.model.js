// modelo
import { db } from "../config/db.js";


const productCollection = db.collection("productos");

export const getAllProducts = async () => {
  try {
    const snapshot = await productCollection.get();
    const products = [];
    snapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    throw new Error("Error al obtener productos: " + error.message);
  }
};

export const saveProduct = async (product) => {
  try {
    const newDoc = await productCollection.add(product);
    return { id: newDoc.id };
  } catch (error) {
    throw new Error("Error al guardar producto: " + error.message);
  }
};
