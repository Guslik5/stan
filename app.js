const express = require('express');
const userRouter = require('C:\\Users\\Гыук\\Desktop\\stan\\routes\\productRoutes.js') //root/stan//routes//productRoutes.js
// const http = require('http')
// const fs = require('fs')

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.json())
// app.use('/api', userRouter)

app.use(express.static('css'))
app.use(express.static('images'))
app.use(express.static('js'))

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/main.html')
})

app.get('/products',(req, res) => {
    res.sendFile(__dirname + '/products.html')
})

app.get('/user/:username/:id', (req, res) => {
    res.send(`User id: ${req.params.id}. UserName: ${req.params.username}` )
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


