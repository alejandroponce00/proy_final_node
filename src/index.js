import express from "express";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";
// import {db}from './config/db.js'
//settings
const app = express();
app.set("PORT", 5000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/api/products", productRoutes);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
