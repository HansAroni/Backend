show databases
//Creo DB
use ecommerce
//Creo Colecciones
db.createCollection("productos")
db.createCollection("mensajes")

//Introduzco mensajes 
db.mensajes.insertMany(
[
    {
        "nombre": "Jose",
        "mensaje": "Hola buen dia"
    },
    {
        "nombre": "Pedro",
        "mensaje": "Todo bien?"
    },
    {
        "nombre": "Juani",
        "mensaje": "bien y vos?"
    },
    {
        "nombre": "Jose",
        "mensaje": "Si en casa"
    },
    {
        "nombre": "Pedro",
        "mensaje": "Que onda?"
    },
    {
        "nombre": "Pepita",
        "mensaje": "Hola"
    }
]
)
db.mensajes.find({})

//Introduzco Prods
db.productos.insertMany(
    [
        {
            "nombre": "Cerveza pilsen",
            "descripcion": "Muy rica",
            "codigo": 123412353,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 660,
            "stock": 3,
            "timestamp": 1660783106545
        },
        {
        
            "nombre": "Vodka",
            "descripcion": "Fuerte",
            "codigo": 12341235211241,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 3500,
            "stock": 30,
            "timestamp": 1660783106545
        },
        {
            
            "nombre": "Fernet",
            "descripcion": "Branca",
            "codigo": 123412352111212240,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 1500,
            "stock": 3,
            "timestamp": 1660783106545
        },
        {
            "nombre": "Vino tardio",
            "descripcion": "Dulce",
            "codigo": 1234123521121212200,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 2800,
            "stock": 3,
            
            "timestamp": 1660783106545
        },
        {
            "nombre": "Vino tinto",
            "descripcion": "Malbel",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 3700,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Cerveza Andees",
            "descripcion": "Negra",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 500,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Vino Rosado",
            "descripcion": "Dulce",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 1750,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Champagne 1802",
            "descripcion": "burbujeante",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 2000,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Whiskey",
            "descripcion": "intenso",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 3500,
            "stock": 3,
            
            "timestamp": 1660783187793
        },
        {
            "nombre": "Campari",
            "descripcion": "con naranja",
            "codigo": 12341235221121212000,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 1320,
            "stock": 3,
            
            "timestamp": 1660783187793
        }
    ]
);
//Muestro todos los prods
db.productos.find({})

//Muestro la cantidad de Docs
db.productos.count()

//Agrego un prod
db.productos.insertOne({
     "nombre": "Gin Bombay",
            "descripcion": "Fuerte",
            "codigo": 12341235211241,
            "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            "precio": 5000,
            "stock": 30,
            "timestamp": 1660783106545
})

//Listado prods menor a $1000
db.productos.find({precio:{$lt: 1000}})

// Listado prods entre a $1000 a $3000
db.productos.find({precio:{$gt:1000, $lt:3000}})

// Listado prods mayor a $3000
db.productos.find({precio:{$gt:3000}})
// Nombre del tercer prod mas barato
db.productos.find().limit(1).sort({precio:1})
// Cambiar el stock a 100
db.productos.updateMany({}, {$set:{stock:100}})
//Cambiar stock a 0 mayores a $4000
db.productos.updateMany({precio:{$gt:4000}},{$set:{stock:0}})
//Borrar los productos con precio menor a $1000 
db.productos.deleteMany({precio:{$lt:1000}})

// User
db.createUser({
    user:"pepe",
    pwd: "asd456",
    roles: [
        { role: "read", db:"ecommerce"}
    ]
})






