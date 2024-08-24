import prismaClient from "../database/prismaClient.js";
class ProductsController {

    static async getAllProducts (req, res) {
        try {
            const products = await prismaClient.product.findMany();
            res.status(200).json({status:200, message: "OK", content: products})
        } catch (error) {
            console.log(error);
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            return
        }
    }

    static async createNewProduct (req, res) {

        const  { title, price, discount, inventory, description, category, image, rate_count, rate_value } = req.body;
        
        if (!title || !price || !inventory || !category || !image || !rate_count || !rate_value) {
            res.status(400).json({status: 400, message: "Bad Request", content: "Verifique se todos os parâmetros obrigatórios foram passados no corpo da requisição."});
            return
        }

        try {

            const newProduct = {
                title       : title,
                price       : price,
                discount    : discount ?? 0,
                inventory   : inventory,
                description : description ?? "",
                category    : category,
                image       : image,
                rate_count  : rate_count,
                rate_value  : rate_value
            }

            await prismaClient.product.create({
                data : newProduct
            })

            res.status(201).json({status: 201, message: "Created", content: newProduct});

        } catch (error) {
            console.log(error);
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            return
        }
    }
}

export default ProductsController