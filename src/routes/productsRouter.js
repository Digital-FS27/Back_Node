import  ProductsController  from "../controllers/ProductsController.js";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get('/products', ProductsController.getAllProducts);
productsRouter.post('/products', ProductsController.createNewProduct);
productsRouter.delete('/products/:id', ProductsController.deleteProducts);
productsRouter.put('/products/:id', ProductsController.editAProduct);


export default productsRouter