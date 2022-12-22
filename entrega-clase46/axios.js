const axios = require('axios')

const url = 'http://localhost:8080'

const getProds = async () => {
    try {
        const {data} = await axios.get(`${url}/mongoproductos`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getProds()