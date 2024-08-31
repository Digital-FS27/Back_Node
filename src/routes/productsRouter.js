import  ProductsController  from "../controllers/ProductsController.js";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get('/products', ProductsController.getAllProducts);
productsRouter.post('/products', ProductsController.createNewProduct);
productsRouter.delete('/products/:id', ProductsController.deleteProducts);
productsRouter.put('/products/:id', ProductsController.editAProductPut);
productsRouter.patch('/products/:id', ProductsController.editAProductPatch);



export default productsRouter