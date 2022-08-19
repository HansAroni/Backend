
const express = require('express');
const app = express();
const productosRouter = require('./routes/productos')
const carritoRouter = require('./routes/carrito')
const PORT = 8080;

app.use(express.static('public'));

app.use('/api/productos', productosRouter)
app.use('/api/carrito', carritoRouter)
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")


})

app.get('*', (req, res) => {
    res.json('Error: Ruta o metodo no implementado')

}) 
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`)
})