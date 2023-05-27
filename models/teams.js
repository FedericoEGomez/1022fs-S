const {Schema, model}=require('mongoose');

const schema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    ciudad:{
        type: String,
        required: true
    },
    cantidadDeTorneosGan:{
        type: Number,
        required: true
    },
    alias:{
        type: String,
    },
    categoria:{
        type: String,
        required: true
    }
})
const Team = model('Team', schema);
module.exports = { Team }