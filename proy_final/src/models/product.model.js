import { db } from "../config/db.js";

const productCollection = db.collection("productos");

export const getAllProducts = async () => {
  const snapshot = await productCollection.get();
  const products = [];
  snapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export const saveProduct = async (product) => {
  const newDoc = await productCollection.add(product);
  return { id: newDoc.id };
};

export const getProductById = async (id) => {
  const doc = await productCollection.doc(id).get();
  if (!doc.exists) throw new Error("Producto no encontrado");
  return { id: doc.id, ...doc.data() };
};

export const updateProduct = async (id, updatedData) => {
  await productCollection.doc(id).update(updatedData);
  return { id, ...updatedData };
};

export const deleteProduct = async (id) => {
  await productCollection.doc(id).delete();
  return { message: "Producto eliminado", id };
};
