import express from "express";
import cors from "cors";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";
// import {db} from './config/db.js'

// settings
const app = express();
app.set("PORT", 5000);

// Configuración CORS para solo permitir ciertos orígenes
const allowedOrigins = [
  'https://front-proy-final-node.vercel.app/',
  'http://localhost:5000',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    // Permite solicitudes sin origen (Postman, curl) o si el origen está en la whitelist
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/api/products", productRoutes);

// listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
