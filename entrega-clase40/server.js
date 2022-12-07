const express = require("express")
const app = express()
const PORT = 8080;

//MongoDB

const {connection} = require('./config')
connection()

//Firebase
const {dbFirebase} = require('./config')
dbFirebase()

//Routes Mongo
const mongoProductos = require('./routes/Mongo/mongoProds')
const mongoCarritos= require('./routes/Mongo/mongoCart')

app.use('/mongoproductos', mongoProductos)
app.use('/mongocarritos', mongoCarritos)

//Routes Firebase
const firebaseProductos = require("./routes/Firebase/firebaseProds")
const firebaseCarrito = require('./routes/Firebase/firebaseCart')

app.use('/firebaseproductos', firebaseProductos)
app.use('/firebasecarritos', firebaseCarrito)


//Servidor Online

app.listen(PORT, () => {
    console.log(`Servidor Online puerto ${PORT}`)
})