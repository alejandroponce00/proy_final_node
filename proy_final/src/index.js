import express from "express";
import cors from "cors";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";

// settings
const app = express();
app.set("PORT", 5000);

// Configuración CORS
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

// Ruta base para productos
app.use("/api/products", productRoutes);

// Ruta catch-all para manejar cualquier otro endpoint
app.use("/*", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
