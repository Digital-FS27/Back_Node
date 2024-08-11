const { prismaClient } = require('../database/prismaClient.js');

class ProductsController {
    static async getAllProducts (req, res) {
        try {
            const products = await prismaClient.product.findMany();
            res.status(200).json({status:200, message: "OK", content: products})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = { ProductsController }