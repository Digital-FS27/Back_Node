import prismaClient from "../database/prismaClient.js";

class ProductsController {

    static async getAllProducts (req, res) {
        try {
            const products = await prismaClient.product.findMany();
            res.status(200).json({status:200, message: "OK", content: products});
            return
        } catch (error) {
            console.log(error);
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor.", data : { traceback : error}});
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
            return

        } catch (error) {
            console.log(error);
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor.", data : { traceback : error}});
            return
        }
    }
  
    static async deleteProducts (req, res) {
        let id = req.params.id

        try {
            const products = await prismaClient.product.delete({
                where: { id: parseInt(id) },
              });

            res.status(204).json({status: 204, message: "Deleted", content: products});
            return
        } catch (error) {
            console.log(error);
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor.", data : { traceback : error}});
            return
        }
    }

    static async editAProductPatch (req, res) {

        const id = req.params.id
        const  { title, price, discount, inventory, description, category, image, rate_count, rate_value } = req.body;

        if (!title && !price && !inventory && !category && !image && !rate_count && !rate_value) {
            res.status(400).json({status: 400, message: "Bad Request", content: "É necessário passar algum parâmetro para fazer essa requisição."});
            return
        }
        
        try {

            const teste = await prismaClient.product.update({
                where : {
                    id : parseInt(id)
                },
                data : {
                    ...req.body
                }
            });

            res.status(200).json({status: 200, message : "Produto editado!", data : { changed : {...req.body}, new_product : teste}});
            return

        } catch (error) {
            console.log(error);
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor.", data : { traceback : error}});
            return
        }
    }

    static async editAProductPut (req, res) {

        const id = req.params.id
        const  { title, price, discount, inventory, description, category, image, rate_count, rate_value } = req.body;

        if (!title || !price || !inventory || !category || !image || !rate_count || !rate_value) {
            res.status(400).json({status: 400, message: "Bad Request", content: "É necessário passar todos os parâmetros para fazer a requisição."});
            return
        }
        
        try {

            const teste = await prismaClient.product.update({
                where : {
                    id : parseInt(id)
                },
                data : {
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
            });

            res.status(200).json({status: 200, message : "Produto editado!", data : { edited_product : teste}});
            return

        } catch (error) {
            console.log(error);
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor.", data : { traceback : error}});
            return
        }
    }
}

export default ProductsController