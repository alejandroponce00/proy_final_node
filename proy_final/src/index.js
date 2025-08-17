import express from "express";
import cors from "cors";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";

const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [
  "https://front-proy-final-node.vercel.app", // frontend desplegado en Vercel
  "http://localhost:3000"                     // desarrollo local
];

app.use(
  cors({
    origin: function (origin, callback) {
      // permite requests de clientes sin origin (ej: Postman, curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // opcional si usás cookies o auth
  })
);

app.set("PORT", 5000);

// Middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/api/products", productRoutes);

// Listener
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
