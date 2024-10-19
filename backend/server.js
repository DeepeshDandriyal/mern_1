import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";
dotenv.config();
import cors from "cors";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //allow us to accept json data in body

app.use("/api/products", productRouter);

//to make same url for frontend and backend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(5000, () => {
  connectDB();
  console.log("server is running at http://localhost: " + PORT);
});
