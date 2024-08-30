import  ProductsController  from "../controllers/ProductsController.js";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get('/products', ProductsController.getAllProducts);
productsRouter.post('/products', ProductsController.createNewProduct);
productsRouter.delete('/products/:id', ProductsController.deleteProducts);

export default productsRouter