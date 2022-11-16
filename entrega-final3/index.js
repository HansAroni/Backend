const express = require('express');
const app = express()
require('dotenv').config()

//Modo Cluster
const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const PORT = process.env.PORT || 8080;
cluster.isMaster = false

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const session = require('express-session');;
const MongoStore = require('connect-mongo')

const passport = require('passport')
const users = require('./routes/users');
const ordenes = require('./routes/ordenes')
const connection = require('./database/config')
connection()
require('./auth/passport')

//Session
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }


app.use(session({
    //Base de datos Mongo
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE,
        mongoOptions,
        retries: 0,
        ttl: 60,
        // cookie: {
        //     maxAge: 60,

        // }
    }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true

}));
app.use(passport.session())
app.use(passport.initialize())


app.use('/users', users)
app.use('/ordenes', ordenes)
app.get('/error', (req, res) => {
    res.send({ message: 'credenciales invalidas' })
})
app.get('/', (req, res) => {
    res.json({ message: "Bienvenido a la PreEntrega Final 3" })
})
app.get('*', (req, res) => {
    res.json({ message: `${req.url} No encontrada` })
})

if (cluster.isMaster) {

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", () => {
        console.log(`Worker died ${process.pid}`);
        cluster.fork();
    })
} else {
    app.listen(PORT, () => {
        console.log("Servidor levantado puerto:", PORT)
    })
}
