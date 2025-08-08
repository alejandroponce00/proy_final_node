import express from "express";
import cors from "cors";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";

// settings
const app = express();
const PORT = process.env.PORT || 5000;

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

// Rutas de productos
app.use("/api", productRoutes);

// Ruta catch-all para manejar cualquier otro endpoint
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// listeners
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
