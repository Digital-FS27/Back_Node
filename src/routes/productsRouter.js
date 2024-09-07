import  ProductsController  from "../controllers/ProductsController.js";
import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const productsRouter = Router();

//TODO: Deixar o path dinamico
const swaggerDocument = YAML.load('/app/src/routes/swagger.yaml');

productsRouter.use('/api-docs', swaggerUi.serve);
productsRouter.get('/api-docs', swaggerUi.setup(swaggerDocument));
productsRouter.get('/products', ProductsController.getAllProducts);
productsRouter.post('/products', ProductsController.createNewProduct);
productsRouter.delete('/products/:id', ProductsController.deleteProducts);
productsRouter.put('/products/:id', ProductsController.editAProductPut);
productsRouter.patch('/products/:id', ProductsController.editAProductPatch);

export default productsRouter