const express = require('express');
const productRouter = require('C:\\Users\\Гыук\\Desktop\\stan\\routes\\productRoutes.js')
const path = require("path"); //root/stan//routes//productRoutes.js
// const http = require('http')
// const fs = require('fs')

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs')
app.use(express.json())
app.use('/stan', productRouter)
app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html')
})

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});

// let server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8', })
//
//     const stream = fs.createReadStream('./main.html')
//     stream.pipe(res)
// })


//
// app.use(express.static('css'))
// app.use(express.static('images'))
// app.use(express.static('js'))
//
// app.get('/',(req, res) => {
//     res.sendFile(__dirname + '/main.html')
// })
//
// app.get('/products',(req, res) => {
//     res.sendFile(__dirname + '/products.html')
// })
//
// app.get('/user/:username/:id', (req, res) => {
//     res.send(`User id: ${req.params.id}. UserName: ${req.params.username}` )
// })


