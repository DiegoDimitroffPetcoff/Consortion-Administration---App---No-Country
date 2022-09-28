const mongoose = require('mongoose');
require('dotenv').config()




const ApartamentoSchema = new mongoose.Schema({
    Propietario: {type: Number, required: true, max: 100},
    Torre: {type: String, required: true, max: 100},
    Aviso_cobro: {type: Number, required: true, max: 100}

});

module.exports= mongoose.model(Apartamento, ApartamentoSchema)