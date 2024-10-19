import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";
dotenv.config();
import cors from "cors";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json()); //allow us to accept json data in body

app.use("/api/products", productRouter);

app.listen(5000, () => {
  connectDB();
  console.log("server is running at http://localhost: " + PORT);
});
