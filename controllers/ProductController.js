const db = require("C:\\Users\\Гыук\\Desktop\\stan\\config\\db.js")

class ProductController {
    async createProduct(req, res){
        const {category_id, description, name, id} = req.body
        console.log(category_id, description, name, id)
        res.json('ok')
    }

    async getProducts(req, res){
        const products = await db.query('SELECT * FROM products')
        res.json(products.rows)
    }

    async getOneCategoryProduct(req, res){
        const category_id = req.params.id
        const products = await db.query('SELECT * FROM products WHERE category_id = $1', [category_id])
        const nameCategory = await db.query('SELECT name FROM categories WHERE id = $1', [category_id])
        console.log(nameCategory.rows)
        console.log(products.rows)
        res.render('catigoriesProducts', {products: products.rows, nameCategory: nameCategory.rows})
    }

    async getProduct(req, res){
        const product_id = req.params.id
        const product = await db.query('SELECT * FROM products WHERE id = $1', [product_id])
        console.log(product.rows)
        res.render('product', {product: product.rows[0]})
    }
}

module.exports = new ProductController()