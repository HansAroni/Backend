const Contenedor = require('./contenedor.js');
const express = require('express');

const app = express();
const PORT = 8080;
const data = new Contenedor('Productos');

app.get('/', async (req, res) =>{
  res.send('Bienvenido! Prueba https://hansaronibackend.glitch.me/ o https://glitch.com/edit/#!/hansaronibackend');
})

app.get('/productos', async (req, res) =>{
  let prods;
  try{
    prods = await data.getAll();
  } 
  catch(err){
    console.log("error", err);
  }
  res.send(prods);
})

app.get('/productoRandom', async (req, res) =>{
  let prods;
  try{
    prods = await data.getAll();
  } 
  catch(err){
    console.log("error", err);
  }
  res.send(prods[Math.floor(Math.random() * prods.length)]);
})

app.listen(PORT, ()=> {
  console.log(`Servidor en puerto: ${PORT}`)
});