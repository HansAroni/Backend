const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const { engine } = require( "express-handlebars");
const PORT = 8080
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//MOTOR


app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layout"


}))
const Contenedor = require('./utils/Contenedor');
app.set('view engine','hbs');
app.set('views', './views');


const db = './utils/productos.json'

const productos = new Contenedor(db)




app.post('/productos', async (req, res) =>{
    const item = req.body;
    await productos.save(item);
    res.redirect('/')
})

app.get('/productos', async (req, res) => {
    const prods =  await productos.getAll()
    

    res.render("main", {
        productos: prods,
        hayProductos: prods.length
    });
})
//LISTEN

app.listen(PORT, () => {
    console.log(`Puerto ${PORT} online`);

})