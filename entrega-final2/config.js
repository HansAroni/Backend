//SQL
const optionsMariaDB = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'algunabd' //aca va el nombre de la BD local
  }
}
//MONGO
const URL = "mongodb+srv://hans:Coderhouse@cluster0.ncgiqfk.mongodb.net/"

//FIREBASE
const serviceAccount = require('./db/coderhouse-backend-82fda-firebase-adminsdk-g7713-1f77e164fd.json');

module.exports = {
  optionsMariaDB, URL, serviceAccount
}

