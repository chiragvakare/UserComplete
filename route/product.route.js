import express from "express";
import { addProduct, deleteProduct, myProduct, productDescription, searchProduct } from "../controller/product.controller.js";

const router = express.Router();

//adding product
router.post("/addProduct",verify,addProduct);

//search product
router.get("/search",searchProduct);

//delete product
router.post("/delete",verify,deleteProduct);

//update Product
router.post("/update",verify,updateProduct);

//user's own product
router.get("/myProduct",verify,myProduct);

//view product description
router.get("/productDescription",productDescription);


export default router;