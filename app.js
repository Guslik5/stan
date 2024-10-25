const express = require('express');
const productRouter = require('./routes/productRoutes')
const path = require("path"); //root/stan//routes//productRoutes.js


const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs')
app.use(express.json())
app.use('/stan', productRouter)
app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/loadingPage.html')
})

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});


