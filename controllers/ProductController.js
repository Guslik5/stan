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
        console.log(products.rows)
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Title</title>
        </head>
        <style>
          .test{
            background: #8C8C8C;
          }
        </style>
        <body>
        <div class="test">
          ${products.rows.map(product => product.name).join('<br>')}
        </div>
        </body>
        </html>
        `
        )
    }
}

module.exports = new ProductController()