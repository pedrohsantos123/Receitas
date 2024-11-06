import express from "express";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/new", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

router.get("/", getProducts);
router.get("/product/:id", getProduct);
export default router;
