import express from "express";
import { createproduct, deleteProduct, getAllproduct, getOneProduct, updateproduct } from "../controller/productController.js";

const route = express.Router();


route.post("/createp", createproduct);
route.get("/getallp", getAllproduct);
route.get("/getoneproduct/:id", getOneProduct);
route.put("/updateproduct/:id", updateproduct);

route.delete("/deletep/:id", deleteProduct);
export default route;