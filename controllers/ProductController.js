const db = require("C:\\Users\\Гыук\\Desktop\\stan\\config\\db.js")

class ProductController {
    async createProduct(req, res){
        const {category_id, description, name, id} = req.body
        console.log(category_id, description, name, id)
        res.json('ok')
    }

    async getProduct(req, res){
        const products = await db.query('SELECT * FROM products')
        res.json(products.rows)
    }

    async getOneCategoryProduct(req, res){
        const category_id = req.params.id
        const products = await db.query('SELECT name FROM products WHERE category_id = $1', [category_id])
        res.json(products.rows)
    }
}

module.exports = new ProductController()