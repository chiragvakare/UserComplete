import express from "express";
import { list } from "../controller/category.controller.js";

const router = express.Router();

//list of category
router.get("/viewCategory",list);



export default router;