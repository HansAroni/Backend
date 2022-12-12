const moongose = require('mongoose');


async function connection() {

    const URLstring = `mongodb+srv://hans:Coderhouse@cluster0.ncgiqfk.mongodb.net/?retryWrites=true&w=majority`

    const ruta = await moongose.connect(URLstring)
    return ruta
}

module.exports = connection;
