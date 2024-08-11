const {ProductsController}  = require("../controllers/ProductsController.js");
const express = require('express');
const productsRouter = express.Router();

productsRouter.get('/products', ProductsController.getAllProducts);

module.exports =  productsRouter 