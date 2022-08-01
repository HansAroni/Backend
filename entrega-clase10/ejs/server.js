const express = require('express');

const app = express();
const PORT = 8080;

const Contenedor = require('./utils/Contenedor');
const db = './utils/productos.json'

const productos = new Contenedor(db)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));





app.set('view engine', 'ejs')


app.get('/productos', async (req, res) => {
    const resultado = await productos.getAll()

    res.render('pages/vista', {
        productos: resultado
    })
})
app.post('/productos', async (req, res) => {
    const item = req.body;
    const productoAgregado= productos.save(item)
    const resultado = await productoAgregado
    const totalProductos = await productos.getAll()

    res.render('pages/vista', {
        productos: totalProductos
    })





})

// app.get('/productos', (req, res) => {
//     const { nivel, min, max } = req.query
//     res.render('desafio1', {
//         titulo: '  MEDIDOR',
//         nivel: nivel,
//         min: min,
//         max: max
//     })
// })

const server = app.listen(PORT, () => {
    console.log(`Servidor  escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))