const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('base de datos conecatda')
    } catch {
        console.log('no se pudo conectar')
    }
}

module.exports = {connect}