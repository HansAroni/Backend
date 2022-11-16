require('dotenv').config()
const sid = process.env.SID_TWILIO
const psw = process.env.TOKEN_TWILIO
const MYPHONE = process.env.TELEFONO
const twilio = require('twilio')
const logger = require('../loggerConfig')
const cliente = twilio(sid, psw);

const enviarSMS = async (num) => {
    try {
        const mensaje = await cliente.messages.create({
            from: "+12534652838",
            to: `+${num}`,
            body:`Su orden fue recibida y se encuentra en proceso`
        })
        console.log(mensaje)

        logger.log('info', "Whatsapp enviado al Administrador")
    } catch (error) {
        logger.log('error', error)
    }
}

const enviarWA = async (user) => {
    try {
        const mensaje = await cliente.messages.create({
            from: "whatsapp:+12534652838",
            to: `whatsapp:${MYPHONE}`,
            body:` Nueva registración de usuario ${user}`
        })
        console.log(mensaje)

        logger.log('info', "Whatsapp enviado al Administrador")
    } catch (error) {
        logger.log('error', error)
    }
}
module.exports= {enviarWA, enviarSMS}